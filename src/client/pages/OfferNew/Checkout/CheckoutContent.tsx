import styled from '@emotion/styled'
import { colorsV3, fonts } from '@hedviginsurance/brand'
import { Market, useMarket } from 'components/utils/CurrentLocale'
import { useEditQuoteMutation, useRedeemedCampaignsQuery } from 'data/graphql'
import { Price } from 'pages/OfferNew/components'
import React from 'react'
import { useTextKeys } from 'utils/hooks/useTextKeys'
import { StartDate } from '../Introduction/Sidebar/StartDate'
import { OfferData } from '../types'
import {
  getQuoteIds,
  insuranceTypeTextKeys,
  isBundle,
  isMonthlyCostDeduction,
} from '../utils'
import { InsuranceSummary } from './InsuranceSummary'
import { SignSpacer } from './Sign'
import { UserDetailsForm } from './UserDetailsForm'

const Section = styled('div')`
  width: 100%;
`

const Excerpt = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 4rem;

  @media (max-width: 40rem) {
    padding: 2rem 0;
  }
`

const StartDateWrapper = styled.div`
  position: relative;
  margin-top: 0.375rem;
  margin-bottom: 2rem;
`

const InsuranceTypeLabel = styled('div')`
  font-size: 0.75rem;
  color: ${colorsV3.gray500};
  text-transform: uppercase;
`

const InsuranceType = styled('div')`
  font-size: 2rem;
  font-family: ${fonts.FAVORIT};
  line-height: 1;

  @media (max-width: 40rem) {
    font-size: 1.5rem;
  }
`

interface Props {
  offerData: OfferData
  refetch: () => Promise<void>
  onEmailUpdate: (onCompletion: Promise<void>) => void
  onSsnUpdate: (onCompletion: Promise<void>) => void
}

export const CheckoutContent: React.FC<Props> = ({
  offerData,
  onEmailUpdate,
  onSsnUpdate,
  refetch,
}) => {
  const textKeys = useTextKeys()
  const market = useMarket()
  const redeemedCampaignsQuery = useRedeemedCampaignsQuery()
  const monthlyCostDeduction = isMonthlyCostDeduction(
    redeemedCampaignsQuery.data?.redeemedCampaigns ?? [],
  )
  const [fakeLoading, setFakeLoading] = React.useState(false)
  const [reallyLoading, setReallyLoading] = React.useState(false)
  const [editQuote] = useEditQuoteMutation()
  const quoteIds = getQuoteIds(offerData)

  return (
    <>
      <Section>
        <Excerpt>
          <div>
            {market !== Market.No && (
              <InsuranceTypeLabel>
                {textKeys.SIDEBAR_LABEL()}
              </InsuranceTypeLabel>
            )}
            <InsuranceType>
              {!isBundle(offerData) &&
                textKeys[
                  insuranceTypeTextKeys[offerData.quotes[0].contractType]
                ]()}
              {isBundle(offerData) &&
                textKeys.SIDEBAR_INSURANCE_TYPE_NO_BUNDLE()}
            </InsuranceType>
          </div>
          <div>
            <Price
              loading={fakeLoading || reallyLoading}
              monthlyGross={offerData.cost.monthlyGross}
              monthlyNet={offerData.cost.monthlyNet}
              monthlyCostDeduction={monthlyCostDeduction}
            />
          </div>
        </Excerpt>

        <UserDetailsForm
          email={offerData.person.email ?? ''}
          onEmailChange={(email) => {
            const onCompletion = new Promise<void>((resolve, reject) => {
              Promise.all(
                quoteIds.map((quoteId) =>
                  editQuote({ variables: { input: { id: quoteId, email } } }),
                ),
              )
                .then(() => refetch())
                .then(() => resolve())
                .catch((e) => {
                  reject(e)
                  throw e
                })
            })
            onEmailUpdate(onCompletion)
          }}
          ssn={offerData.person.ssn ?? ''}
          // TODO we somehow need to compare the birth date to the ssn to check so they match. In case they don't, we should warn (as they might get a different price)
          onSsnChange={(ssn) => {
            const onCompletion = new Promise<void>((resolve, reject) => {
              setFakeLoading(true)
              setReallyLoading(true)
              window.setTimeout(() => setFakeLoading(false), 1000)
              Promise.all(
                quoteIds.map((quoteId) =>
                  editQuote({ variables: { input: { id: quoteId, ssn } } }),
                ),
              )
                .then(() => refetch())
                .then(() => setReallyLoading(false))
                .then(() => resolve())
                .catch((e) => {
                  setReallyLoading(false)
                  reject(e)
                  throw e
                })
            })
            onSsnUpdate(onCompletion)
          }}
        />

        <StartDateWrapper>
          <StartDate offerData={offerData} refetch={refetch} />
        </StartDateWrapper>

        <InsuranceSummary offerData={offerData} />

        <SignSpacer />
      </Section>
    </>
  )
}
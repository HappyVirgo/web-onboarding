import styled from '@emotion/styled'
import { colorsV2 } from '@hedviginsurance/brand/dist'
import { MarkdownTranslation } from '@hedviginsurance/textkeyfy'
import { motion } from 'framer-motion'
import { CompleteQuote, useSignOfferMutation } from 'generated/graphql'
import { Button } from 'new-components/buttons'
import { CompleteOfferDataForMember } from 'pages/OfferNew/types'
import { getInsuranceType } from 'pages/OfferNew/utils'
import * as React from 'react'
import { useMediaQuery } from 'react-responsive'
import { useTextKeys } from 'utils/hooks/useTextKeys'
import {
  getInsurancePDFTextKey,
  getPrebuyPDFTextKey,
  InsuranceType,
} from 'utils/insuranceDomainUtils'
import { adtraction, trackStudentkortet } from 'utils/tracking'
import { SignStatus } from './SignStatus'
import { emailValidation } from './UserDetailsForm'

export const SignSpacer = styled('div')`
  height: 250px;
`
const Wrapper = styled('div')`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  padding: 0 8rem 2.5rem 4.5rem;
  background-image: linear-gradient(
    to bottom,
    rgba(249, 250, 252, 0),
    ${colorsV2.offwhite} 50%
  );

  @media (max-width: 40rem) {
    padding: 1rem;
    padding-top: 0;
  }
`

const ButtonWrapper = styled('div')`
  display: flex;
  width: 100%;
  justify-content: center;
`

const Disclaimer = styled('p')`
  font-size: 0.75rem;
  margin: 1rem 0 0;
  color: ${colorsV2.gray};
  line-height: 1.5;
  padding: 0 0.5rem;

  @media (max-width: 40rem) {
    text-align: center;
  }
`

enum SignState {
  NOT_STARTED,
  STARTED,
  FAILED,
}

interface Props {
  className?: string
  email?: string
  personalNumber: string
  offer: CompleteOfferDataForMember
}

export const Sign: React.FC<Props> = ({
  className,
  email,
  personalNumber,
  offer,
}) => {
  const isMobile = useMediaQuery({ maxWidth: 600 })
  const textKeys = useTextKeys()
  const [signOffer, signOfferMutation] = useSignOfferMutation({
    variables: {
      email: email!,
      personalNumber,
    },
  })
  const [signState, setSignState] = React.useState(SignState.NOT_STARTED)

  const canInitiateSign =
    signState !== SignState.STARTED && emailValidation.isValidSync(email ?? '')

  return (
    <Wrapper className={className}>
      <ButtonWrapper>
        <Button
          size={isMobile ? 'sm' : 'lg'}
          disabled={!canInitiateSign}
          onClick={async () => {
            if (!canInitiateSign || signOfferMutation.loading) {
              return
            }

            setSignState(SignState.STARTED)
            await signOffer()
          }}
        >
          {textKeys.CHECKOUT_SIGN_BUTTON_TEXT()}
        </Button>
      </ButtonWrapper>

      <motion.div
        initial={{ height: 'auto', opacity: 1 }}
        animate={
          signState === SignState.NOT_STARTED
            ? { opacity: 0, height: 0 }
            : { opacity: 1, height: 'auto' }
        }
        transition={{ type: 'spring', stiffness: 400, damping: 100 }}
      >
        <SignStatus
          isSigning={signState !== SignState.NOT_STARTED}
          onFailure={() => setSignState(SignState.FAILED)}
          onSuccess={() => {
            track(email!, offer)
          }}
        />
      </motion.div>

      <Disclaimer>
        <MarkdownTranslation
          textKey="CHECKOUT_SIGN_DISCLAIMER"
          replacements={{
            PREBUY_LINK: textKeys[
              getPrebuyPDFTextKey(getInsuranceType(offer.lastQuoteOfMember))
            ](),
            TERMS_LINK: textKeys[
              getInsurancePDFTextKey(getInsuranceType(offer.lastQuoteOfMember))
            ](),
          }}
          markdownProps={{ linkTarget: '_blank' }}
        />
      </Disclaimer>
    </Wrapper>
  )
}

const track = (email: string, offer: CompleteOfferDataForMember) => {
  if (process.env.NODE_ENV === 'test') {
    return
  }

  const lastQuote: CompleteQuote = offer.lastQuoteOfMember as CompleteQuote
  const legacyInsuranceType: InsuranceType =
    lastQuote.details.__typename === 'CompleteApartmentQuoteDetails'
      ? (lastQuote.details.type as any)
      : 'HOUSE'

  adtraction(
    parseFloat(lastQuote.insuranceCost.monthlyGross.amount),
    offer.member.id!,
    email,
    offer.redeemedCampaigns !== null && offer.redeemedCampaigns.length !== 0
      ? offer.redeemedCampaigns[0].code
      : null,
    legacyInsuranceType,
  )

  if (
    offer.redeemedCampaigns !== null &&
    offer.redeemedCampaigns.length !== 0 &&
    offer.redeemedCampaigns[0].code.toLowerCase() === 'studentkortet'
  ) {
    trackStudentkortet(
      offer.member.id!,
      lastQuote.insuranceCost.monthlyGross.amount,
    )
  }
}
import React, { useState, useCallback, useEffect } from 'react'
import styled from '@emotion/styled'
import ReactVisibilitySensor from 'react-visibility-sensor'
import { colorsV3 } from '@hedviginsurance/brand'

import {
  useAddCampaignCodeMutation,
  useRemoveCampaignCodeMutation,
  CampaignDataFragment,
} from 'data/graphql'

import { Button, TextButton, LinkButton } from 'components/buttons'
import { CampaignBadge } from 'components/CampaignBadge/CampaignBadge'
import { OfferData } from 'pages/OfferNew/types'
import { Price } from 'pages/OfferNew/common/price'
import { PriceBreakdown } from 'pages/OfferNew/common/PriceBreakdown'

import { useTextKeys } from 'utils/textKeys'
import { CampaignCode } from 'utils/campaignCode'
import { useQuoteCartIdFromUrl } from 'utils/hooks/useQuoteCartIdFromUrl'

import {
  LARGE_SCREEN_MEDIA_QUERY,
  SMALL_SCREEN_MEDIA_QUERY,
} from 'utils/mediaQueries'
import { TOP_BAR_Z_INDEX } from 'components/TopBar'

import { useFeature, Features } from 'utils/hooks/useFeature'
import { useCurrentLocale } from 'l10n/useCurrentLocale'
import { StickyBottomSidebar } from '../../../OfferNew/Introduction/Sidebar/StickyBottomSidebar'
import { CampaignCodeModal } from './CampaignCodeModal'
import { StartDate } from './StartDate'

const SIDEBAR_WIDTH = '26rem'
const SIDEBAR_SPACING_LEFT = '2rem'

const Wrapper = styled.div`
  width: calc(${SIDEBAR_WIDTH} + ${SIDEBAR_SPACING_LEFT});
  max-width: 100%;
  z-index: ${TOP_BAR_Z_INDEX};

  ${LARGE_SCREEN_MEDIA_QUERY} {
    padding-left: ${SIDEBAR_SPACING_LEFT};
    flex-shrink: 0;
  }
`

const Container = styled.div`
  width: ${SIDEBAR_WIDTH};
  max-width: 100%;
  padding: 1.25rem 1rem 1rem 1rem;
  margin-top: 3rem;
  background-color: ${colorsV3.white};
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);

  ${LARGE_SCREEN_MEDIA_QUERY} {
    position: fixed;
    top: 8rem;
    margin-top: 0;
  }
`

const StyledCampaignBadge = styled(CampaignBadge)`
  margin-bottom: 1rem;
`

const Header = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;

  ${SMALL_SCREEN_MEDIA_QUERY} {
    flex-wrap: nowrap;
  }
`

const Title = styled.h3`
  width: 100%;
  margin: 0 1rem 0 0;
  font-size: 1.375rem;
  line-height: 1.625rem;
  white-space: pre-line;
  color: ${colorsV3.gray900};

  ${LARGE_SCREEN_MEDIA_QUERY} {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`

const Body = styled.div`
  margin-bottom: 2.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
`

const BodyTitle = styled.div`
  margin-bottom: 0.75rem;
  color: ${colorsV3.gray900};
`

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const FooterExtraActions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 0.75rem;
  margin-bottom: 0.25rem;
`

export type SidebarProps = {
  offerData: OfferData
  campaign?: CampaignDataFragment
  onCheckoutOpen: () => void
}

export const Sidebar: React.FC<SidebarProps> = ({
  offerData,
  campaign,
  onCheckoutOpen,
}) => {
  const { quoteCartId } = useQuoteCartIdFromUrl()
  const textKeys = useTextKeys()
  const { path: localePath } = useCurrentLocale()

  const [campaignCodeModalIsOpen, setCampaignCodeModalIsOpen] = useState(false)
  const [isSidebarVisible, setIsSidebarVisible] = useState(true)

  const [addCampaignCode] = useAddCampaignCodeMutation({
    refetchQueries: ['QuoteCart'],
    awaitRefetchQueries: true,
  })
  const [removeCampaignCode] = useRemoveCampaignCodeMutation({
    refetchQueries: ['QuoteCart'],
    awaitRefetchQueries: true,
  })

  const [isConnectPaymentAtSignEnabled] = useFeature([
    Features.CONNECT_PAYMENT_AT_SIGN,
  ])

  const handleAddCampaignCode = useCallback(
    async (code: string) => {
      const { data: result } = await addCampaignCode({
        variables: { id: quoteCartId, code },
      })
      const hasError = result?.quoteCart_addCampaign.__typename === 'BasicError'

      if (!hasError) {
        CampaignCode.save(code)
      }

      return { hasError }
    },
    [quoteCartId, addCampaignCode],
  )

  const handleRemoveCampaign = useCallback(async () => {
    CampaignCode.remove()
    await removeCampaignCode({ variables: { quoteCartId } })
  }, [quoteCartId, removeCampaignCode])

  useEffect(() => {
    const isMissingCampaignCode = campaign?.code === undefined
    const savedCampaignCode = CampaignCode.get()
    if (savedCampaignCode && isMissingCampaignCode) {
      handleAddCampaignCode(savedCampaignCode)
    }
  }, [handleAddCampaignCode, campaign])

  const showRemoveCampaignButton = campaign !== undefined
  const isDiscountPrice =
    offerData.cost.monthlyGross.amount !== offerData.cost.monthlyNet.amount

  return (
    <>
      <ReactVisibilitySensor partialVisibility onChange={setIsSidebarVisible}>
        {() => (
          <Wrapper data-testid="offer-sidebar">
            <Container>
              <StyledCampaignBadge quoteCartId={quoteCartId} />
              <Header>
                <Title>{textKeys.SIDEBAR_TITLE()}</Title>
                <Price
                  isDiscountPrice={isDiscountPrice}
                  monthlyGross={offerData.cost.monthlyGross}
                  monthlyNet={offerData.cost.monthlyNet}
                />
              </Header>
              <Body>
                <PriceBreakdown offerData={offerData} />
                <BodyTitle>{textKeys.SIDEBAR_STARTDATE_CELL_LABEL()}</BodyTitle>
                <StartDate quoteCartId={quoteCartId} modal size="sm" />
              </Body>
              <Footer>
                {isConnectPaymentAtSignEnabled ? (
                  <LinkButton
                    size="sm"
                    fullWidth
                    to={`/${localePath}/new-member/checkout/details/${quoteCartId}`}
                    foreground={colorsV3.gray900}
                    background={colorsV3.purple500}
                  >
                    {textKeys.SIDEBAR_PROCEED_BUTTON()}
                  </LinkButton>
                ) : (
                  <Button
                    size="sm"
                    fullWidth
                    onClick={onCheckoutOpen}
                    foreground={colorsV3.gray900}
                    background={colorsV3.purple500}
                  >
                    {textKeys.SIDEBAR_PROCEED_BUTTON()}
                  </Button>
                )}
                <FooterExtraActions>
                  {!campaign && (
                    <TextButton
                      onClick={() => setCampaignCodeModalIsOpen(true)}
                    >
                      {textKeys.SIDEBAR_ADD_CAMPAIGN_BUTTON()}
                    </TextButton>
                  )}
                  {showRemoveCampaignButton && (
                    <TextButton
                      color={colorsV3.red500}
                      onClick={handleRemoveCampaign}
                    >
                      {textKeys.SIDEBAR_REMOVE_CAMPAIGN_BUTTON()}
                    </TextButton>
                  )}
                </FooterExtraActions>
              </Footer>
              <CampaignCodeModal
                isOpen={campaignCodeModalIsOpen}
                onClose={() => setCampaignCodeModalIsOpen(false)}
                onAddCampaignCode={handleAddCampaignCode}
              />
            </Container>
          </Wrapper>
        )}
      </ReactVisibilitySensor>
      <StickyBottomSidebar
        isVisible={!isSidebarVisible}
        onCheckoutOpen={onCheckoutOpen}
      />
    </>
  )
}

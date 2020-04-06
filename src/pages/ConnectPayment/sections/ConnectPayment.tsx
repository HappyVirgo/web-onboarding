import styled from '@emotion/styled'
import { colors, fonts } from '@hedviginsurance/brand'
import { Market, useMarket } from 'components/utils/CurrentLocale'
import { AdyenCheckout } from 'pages/ConnectPayment/components/AdyenCheckout'
import { TrustlyCheckout } from 'pages/ConnectPayment/components/TrustlyCheckout'
import * as React from 'react'
import { useTextKeys } from 'utils/hooks/useTextKeys'
import { ErrorModal } from '../components/ErrorModal'

const SITEWRAPPER = 1300
const BP = 800
const MOBILE = 450

const Background = styled('div')({
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  backgroundColor: colors.OFF_WHITE,
  zIndex: -1,
})

const InnerWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: SITEWRAPPER,
  margin: 'auto',
  paddingLeft: '10px',
  paddingRight: '10px',
  paddingTop: '25vh',
  [`@media (max-width: ${BP}px)`]: {
    maxWidth: '100%',
    flexDirection: 'column',
    paddingTop: 40 + 70,
  },
})

const TextColumn = styled('div')({
  width: '60%',
  paddingRight: 20,
  paddingLeft: 20,
  paddingBottom: 40,

  [`@media (max-width: ${BP}px)`]: {
    width: '100%',
    textAlign: 'center',
  },
})

const ImageColumn = styled('div')({
  width: '40%',
  paddingRight: 20,
  paddingLeft: 20,
  paddingBottom: 40,

  [`@media (max-width: ${BP}px)`]: {
    width: '100%',
    textAlign: 'center',
  },
})

const Header = styled('h1')({
  marginTop: '0px',
  marginBottom: '30px',
  fontSize: '56px',
  lineHeight: '60px',
  [`@media (max-width: ${MOBILE}px)`]: {
    fontSize: '44px',
    lineHeight: '52px',
  },
})

const HeaderPart = styled('span')({
  display: 'block',
  fontFamily: fonts.GEOMANIST,
  fontWeight: 400,
})

const ConnectText = styled('div')({
  width: '65%',
  marginBottom: '45px',
  color: colors.OFF_BLACK,
  [`@media (max-width: ${BP}px)`]: {
    width: '100%',
  },
})

const ConnectPaymentImage = styled('img')({
  marginBottom: '30px',
  marginTop: '30px',
  marginLeft: 'auto',
  width: '100%',
  [`@media (max-width: ${BP}px)`]: {
    marginRight: 'auto',
    width: '80%',
  },
  [`@media (max-width: ${MOBILE}px)`]: {
    width: '100%',
  },
})

export const ConnectTrustlyPage: React.FC = () => {
  const textKeys = useTextKeys()
  const market = useMarket()

  return (
    <>
      <Background />
      <InnerWrapper>
        <TextColumn>
          <Header>
            <HeaderPart>
              {textKeys.ONBOARDING_CONNECT_DD_PRE_HEADLINE()}
            </HeaderPart>
            <HeaderPart>{textKeys.ONBOARDING_CONNECT_DD_HEADLINE()}</HeaderPart>
          </Header>
          <ConnectText>{textKeys.ONBOARDING_CONNECT_DD_BODY()}</ConnectText>
          {market === Market.Se && <TrustlyCheckout />}
          {market === Market.No && <AdyenCheckout />}
          <ErrorModal />
        </TextColumn>
        <ImageColumn>
          <ConnectPaymentImage
            src={
              '/new-member-assets/connect-payment/connect-dd-illustration.svg'
            }
          />
        </ImageColumn>
      </InnerWrapper>
    </>
  )
}

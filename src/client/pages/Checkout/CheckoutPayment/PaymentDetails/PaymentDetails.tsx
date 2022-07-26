import React from 'react'
import { colorsV3 } from '@hedviginsurance/brand'
import styled from '@emotion/styled'
import { useTextKeys } from 'utils/textKeys'
import { Headline } from 'components/Headline/Headline'
import { MEDIUM_SMALL_SCREEN_MEDIA_QUERY } from 'utils/mediaQueries'
import {
  AdyenCheckout,
  Wrapper as AdyenWrapper,
} from '../../../ConnectPayment/components/AdyenCheckout'
import { WrapperWidth } from '../../shared/CheckoutPageWrapper'
const { gray100, gray600, gray700, gray300, gray900 } = colorsV3

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${WrapperWidth}px;
  padding: 0 1rem 2rem 1rem;

  ${MEDIUM_SMALL_SCREEN_MEDIA_QUERY} {
    padding: 0;
  }
`

const Description = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
  line-height: 1.4;
  color: ${gray700};
`

const Terms = styled.div`
  color: ${gray600};
  margin: 1rem 0;
  font-size: 0.75rem;
  line-height: 1.33;
  a {
    text-decoration: none;
  }
`

const AdyenContainer = styled.div`
  ${AdyenWrapper} {
    .adyen-checkout__payment-method__header {
      display: none;
    }
    .adyen-checkout__payment-method {
      background: transparent;

      &:not(:first-of-type) {
        border-top: 0;
      }
    }
    .adyen-checkout__label__text {
      color: ${gray900};
      font-size: 0.875rem;
      line-height: 1.4;
    }
    .adyen-checkout__label--focused .adyen-checkout__label__text {
      color: ${gray900};
    }
    .adyen-checkout__input {
      background-color: ${gray100};
      border: 1px solid ${gray300};
      border-radius: 8px;
      color: ${gray100};
      &:hover {
        border: 1px solid ${gray700};
      }
    }
    .adyen-checkout__button {
      display: none;
    }

    js-iframe-input input-field {
      background: ${gray100};
    }
  }
`

export const PaymentDetails = () => {
  const textKeys = useTextKeys()

  return (
    <Wrapper>
      <Headline variant="s" headingLevel="h2" colorVariant="dark">
        {textKeys.CHECKOUT_PAYMENT_DETAILS_TITLE()}
      </Headline>
      <Description>
        {textKeys.CHECKOUT_PAYMENT_DETAILS_DESCRIPTION()}
      </Description>
      <AdyenContainer>
        <AdyenCheckout />
      </AdyenContainer>

      <Terms>{textKeys.CHECKOUT_PAYMENT_DETAILS_TERMS()}</Terms>
    </Wrapper>
  )
}

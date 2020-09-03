import styled from '@emotion/styled'
import { colorsV3 } from '@hedviginsurance/brand'
import {
  Body,
  Column,
  ColumnSpacing,
  Container,
  HeadingBlack,
  HeadingWrapper,
  PreHeading,
} from 'pages/OfferNew/components'
import { PerilRow } from 'pages/OfferNew/Perils/PerilRow'
import { OfferData } from 'pages/OfferNew/types'
import React from 'react'
import { useTextKeys } from 'utils/hooks/useTextKeys'

interface Props {
  offerData: OfferData
}

const Wrapper = styled.div`
  padding: 8.5rem 0 5rem 0;
  background-color: ${colorsV3.gray100};
  display: flex;
`

const PerilRowWrapper = styled.div`
  padding-bottom: 8rem;

  :last-child {
    padding-bottom: 0;
  }
`

export const getIconUrl = (iconPath: string) => {
  if (typeof window === 'undefined') {
    return ''
  }

  return `${(window as any).CONTENT_SERVICE_ENDPOINT}${iconPath}`
}

export const Perils: React.FC<Props> = ({ offerData }) => {
  const textKeys = useTextKeys()

  return (
    <Wrapper>
      <Container>
        <Column>
          <HeadingWrapper>
            <PreHeading>{textKeys.COVERAGE_LABEL()}</PreHeading>
            <HeadingBlack>{textKeys.COVERAGE_HEADLINE()}</HeadingBlack>
            <Body>{textKeys.COVERAGE_BODY()}</Body>
          </HeadingWrapper>
          {offerData.quotes.map((quote) => (
            <PerilRowWrapper key={quote.id}>
              <PerilRow offerQuote={quote} />
            </PerilRowWrapper>
          ))}
        </Column>
        <ColumnSpacing />
      </Container>
    </Wrapper>
  )
}
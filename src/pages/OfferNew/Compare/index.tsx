import styled from '@emotion/styled'
import { colorsV2 } from '@hedviginsurance/brand'
import * as React from 'react'
import {
  Body,
  Column,
  ColumnSpacing,
  Container,
  HeadingBlack,
  HeadingWrapper,
  PreHeading,
} from '../components'
import { CompareTable } from './CompareTable'
import { hedvigCompany, insuranceProperties, otherCompanies } from './mock'

const Wrapper = styled('div')`
  padding: 5rem 0;
  background-color: ${colorsV2.offwhite};
`

export const Compare = () => {
  return (
    <Wrapper>
      <Container>
        <Column>
          <HeadingWrapper>
            <PreHeading>Villkor</PreHeading>
            <HeadingBlack>
              Allt du förväntar dig av en hemförsäkring, plus drulle
            </HeadingBlack>
            <Body>
              Det är viktigt för oss att du känner sig säker på att du får bästa
              möjliga villkor.
            </Body>
          </HeadingWrapper>

          <CompareTable
            insuranceProperties={insuranceProperties}
            primaryCompany={hedvigCompany}
            otherCompanies={otherCompanies}
          />
        </Column>
        <ColumnSpacing />
      </Container>
    </Wrapper>
  )
}
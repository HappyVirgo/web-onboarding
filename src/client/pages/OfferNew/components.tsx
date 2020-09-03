import styled from '@emotion/styled'
import { colorsV2, fonts } from '@hedviginsurance/brand'
import React from 'react'

export * from './common/price'

export const Heading = styled('h1')`
  font-family: ${fonts.FAVORIT};
  font-size: 3rem;
  line-height: 3.5rem;
  letter-spacing: -0.91px;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 2rem;
    line-height: 2rem;
    text-align: center;
  }
`

export const HeadingWhite = styled(Heading)`
  color: ${colorsV2.white};
`

export const HeadingBlack = styled(Heading)`
  color: ${colorsV2.black};
`

export const SubHeading = styled('h2')`
  font-family: ${fonts.FAVORIT};
  font-size: 1.5rem;
  line-height: 1.5rem;
  letter-spacing: -0.34px;

  @media (max-width: 600px) {
    font-size: 1.25rem;
  }
`

export const SubHeadingBlack = styled(SubHeading)`
  color: ${colorsV2.black};
`

export const SubSubHeading = styled('h2')`
  font-family: ${fonts.FAVORIT};
  font-size: 1.25rem;
  line-height: 1.25rem;
`

export const SubSubHeadingBlack = styled(SubSubHeading)`
  color: ${colorsV2.black};
`

export const PreHeading = styled('div')`
  font-size: 1rem;
  line-height: 1.5625rem;
  letter-spacing: 2.67px;
  color: ${colorsV2.gray};
  text-transform: uppercase;
  margin-bottom: 1.5625rem;

  @media (max-width: 600px) {
    text-align: center;
  }
`

export const HeadingWrapper = styled('div')`
  margin-bottom: 3.875rem;
`

export const Body = styled('div')`
  font-size: 1.25rem;
  line-height: 1.626rem;
  color: ${colorsV2.darkgray};
  margin-top: 2rem;
  padding-right: 7.5rem;

  @media (max-width: 600px) {
    padding-right: 0;
    text-align: center;
  }
`

export const Container = styled('div')`
  width: 100%;
  height: 100%;
  padding: 0 2rem;
  margin: 0 auto;
  max-width: 80rem;
  display: flex;
  justify-content: space-between;
  position: relative;

  @media (max-width: 1020px) {
    flex-direction: column-reverse;
  }

  @media (max-width: 420px) {
    padding: 0 1rem;
  }
`

export const Column = styled('div')`
  display: flex;
  flex-direction: column;
  max-width: 47.5rem;
  width: 100%;
  flex-grow: 0;
  box-sizing: border-box;
  padding-right: 1rem;

  @media (max-width: 1020px) {
    padding-right: 0;
  }
`

export const ColumnSpacing = styled('div')`
  width: 26rem;
  flex-shrink: 0;
`

const SectionWrapper = styled.section`
  width: 100%;
  position: relative;
`

export const Section: React.FC = ({ children }) => (
  <SectionWrapper>{children}</SectionWrapper>
)
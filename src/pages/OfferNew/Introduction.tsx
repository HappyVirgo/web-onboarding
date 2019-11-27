import styled from '@emotion/styled'
import { colorsV2, fonts } from '@hedviginsurance/brand'
import * as React from 'react'
import { useDocumentScroll } from '../../utils/hooks/useDocumentScroll'
import {
  Column,
  Container,
  HeadingWhite,
  HeadingWrapper,
  PreHeading,
} from './components'

const Wrapper = styled.div`
  width: 100%;
  height: 53rem;
  padding: 12.5rem 0 5rem 0;
  background-color: ${colorsV2.black};
  position: relative;
  box-sizing: border-box;
`

const SidebarWrapper = styled.div`
  width: 26rem;
  flex-shrink: 0;
  position: relative;
`

const Sidebar = styled.div<{ sticky: boolean }>`
  width: 26rem;
  height: 31rem;
  background-color: ${colorsV2.white};
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
  flex-shrink: 0;
  position: ${(props) => (props.sticky ? `fixed` : `relative`)};
  ${(props) => props.sticky && `top: 6rem;`}
`

const SidebarHeader = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row;
  padding: 2rem 1.5rem 2rem 2rem;
`

const SidebarHeaderSummary = styled.div`
  width: 100%;
`

const SidebarHeaderSummaryPreTitle = styled.div`
  font-family: ${fonts.GEOMANIST};
  font-size: 0.75rem;
  line-height: 0.875rem;
  letter-spacing: 0.075rem;
  color: ${colorsV2.gray};
  text-transform: uppercase;
`

const SidebarHeaderSummaryTitle = styled.div`
  font-family: ${fonts.GEOMANIST};
  font-size: 2rem;
  font-weight: 500;
  color: ${colorsV2.black};
  margin-top: 0.25rem;
`

const SidebarHeaderPrice = styled.div`
  display: flex;
  flex-flow: row;
  padding-top: 1rem;
`

const SidebarHeaderPriceValue = styled.div`
  font-size: 3.5rem;
  line-height: 3.5rem;
  color: ${colorsV2.black};
  font-family: ${fonts.GEOMANIST};
  font-weight: 700;
`

const SidebarHeaderPriceSuffix = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  padding-bottom: 0.5rem;
  flex-shrink: 0;
  margin-left: 0.5rem;
`

const SidebarHeaderPriceUnit = styled.div`
  font-size: 1rem;
  line-height: 1rem;
  letter-spacing: -0.23px;
  font-weight: 700;
  color: ${colorsV2.darkgray};
  margin-bottom: 0.25rem;
`

const SidebarHeaderPriceInterval = styled.div`
  font-size: 1rem;
  line-height: 1rem;
  letter-spacing: -0.23px;
  color: ${colorsV2.darkgray};
  white-space: nowrap;
`

export const Introduction = () => {
  const [sidebarIsSticky, setSidebarIsSticky] = React.useState(false)
  const ref = React.useRef<HTMLDivElement>(null)

  useDocumentScroll(() => {
    const distanceToTop =
      ref.current !== null
        ? ref.current.getBoundingClientRect().top
        : Math.pow(10, 4)

    if (distanceToTop <= 96) {
      setSidebarIsSticky(true)
    } else {
      setSidebarIsSticky(false)
    }
  })

  return (
    <Wrapper>
      <Container>
        <Column>
          <HeadingWrapper>
            <PreHeading>Försäkringsförslag</PreHeading>
            <HeadingWhite>
              Tyckte du det där var enkelt? Då skulle du uppleva vår försäkring
            </HeadingWhite>
          </HeadingWrapper>
        </Column>

        <SidebarWrapper ref={ref}>
          <Sidebar sticky={sidebarIsSticky}>
            <SidebarHeader>
              <SidebarHeaderSummary>
                <SidebarHeaderSummaryPreTitle>
                  Hemförsäkring
                </SidebarHeaderSummaryPreTitle>

                <SidebarHeaderSummaryTitle>
                  Bostadsrätt
                </SidebarHeaderSummaryTitle>
              </SidebarHeaderSummary>

              <SidebarHeaderPrice>
                <SidebarHeaderPriceValue>119</SidebarHeaderPriceValue>
                <SidebarHeaderPriceSuffix>
                  <SidebarHeaderPriceUnit>kr</SidebarHeaderPriceUnit>
                  <SidebarHeaderPriceInterval>/ mån</SidebarHeaderPriceInterval>
                </SidebarHeaderPriceSuffix>
              </SidebarHeaderPrice>
            </SidebarHeader>
          </Sidebar>
        </SidebarWrapper>
      </Container>
    </Wrapper>
  )
}

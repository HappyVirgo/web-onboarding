import styled from '@emotion/styled'
import { colorsV2 } from '@hedviginsurance/brand'
import * as React from 'react'
import { PerilV2 } from 'data/graphql'
import { getGiraffeEndpoint } from 'utils/apolloClient'
import { useTextKeys } from 'utils/hooks/useTextKeys'
import { InsuranceType } from 'utils/insuranceDomainUtils'
import {
  Body,
  Column,
  ColumnSpacing,
  Container,
  HeadingBlack,
  HeadingWrapper,
  PreHeading,
} from '../components'
import { InsuranceValues } from './InsuranceValues'
import { PerilCollection } from './PerilCollection'
import { PerilModal } from './PerilModal'

interface Props {
  insuranceType: InsuranceType
  perils: ReadonlyArray<PerilV2>
}

const Wrapper = styled.div`
  padding: 8.5rem 0 5rem 0;
  background-color: ${colorsV2.offwhite};
  display: flex;
`
export const getIconUrl = (iconPath: string) => {
  const giraffeEndpoint = getGiraffeEndpoint(
    'GIRAFFE_ENDPOINT',
    'https://graphql.dev.hedvigit.com/graphql',
  )
  const match = /\/([a-z0-9_-]*[\/]?)$/
  const baseUrl = giraffeEndpoint.replace(match, '')
  return `${baseUrl}${iconPath}`
}

export const Perils: React.FC<Props> = ({ insuranceType, perils }) => {
  const textKeys = useTextKeys()
  const [isShowingPeril, setIsShowingPeril] = React.useState(false)
  const [currentPeril, setCurrentPeril] = React.useState(0)

  return (
    <Wrapper>
      <Container>
        <Column>
          <HeadingWrapper>
            <PreHeading>{textKeys.COVERAGE_LABEL()}</PreHeading>
            <HeadingBlack>{textKeys.COVERAGE_HEADLINE()}</HeadingBlack>
            <Body>{textKeys.COVERAGE_BODY()}</Body>
          </HeadingWrapper>
          <PerilCollection
            perils={perils}
            setCurrentPeril={setCurrentPeril}
            setIsShowingPeril={setIsShowingPeril}
          />

          <InsuranceValues insuranceType={insuranceType} />
        </Column>
        <ColumnSpacing />
      </Container>
      {perils.length > 0 && (
        <PerilModal
          perils={perils}
          currentPerilIndex={currentPeril}
          setCurrentPeril={setCurrentPeril}
          isVisible={isShowingPeril}
          onClose={() => setIsShowingPeril(false)}
        />
      )}
    </Wrapper>
  )
}

import styled from '@emotion/styled'
import { colorsV3 } from '@hedviginsurance/brand/dist'
import { LinkButton } from 'components/buttons'
import { LoadingPage } from 'components/LoadingPage'
import {
  getLocaleIsoCode,
  useCurrentLocale,
} from 'components/utils/CurrentLocale'
import {
  QuoteBundle,
  SignState,
  useQuoteBundleQuery,
  useSignStatusQuery,
} from 'data/graphql'
import { motion } from 'framer-motion'
import { getOfferData } from 'pages/OfferNew/utils'
import * as React from 'react'
import { Redirect } from 'react-router'
import { useTextKeys } from 'utils/hooks/useTextKeys'
import { useStorage } from 'utils/StorageContainer'
import { useTrack } from 'utils/tracking'

const InnerWrapper = styled(motion.div)`
  text-align: center;
`

const TextWrapper = styled('div')`
  padding-bottom: 2rem;
`

export const SignLoading: React.FC = () => {
  const [timer, setTimer] = React.useState<number | null>(null)
  const [hasTakenLong, setHasTakenLong] = React.useState(false)
  const signStatusQuery = useSignStatusQuery({
    pollInterval: 1000,
  })
  const textKeys = useTextKeys()
  const currentLocale = useCurrentLocale()
  const localeIsoCode = getLocaleIsoCode(currentLocale)
  const storage = useStorage()
  const quoteIds = storage.session.getSession()?.quoteIds ?? []
  const { data: quoteBundleData } = useQuoteBundleQuery({
    variables: {
      input: {
        ids: [...quoteIds],
      },
      locale: localeIsoCode,
    },
  })

  useTrack({
    offerData:
      quoteBundleData &&
      getOfferData(quoteBundleData.quoteBundle as QuoteBundle),
    signState: signStatusQuery.data?.signStatus?.signState,
  })

  React.useEffect(() => {
    setTimer(window.setTimeout(() => setHasTakenLong(true), 10000))
    return () => {
      window.clearTimeout(timer!)
    }
  }, [])

  const failureReturnUrl = currentLocale
    ? `/${currentLocale}/new-member/offer?sign-error=yes`
    : '/new-member/offer?sign-error=yes'
  if (signStatusQuery.data?.signStatus?.signState === SignState.Failed) {
    return <Redirect to={failureReturnUrl} />
  }
  if (signStatusQuery.data?.signStatus?.signState === SignState.Completed) {
    return (
      <Redirect
        to={
          currentLocale
            ? `/${currentLocale}/new-member/connect-payment`
            : '/new-member/connect-payment'
        }
      />
    )
  }

  return (
    <LoadingPage>
      <InnerWrapper
        initial="hidden"
        animate={hasTakenLong ? 'visible' : 'hidden'}
        variants={{
          hidden: { opacity: 0, height: 0 },
          visible: { opacity: 1, height: 'auto' },
        }}
      >
        <TextWrapper>{textKeys.BANKID_NOT_RESPONDING()}</TextWrapper>
        <LinkButton
          to={failureReturnUrl}
          foreground={colorsV3.black}
          background={colorsV3.white}
        >
          {textKeys.RETRY_QUESTION()}
        </LinkButton>
      </InnerWrapper>
    </LoadingPage>
  )
}

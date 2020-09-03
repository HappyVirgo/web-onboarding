import { LoadingPage } from 'components/LoadingPage'
import { TopBar } from 'components/TopBar'
import {
  getLocaleIsoCode,
  useCurrentLocale,
} from 'components/utils/CurrentLocale'
import { Page } from 'components/utils/Page'
import { SessionTokenGuard } from 'containers/SessionTokenGuard'
import { QuoteBundle, useQuoteBundleQuery } from 'data/graphql'
import { History } from 'history'
import { SwitchSafetySection } from 'pages/OfferNew/SwitchSafetySection'
import { getOfferData } from 'pages/OfferNew/utils'
import { SemanticEvents } from 'quepasa'
import React from 'react'
import { Redirect, useHistory, useRouteMatch } from 'react-router'
import { useVariation, Variation } from 'utils/hooks/useVariation'
import { useStorage } from 'utils/StorageContainer'
import { getUtmParamsFromCookie, TrackAction } from 'utils/tracking/tracking'
import { Checkout } from './Checkout'
import { FaqSection } from './FaqSection'
import { Introduction } from './Introduction'
import { Perils } from './Perils'

const createToggleCheckout = (history: History<any>, locale?: string) => (
  isOpen: boolean,
) => {
  if (isOpen) {
    history.push(`/${locale}/new-member/sign`)
  } else {
    history.goBack()
  }
}

export const OfferNew: React.FC = () => {
  const storage = useStorage()
  const currentLocale = useCurrentLocale()
  const localeIsoCode = getLocaleIsoCode(currentLocale)
  const variation = useVariation()
  const quoteIds = storage.session.getSession()?.quoteIds ?? []
  const { data, loading: loadingQuoteBundle, refetch } = useQuoteBundleQuery({
    variables: {
      input: {
        ids: [...quoteIds],
      },
      locale: localeIsoCode,
    },
  })

  const history = useHistory()
  const checkoutMatch = useRouteMatch(
    '/:locale(se-en|se|no-en|no)/new-member/sign',
  )
  const toggleCheckout = createToggleCheckout(history, currentLocale)

  if (quoteIds.length === 0) {
    return <Redirect to={`/${currentLocale}/new-member`} />
  }

  if (!loadingQuoteBundle && !data?.quoteBundle) {
    throw new Error(
      `No quote returned to show offer with (quoteIds=${quoteIds}).`,
    )
  }

  if (loadingQuoteBundle && !data?.quoteBundle) {
    return <LoadingPage />
  }

  const offerData = getOfferData(data?.quoteBundle! as QuoteBundle)

  return (
    <Page>
      <SessionTokenGuard>
        {![Variation.IOS, Variation.ANDROID].includes(variation!) && <TopBar />}
        <TrackAction
          event={{
            name: SemanticEvents.Ecommerce.CheckoutStarted,
            properties: {
              value: Number(offerData.cost.monthlyNet.amount),
              label: 'Offer',
              ...getUtmParamsFromCookie(),
            },
          }}
        >
          {({ track }) => (
            <Introduction
              offerData={offerData}
              refetch={refetch as () => Promise<any>}
              onCheckoutOpen={() => {
                toggleCheckout(true)
                track()
              }}
            />
          )}
        </TrackAction>
        <Perils offerData={offerData} />
        <SwitchSafetySection />
        <FaqSection />
        <Checkout
          offerData={offerData}
          isOpen={checkoutMatch !== null}
          onClose={() => toggleCheckout(false)}
          refetch={refetch as () => Promise<any>}
        />
      </SessionTokenGuard>
    </Page>
  )
}
import { useApolloClient } from '@apollo/react-hooks'
import { FetchPolicy } from 'apollo-client'
import { QuoteDocument, QuoteQuery } from 'data/graphql'
import * as React from 'react'
import { Quote } from './graphql'

export interface UseMultipleQuotesState {
  loading: boolean
  refetch: () => Promise<ReadonlyArray<Quote>>
}

export type UseMultipleQuotesReturnTuple = [
  ReadonlyArray<Quote>,
  UseMultipleQuotesState,
]

export const useMultipleQuotes = (
  quoteIds: ReadonlyArray<string>,
  localeIsoCode: string,
): UseMultipleQuotesReturnTuple => {
  const [quotes, setQuotes] = React.useState<ReadonlyArray<Quote>>([])
  const [loading, setLoading] = React.useState(true)
  const apolloClient = useApolloClient()

  const fetch = (fetchPolicy?: FetchPolicy) => {
    setLoading(true)
    return Promise.all(
      quoteIds.map((quoteId) =>
        apolloClient.query<QuoteQuery>({
          query: QuoteDocument,
          variables: { id: quoteId, perilsLocale: localeIsoCode },
          fetchPolicy,
        }),
      ),
    )
      .then((results) => results.map((result) => result.data.quote))
      .then((fetchedQuotes) => {
        setQuotes(fetchedQuotes)
        setLoading(false)
        return fetchedQuotes
      })
      .catch((e) => {
        setLoading(false)
        throw e // FIME Better error handling?
      })
  }

  React.useEffect(() => {
    fetch()
  }, [...quoteIds])

  return [quotes, { loading, refetch: () => fetch('network-only') }]
}

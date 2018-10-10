import { InMemoryCache } from 'apollo-cache-inmemory'
import ApolloClient from 'apollo-client/ApolloClient'
import { WebSocketLink } from 'apollo-link-ws'
import { CookieStorage } from 'cookie-storage'
import { SubscriptionClient } from 'subscriptions-transport-ws'
import { createSession, Session } from '../utils/sessionStorage'

export const apolloClient = (() => {
  if (typeof WebSocket === 'undefined') {
    throw new Error("typeof WebSocket is undefined, can't connect to remote")
  }
  const subscriptionClient = new SubscriptionClient(
    (window as any).GIRAFFE_WS_ENDPOINT,
    {
      reconnect: true,
      connectionParams: () => ({
        Authorization: createSession<Session>(new CookieStorage()).getSession()!
          .token,
      }),
    },
  )
  const apolloClient = new ApolloClient({
    cache: new InMemoryCache().restore((window as any).__INITIAL_STATE__),
    link: new WebSocketLink(subscriptionClient),
  })

  return { subscriptionClient, apolloClient }
})()

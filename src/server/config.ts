import * as dotenv from 'dotenv'

import { Feature, FeatureMap, MarketLabel } from 'shared/clientConfig'

dotenv.config()

export const GIRAFFE_HOST =
  process.env.NODE_ENV === 'development'
    ? process.env.GIRAFFE_HOST ?? 'https://graphql.dev.hedvigit.com'
    : process.env.GIRAFFE_HOST!
export const GIRAFFE_WS_ENDPOINT =
  process.env.NODE_ENV === 'development'
    ? process.env.GIRAFFE_WS_ENDPOINT ??
      'wss://graphql.dev.hedvigit.com/subscriptions'
    : process.env.GIRAFFE_WS_ENDPOINT!
export const CONTENT_SERVICE_ENDPOINT =
  process.env.NODE_ENV === 'development'
    ? process.env.CONTENT_SERVICE_ENDPOINT ?? 'https://graphql.dev.hedvigit.com'
    : process.env.CONTENT_SERVICE_ENDPOINT!

export const ADYEN_CLIENT_KEY = process.env.ADYEN_CLIENT_KEY!
export const ADYEN_ENVIRONMENT = process.env.ADYEN_ENVIRONMENT!

export const HEROKU_SLUG_COMMIT = process.env.HEROKU_SLUG_COMMIT!
export const DATADOG_APPLICATION_ID = process.env.DATADOG_APPLICATION_ID!
export const DATADOG_CLIENT_TOKEN = process.env.DATADOG_CLIENT_TOKEN!

export const APP_ENVIRONMENT = process.env.APP_ENVIRONMENT ?? 'development'

export const FEATURES = (Object.keys(Feature) as Array<Feature>).reduce(
  (featureMap, key) => {
    const envKey = `FEATURE_${key}`
    if (envKey in process.env) {
      const markets = process.env[envKey]?.split(',') ?? []
      featureMap[key] = markets as Array<MarketLabel>
    } else {
      featureMap[key] = []
    }
    return featureMap
  },
  {} as FeatureMap,
)

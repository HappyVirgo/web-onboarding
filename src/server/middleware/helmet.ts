import * as koaHelmet from 'koa-helmet'
import * as uuidV4 from 'uuid/v4'
import {
  CONTENT_SERVICE_ENDPOINT,
  GIRAFFE_ENDPOINT,
  GIRAFFE_WS_ENDPOINT,
} from '../config'

const defaultSrc = [
  "'self'",
  'hedvig.com',
  'www.hedvig.com',
  'cdn.hedvig.com',
  'https://*.hotjar.com',
  'wss://*.hotjar.com',
  'https://*.hotjar.io',
  'wss://*.hotjar.io',
  'https://*.intercom.io',
  'https://*.intercomcdn.com',
  'https://*.intercomassets.com',
  'https://*.intercomusercontent.com',
  'wss://*.intercom.io',
  'wss://*.intercomcdn.com',
  'wss://*.intercomassets.com',
  'wss://*.intercomusercontent.com',
  'app.getsentry.com',
  'www.google-analytics.com',
  'www.googletagmanager.com',
  'https://tagmanager.google.com',
  'www.googleadservices.com',
  'www.gstatic.com',
  'www.google.com',
  'www.google.se',
  'tpc.googlesyndication.com',
  't.co',
  '*.facebook.net',
  '*.facebook.com',
  'www.studentkortet.se',
  'https://studentkortet.go2cloud.org',
  'track.studentkortet.se',
  'tr.snapchat.com',
  'sc-static.net',
  'analytics.twitter.com',
  'online.adservicemedia.dk',
  '*.doubleclick.net',
  '*.branch.io',
  'https://adtr.io',
  'https://track.adtraction.com',
  'https://c.adtraction.net',
  'bnc.lt',
  'app.link',
  'hedvig.app.link',
  'hedvig.test-app.link',
  'trustly.com',
  '*.trustly.com',
  'https://hedvig-embark.herokuapp.com',
  'https://heapanalytics.com',
  'cdn.mxpnl.com',
  'https://api-js.mixpanel.com',
  'oidc-ui-current.bankidnorge.no',
  'oidc-current.bankidapis.no',
  'bankidnorge.no',
  '*.zignsec.com',
  GIRAFFE_ENDPOINT,
  GIRAFFE_WS_ENDPOINT,
  CONTENT_SERVICE_ENDPOINT,
]

export const helmet = koaHelmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc,
      scriptSrc: [
        ...defaultSrc,
        "'unsafe-eval'",
        "'unsafe-inline'",
        'browser.sentry-cdn.com',
        'cdn.segment.com',
        'https://cdn.heapanalytics.com',
        // tslint:disable-next-line variable-name
        (_request, response) => {
          ;(response as any).cspNonce = uuidV4()
          return `'nonce-${(response as any).cspNonce}'`
        },
      ],
      imgSrc: [...defaultSrc, 'data:'],
      connectSrc: [
        ...defaultSrc,
        'https://api.segment.io',
        'https://sentry.io',
      ],
      styleSrc: [...defaultSrc, "'unsafe-inline'"],
      upgradeInsecureRequests: true,
      objectSrc: ["'none'"],
      reportUri:
        process.env.CSP_REPORT_ENDPOINT || '/new-member/_report-csp-violation',
    },
  },
})

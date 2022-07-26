import { CookieStorage } from 'cookie-storage'
import { SegmentAnalyticsJs, setupTrackers } from 'quepasa'
import React from 'react'
import {
  SignState,
  TypeOfContract,
  useMemberQuery,
  useRedeemedCampaignsQuery,
} from 'data/graphql'
import { OfferData } from 'pages/OfferNew/types'
import {
  isBundle,
  isYouth,
  isNorwegian,
  isDanishAccidentBundle,
  isDanishTravelBundle,
  isStudentOffer,
  getMainQuote,
  isSwedishHouse,
  isSwedishApartment,
  isSwedishBRF,
} from 'pages/OfferNew/utils'
import { Variation } from 'utils/hooks/useVariation'
import { trackOfferGTM, EventName } from './gtm'
import { adtraction } from './adtraction'
import { handleSignedEvent } from './signing'

const cookie = new CookieStorage()

export interface UtmParams {
  source?: string
  medium?: string
  term?: string
  content?: string
  name?: string
}

export const getUtmParamsFromCookie = (): UtmParams | undefined => {
  const params = cookie.getItem('utm-params')
  try {
    return params ? JSON.parse(params) : undefined
  } catch (e) {
    if (typeof window !== 'undefined' && (window as any).Sentry) {
      ;(window as any).Sentry.captureMessage(
        'Error parsing UTM-parameters: ' + params,
      )
    }
    return undefined
  }
}

export enum SeBundleTypes {
  SeHomeAccidentBundleStudentBrf = 'SE_ACCIDENT_BUNDLE_STUDENT_BRF',
  SeHomeAccidentBundleBrf = 'SE_ACCIDENT_BUNDLE_BRF',
  SeHomeAccidentBundleStudentRent = 'SE_ACCIDENT_BUNDLE_STUDENT_RENT',
  SeHomeAccidentBundleRent = 'SE_ACCIDENT_BUNDLE_RENT',
  SeHomeAccidentBundleHouse = 'SE_ACCIDENT_BUNDLE_HOUSE',
}

export enum NoComboTypes {
  NoCombo = 'NO_COMBO',
  NoComboYouth = 'NO_COMBO_YOUTH',
}

export enum DkBundleTypes {
  DkAccidentBundle = 'DK_ACCIDENT_BUNDLE',
  DkAccidentBundleStudent = 'DK_ACCIDENT_BUNDLE_STUDENT',
  DkTravelBundle = 'DK_TRAVEL_BUNDLE',
  DkTravelBundleStudent = 'DK_TRAVEL_BUNDLE_STUDENT',
}

export type TrackableContractType =
  | SeBundleTypes
  | NoComboTypes
  | DkBundleTypes
  | TypeOfContract

export const getContractType = (offerData: OfferData) => {
  if (isBundle(offerData)) {
    const { quoteDetails: homeQuoteDetails } = getMainQuote(offerData)

    if (isSwedishHouse(homeQuoteDetails)) {
      return SeBundleTypes.SeHomeAccidentBundleHouse
    }

    if (isSwedishApartment(homeQuoteDetails)) {
      if (isSwedishBRF(homeQuoteDetails)) {
        return isStudentOffer(offerData)
          ? SeBundleTypes.SeHomeAccidentBundleStudentBrf
          : SeBundleTypes.SeHomeAccidentBundleBrf
      } else {
        return isStudentOffer(offerData)
          ? SeBundleTypes.SeHomeAccidentBundleStudentRent
          : SeBundleTypes.SeHomeAccidentBundleRent
      }
    }
    if (isNorwegian(offerData)) {
      return isYouth(offerData)
        ? NoComboTypes.NoComboYouth
        : NoComboTypes.NoCombo
    }

    if (isDanishAccidentBundle(offerData)) {
      return isStudentOffer(offerData)
        ? DkBundleTypes.DkAccidentBundleStudent
        : DkBundleTypes.DkAccidentBundle
    }

    if (isDanishTravelBundle(offerData)) {
      return isStudentOffer(offerData)
        ? DkBundleTypes.DkTravelBundleStudent
        : DkBundleTypes.DkTravelBundle
    }
  }
  return getMainQuote(offerData).contractType
}

export enum TrackableContractCategory {
  Home = 'home',
  Travel = 'travel',
  HomeTravel = 'home_travel',
  HomeAccident = 'home_accident',
  HomeAccidentTravel = 'home_accident_travel',
}

export const getTrackableContractCategory = (
  contractType: TrackableContractType,
) => {
  switch (contractType) {
    case SeBundleTypes.SeHomeAccidentBundleBrf:
    case SeBundleTypes.SeHomeAccidentBundleRent:
    case SeBundleTypes.SeHomeAccidentBundleHouse:
    case SeBundleTypes.SeHomeAccidentBundleStudentBrf:
    case SeBundleTypes.SeHomeAccidentBundleStudentRent:
    case DkBundleTypes.DkAccidentBundle:
    case DkBundleTypes.DkAccidentBundleStudent:
      return TrackableContractCategory.HomeAccident

    case NoComboTypes.NoCombo:
    case NoComboTypes.NoComboYouth:
      return TrackableContractCategory.HomeTravel

    case DkBundleTypes.DkTravelBundle:
    case DkBundleTypes.DkTravelBundleStudent:
      return TrackableContractCategory.HomeAccidentTravel

    case TypeOfContract.NoTravel:
    case TypeOfContract.NoTravelYouth:
      return TrackableContractCategory.Travel
    default:
      return TrackableContractCategory.Home
  }
}

export const getInitialOfferFromSessionStorage = () => {
  return sessionStorage.getItem('initial_offer')
}

export const setInitialOfferToSessionStorage = (
  contractCategory: TrackableContractCategory,
) => {
  sessionStorage.setItem('initial_offer', contractCategory)
}

export enum ApplicationSpecificEvents {
  COMPLETED = 'completed',
}

const NOOP = () => {
  return
}

export const { TrackAction, IdentifyAction } = setupTrackers<
  ApplicationSpecificEvents
>(
  () => {
    if (typeof window !== 'undefined') {
      const castedWindow = window as any
      return castedWindow.analytics as SegmentAnalyticsJs
    }
    return { track: NOOP, identify: NOOP }
  },
  { debug: process.env.NODE_ENV === 'development' },
)
interface TrackProps {
  offerData?: OfferData | null
  signState?: SignState | null
}
export const useTrack = ({ offerData, signState }: TrackProps) => {
  const { data: redeemedCampaignsData } = useRedeemedCampaignsQuery()
  const { data: memberData } = useMemberQuery()
  const memberId = memberData?.member.id

  React.useEffect(() => {
    const redeemedCampaigns = redeemedCampaignsData?.redeemedCampaigns ?? []

    if (process.env.NODE_ENV === 'test') {
      return
    }

    if (signState !== SignState.Completed) {
      return
    }

    if (!offerData) {
      return
    }

    if (memberId) {
      adtraction(
        parseFloat(offerData.cost.monthlyGross.amount),
        memberId,
        offerData.person.email || '',
        offerData,
        redeemedCampaigns !== null && redeemedCampaigns.length !== 0
          ? redeemedCampaigns[0].code
          : undefined,
      )
    }

    trackOfferGTM(
      EventName.SignedCustomer,
      { ...offerData, memberId: memberId || '' },
      redeemedCampaigns[0]?.incentive?.__typename === 'MonthlyCostDeduction',
    )
  }, [redeemedCampaignsData, memberId, offerData, signState])
}

export type TrackSignedEventParams = {
  variation: Variation | null
  quoteCartId: string
  memberId: string
  offerData: OfferData
  campaignCode?: string
  isDiscountMonthlyCostDeduction: boolean
}

export const trackSignedEvent = ({
  variation,
  quoteCartId,
  memberId,
  offerData,
  campaignCode,
  isDiscountMonthlyCostDeduction,
}: TrackSignedEventParams) => {
  if (variation === Variation.AVY) {
    handleSignedEvent(memberId)
  }

  adtraction(
    parseFloat(offerData.cost.monthlyGross.amount),
    memberId,
    offerData.person.email || '',
    offerData,
    campaignCode,
  )

  trackOfferGTM(
    EventName.SignedCustomer,
    { ...offerData, memberId: memberId || '' },
    isDiscountMonthlyCostDeduction,
    { quoteCartId },
  )
}

import {
  BundledQuote,
  CompleteApartmentQuoteDetails,
  CompleteHouseQuoteDetails,
  CompleteQuote,
  InsurableLimit,
  InsurableLimitType,
  InsuranceCost,
  InsuranceTerm,
  Query,
  TypeOfContract,
} from 'data/graphql'

interface OfferCore {
  redeemedCampaigns: Query['redeemedCampaigns']
  member: Omit<Query['member'], 'features'>
}

export interface CompleteOfferDataForMember extends OfferCore {
  lastQuoteOfMember: CompleteQuoteWithoutUnknownDetails
}

export type CompleteQuoteWithoutUnknownDetails = CompleteQuote & {
  details: CompleteHouseQuoteDetails | CompleteApartmentQuoteDetails
}

export interface Address {
  street: string
  zipCode: string
  apartment?: string
  floor?: string
}

export type OfferPersonInfo = Pick<
  BundledQuote,
  'firstName' | 'lastName' | 'email' | 'ssn' | 'birthDate' | 'phoneNumber'
> & {
  householdSize: number
  address: Address | null
}

export type OfferQuote = Pick<
  BundledQuote,
  | 'id'
  | 'displayName'
  | 'price'
  | 'startDate'
  | 'quoteDetails'
  | 'dataCollectionId'
  | 'currentInsurer'
  | 'perils'
> & {
  contractType: TypeOfContract
  insurableLimits: ReadonlyMap<InsurableLimitType, InsurableLimit>
  insuranceTerms: InsuranceTerm[]
  data: GenericQuoteData
}

export type GenericQuoteData = {
  birthDate: string
  firstName?: string
  lastName?: string

  type: string

  numberCoInsured: number
  isStudent?: boolean
  isYouth?: boolean

  street?: string
  zipCode?: string
  livingSpace?: number
  subType?: string
  apartment?: string
  floor?: number

  ancillaryArea?: number
  numberOfBathrooms?: number
  yearOfConstruction?: number
  isSubleted?: boolean

  extraBuildings?: Array<{
    displayName: string | null
    type: string
    area: number
    hasWaterConnected: boolean
  }>

  typeOfContract?: string
}

export interface OfferData {
  person: OfferPersonInfo
  quotes: ReadonlyArray<OfferQuote>
  cost: InsuranceCost
  memberId?: string
}

export interface WithEmailForm {
  email: string
  onEmailChange: (email: string) => void
}

export interface WithSsnForm {
  ssn: string
  onSsnChange: (ssn: string) => void
}

export interface WithFirstAndLastNameForm {
  firstName: string
  lastName: string
  onFirstNameChange: (name: string) => void
  onLastNameChange: (name: string) => void
  isFirstAndLastNameVisible: boolean
}

export interface WithPhoneForm {
  phoneNumber: string
  onPhoneChange: (phoneNumber: string) => void
}

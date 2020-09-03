import * as ApolloReactCommon from '@apollo/react-common'
import * as ApolloReactHooks from '@apollo/react-hooks'
import gql from 'graphql-tag'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] }
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  DateTime: any
  LocalDate: any
  Object: any
  URL: any
  /** A String-representation of Adyen's PaymentMethodsResponse */
  PaymentMethodsResponse: any
  /** An ISO-8601 String representation of a `java.time.Instant`, e.g. 2019-07-03T19:07:38.494081Z */
  Instant: any
  JSONString: any
  UUID: any
  /** The `Upload` scalar type represents a file upload. */
  Upload: any
  TimeStamp: any
  JSONObject: any
  /** A String-representation of Adyen's payment method details */
  PaymentMethodDetails: any
  /** A String-representation of Adyen's checkout payments action */
  CheckoutPaymentsAction: any
  /** A String-representation of Adyen's payments details request */
  PaymentsDetailsRequest: any
  /**
   * The `Long` scalar type represents non-fractional signed whole numeric values.
   * Long can represent values between -(2^63) and 2^63 - 1.
   */
  Long: any
}

export interface AcceptedReferral {
  __typename?: 'AcceptedReferral'
  quantity?: Maybe<Scalars['Int']>
}

/** The contract has an inception date in the future and a termination date in the future */
export interface ActiveInFutureAndTerminatedInFutureStatus {
  __typename?: 'ActiveInFutureAndTerminatedInFutureStatus'
  futureInception?: Maybe<Scalars['LocalDate']>
  futureTermination?: Maybe<Scalars['LocalDate']>
}

/** The contract has an inception date set in the future */
export interface ActiveInFutureStatus {
  __typename?: 'ActiveInFutureStatus'
  futureInception?: Maybe<Scalars['LocalDate']>
}

export interface ActivePaymentMethodsResponse {
  __typename?: 'ActivePaymentMethodsResponse'
  storedPaymentMethodsDetails: StoredPaymentMethodsDetails
}

export interface ActiveReferral {
  __typename?: 'ActiveReferral'
  name?: Maybe<Scalars['String']>
  discount: MonetaryAmountV2
}

/** The contract has an inception date set today or in the past without a termination date set */
export interface ActiveStatus {
  __typename?: 'ActiveStatus'
  pastInception?: Maybe<Scalars['LocalDate']>
}

export interface AdditionalPaymentsDetailsRequest {
  paymentsDetailsRequest: Scalars['PaymentsDetailsRequest']
}

export type AdditionalPaymentsDetailsResponse =
  | AdditionalPaymentsDetailsResponseFinished
  | AdditionalPaymentsDetailsResponseAction

export interface AdditionalPaymentsDetailsResponseAction {
  __typename?: 'AdditionalPaymentsDetailsResponseAction'
  action: Scalars['CheckoutPaymentsAction']
}

export interface AdditionalPaymentsDetailsResponseFinished {
  __typename?: 'AdditionalPaymentsDetailsResponseFinished'
  resultCode: Scalars['String']
}

export interface AddPhotoToKeyGearItemInput {
  itemId: Scalars['ID']
  file: S3FileInput
}

export interface AddReceiptToKeyGearItemInput {
  itemId: Scalars['ID']
  file: S3FileInput
}

export interface Address {
  __typename?: 'Address'
  street: Scalars['String']
  postalCode: Scalars['String']
  city?: Maybe<Scalars['String']>
}

export interface AggregateAppMarketingImage {
  __typename?: 'AggregateAppMarketingImage'
  count: Scalars['Int']
}

export interface AggregateAsset {
  __typename?: 'AggregateAsset'
  count: Scalars['Int']
}

export interface AggregateCoreMlModel {
  __typename?: 'AggregateCoreMLModel'
  count: Scalars['Int']
}

export interface AggregateFaq {
  __typename?: 'AggregateFaq'
  count: Scalars['Int']
}

export interface AggregateImportantMessage {
  __typename?: 'AggregateImportantMessage'
  count: Scalars['Int']
}

export interface AggregateKey {
  __typename?: 'AggregateKey'
  count: Scalars['Int']
}

export interface AggregateKeyGearItemCoverage {
  __typename?: 'AggregateKeyGearItemCoverage'
  count: Scalars['Int']
}

export interface AggregateLanguage {
  __typename?: 'AggregateLanguage'
  count: Scalars['Int']
}

export interface AggregateMarketingStory {
  __typename?: 'AggregateMarketingStory'
  count: Scalars['Int']
}

export interface AggregateTranslation {
  __typename?: 'AggregateTranslation'
  count: Scalars['Int']
}

export interface AggregateUserFeature {
  __typename?: 'AggregateUserFeature'
  count: Scalars['Int']
}

export type Agreement =
  | SwedishApartmentAgreement
  | SwedishHouseAgreement
  | NorwegianHomeContentAgreement
  | NorwegianTravelAgreement

export interface AgreementCore {
  id: Scalars['ID']
  status: AgreementStatus
  activeFrom?: Maybe<Scalars['LocalDate']>
  activeTo?: Maybe<Scalars['LocalDate']>
  premium: MonetaryAmountV2
  certificateUrl?: Maybe<Scalars['String']>
}

export enum AgreementStatus {
  /** An agreement with no activation date, waiting to be activated */
  Pending = 'PENDING',
  /** An agreement that will be active on a future date */
  ActiveInFuture = 'ACTIVE_IN_FUTURE',
  /** An agreement that is active today */
  Active = 'ACTIVE',
  /** An agreement that either was never active that is now terminated or was active in the past of a now terminated contract */
  Terminated = 'TERMINATED',
}

export interface AngelStory {
  __typename?: 'AngelStory'
  content: Scalars['String']
}

export enum ApartmentType {
  StudentRent = 'STUDENT_RENT',
  Rent = 'RENT',
  StudentBrf = 'STUDENT_BRF',
  Brf = 'BRF',
}

export type AppMarketingImage = Node & {
  __typename?: 'AppMarketingImage'
  status: Status
  updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  id: Scalars['ID']
  image?: Maybe<Asset>
  language?: Maybe<Language>
  blurhash?: Maybe<Scalars['String']>
}

/** A connection to a list of items. */
export interface AppMarketingImageConnection {
  __typename?: 'AppMarketingImageConnection'
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges: Array<Maybe<AppMarketingImageEdge>>
  aggregate: AggregateAppMarketingImage
}

export interface AppMarketingImageCreateInput {
  status?: Maybe<Status>
  blurhash?: Maybe<Scalars['String']>
  image?: Maybe<AssetCreateOneWithoutImageAppMarketingImageInput>
  language?: Maybe<LanguageCreateOneWithoutAppMarketingImagesInput>
}

export interface AppMarketingImageCreateManyWithoutImageInput {
  create?: Maybe<AppMarketingImageCreateWithoutImageInput[]>
  connect?: Maybe<AppMarketingImageWhereUniqueInput[]>
}

export interface AppMarketingImageCreateManyWithoutLanguageInput {
  create?: Maybe<AppMarketingImageCreateWithoutLanguageInput[]>
  connect?: Maybe<AppMarketingImageWhereUniqueInput[]>
}

export interface AppMarketingImageCreateWithoutImageInput {
  status?: Maybe<Status>
  blurhash?: Maybe<Scalars['String']>
  language?: Maybe<LanguageCreateOneWithoutAppMarketingImagesInput>
}

export interface AppMarketingImageCreateWithoutLanguageInput {
  status?: Maybe<Status>
  blurhash?: Maybe<Scalars['String']>
  image?: Maybe<AssetCreateOneWithoutImageAppMarketingImageInput>
}

/** An edge in a connection. */
export interface AppMarketingImageEdge {
  __typename?: 'AppMarketingImageEdge'
  /** The item at the end of the edge. */
  node: AppMarketingImage
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

export enum AppMarketingImageOrderByInput {
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  BlurhashAsc = 'blurhash_ASC',
  BlurhashDesc = 'blurhash_DESC',
}

export interface AppMarketingImagePreviousValues {
  __typename?: 'AppMarketingImagePreviousValues'
  status: Status
  updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  id: Scalars['ID']
  blurhash?: Maybe<Scalars['String']>
}

export interface AppMarketingImageScalarWhereInput {
  _search?: Maybe<Scalars['String']>
  /** Logical AND on all given filters. */
  AND?: Maybe<AppMarketingImageScalarWhereInput[]>
  /** Logical OR on all given filters. */
  OR?: Maybe<AppMarketingImageScalarWhereInput[]>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<AppMarketingImageScalarWhereInput[]>
  status?: Maybe<Status>
  /** All values that are not equal to given value. */
  status_not?: Maybe<Status>
  /** All values that are contained in given list. */
  status_in?: Maybe<Status[]>
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Status[]>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>
  blurhash?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  blurhash_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  blurhash_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  blurhash_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  blurhash_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  blurhash_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  blurhash_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  blurhash_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  blurhash_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  blurhash_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  blurhash_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  blurhash_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  blurhash_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  blurhash_not_ends_with?: Maybe<Scalars['String']>
}

export interface AppMarketingImageSubscriptionPayload {
  __typename?: 'AppMarketingImageSubscriptionPayload'
  mutation: MutationType
  node?: Maybe<AppMarketingImage>
  updatedFields?: Maybe<Array<Scalars['String']>>
  previousValues?: Maybe<AppMarketingImagePreviousValues>
}

export interface AppMarketingImageSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<AppMarketingImageSubscriptionWhereInput[]>
  /** Logical OR on all given filters. */
  OR?: Maybe<AppMarketingImageSubscriptionWhereInput[]>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<AppMarketingImageSubscriptionWhereInput[]>
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>
  node?: Maybe<AppMarketingImageWhereInput>
}

export interface AppMarketingImageUpdateInput {
  status?: Maybe<Status>
  blurhash?: Maybe<Scalars['String']>
  image?: Maybe<AssetUpdateOneWithoutImageAppMarketingImageInput>
  language?: Maybe<LanguageUpdateOneWithoutAppMarketingImagesInput>
}

export interface AppMarketingImageUpdateManyDataInput {
  status?: Maybe<Status>
  blurhash?: Maybe<Scalars['String']>
}

export interface AppMarketingImageUpdateManyMutationInput {
  status?: Maybe<Status>
  blurhash?: Maybe<Scalars['String']>
}

export interface AppMarketingImageUpdateManyWithoutImageInput {
  create?: Maybe<AppMarketingImageCreateWithoutImageInput[]>
  connect?: Maybe<AppMarketingImageWhereUniqueInput[]>
  set?: Maybe<AppMarketingImageWhereUniqueInput[]>
  disconnect?: Maybe<AppMarketingImageWhereUniqueInput[]>
  delete?: Maybe<AppMarketingImageWhereUniqueInput[]>
  update?: Maybe<AppMarketingImageUpdateWithWhereUniqueWithoutImageInput[]>
  updateMany?: Maybe<AppMarketingImageUpdateManyWithWhereNestedInput[]>
  deleteMany?: Maybe<AppMarketingImageScalarWhereInput[]>
  upsert?: Maybe<AppMarketingImageUpsertWithWhereUniqueWithoutImageInput[]>
}

export interface AppMarketingImageUpdateManyWithoutLanguageInput {
  create?: Maybe<AppMarketingImageCreateWithoutLanguageInput[]>
  connect?: Maybe<AppMarketingImageWhereUniqueInput[]>
  set?: Maybe<AppMarketingImageWhereUniqueInput[]>
  disconnect?: Maybe<AppMarketingImageWhereUniqueInput[]>
  delete?: Maybe<AppMarketingImageWhereUniqueInput[]>
  update?: Maybe<AppMarketingImageUpdateWithWhereUniqueWithoutLanguageInput[]>
  updateMany?: Maybe<AppMarketingImageUpdateManyWithWhereNestedInput[]>
  deleteMany?: Maybe<AppMarketingImageScalarWhereInput[]>
  upsert?: Maybe<AppMarketingImageUpsertWithWhereUniqueWithoutLanguageInput[]>
}

export interface AppMarketingImageUpdateManyWithWhereNestedInput {
  where: AppMarketingImageScalarWhereInput
  data: AppMarketingImageUpdateManyDataInput
}

export interface AppMarketingImageUpdateWithoutImageDataInput {
  status?: Maybe<Status>
  blurhash?: Maybe<Scalars['String']>
  language?: Maybe<LanguageUpdateOneWithoutAppMarketingImagesInput>
}

export interface AppMarketingImageUpdateWithoutLanguageDataInput {
  status?: Maybe<Status>
  blurhash?: Maybe<Scalars['String']>
  image?: Maybe<AssetUpdateOneWithoutImageAppMarketingImageInput>
}

export interface AppMarketingImageUpdateWithWhereUniqueWithoutImageInput {
  where: AppMarketingImageWhereUniqueInput
  data: AppMarketingImageUpdateWithoutImageDataInput
}

export interface AppMarketingImageUpdateWithWhereUniqueWithoutLanguageInput {
  where: AppMarketingImageWhereUniqueInput
  data: AppMarketingImageUpdateWithoutLanguageDataInput
}

export interface AppMarketingImageUpsertWithWhereUniqueWithoutImageInput {
  where: AppMarketingImageWhereUniqueInput
  update: AppMarketingImageUpdateWithoutImageDataInput
  create: AppMarketingImageCreateWithoutImageInput
}

export interface AppMarketingImageUpsertWithWhereUniqueWithoutLanguageInput {
  where: AppMarketingImageWhereUniqueInput
  update: AppMarketingImageUpdateWithoutLanguageDataInput
  create: AppMarketingImageCreateWithoutLanguageInput
}

export interface AppMarketingImageWhereInput {
  _search?: Maybe<Scalars['String']>
  /** Logical AND on all given filters. */
  AND?: Maybe<AppMarketingImageWhereInput[]>
  /** Logical OR on all given filters. */
  OR?: Maybe<AppMarketingImageWhereInput[]>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<AppMarketingImageWhereInput[]>
  status?: Maybe<Status>
  /** All values that are not equal to given value. */
  status_not?: Maybe<Status>
  /** All values that are contained in given list. */
  status_in?: Maybe<Status[]>
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Status[]>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>
  blurhash?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  blurhash_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  blurhash_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  blurhash_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  blurhash_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  blurhash_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  blurhash_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  blurhash_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  blurhash_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  blurhash_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  blurhash_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  blurhash_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  blurhash_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  blurhash_not_ends_with?: Maybe<Scalars['String']>
  image?: Maybe<AssetWhereInput>
  language?: Maybe<LanguageWhereInput>
}

export interface AppMarketingImageWhereUniqueInput {
  id?: Maybe<Scalars['ID']>
}

export interface ArrangedPerilCategories {
  __typename?: 'ArrangedPerilCategories'
  me?: Maybe<PerilCategory>
  home?: Maybe<PerilCategory>
  stuff?: Maybe<PerilCategory>
}

export type Asset = Node & {
  __typename?: 'Asset'
  status: Status
  updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  id: Scalars['ID']
  handle: Scalars['String']
  fileName: Scalars['String']
  height?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
  mimeType?: Maybe<Scalars['String']>
  assetMarketingStory?: Maybe<MarketingStory[]>
  fileCoreMLModel?: Maybe<CoreMlModel[]>
  imageAppMarketingImage?: Maybe<AppMarketingImage[]>
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String']
}

export interface AssetAssetMarketingStoryArgs {
  where?: Maybe<MarketingStoryWhereInput>
  orderBy?: Maybe<MarketingStoryOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export interface AssetFileCoreMlModelArgs {
  where?: Maybe<CoreMlModelWhereInput>
  orderBy?: Maybe<CoreMlModelOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export interface AssetImageAppMarketingImageArgs {
  where?: Maybe<AppMarketingImageWhereInput>
  orderBy?: Maybe<AppMarketingImageOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export interface AssetUrlArgs {
  transformation?: Maybe<AssetTransformationInput>
}

/** A connection to a list of items. */
export interface AssetConnection {
  __typename?: 'AssetConnection'
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges: Array<Maybe<AssetEdge>>
  aggregate: AggregateAsset
}

export interface AssetCreateInput {
  status?: Maybe<Status>
  handle: Scalars['String']
  fileName: Scalars['String']
  height?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
  mimeType?: Maybe<Scalars['String']>
  assetMarketingStory?: Maybe<MarketingStoryCreateManyWithoutAssetInput>
  fileCoreMLModel?: Maybe<CoreMlModelCreateManyWithoutFileInput>
  imageAppMarketingImage?: Maybe<AppMarketingImageCreateManyWithoutImageInput>
}

export interface AssetCreateOneWithoutAssetMarketingStoryInput {
  upload?: Maybe<AssetUploadWithoutAssetMarketingStoryInput>
  create?: Maybe<AssetCreateWithoutAssetMarketingStoryInput>
  connect?: Maybe<AssetWhereUniqueInput>
}

export interface AssetCreateOneWithoutFileCoreMlModelInput {
  upload?: Maybe<AssetUploadWithoutFileCoreMlModelInput>
  create?: Maybe<AssetCreateWithoutFileCoreMlModelInput>
  connect?: Maybe<AssetWhereUniqueInput>
}

export interface AssetCreateOneWithoutImageAppMarketingImageInput {
  upload?: Maybe<AssetUploadWithoutImageAppMarketingImageInput>
  create?: Maybe<AssetCreateWithoutImageAppMarketingImageInput>
  connect?: Maybe<AssetWhereUniqueInput>
}

export interface AssetCreateWithoutAssetMarketingStoryInput {
  status?: Maybe<Status>
  handle: Scalars['String']
  fileName: Scalars['String']
  height?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
  mimeType?: Maybe<Scalars['String']>
  fileCoreMLModel?: Maybe<CoreMlModelCreateManyWithoutFileInput>
  imageAppMarketingImage?: Maybe<AppMarketingImageCreateManyWithoutImageInput>
}

export interface AssetCreateWithoutFileCoreMlModelInput {
  status?: Maybe<Status>
  handle: Scalars['String']
  fileName: Scalars['String']
  height?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
  mimeType?: Maybe<Scalars['String']>
  assetMarketingStory?: Maybe<MarketingStoryCreateManyWithoutAssetInput>
  imageAppMarketingImage?: Maybe<AppMarketingImageCreateManyWithoutImageInput>
}

export interface AssetCreateWithoutImageAppMarketingImageInput {
  status?: Maybe<Status>
  handle: Scalars['String']
  fileName: Scalars['String']
  height?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
  mimeType?: Maybe<Scalars['String']>
  assetMarketingStory?: Maybe<MarketingStoryCreateManyWithoutAssetInput>
  fileCoreMLModel?: Maybe<CoreMlModelCreateManyWithoutFileInput>
}

/** An edge in a connection. */
export interface AssetEdge {
  __typename?: 'AssetEdge'
  /** The item at the end of the edge. */
  node: Asset
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

export enum AssetOrderByInput {
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
}

export interface AssetPreviousValues {
  __typename?: 'AssetPreviousValues'
  status: Status
  updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  id: Scalars['ID']
  handle: Scalars['String']
  fileName: Scalars['String']
  height?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
  mimeType?: Maybe<Scalars['String']>
}

export interface AssetSubscriptionPayload {
  __typename?: 'AssetSubscriptionPayload'
  mutation: MutationType
  node?: Maybe<Asset>
  updatedFields?: Maybe<Array<Scalars['String']>>
  previousValues?: Maybe<AssetPreviousValues>
}

export interface AssetSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<AssetSubscriptionWhereInput[]>
  /** Logical OR on all given filters. */
  OR?: Maybe<AssetSubscriptionWhereInput[]>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<AssetSubscriptionWhereInput[]>
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>
  node?: Maybe<AssetWhereInput>
}

/** Transformations for Assets */
export interface AssetTransformationInput {
  image?: Maybe<ImageTransformationInput>
  document?: Maybe<DocumentTransformationInput>
  /** Pass `true` if you want to validate the passed transformation parameters */
  validateOptions?: Maybe<Scalars['Boolean']>
}

export interface AssetUpdateInput {
  status?: Maybe<Status>
  handle?: Maybe<Scalars['String']>
  fileName?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
  mimeType?: Maybe<Scalars['String']>
  assetMarketingStory?: Maybe<MarketingStoryUpdateManyWithoutAssetInput>
  fileCoreMLModel?: Maybe<CoreMlModelUpdateManyWithoutFileInput>
  imageAppMarketingImage?: Maybe<AppMarketingImageUpdateManyWithoutImageInput>
}

export interface AssetUpdateManyMutationInput {
  status?: Maybe<Status>
  handle?: Maybe<Scalars['String']>
  fileName?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
  mimeType?: Maybe<Scalars['String']>
}

export interface AssetUpdateOneWithoutAssetMarketingStoryInput {
  create?: Maybe<AssetCreateWithoutAssetMarketingStoryInput>
  connect?: Maybe<AssetWhereUniqueInput>
  disconnect?: Maybe<Scalars['Boolean']>
  delete?: Maybe<Scalars['Boolean']>
  update?: Maybe<AssetUpdateWithoutAssetMarketingStoryDataInput>
  upsert?: Maybe<AssetUpsertWithoutAssetMarketingStoryInput>
}

export interface AssetUpdateOneWithoutFileCoreMlModelInput {
  create?: Maybe<AssetCreateWithoutFileCoreMlModelInput>
  connect?: Maybe<AssetWhereUniqueInput>
  disconnect?: Maybe<Scalars['Boolean']>
  delete?: Maybe<Scalars['Boolean']>
  update?: Maybe<AssetUpdateWithoutFileCoreMlModelDataInput>
  upsert?: Maybe<AssetUpsertWithoutFileCoreMlModelInput>
}

export interface AssetUpdateOneWithoutImageAppMarketingImageInput {
  create?: Maybe<AssetCreateWithoutImageAppMarketingImageInput>
  connect?: Maybe<AssetWhereUniqueInput>
  disconnect?: Maybe<Scalars['Boolean']>
  delete?: Maybe<Scalars['Boolean']>
  update?: Maybe<AssetUpdateWithoutImageAppMarketingImageDataInput>
  upsert?: Maybe<AssetUpsertWithoutImageAppMarketingImageInput>
}

export interface AssetUpdateWithoutAssetMarketingStoryDataInput {
  status?: Maybe<Status>
  handle?: Maybe<Scalars['String']>
  fileName?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
  mimeType?: Maybe<Scalars['String']>
  fileCoreMLModel?: Maybe<CoreMlModelUpdateManyWithoutFileInput>
  imageAppMarketingImage?: Maybe<AppMarketingImageUpdateManyWithoutImageInput>
}

export interface AssetUpdateWithoutFileCoreMlModelDataInput {
  status?: Maybe<Status>
  handle?: Maybe<Scalars['String']>
  fileName?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
  mimeType?: Maybe<Scalars['String']>
  assetMarketingStory?: Maybe<MarketingStoryUpdateManyWithoutAssetInput>
  imageAppMarketingImage?: Maybe<AppMarketingImageUpdateManyWithoutImageInput>
}

export interface AssetUpdateWithoutImageAppMarketingImageDataInput {
  status?: Maybe<Status>
  handle?: Maybe<Scalars['String']>
  fileName?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
  mimeType?: Maybe<Scalars['String']>
  assetMarketingStory?: Maybe<MarketingStoryUpdateManyWithoutAssetInput>
  fileCoreMLModel?: Maybe<CoreMlModelUpdateManyWithoutFileInput>
}

export interface AssetUploadInput {
  url: Scalars['String']
  status?: Maybe<Status>
  assetMarketingStory?: Maybe<MarketingStoryCreateManyWithoutAssetInput>
  fileCoreMLModel?: Maybe<CoreMlModelCreateManyWithoutFileInput>
  imageAppMarketingImage?: Maybe<AppMarketingImageCreateManyWithoutImageInput>
}

export interface AssetUploadWithoutAssetMarketingStoryInput {
  url: Scalars['String']
  status?: Maybe<Status>
  fileCoreMLModel?: Maybe<CoreMlModelCreateManyWithoutFileInput>
  imageAppMarketingImage?: Maybe<AppMarketingImageCreateManyWithoutImageInput>
}

export interface AssetUploadWithoutFileCoreMlModelInput {
  url: Scalars['String']
  status?: Maybe<Status>
  assetMarketingStory?: Maybe<MarketingStoryCreateManyWithoutAssetInput>
  imageAppMarketingImage?: Maybe<AppMarketingImageCreateManyWithoutImageInput>
}

export interface AssetUploadWithoutImageAppMarketingImageInput {
  url: Scalars['String']
  status?: Maybe<Status>
  assetMarketingStory?: Maybe<MarketingStoryCreateManyWithoutAssetInput>
  fileCoreMLModel?: Maybe<CoreMlModelCreateManyWithoutFileInput>
}

export interface AssetUpsertWithoutAssetMarketingStoryInput {
  update: AssetUpdateWithoutAssetMarketingStoryDataInput
  create: AssetCreateWithoutAssetMarketingStoryInput
}

export interface AssetUpsertWithoutFileCoreMlModelInput {
  update: AssetUpdateWithoutFileCoreMlModelDataInput
  create: AssetCreateWithoutFileCoreMlModelInput
}

export interface AssetUpsertWithoutImageAppMarketingImageInput {
  update: AssetUpdateWithoutImageAppMarketingImageDataInput
  create: AssetCreateWithoutImageAppMarketingImageInput
}

export interface AssetWhereInput {
  _search?: Maybe<Scalars['String']>
  /** Logical AND on all given filters. */
  AND?: Maybe<AssetWhereInput[]>
  /** Logical OR on all given filters. */
  OR?: Maybe<AssetWhereInput[]>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<AssetWhereInput[]>
  status?: Maybe<Status>
  /** All values that are not equal to given value. */
  status_not?: Maybe<Status>
  /** All values that are contained in given list. */
  status_in?: Maybe<Status[]>
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Status[]>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>
  handle?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  handle_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  handle_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  handle_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  handle_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  handle_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  handle_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  handle_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  handle_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  handle_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  handle_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  handle_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  handle_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  handle_not_ends_with?: Maybe<Scalars['String']>
  fileName?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  fileName_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  fileName_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  fileName_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  fileName_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  fileName_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  fileName_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  fileName_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  fileName_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  fileName_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  fileName_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  fileName_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  fileName_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  fileName_not_ends_with?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['Float']>
  /** All values that are not equal to given value. */
  height_not?: Maybe<Scalars['Float']>
  /** All values that are contained in given list. */
  height_in?: Maybe<Array<Scalars['Float']>>
  /** All values that are not contained in given list. */
  height_not_in?: Maybe<Array<Scalars['Float']>>
  /** All values less than the given value. */
  height_lt?: Maybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  height_lte?: Maybe<Scalars['Float']>
  /** All values greater than the given value. */
  height_gt?: Maybe<Scalars['Float']>
  /** All values greater than or equal the given value. */
  height_gte?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
  /** All values that are not equal to given value. */
  width_not?: Maybe<Scalars['Float']>
  /** All values that are contained in given list. */
  width_in?: Maybe<Array<Scalars['Float']>>
  /** All values that are not contained in given list. */
  width_not_in?: Maybe<Array<Scalars['Float']>>
  /** All values less than the given value. */
  width_lt?: Maybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  width_lte?: Maybe<Scalars['Float']>
  /** All values greater than the given value. */
  width_gt?: Maybe<Scalars['Float']>
  /** All values greater than or equal the given value. */
  width_gte?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
  /** All values that are not equal to given value. */
  size_not?: Maybe<Scalars['Float']>
  /** All values that are contained in given list. */
  size_in?: Maybe<Array<Scalars['Float']>>
  /** All values that are not contained in given list. */
  size_not_in?: Maybe<Array<Scalars['Float']>>
  /** All values less than the given value. */
  size_lt?: Maybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  size_lte?: Maybe<Scalars['Float']>
  /** All values greater than the given value. */
  size_gt?: Maybe<Scalars['Float']>
  /** All values greater than or equal the given value. */
  size_gte?: Maybe<Scalars['Float']>
  mimeType?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  mimeType_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  mimeType_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  mimeType_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  mimeType_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  mimeType_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  mimeType_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  mimeType_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  mimeType_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  mimeType_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  mimeType_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  mimeType_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  mimeType_not_ends_with?: Maybe<Scalars['String']>
  assetMarketingStory_every?: Maybe<MarketingStoryWhereInput>
  assetMarketingStory_some?: Maybe<MarketingStoryWhereInput>
  assetMarketingStory_none?: Maybe<MarketingStoryWhereInput>
  fileCoreMLModel_every?: Maybe<CoreMlModelWhereInput>
  fileCoreMLModel_some?: Maybe<CoreMlModelWhereInput>
  fileCoreMLModel_none?: Maybe<CoreMlModelWhereInput>
  imageAppMarketingImage_every?: Maybe<AppMarketingImageWhereInput>
  imageAppMarketingImage_some?: Maybe<AppMarketingImageWhereInput>
  imageAppMarketingImage_none?: Maybe<AppMarketingImageWhereInput>
}

export interface AssetWhereUniqueInput {
  id?: Maybe<Scalars['ID']>
  handle?: Maybe<Scalars['String']>
}

export interface AuthEvent {
  __typename?: 'AuthEvent'
  status?: Maybe<AuthState>
}

export enum AuthState {
  Initiated = 'INITIATED',
  InProgress = 'IN_PROGRESS',
  Failed = 'FAILED',
  Success = 'SUCCESS',
}

export interface AvailablePaymentMethodsResponse {
  __typename?: 'AvailablePaymentMethodsResponse'
  paymentMethodsResponse: Scalars['PaymentMethodsResponse']
}

export interface Avatar {
  __typename?: 'Avatar'
  name: Scalars['String']
  URL: Scalars['String']
  width: Scalars['Int']
  height: Scalars['Int']
  duration: Scalars['Int']
  data?: Maybe<Scalars['Object']>
}

export interface Balance {
  __typename?: 'Balance'
  currentBalance: MonetaryAmountV2
  failedCharges?: Maybe<Scalars['Int']>
}

export interface BankAccount {
  __typename?: 'BankAccount'
  bankName: Scalars['String']
  descriptor: Scalars['String']
  directDebitStatus?: Maybe<DirectDebitStatus>
}

export interface BankIdAuthResponse {
  __typename?: 'BankIdAuthResponse'
  autoStartToken: Scalars['String']
}

export interface BankIdSignResponse {
  __typename?: 'BankIdSignResponse'
  autoStartToken?: Maybe<Scalars['String']>
  redirectUrl?: Maybe<Scalars['String']>
}

export enum BankIdStatus {
  Pending = 'pending',
  Failed = 'failed',
  Complete = 'complete',
}

export interface BatchPayload {
  __typename?: 'BatchPayload'
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long']
}

export interface BrowserInfo {
  userAgent: Scalars['String']
  acceptHeader: Scalars['String']
  language: Scalars['String']
  colorDepth: Scalars['Int']
  screenHeight: Scalars['Int']
  screenWidth: Scalars['Int']
  timeZoneOffset: Scalars['Int']
  javaEnabled: Scalars['Boolean']
}

export interface BulletPoints {
  __typename?: 'BulletPoints'
  icon: Icon
  title: Scalars['String']
  description: Scalars['String']
}

export interface BundledQuote {
  __typename?: 'BundledQuote'
  id: Scalars['ID']
  currentInsurer?: Maybe<CurrentInsurer>
  price: MonetaryAmountV2
  firstName: Scalars['String']
  lastName: Scalars['String']
  ssn?: Maybe<Scalars['String']>
  birthDate: Scalars['LocalDate']
  quoteDetails: QuoteDetails
  startDate?: Maybe<Scalars['LocalDate']>
  expiresAt: Scalars['LocalDate']
  email?: Maybe<Scalars['String']>
  dataCollectionId?: Maybe<Scalars['ID']>
  typeOfContract: TypeOfContract
  perils: PerilV2[]
  insurableLimits: InsurableLimit[]
  termsAndConditions: InsuranceTerm
  insuranceTerms: InsuranceTerm[]
}

export interface BundledQuotePerilsArgs {
  locale: Locale
}

export interface BundledQuoteInsurableLimitsArgs {
  locale: Locale
}

export interface BundledQuoteTermsAndConditionsArgs {
  locale: Locale
}

export interface BundledQuoteInsuranceTermsArgs {
  locale: Locale
}

export interface Campaign {
  __typename?: 'Campaign'
  incentive?: Maybe<Incentive>
  code: Scalars['String']
  /** Will be null if campaign is of type referralCampaign */
  owner?: Maybe<CampaignOwner>
}

export interface CampaignCannotBeCombinedWithExisting {
  __typename?: 'CampaignCannotBeCombinedWithExisting'
  existingCampaigns: Campaign[]
}

export interface CampaignDoesNotExist {
  __typename?: 'CampaignDoesNotExist'
  code: Scalars['String']
}

export interface CampaignHasExpired {
  __typename?: 'CampaignHasExpired'
  code: Scalars['String']
}

export interface CampaignInput {
  source?: Maybe<Scalars['String']>
  medium?: Maybe<Scalars['String']>
  term?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

export enum CampaignMarket {
  Se = 'SE',
  No = 'NO',
}

export interface CampaignOwner {
  __typename?: 'CampaignOwner'
  id: Scalars['ID']
  displayName: Scalars['String']
}

export enum CancelDirectDebitStatus {
  Accepted = 'ACCEPTED',
  DeclinedMissingToken = 'DECLINED_MISSING_TOKEN',
  DeclinedMissingRequest = 'DECLINED_MISSING_REQUEST',
}

export interface CannotRedeemCampaignFromDifferentMarket {
  __typename?: 'CannotRedeemCampaignFromDifferentMarket'
  code: Scalars['String']
  campaignMarket: CampaignMarket
}

export interface CannotRedeemEmptyCode {
  __typename?: 'CannotRedeemEmptyCode'
  code: Scalars['String']
}

export interface CannotRedeemOwnCampaign {
  __typename?: 'CannotRedeemOwnCampaign'
  code: Scalars['String']
}

export interface CannotRemoveActiveCampaignCode {
  __typename?: 'CannotRemoveActiveCampaignCode'
  activeCampaignCodes: Array<Scalars['String']>
}

export interface Cashback {
  __typename?: 'Cashback'
  id?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
  imageUrl?: Maybe<Scalars['String']>
  selectedUrl?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  paragraph?: Maybe<Scalars['String']>
}

export interface Charge {
  __typename?: 'Charge'
  amount: MonetaryAmountV2
  date: Scalars['LocalDate']
}

export interface ChargeEstimation {
  __typename?: 'ChargeEstimation'
  charge: MonetaryAmountV2
  discount: MonetaryAmountV2
  subscription: MonetaryAmountV2
}

export interface ChatAction {
  __typename?: 'ChatAction'
  text?: Maybe<Scalars['String']>
  triggerUrl?: Maybe<Scalars['URL']>
  enabled?: Maybe<Scalars['Boolean']>
}

export interface ChatResponse {
  __typename?: 'ChatResponse'
  globalId: Scalars['ID']
  id: Scalars['ID']
  body: MessageBody
  header: MessageHeader
}

export interface ChatResponseAudioInput {
  globalId: Scalars['ID']
  file: Scalars['Upload']
}

export interface ChatResponseBodyAudioInput {
  url: Scalars['String']
}

export interface ChatResponseBodyFileInput {
  key: Scalars['String']
  mimeType: Scalars['String']
}

export interface ChatResponseBodySingleSelectInput {
  selectedValue: Scalars['ID']
}

export interface ChatResponseBodyTextInput {
  text: Scalars['String']
}

export interface ChatResponseFileInput {
  globalId: Scalars['ID']
  body: ChatResponseBodyFileInput
}

export interface ChatResponseSingleSelectInput {
  globalId: Scalars['ID']
  body: ChatResponseBodySingleSelectInput
}

export interface ChatResponseTextInput {
  globalId: Scalars['ID']
  body: ChatResponseBodyTextInput
}

export interface ChatState {
  __typename?: 'ChatState'
  ongoingClaim: Scalars['Boolean']
  showOfferScreen: Scalars['Boolean']
  onboardingDone: Scalars['Boolean']
}

export interface CodeAlreadyTaken {
  __typename?: 'CodeAlreadyTaken'
  code: Scalars['String']
}

export interface CodeTooLong {
  __typename?: 'CodeTooLong'
  maxCharacters: Scalars['Int']
}

export interface CodeTooShort {
  __typename?: 'CodeTooShort'
  minCharacters: Scalars['Int']
}

export interface CollectStatus {
  __typename?: 'CollectStatus'
  status?: Maybe<BankIdStatus>
  code?: Maybe<Scalars['String']>
}

export interface CommonClaim {
  __typename?: 'CommonClaim'
  icon: Icon
  title: Scalars['String']
  layout: CommonClaimLayouts
}

export type CommonClaimLayouts = TitleAndBulletPoints | Emergency

export interface CompleteApartmentQuoteDetails {
  __typename?: 'CompleteApartmentQuoteDetails'
  street: Scalars['String']
  zipCode: Scalars['String']
  householdSize: Scalars['Int']
  livingSpace: Scalars['Int']
  type: ApartmentType
}

export interface CompleteHouseQuoteDetails {
  __typename?: 'CompleteHouseQuoteDetails'
  street: Scalars['String']
  zipCode: Scalars['String']
  householdSize: Scalars['Int']
  livingSpace: Scalars['Int']
  ancillarySpace: Scalars['Int']
  extraBuildings: ExtraBuilding[]
  numberOfBathrooms: Scalars['Int']
  yearOfConstruction: Scalars['Int']
  isSubleted: Scalars['Boolean']
}

export interface CompleteQuote {
  __typename?: 'CompleteQuote'
  id: Scalars['ID']
  currentInsurer?: Maybe<CurrentInsurer>
  /** @deprecated Use insuranceCost */
  price: MonetaryAmountV2
  insuranceCost: InsuranceCost
  firstName: Scalars['String']
  lastName: Scalars['String']
  ssn?: Maybe<Scalars['String']>
  birthDate: Scalars['LocalDate']
  /** @deprecated Use quoteDetails */
  details: CompleteQuoteDetails
  quoteDetails: QuoteDetails
  startDate?: Maybe<Scalars['LocalDate']>
  expiresAt: Scalars['LocalDate']
  email?: Maybe<Scalars['String']>
  dataCollectionId?: Maybe<Scalars['ID']>
  typeOfContract: TypeOfContract
  perils: PerilV2[]
  insurableLimits: InsurableLimit[]
  termsAndConditions: InsuranceTerm
  insuranceTerms: InsuranceTerm[]
}

export interface CompleteQuotePerilsArgs {
  locale: Locale
}

export interface CompleteQuoteInsurableLimitsArgs {
  locale: Locale
}

export interface CompleteQuoteTermsAndConditionsArgs {
  locale: Locale
}

export interface CompleteQuoteInsuranceTermsArgs {
  locale: Locale
}

export type CompleteQuoteDetails =
  | CompleteApartmentQuoteDetails
  | CompleteHouseQuoteDetails
  | UnknownQuoteDetails

export interface Contract {
  __typename?: 'Contract'
  id: Scalars['ID']
  holderMember: Scalars['ID']
  typeOfContract: TypeOfContract
  switchedFromInsuranceProvider?: Maybe<Scalars['String']>
  status: ContractStatus
  displayName: Scalars['String']
  /**
   * "The 'best guess' of the agreement that depicts the member's insurance, either
   * the pending, future, current or, if terminated, past agreement
   */
  currentAgreement: Agreement
  /** The date the contract agreement timeline begin, if it has been activated */
  inception?: Maybe<Scalars['LocalDate']>
  /** The date the contract agreement timelinen end, on if it has been terminated */
  termination?: Maybe<Scalars['LocalDate']>
  /** An upcoming renewal, present if the member has been notified and the renewal is within 31 days */
  upcomingRenewal?: Maybe<UpcomingRenewal>
  createdAt: Scalars['Instant']
  perils: PerilV2[]
  insurableLimits: InsurableLimit[]
  termsAndConditions: InsuranceTerm
  insuranceTerms: InsuranceTerm[]
}

export interface ContractPerilsArgs {
  locale: Locale
}

export interface ContractInsurableLimitsArgs {
  locale: Locale
}

export interface ContractTermsAndConditionsArgs {
  locale: Locale
}

export interface ContractInsuranceTermsArgs {
  locale: Locale
}

export type ContractStatus =
  | PendingStatus
  | ActiveInFutureStatus
  | ActiveStatus
  | ActiveInFutureAndTerminatedInFutureStatus
  | TerminatedInFutureStatus
  | TerminatedTodayStatus
  | TerminatedStatus

export type CoreMlModel = Node & {
  __typename?: 'CoreMLModel'
  status: Status
  updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  id: Scalars['ID']
  type?: Maybe<CoreMlModelType>
  file?: Maybe<Asset>
}

/** A connection to a list of items. */
export interface CoreMlModelConnection {
  __typename?: 'CoreMLModelConnection'
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges: Array<Maybe<CoreMlModelEdge>>
  aggregate: AggregateCoreMlModel
}

export interface CoreMlModelCreateInput {
  status?: Maybe<Status>
  type?: Maybe<CoreMlModelType>
  file?: Maybe<AssetCreateOneWithoutFileCoreMlModelInput>
}

export interface CoreMlModelCreateManyWithoutFileInput {
  create?: Maybe<CoreMlModelCreateWithoutFileInput[]>
  connect?: Maybe<CoreMlModelWhereUniqueInput[]>
}

export interface CoreMlModelCreateWithoutFileInput {
  status?: Maybe<Status>
  type?: Maybe<CoreMlModelType>
}

/** An edge in a connection. */
export interface CoreMlModelEdge {
  __typename?: 'CoreMLModelEdge'
  /** The item at the end of the edge. */
  node: CoreMlModel
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

export enum CoreMlModelOrderByInput {
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
}

export interface CoreMlModelPreviousValues {
  __typename?: 'CoreMLModelPreviousValues'
  status: Status
  updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  id: Scalars['ID']
  type?: Maybe<CoreMlModelType>
}

export interface CoreMlModelScalarWhereInput {
  _search?: Maybe<Scalars['String']>
  /** Logical AND on all given filters. */
  AND?: Maybe<CoreMlModelScalarWhereInput[]>
  /** Logical OR on all given filters. */
  OR?: Maybe<CoreMlModelScalarWhereInput[]>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<CoreMlModelScalarWhereInput[]>
  status?: Maybe<Status>
  /** All values that are not equal to given value. */
  status_not?: Maybe<Status>
  /** All values that are contained in given list. */
  status_in?: Maybe<Status[]>
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Status[]>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>
  type?: Maybe<CoreMlModelType>
  /** All values that are not equal to given value. */
  type_not?: Maybe<CoreMlModelType>
  /** All values that are contained in given list. */
  type_in?: Maybe<CoreMlModelType[]>
  /** All values that are not contained in given list. */
  type_not_in?: Maybe<CoreMlModelType[]>
}

export interface CoreMlModelSubscriptionPayload {
  __typename?: 'CoreMLModelSubscriptionPayload'
  mutation: MutationType
  node?: Maybe<CoreMlModel>
  updatedFields?: Maybe<Array<Scalars['String']>>
  previousValues?: Maybe<CoreMlModelPreviousValues>
}

export interface CoreMlModelSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<CoreMlModelSubscriptionWhereInput[]>
  /** Logical OR on all given filters. */
  OR?: Maybe<CoreMlModelSubscriptionWhereInput[]>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<CoreMlModelSubscriptionWhereInput[]>
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>
  node?: Maybe<CoreMlModelWhereInput>
}

export enum CoreMlModelType {
  KeyGearClassifier = 'KeyGearClassifier',
}

export interface CoreMlModelUpdateInput {
  status?: Maybe<Status>
  type?: Maybe<CoreMlModelType>
  file?: Maybe<AssetUpdateOneWithoutFileCoreMlModelInput>
}

export interface CoreMlModelUpdateManyDataInput {
  status?: Maybe<Status>
  type?: Maybe<CoreMlModelType>
}

export interface CoreMlModelUpdateManyMutationInput {
  status?: Maybe<Status>
  type?: Maybe<CoreMlModelType>
}

export interface CoreMlModelUpdateManyWithoutFileInput {
  create?: Maybe<CoreMlModelCreateWithoutFileInput[]>
  connect?: Maybe<CoreMlModelWhereUniqueInput[]>
  set?: Maybe<CoreMlModelWhereUniqueInput[]>
  disconnect?: Maybe<CoreMlModelWhereUniqueInput[]>
  delete?: Maybe<CoreMlModelWhereUniqueInput[]>
  update?: Maybe<CoreMlModelUpdateWithWhereUniqueWithoutFileInput[]>
  updateMany?: Maybe<CoreMlModelUpdateManyWithWhereNestedInput[]>
  deleteMany?: Maybe<CoreMlModelScalarWhereInput[]>
  upsert?: Maybe<CoreMlModelUpsertWithWhereUniqueWithoutFileInput[]>
}

export interface CoreMlModelUpdateManyWithWhereNestedInput {
  where: CoreMlModelScalarWhereInput
  data: CoreMlModelUpdateManyDataInput
}

export interface CoreMlModelUpdateWithoutFileDataInput {
  status?: Maybe<Status>
  type?: Maybe<CoreMlModelType>
}

export interface CoreMlModelUpdateWithWhereUniqueWithoutFileInput {
  where: CoreMlModelWhereUniqueInput
  data: CoreMlModelUpdateWithoutFileDataInput
}

export interface CoreMlModelUpsertWithWhereUniqueWithoutFileInput {
  where: CoreMlModelWhereUniqueInput
  update: CoreMlModelUpdateWithoutFileDataInput
  create: CoreMlModelCreateWithoutFileInput
}

export interface CoreMlModelWhereInput {
  _search?: Maybe<Scalars['String']>
  /** Logical AND on all given filters. */
  AND?: Maybe<CoreMlModelWhereInput[]>
  /** Logical OR on all given filters. */
  OR?: Maybe<CoreMlModelWhereInput[]>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<CoreMlModelWhereInput[]>
  status?: Maybe<Status>
  /** All values that are not equal to given value. */
  status_not?: Maybe<Status>
  /** All values that are contained in given list. */
  status_in?: Maybe<Status[]>
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Status[]>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>
  type?: Maybe<CoreMlModelType>
  /** All values that are not equal to given value. */
  type_not?: Maybe<CoreMlModelType>
  /** All values that are contained in given list. */
  type_in?: Maybe<CoreMlModelType[]>
  /** All values that are not contained in given list. */
  type_not_in?: Maybe<CoreMlModelType[]>
  file?: Maybe<AssetWhereInput>
}

export interface CoreMlModelWhereUniqueInput {
  id?: Maybe<Scalars['ID']>
}

export interface CreateApartmentInput {
  street: Scalars['String']
  zipCode: Scalars['String']
  householdSize: Scalars['Int']
  livingSpace: Scalars['Int']
  type: ApartmentType
}

export interface CreateHouseInput {
  street: Scalars['String']
  zipCode: Scalars['String']
  householdSize: Scalars['Int']
  livingSpace: Scalars['Int']
  ancillarySpace: Scalars['Int']
  yearOfConstruction: Scalars['Int']
  numberOfBathrooms: Scalars['Int']
  isSubleted: Scalars['Boolean']
  extraBuildings: ExtraBuildingInput[]
}

export interface CreateKeyGearItemInput {
  photos: S3FileInput[]
  category: KeyGearItemCategory
  purchasePrice?: Maybe<MonetaryAmountV2Input>
  physicalReferenceHash?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

export interface CreateNorwegianHomeContentsInput {
  street: Scalars['String']
  zipCode: Scalars['String']
  coInsured: Scalars['Int']
  livingSpace: Scalars['Int']
  isYouth: Scalars['Boolean']
  type: NorwegianHomeContentsType
}

export interface CreateNorwegianTravelInput {
  coInsured: Scalars['Int']
  isYouth: Scalars['Boolean']
}

export interface CreateQuoteInput {
  id: Scalars['ID']
  firstName: Scalars['String']
  lastName: Scalars['String']
  currentInsurer?: Maybe<Scalars['String']>
  ssn?: Maybe<Scalars['String']>
  birthDate?: Maybe<Scalars['LocalDate']>
  startDate?: Maybe<Scalars['LocalDate']>
  apartment?: Maybe<CreateApartmentInput>
  house?: Maybe<CreateHouseInput>
  swedishApartment?: Maybe<CreateSwedishApartmentInput>
  swedishHouse?: Maybe<CreateSwedishHouseInput>
  norwegianHomeContents?: Maybe<CreateNorwegianHomeContentsInput>
  norwegianTravel?: Maybe<CreateNorwegianTravelInput>
  email?: Maybe<Scalars['String']>
  dataCollectionId?: Maybe<Scalars['ID']>
}

export type CreateQuoteResult = CompleteQuote | UnderwritingLimitsHit

export interface CreateSwedishApartmentInput {
  street: Scalars['String']
  zipCode: Scalars['String']
  householdSize: Scalars['Int']
  livingSpace: Scalars['Int']
  type: ApartmentType
}

export interface CreateSwedishHouseInput {
  street: Scalars['String']
  zipCode: Scalars['String']
  householdSize: Scalars['Int']
  livingSpace: Scalars['Int']
  ancillarySpace: Scalars['Int']
  yearOfConstruction: Scalars['Int']
  numberOfBathrooms: Scalars['Int']
  isSubleted: Scalars['Boolean']
  extraBuildings: ExtraBuildingInput[]
}

export interface CurrentInsurer {
  __typename?: 'CurrentInsurer'
  id?: Maybe<Scalars['String']>
  displayName?: Maybe<Scalars['String']>
  switchable?: Maybe<Scalars['Boolean']>
}

export interface DataCollectingStatusResponse {
  __typename?: 'DataCollectingStatusResponse'
  status: DataCollectionStatus
  imageValue?: Maybe<Scalars['String']>
  token?: Maybe<Scalars['String']>
}

export enum DataCollectionStatus {
  Running = 'RUNNING',
  Login = 'LOGIN',
  Collecting = 'COLLECTING',
  CompletedPartial = 'COMPLETED_PARTIAL',
  Completed = 'COMPLETED',
  CompletedEmpty = 'COMPLETED_EMPTY',
  Failed = 'FAILED',
}

export interface DirectDebitResponse {
  __typename?: 'DirectDebitResponse'
  url: Scalars['String']
  orderId: Scalars['String']
}

export enum DirectDebitStatus {
  Active = 'ACTIVE',
  Pending = 'PENDING',
  NeedsSetup = 'NEEDS_SETUP',
}

export enum DocumentFileTypes {
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Png = 'png',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Docx = 'docx',
  Html = 'html',
  Pdf = 'pdf',
  Doc = 'doc',
  Xlsx = 'xlsx',
  Xls = 'xls',
  Pptx = 'pptx',
  Ppt = 'ppt',
}

export interface DocumentOutputInput {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: Maybe<DocumentFileTypes>
}

/** Transformations for Documents */
export interface DocumentTransformationInput {
  /** Changes the output for the file. */
  output?: Maybe<DocumentOutputInput>
}

export interface EditApartmentInput {
  street?: Maybe<Scalars['String']>
  zipCode?: Maybe<Scalars['String']>
  householdSize?: Maybe<Scalars['Int']>
  livingSpace?: Maybe<Scalars['Int']>
  type?: Maybe<ApartmentType>
}

export interface EditHouseInput {
  street?: Maybe<Scalars['String']>
  zipCode?: Maybe<Scalars['String']>
  householdSize?: Maybe<Scalars['Int']>
  livingSpace?: Maybe<Scalars['Int']>
  ancillarySpace?: Maybe<Scalars['Int']>
  yearOfConstruction?: Maybe<Scalars['Int']>
  numberOfBathrooms?: Maybe<Scalars['Int']>
  isSubleted?: Maybe<Scalars['Boolean']>
  extraBuildings?: Maybe<ExtraBuildingInput[]>
}

export interface EditNorwegianHomeContentsInput {
  street?: Maybe<Scalars['String']>
  zipCode?: Maybe<Scalars['String']>
  coInsured?: Maybe<Scalars['Int']>
  livingSpace?: Maybe<Scalars['Int']>
  isYouth?: Maybe<Scalars['Boolean']>
  type?: Maybe<NorwegianHomeContentsType>
}

export interface EditNorwegianTravelInput {
  coInsured?: Maybe<Scalars['Int']>
  isYouth?: Maybe<Scalars['Boolean']>
}

export interface EditQuoteInput {
  id: Scalars['ID']
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  currentInsurer?: Maybe<Scalars['String']>
  ssn?: Maybe<Scalars['String']>
  birthDate?: Maybe<Scalars['LocalDate']>
  startDate?: Maybe<Scalars['LocalDate']>
  apartment?: Maybe<EditApartmentInput>
  swedishApartment?: Maybe<EditSwedishApartmentInput>
  house?: Maybe<EditHouseInput>
  swedishHouse?: Maybe<EditSwedishHouseInput>
  norwegianHomeContents?: Maybe<EditNorwegianHomeContentsInput>
  norwegianTravel?: Maybe<EditNorwegianTravelInput>
  email?: Maybe<Scalars['String']>
}

export interface EditSwedishApartmentInput {
  street?: Maybe<Scalars['String']>
  zipCode?: Maybe<Scalars['String']>
  householdSize?: Maybe<Scalars['Int']>
  livingSpace?: Maybe<Scalars['Int']>
  type?: Maybe<ApartmentType>
}

export interface EditSwedishHouseInput {
  street?: Maybe<Scalars['String']>
  zipCode?: Maybe<Scalars['String']>
  householdSize?: Maybe<Scalars['Int']>
  livingSpace?: Maybe<Scalars['Int']>
  ancillarySpace?: Maybe<Scalars['Int']>
  yearOfConstruction?: Maybe<Scalars['Int']>
  numberOfBathrooms?: Maybe<Scalars['Int']>
  isSubleted?: Maybe<Scalars['Boolean']>
  extraBuildings?: Maybe<ExtraBuildingInput[]>
}

export type EmbarkAction =
  | EmbarkExternalInsuranceProviderAction
  | EmbarkPreviousInsuranceProviderAction
  | EmbarkNumberActionSet
  | EmbarkTextActionSet
  | EmbarkTextAction
  | EmbarkSelectAction
  | EmbarkNumberAction
  | EmbarkMultiAction

export interface EmbarkActionCore {
  component: Scalars['String']
}

export type EmbarkApi =
  | EmbarkApiPersonalInformation
  | EmbarkApiHouseInformation
  | EmbarkApiCreateQuote
  | EmbarkApiGraphQlQuery
  | EmbarkApiGraphQlMutation

export interface EmbarkApiCore {
  component: Scalars['String']
}

export type EmbarkApiCreateQuote = EmbarkApiCore & {
  __typename?: 'EmbarkApiCreateQuote'
  component: Scalars['String']
  data: EmbarkApiCreateQuoteData
}

export interface EmbarkApiCreateQuoteData {
  __typename?: 'EmbarkApiCreateQuoteData'
  uwlimits: EmbarkLink
  success: EmbarkLink
  error: EmbarkLink
}

export interface EmbarkApiGraphQlError {
  __typename?: 'EmbarkAPIGraphQLError'
  contains?: Maybe<Scalars['String']>
  next: EmbarkLink
}

export interface EmbarkApiGraphQlGeneratedVariable {
  __typename?: 'EmbarkAPIGraphQLGeneratedVariable'
  key: Scalars['String']
  storeAs: Scalars['String']
  type: EmbarkApiGraphQlVariableGeneratedType
}

export interface EmbarkApiGraphQlMultiActionVariable {
  __typename?: 'EmbarkAPIGraphQLMultiActionVariable'
  key: Scalars['String']
  variables: EmbarkApiGraphQlVariable[]
}

export interface EmbarkApiGraphQlMutation {
  __typename?: 'EmbarkApiGraphQLMutation'
  component: Scalars['String']
  data: EmbarkApiGraphQlMutationData
}

export interface EmbarkApiGraphQlMutationData {
  __typename?: 'EmbarkApiGraphQLMutationData'
  next?: Maybe<EmbarkLink>
  mutation: Scalars['String']
  variables: EmbarkApiGraphQlVariable[]
  errors: EmbarkApiGraphQlError[]
  results: Array<Maybe<EmbarkApiGraphQlResult>>
}

export interface EmbarkApiGraphQlQuery {
  __typename?: 'EmbarkApiGraphQLQuery'
  component: Scalars['String']
  data: EmbarkApiGraphQlQueryData
}

export interface EmbarkApiGraphQlQueryData {
  __typename?: 'EmbarkApiGraphQLQueryData'
  next?: Maybe<EmbarkLink>
  query: Scalars['String']
  variables: EmbarkApiGraphQlVariable[]
  errors: EmbarkApiGraphQlError[]
  results: EmbarkApiGraphQlResult[]
}

export interface EmbarkApiGraphQlResult {
  __typename?: 'EmbarkAPIGraphQLResult'
  key: Scalars['String']
  as: Scalars['String']
}

export interface EmbarkApiGraphQlSingleVariable {
  __typename?: 'EmbarkAPIGraphQLSingleVariable'
  key: Scalars['String']
  from: Scalars['String']
  as: EmbarkApiGraphQlSingleVariableCasting
}

export enum EmbarkApiGraphQlSingleVariableCasting {
  String = 'string',
  Int = 'int',
  Boolean = 'boolean',
}

export type EmbarkApiGraphQlVariable =
  | EmbarkApiGraphQlSingleVariable
  | EmbarkApiGraphQlGeneratedVariable
  | EmbarkApiGraphQlMultiActionVariable

export enum EmbarkApiGraphQlVariableGeneratedType {
  Uuid = 'uuid',
}

export type EmbarkApiHouseInformation = EmbarkApiCore & {
  __typename?: 'EmbarkApiHouseInformation'
  component: Scalars['String']
  data: EmbarkApiHouseInformation
}

export interface EmbarkApiHouseInformationData {
  __typename?: 'EmbarkApiHouseInformationData'
  match: EmbarkLink
  noMatch: EmbarkLink
  error: EmbarkLink
}

export type EmbarkApiPersonalInformation = EmbarkApiCore & {
  __typename?: 'EmbarkApiPersonalInformation'
  component: Scalars['String']
  data: EmbarkApiPersonalInformationData
}

export interface EmbarkApiPersonalInformationData {
  __typename?: 'EmbarkApiPersonalInformationData'
  match: EmbarkLink
  noMatch: EmbarkLink
  error: EmbarkLink
}

export type EmbarkDropdownAction = EmbarkActionCore & {
  __typename?: 'EmbarkDropdownAction'
  component: Scalars['String']
  data: EmbarkDropdownActionData
}

export interface EmbarkDropdownActionData {
  __typename?: 'EmbarkDropdownActionData'
  label: Scalars['String']
  key: Scalars['String']
  options: EmbarkDropdownOption[]
}

export interface EmbarkDropdownOption {
  __typename?: 'EmbarkDropdownOption'
  value: Scalars['String']
  text: Scalars['String']
}

export type EmbarkExpression =
  | EmbarkExpressionUnary
  | EmbarkExpressionBinary
  | EmbarkExpressionMultiple

export interface EmbarkExpressionBinary {
  __typename?: 'EmbarkExpressionBinary'
  type: EmbarkExpressionTypeBinary
  key: Scalars['String']
  value: Scalars['String']
  text?: Maybe<Scalars['String']>
}

export interface EmbarkExpressionMultiple {
  __typename?: 'EmbarkExpressionMultiple'
  type: EmbarkExpressionTypeMultiple
  text?: Maybe<Scalars['String']>
  subExpressions: EmbarkExpression[]
}

export enum EmbarkExpressionTypeBinary {
  Equals = 'EQUALS',
  NotEquals = 'NOT_EQUALS',
  MoreThan = 'MORE_THAN',
  LessThan = 'LESS_THAN',
  MoreThanOrEquals = 'MORE_THAN_OR_EQUALS',
  LessThanOrEquals = 'LESS_THAN_OR_EQUALS',
}

export enum EmbarkExpressionTypeMultiple {
  And = 'AND',
  Or = 'OR',
}

export enum EmbarkExpressionTypeUnary {
  Always = 'ALWAYS',
  Never = 'NEVER',
}

export interface EmbarkExpressionUnary {
  __typename?: 'EmbarkExpressionUnary'
  type: EmbarkExpressionTypeUnary
  text?: Maybe<Scalars['String']>
}

export type EmbarkExternalInsuranceProviderAction = EmbarkActionCore & {
  __typename?: 'EmbarkExternalInsuranceProviderAction'
  component: Scalars['String']
  data: EmbarkExternalInsuranceProviderActionData
}

export interface EmbarkExternalInsuranceProviderActionData {
  __typename?: 'EmbarkExternalInsuranceProviderActionData'
  next: EmbarkLink
  skip: EmbarkLink
}

export enum EmbarkExternalRedirect {
  Email = 'email',
}

export interface EmbarkGroupedResponse {
  __typename?: 'EmbarkGroupedResponse'
  component: Scalars['String']
  title: EmbarkResponseExpression
  items: EmbarkMessage[]
  each: EmbarkGroupedResponseEach[]
}

export interface EmbarkGroupedResponseEach {
  __typename?: 'EmbarkGroupedResponseEach'
  key: Scalars['String']
  content: EmbarkMessage
}

export interface EmbarkKeywords {
  __typename?: 'EmbarkKeywords'
  selectActionSelectLabel?: Maybe<Scalars['String']>
  tooltipModalInformationLabel?: Maybe<Scalars['String']>
  backButton?: Maybe<Scalars['String']>
  externalInsuranceProviderConfirmTitle?: Maybe<Scalars['String']>
  externalInsuranceProviderConfirmPrivacyPolicy?: Maybe<Scalars['String']>
  externalInsuranceProviderConfirmMessage?: Maybe<Scalars['String']>
  externalInsuranceProviderConfirmButton?: Maybe<Scalars['String']>
  externalInsuranceProviderConfirmRejectButton?: Maybe<Scalars['String']>
  externalInsuranceProviderFailureTitle?: Maybe<Scalars['String']>
  externalInsuranceProviderFailureMessage?: Maybe<Scalars['String']>
  externalInsuranceProviderFailureButton?: Maybe<Scalars['String']>
  externalInsuranceProviderSelectTitle?: Maybe<Scalars['String']>
  externalInsuranceProviderPersonalNumberTitle?: Maybe<Scalars['String']>
  externalInsuranceProviderPersonalNumberSubtitle?: Maybe<Scalars['String']>
  externalInsuranceProviderOtherProviderButton?: Maybe<Scalars['String']>
  externalInsuranceProviderGoBackButton?: Maybe<Scalars['String']>
  externalInsuranceProviderContinueButton?: Maybe<Scalars['String']>
  externalInsuranceProviderSetupTitle?: Maybe<Scalars['String']>
  externalInsuranceProviderAuthScanBankID?: Maybe<Scalars['String']>
  externalInsuranceProviderAuthOpenBankId?: Maybe<Scalars['String']>
  externalInsuranceProviderBackgroundFetchTitle?: Maybe<Scalars['String']>
  externalInsuranceProviderBackgroundFetchBody?: Maybe<Scalars['String']>
  externalInsuranceProviderBETATag?: Maybe<Scalars['String']>
  previousInsuranceProviderOtherProviderModal?: Maybe<Scalars['String']>
  previousInsuranceProviderOtherProviderModalButton?: Maybe<Scalars['String']>
}

export interface EmbarkLink {
  __typename?: 'EmbarkLink'
  name: Scalars['String']
  label: Scalars['String']
}

export interface EmbarkMessage {
  __typename?: 'EmbarkMessage'
  expressions: EmbarkExpression[]
  text: Scalars['String']
}

export type EmbarkMultiAction = EmbarkActionCore & {
  __typename?: 'EmbarkMultiAction'
  component: Scalars['String']
  data: EmbarkMultiActionData
}

export type EmbarkMultiActionComponent =
  | EmbarkNumberAction
  | EmbarkDropdownAction
  | EmbarkSwitchAction

export interface EmbarkMultiActionData {
  __typename?: 'EmbarkMultiActionData'
  components: EmbarkMultiActionComponent[]
}

export type EmbarkNumberAction = EmbarkActionCore & {
  __typename?: 'EmbarkNumberAction'
  component: Scalars['String']
  data: EmbarkNumberActionData
}

export interface EmbarkNumberActionData {
  __typename?: 'EmbarkNumberActionData'
  key: Scalars['String']
  placeholder: Scalars['String']
  unit?: Maybe<Scalars['String']>
  maxValue?: Maybe<Scalars['Int']>
  minValue?: Maybe<Scalars['Int']>
  link: EmbarkLink
}

export type EmbarkNumberActionSet = EmbarkActionCore & {
  __typename?: 'EmbarkNumberActionSet'
  component: Scalars['String']
  data?: Maybe<EmbarkNumberActionSetData>
}

export interface EmbarkNumberActionSetData {
  __typename?: 'EmbarkNumberActionSetData'
  link: EmbarkLink
}

export interface EmbarkPartnerConfig {
  __typename?: 'EmbarkPartnerConfig'
  alignment: EmbarkPartnerConfigAlignment
  image: Scalars['String']
  isDefault: Scalars['Boolean']
  name: Scalars['String']
}

export enum EmbarkPartnerConfigAlignment {
  Center = 'center',
  Left = 'left',
}

export interface EmbarkPassage {
  __typename?: 'EmbarkPassage'
  id: Scalars['String']
  text: Scalars['String']
  name: Scalars['String']
  url?: Maybe<Scalars['String']>
  allLinks: EmbarkLink[]
  api?: Maybe<EmbarkApi>
  messages: EmbarkMessage[]
  externalRedirect?: Maybe<EmbarkExternalRedirect>
  action?: Maybe<EmbarkAction>
  response: EmbarkResponse
  tooltips: EmbarkTooltip[]
  tracks: EmbarkTrack[]
  redirects: EmbarkRedirect[]
}

export type EmbarkPreviousInsuranceProviderAction = EmbarkActionCore & {
  __typename?: 'EmbarkPreviousInsuranceProviderAction'
  component: Scalars['String']
  data: EmbarkPreviousInsuranceProviderActionData
}

export interface EmbarkPreviousInsuranceProviderActionData {
  __typename?: 'EmbarkPreviousInsuranceProviderActionData'
  next: EmbarkLink
  skip: EmbarkLink
  providers?: Maybe<EmbarkPreviousInsuranceProviderActionDataProviders>
  storeKey: Scalars['String']
  tooltip?: Maybe<EmbarkTooltip>
}

export enum EmbarkPreviousInsuranceProviderActionDataProviders {
  Norwegian = 'NORWEGIAN',
  Swedish = 'SWEDISH',
}

export type EmbarkRedirect =
  | EmbarkRedirectUnaryExpression
  | EmbarkRedirectBinaryExpression
  | EmbarkRedirectMultipleExpressions

export interface EmbarkRedirectBinaryExpression {
  __typename?: 'EmbarkRedirectBinaryExpression'
  type: EmbarkExpressionTypeBinary
  to: Scalars['String']
  key: Scalars['String']
  value: Scalars['String']
  passedExpressionKey?: Maybe<Scalars['String']>
  passedExpressionValue?: Maybe<Scalars['String']>
}

export interface EmbarkRedirectMultipleExpressions {
  __typename?: 'EmbarkRedirectMultipleExpressions'
  type: EmbarkExpressionTypeMultiple
  to: Scalars['String']
  subExpressions: EmbarkExpression[]
  passedExpressionKey?: Maybe<Scalars['String']>
  passedExpressionValue?: Maybe<Scalars['String']>
}

export interface EmbarkRedirectUnaryExpression {
  __typename?: 'EmbarkRedirectUnaryExpression'
  type: EmbarkExpressionTypeUnary
  to: Scalars['String']
  passedExpressionKey?: Maybe<Scalars['String']>
  passedExpressionValue?: Maybe<Scalars['String']>
}

export type EmbarkResponse =
  | EmbarkGroupedResponse
  | EmbarkResponseExpression
  | EmbarkMessage

export interface EmbarkResponseExpression {
  __typename?: 'EmbarkResponseExpression'
  text: Scalars['String']
  expressions: EmbarkExpression[]
}

export type EmbarkSelectAction = EmbarkActionCore & {
  __typename?: 'EmbarkSelectAction'
  component: Scalars['String']
  data: EmbarkSelectActionData
}

export interface EmbarkSelectActionData {
  __typename?: 'EmbarkSelectActionData'
  options: EmbarkSelectActionOption[]
}

export interface EmbarkSelectActionOption {
  __typename?: 'EmbarkSelectActionOption'
  keys: Array<Scalars['String']>
  values: Array<Scalars['String']>
  link: EmbarkLink
  tooltip?: Maybe<EmbarkTooltip>
  api?: Maybe<EmbarkApi>
}

export interface EmbarkStory {
  __typename?: 'EmbarkStory'
  id: Scalars['String']
  startPassage: Scalars['String']
  name: Scalars['String']
  keywords: EmbarkKeywords
  partnerConfigs: EmbarkPartnerConfig[]
  passages: EmbarkPassage[]
}

export type EmbarkSwitchAction = EmbarkActionCore & {
  __typename?: 'EmbarkSwitchAction'
  component: Scalars['String']
  data: EmbarkSwitchActionData
}

export interface EmbarkSwitchActionData {
  __typename?: 'EmbarkSwitchActionData'
  label: Scalars['String']
  key: Scalars['String']
  defaultValue: Scalars['Boolean']
}

export type EmbarkTextAction = EmbarkActionCore & {
  __typename?: 'EmbarkTextAction'
  component: Scalars['String']
  data: EmbarkTextActionData
}

export interface EmbarkTextActionData {
  __typename?: 'EmbarkTextActionData'
  placeholder: Scalars['String']
  key: Scalars['String']
  api?: Maybe<EmbarkApi>
  link: EmbarkLink
  large?: Maybe<Scalars['Boolean']>
  mask?: Maybe<Scalars['String']>
  tooltip?: Maybe<EmbarkTooltip>
}

export type EmbarkTextActionSet = EmbarkActionCore & {
  __typename?: 'EmbarkTextActionSet'
  component: Scalars['String']
  data?: Maybe<EmbarkTextActionSetData>
}

export interface EmbarkTextActionSetData {
  __typename?: 'EmbarkTextActionSetData'
  link: EmbarkLink
  api?: Maybe<EmbarkApi>
  textActions: EmbarkTextActionSetTextAction[]
}

export interface EmbarkTextActionSetTextAction {
  __typename?: 'EmbarkTextActionSetTextAction'
  data?: Maybe<EmbarkTextActionSetTextActionData>
}

export interface EmbarkTextActionSetTextActionData {
  __typename?: 'EmbarkTextActionSetTextActionData'
  placeholder: Scalars['String']
  key: Scalars['String']
  api?: Maybe<EmbarkApi>
  large?: Maybe<Scalars['Boolean']>
  mask?: Maybe<Scalars['String']>
  tooltip?: Maybe<EmbarkTooltip>
  title: Scalars['String']
}

export interface EmbarkTooltip {
  __typename?: 'EmbarkTooltip'
  title: Scalars['String']
  description: Scalars['String']
}

export interface EmbarkTrack {
  __typename?: 'EmbarkTrack'
  eventName: Scalars['String']
  eventKeys: Array<Maybe<Scalars['String']>>
  includeAllKeys: Scalars['Boolean']
  customData: Scalars['JSONString']
}

export interface Emergency {
  __typename?: 'Emergency'
  color: HedvigColor
  title: Scalars['String']
}

export enum Environment {
  Production = 'Production',
  Staging = 'Staging',
}

export interface ExceededMaximumUpdates {
  __typename?: 'ExceededMaximumUpdates'
  maximumNumberOfUpdates: Scalars['Int']
  updatesByMember: Scalars['Int']
}

export interface ExchangeTokenExpiredResponse {
  __typename?: 'ExchangeTokenExpiredResponse'
  _?: Maybe<Scalars['Boolean']>
}

export interface ExchangeTokenInput {
  exchangeToken: Scalars['String']
}

export interface ExchangeTokenInvalidResponse {
  __typename?: 'ExchangeTokenInvalidResponse'
  _?: Maybe<Scalars['Boolean']>
}

export type ExchangeTokenResponse =
  | ExchangeTokenSuccessResponse
  | ExchangeTokenExpiredResponse
  | ExchangeTokenInvalidResponse

export interface ExchangeTokenSuccessResponse {
  __typename?: 'ExchangeTokenSuccessResponse'
  token: Scalars['String']
}

export interface ExternalInsuranceProvider {
  __typename?: 'ExternalInsuranceProvider'
  providerStatus: ProviderStatus[]
  dataCollection: InsuranceDataCollection[]
  dataCollectionStatus: DataCollectingStatusResponse
}

export interface ExternalInsuranceProviderDataCollectionArgs {
  reference: Scalars['ID']
}

export interface ExternalInsuranceProviderDataCollectionStatusArgs {
  reference: Scalars['ID']
}

export interface ExternalInsuranceProviderMutation {
  __typename?: 'ExternalInsuranceProviderMutation'
  initiateDataCollection: DataCollectionStatus
}

export interface ExternalInsuranceProviderMutationInitiateDataCollectionArgs {
  input: InitiateDataCollectionInput
}

export type ExtraBuilding =
  | ExtraBuildingGarage
  | ExtraBuildingCarport
  | ExtraBuildingShed
  | ExtraBuildingStorehouse
  | ExtraBuildingFriggebod
  | ExtraBuildingAttefall
  | ExtraBuildingOuthouse
  | ExtraBuildingGuesthouse
  | ExtraBuildingGazebo
  | ExtraBuildingGreenhouse
  | ExtraBuildingSauna
  | ExtraBuildingBarn
  | ExtraBuildingBoathouse
  | ExtraBuildingOther

export type ExtraBuildingAttefall = ExtraBuildingCore & {
  __typename?: 'ExtraBuildingAttefall'
  area: Scalars['Int']
  displayName: Scalars['String']
  hasWaterConnected: Scalars['Boolean']
}

export type ExtraBuildingBarn = ExtraBuildingCore & {
  __typename?: 'ExtraBuildingBarn'
  area: Scalars['Int']
  displayName: Scalars['String']
  hasWaterConnected: Scalars['Boolean']
}

export type ExtraBuildingBoathouse = ExtraBuildingCore & {
  __typename?: 'ExtraBuildingBoathouse'
  area: Scalars['Int']
  displayName: Scalars['String']
  hasWaterConnected: Scalars['Boolean']
}

export type ExtraBuildingCarport = ExtraBuildingCore & {
  __typename?: 'ExtraBuildingCarport'
  area: Scalars['Int']
  displayName: Scalars['String']
  hasWaterConnected: Scalars['Boolean']
}

export interface ExtraBuildingCore {
  area: Scalars['Int']
  displayName: Scalars['String']
  hasWaterConnected: Scalars['Boolean']
}

export type ExtraBuildingFriggebod = ExtraBuildingCore & {
  __typename?: 'ExtraBuildingFriggebod'
  area: Scalars['Int']
  displayName: Scalars['String']
  hasWaterConnected: Scalars['Boolean']
}

export type ExtraBuildingGarage = ExtraBuildingCore & {
  __typename?: 'ExtraBuildingGarage'
  area: Scalars['Int']
  displayName: Scalars['String']
  hasWaterConnected: Scalars['Boolean']
}

export type ExtraBuildingGazebo = ExtraBuildingCore & {
  __typename?: 'ExtraBuildingGazebo'
  area: Scalars['Int']
  displayName: Scalars['String']
  hasWaterConnected: Scalars['Boolean']
}

export type ExtraBuildingGreenhouse = ExtraBuildingCore & {
  __typename?: 'ExtraBuildingGreenhouse'
  area: Scalars['Int']
  displayName: Scalars['String']
  hasWaterConnected: Scalars['Boolean']
}

export type ExtraBuildingGuesthouse = ExtraBuildingCore & {
  __typename?: 'ExtraBuildingGuesthouse'
  area: Scalars['Int']
  displayName: Scalars['String']
  hasWaterConnected: Scalars['Boolean']
}

export interface ExtraBuildingInput {
  type: ExtraBuildingType
  area: Scalars['Int']
  hasWaterConnected: Scalars['Boolean']
}

export type ExtraBuildingOther = ExtraBuildingCore & {
  __typename?: 'ExtraBuildingOther'
  area: Scalars['Int']
  displayName: Scalars['String']
  hasWaterConnected: Scalars['Boolean']
}

export type ExtraBuildingOuthouse = ExtraBuildingCore & {
  __typename?: 'ExtraBuildingOuthouse'
  area: Scalars['Int']
  displayName: Scalars['String']
  hasWaterConnected: Scalars['Boolean']
}

export type ExtraBuildingSauna = ExtraBuildingCore & {
  __typename?: 'ExtraBuildingSauna'
  area: Scalars['Int']
  displayName: Scalars['String']
  hasWaterConnected: Scalars['Boolean']
}

export type ExtraBuildingShed = ExtraBuildingCore & {
  __typename?: 'ExtraBuildingShed'
  area: Scalars['Int']
  displayName: Scalars['String']
  hasWaterConnected: Scalars['Boolean']
}

export type ExtraBuildingStorehouse = ExtraBuildingCore & {
  __typename?: 'ExtraBuildingStorehouse'
  area: Scalars['Int']
  displayName: Scalars['String']
  hasWaterConnected: Scalars['Boolean']
}

export enum ExtraBuildingType {
  Garage = 'GARAGE',
  Carport = 'CARPORT',
  Shed = 'SHED',
  Storehouse = 'STOREHOUSE',
  Friggebod = 'FRIGGEBOD',
  Attefall = 'ATTEFALL',
  Outhouse = 'OUTHOUSE',
  Guesthouse = 'GUESTHOUSE',
  Gazebo = 'GAZEBO',
  Greenhouse = 'GREENHOUSE',
  Sauna = 'SAUNA',
  Barn = 'BARN',
  Boathouse = 'BOATHOUSE',
  Other = 'OTHER',
}

export interface FailedToStartSign {
  __typename?: 'FailedToStartSign'
  errorMessage?: Maybe<Scalars['String']>
}

export type Faq = Node & {
  __typename?: 'Faq'
  status: Status
  updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  id: Scalars['ID']
  language?: Maybe<Language>
  headline?: Maybe<Scalars['String']>
  body?: Maybe<Scalars['String']>
}

/** A connection to a list of items. */
export interface FaqConnection {
  __typename?: 'FaqConnection'
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges: Array<Maybe<FaqEdge>>
  aggregate: AggregateFaq
}

export interface FaqCreateInput {
  status?: Maybe<Status>
  headline?: Maybe<Scalars['String']>
  body?: Maybe<Scalars['String']>
  language?: Maybe<LanguageCreateOneWithoutFaqsInput>
}

export interface FaqCreateManyWithoutLanguageInput {
  create?: Maybe<FaqCreateWithoutLanguageInput[]>
  connect?: Maybe<FaqWhereUniqueInput[]>
}

export interface FaqCreateWithoutLanguageInput {
  status?: Maybe<Status>
  headline?: Maybe<Scalars['String']>
  body?: Maybe<Scalars['String']>
}

/** An edge in a connection. */
export interface FaqEdge {
  __typename?: 'FaqEdge'
  /** The item at the end of the edge. */
  node: Faq
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

export enum FaqOrderByInput {
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  BodyAsc = 'body_ASC',
  BodyDesc = 'body_DESC',
}

export interface FaqPreviousValues {
  __typename?: 'FaqPreviousValues'
  status: Status
  updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  id: Scalars['ID']
  headline?: Maybe<Scalars['String']>
  body?: Maybe<Scalars['String']>
}

export interface FaqScalarWhereInput {
  _search?: Maybe<Scalars['String']>
  /** Logical AND on all given filters. */
  AND?: Maybe<FaqScalarWhereInput[]>
  /** Logical OR on all given filters. */
  OR?: Maybe<FaqScalarWhereInput[]>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<FaqScalarWhereInput[]>
  status?: Maybe<Status>
  /** All values that are not equal to given value. */
  status_not?: Maybe<Status>
  /** All values that are contained in given list. */
  status_in?: Maybe<Status[]>
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Status[]>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>
  headline?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  headline_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  headline_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  headline_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  headline_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  headline_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  headline_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  headline_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  headline_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  headline_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  headline_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  headline_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  headline_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  headline_not_ends_with?: Maybe<Scalars['String']>
  body?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  body_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  body_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  body_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  body_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  body_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  body_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  body_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  body_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  body_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  body_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  body_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  body_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  body_not_ends_with?: Maybe<Scalars['String']>
}

export interface FaqSubscriptionPayload {
  __typename?: 'FaqSubscriptionPayload'
  mutation: MutationType
  node?: Maybe<Faq>
  updatedFields?: Maybe<Array<Scalars['String']>>
  previousValues?: Maybe<FaqPreviousValues>
}

export interface FaqSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<FaqSubscriptionWhereInput[]>
  /** Logical OR on all given filters. */
  OR?: Maybe<FaqSubscriptionWhereInput[]>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<FaqSubscriptionWhereInput[]>
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>
  node?: Maybe<FaqWhereInput>
}

export interface FaqUpdateInput {
  status?: Maybe<Status>
  headline?: Maybe<Scalars['String']>
  body?: Maybe<Scalars['String']>
  language?: Maybe<LanguageUpdateOneWithoutFaqsInput>
}

export interface FaqUpdateManyDataInput {
  status?: Maybe<Status>
  headline?: Maybe<Scalars['String']>
  body?: Maybe<Scalars['String']>
}

export interface FaqUpdateManyMutationInput {
  status?: Maybe<Status>
  headline?: Maybe<Scalars['String']>
  body?: Maybe<Scalars['String']>
}

export interface FaqUpdateManyWithoutLanguageInput {
  create?: Maybe<FaqCreateWithoutLanguageInput[]>
  connect?: Maybe<FaqWhereUniqueInput[]>
  set?: Maybe<FaqWhereUniqueInput[]>
  disconnect?: Maybe<FaqWhereUniqueInput[]>
  delete?: Maybe<FaqWhereUniqueInput[]>
  update?: Maybe<FaqUpdateWithWhereUniqueWithoutLanguageInput[]>
  updateMany?: Maybe<FaqUpdateManyWithWhereNestedInput[]>
  deleteMany?: Maybe<FaqScalarWhereInput[]>
  upsert?: Maybe<FaqUpsertWithWhereUniqueWithoutLanguageInput[]>
}

export interface FaqUpdateManyWithWhereNestedInput {
  where: FaqScalarWhereInput
  data: FaqUpdateManyDataInput
}

export interface FaqUpdateWithoutLanguageDataInput {
  status?: Maybe<Status>
  headline?: Maybe<Scalars['String']>
  body?: Maybe<Scalars['String']>
}

export interface FaqUpdateWithWhereUniqueWithoutLanguageInput {
  where: FaqWhereUniqueInput
  data: FaqUpdateWithoutLanguageDataInput
}

export interface FaqUpsertWithWhereUniqueWithoutLanguageInput {
  where: FaqWhereUniqueInput
  update: FaqUpdateWithoutLanguageDataInput
  create: FaqCreateWithoutLanguageInput
}

export interface FaqWhereInput {
  _search?: Maybe<Scalars['String']>
  /** Logical AND on all given filters. */
  AND?: Maybe<FaqWhereInput[]>
  /** Logical OR on all given filters. */
  OR?: Maybe<FaqWhereInput[]>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<FaqWhereInput[]>
  status?: Maybe<Status>
  /** All values that are not equal to given value. */
  status_not?: Maybe<Status>
  /** All values that are contained in given list. */
  status_in?: Maybe<Status[]>
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Status[]>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>
  headline?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  headline_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  headline_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  headline_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  headline_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  headline_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  headline_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  headline_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  headline_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  headline_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  headline_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  headline_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  headline_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  headline_not_ends_with?: Maybe<Scalars['String']>
  body?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  body_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  body_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  body_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  body_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  body_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  body_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  body_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  body_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  body_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  body_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  body_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  body_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  body_not_ends_with?: Maybe<Scalars['String']>
  language?: Maybe<LanguageWhereInput>
}

export interface FaqWhereUniqueInput {
  id?: Maybe<Scalars['ID']>
}

export enum Feature {
  KeyGear = 'KeyGear',
  Referrals = 'Referrals',
}

export interface File {
  __typename?: 'File'
  /** signedUrl is valid for 30 minutes after upload, don't hang on to this. */
  signedUrl: Scalars['String']
  /** S3 key that can be used to retreive new signed urls in the future. */
  key: Scalars['String']
  /** S3 bucket that the file was uploaded to. */
  bucket: Scalars['String']
}

export interface FreeMonths {
  __typename?: 'FreeMonths'
  quantity?: Maybe<Scalars['Int']>
}

export interface Geo {
  __typename?: 'Geo'
  countryISOCode: Scalars['String']
}

export interface Gif {
  __typename?: 'Gif'
  url?: Maybe<Scalars['String']>
}

export enum HedvigColor {
  Pink = 'Pink',
  Turquoise = 'Turquoise',
  Purple = 'Purple',
  DarkPurple = 'DarkPurple',
  BlackPurple = 'BlackPurple',
  DarkGray = 'DarkGray',
  LightGray = 'LightGray',
  White = 'White',
  Black = 'Black',
  OffBlack = 'OffBlack',
  OffWhite = 'OffWhite',
  Yellow = 'Yellow',
}

export interface HouseInformation {
  __typename?: 'HouseInformation'
  livingSpace: Scalars['Int']
  ancillaryArea: Scalars['Int']
  yearOfConstruction: Scalars['Int']
}

export interface HouseInformationInput {
  streetAddress: Scalars['String']
  postalNumber: Scalars['String']
}

/** A vectorized image to show to the user */
export interface Icon {
  __typename?: 'Icon'
  /**
   * For iOS use
   * @deprecated use an icon from a variant instead
   */
  pdfUrl: Scalars['String']
  /**
   * For Web use
   * @deprecated use an icon from a variant instead
   */
  svgUrl: Scalars['String']
  /**
   * For Android use
   * @deprecated use an icon from a variant instead
   */
  vectorDrawableUrl: Scalars['String']
  /** Icons with variants for light and dark mode */
  variants: IconVariants
}

/** A vectorized image to show to the user */
export interface IconVariant {
  __typename?: 'IconVariant'
  /** For iOS use */
  pdfUrl: Scalars['String']
  /** For Web use */
  svgUrl: Scalars['String']
  /** For Android use */
  vectorDrawableUrl: Scalars['String']
}

/** Icons with variants for light and dark mode */
export interface IconVariants {
  __typename?: 'IconVariants'
  /** A variant to use for dark user interfaces */
  dark: IconVariant
  /** A variant to use for light user interfaces */
  light: IconVariant
}

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /**
   * Resizes the image to fit the specified parameters exactly by removing any
   * parts of the image that don't fit within the boundaries.
   */
  Crop = 'crop',
  /**
   * Resizes the image to fit the specified parameters exactly by scaling the image
   * to the desired size. The aspect ratio of the image is not respected and the
   * image can be distorted using this method.
   */
  Scale = 'scale',
  /**
   * Resizes the image to fit within the parameters, but as opposed to 'fit:clip'
   * will not scale the image if the image is smaller than the output size.
   */
  Max = 'max',
}

export interface ImageResizeInput {
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: Maybe<Scalars['Int']>
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: Maybe<Scalars['Int']>
  /** The default value for the fit parameter is fit:clip. */
  fit?: Maybe<ImageFit>
}

/** Transformations for Images */
export interface ImageTransformationInput {
  /** Resizes the image */
  resize?: Maybe<ImageResizeInput>
}

export type ImportantMessage = Node & {
  __typename?: 'ImportantMessage'
  status: Status
  updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  id: Scalars['ID']
  title?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  language?: Maybe<Language>
  button?: Maybe<Scalars['String']>
  link?: Maybe<Scalars['String']>
}

/** A connection to a list of items. */
export interface ImportantMessageConnection {
  __typename?: 'ImportantMessageConnection'
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges: Array<Maybe<ImportantMessageEdge>>
  aggregate: AggregateImportantMessage
}

export interface ImportantMessageCreateInput {
  status?: Maybe<Status>
  title?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  button?: Maybe<Scalars['String']>
  link?: Maybe<Scalars['String']>
  language?: Maybe<LanguageCreateOneWithoutImportantMessagesesInput>
}

export interface ImportantMessageCreateManyWithoutLanguageInput {
  create?: Maybe<ImportantMessageCreateWithoutLanguageInput[]>
  connect?: Maybe<ImportantMessageWhereUniqueInput[]>
}

export interface ImportantMessageCreateWithoutLanguageInput {
  status?: Maybe<Status>
  title?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  button?: Maybe<Scalars['String']>
  link?: Maybe<Scalars['String']>
}

/** An edge in a connection. */
export interface ImportantMessageEdge {
  __typename?: 'ImportantMessageEdge'
  /** The item at the end of the edge. */
  node: ImportantMessage
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

export enum ImportantMessageOrderByInput {
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  MessageAsc = 'message_ASC',
  MessageDesc = 'message_DESC',
  ButtonAsc = 'button_ASC',
  ButtonDesc = 'button_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
}

export interface ImportantMessagePreviousValues {
  __typename?: 'ImportantMessagePreviousValues'
  status: Status
  updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  id: Scalars['ID']
  title?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  button?: Maybe<Scalars['String']>
  link?: Maybe<Scalars['String']>
}

export interface ImportantMessageScalarWhereInput {
  _search?: Maybe<Scalars['String']>
  /** Logical AND on all given filters. */
  AND?: Maybe<ImportantMessageScalarWhereInput[]>
  /** Logical OR on all given filters. */
  OR?: Maybe<ImportantMessageScalarWhereInput[]>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<ImportantMessageScalarWhereInput[]>
  status?: Maybe<Status>
  /** All values that are not equal to given value. */
  status_not?: Maybe<Status>
  /** All values that are contained in given list. */
  status_in?: Maybe<Status[]>
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Status[]>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>
  title?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  title_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  title_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  title_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  title_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  title_not_ends_with?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  message_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  message_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  message_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  message_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  message_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  message_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  message_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  message_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  message_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  message_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  message_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  message_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  message_not_ends_with?: Maybe<Scalars['String']>
  button?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  button_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  button_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  button_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  button_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  button_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  button_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  button_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  button_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  button_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  button_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  button_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  button_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  button_not_ends_with?: Maybe<Scalars['String']>
  link?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  link_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  link_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  link_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  link_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  link_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  link_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  link_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  link_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  link_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  link_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  link_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  link_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  link_not_ends_with?: Maybe<Scalars['String']>
}

export interface ImportantMessageSubscriptionPayload {
  __typename?: 'ImportantMessageSubscriptionPayload'
  mutation: MutationType
  node?: Maybe<ImportantMessage>
  updatedFields?: Maybe<Array<Scalars['String']>>
  previousValues?: Maybe<ImportantMessagePreviousValues>
}

export interface ImportantMessageSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<ImportantMessageSubscriptionWhereInput[]>
  /** Logical OR on all given filters. */
  OR?: Maybe<ImportantMessageSubscriptionWhereInput[]>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<ImportantMessageSubscriptionWhereInput[]>
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>
  node?: Maybe<ImportantMessageWhereInput>
}

export interface ImportantMessageUpdateInput {
  status?: Maybe<Status>
  title?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  button?: Maybe<Scalars['String']>
  link?: Maybe<Scalars['String']>
  language?: Maybe<LanguageUpdateOneWithoutImportantMessagesesInput>
}

export interface ImportantMessageUpdateManyDataInput {
  status?: Maybe<Status>
  title?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  button?: Maybe<Scalars['String']>
  link?: Maybe<Scalars['String']>
}

export interface ImportantMessageUpdateManyMutationInput {
  status?: Maybe<Status>
  title?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  button?: Maybe<Scalars['String']>
  link?: Maybe<Scalars['String']>
}

export interface ImportantMessageUpdateManyWithoutLanguageInput {
  create?: Maybe<ImportantMessageCreateWithoutLanguageInput[]>
  connect?: Maybe<ImportantMessageWhereUniqueInput[]>
  set?: Maybe<ImportantMessageWhereUniqueInput[]>
  disconnect?: Maybe<ImportantMessageWhereUniqueInput[]>
  delete?: Maybe<ImportantMessageWhereUniqueInput[]>
  update?: Maybe<ImportantMessageUpdateWithWhereUniqueWithoutLanguageInput[]>
  updateMany?: Maybe<ImportantMessageUpdateManyWithWhereNestedInput[]>
  deleteMany?: Maybe<ImportantMessageScalarWhereInput[]>
  upsert?: Maybe<ImportantMessageUpsertWithWhereUniqueWithoutLanguageInput[]>
}

export interface ImportantMessageUpdateManyWithWhereNestedInput {
  where: ImportantMessageScalarWhereInput
  data: ImportantMessageUpdateManyDataInput
}

export interface ImportantMessageUpdateWithoutLanguageDataInput {
  status?: Maybe<Status>
  title?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  button?: Maybe<Scalars['String']>
  link?: Maybe<Scalars['String']>
}

export interface ImportantMessageUpdateWithWhereUniqueWithoutLanguageInput {
  where: ImportantMessageWhereUniqueInput
  data: ImportantMessageUpdateWithoutLanguageDataInput
}

export interface ImportantMessageUpsertWithWhereUniqueWithoutLanguageInput {
  where: ImportantMessageWhereUniqueInput
  update: ImportantMessageUpdateWithoutLanguageDataInput
  create: ImportantMessageCreateWithoutLanguageInput
}

export interface ImportantMessageWhereInput {
  _search?: Maybe<Scalars['String']>
  /** Logical AND on all given filters. */
  AND?: Maybe<ImportantMessageWhereInput[]>
  /** Logical OR on all given filters. */
  OR?: Maybe<ImportantMessageWhereInput[]>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<ImportantMessageWhereInput[]>
  status?: Maybe<Status>
  /** All values that are not equal to given value. */
  status_not?: Maybe<Status>
  /** All values that are contained in given list. */
  status_in?: Maybe<Status[]>
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Status[]>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>
  title?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  title_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  title_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  title_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  title_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  title_not_ends_with?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  message_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  message_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  message_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  message_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  message_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  message_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  message_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  message_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  message_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  message_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  message_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  message_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  message_not_ends_with?: Maybe<Scalars['String']>
  button?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  button_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  button_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  button_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  button_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  button_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  button_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  button_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  button_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  button_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  button_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  button_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  button_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  button_not_ends_with?: Maybe<Scalars['String']>
  link?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  link_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  link_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  link_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  link_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  link_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  link_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  link_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  link_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  link_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  link_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  link_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  link_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  link_not_ends_with?: Maybe<Scalars['String']>
  language?: Maybe<LanguageWhereInput>
}

export interface ImportantMessageWhereUniqueInput {
  id?: Maybe<Scalars['ID']>
}

export type Incentive =
  | MonthlyCostDeduction
  | FreeMonths
  | NoDiscount
  | VisibleNoDiscount
  | PercentageDiscountMonths
  | IndefinitePercentageDiscount

export interface IncompleteApartmentQuoteDetails {
  __typename?: 'IncompleteApartmentQuoteDetails'
  street?: Maybe<Scalars['String']>
  zipCode?: Maybe<Scalars['String']>
  householdSize?: Maybe<Scalars['Int']>
  livingSpace?: Maybe<Scalars['Int']>
  type?: Maybe<ApartmentType>
}

export interface IncompleteHouseQuoteDetails {
  __typename?: 'IncompleteHouseQuoteDetails'
  street?: Maybe<Scalars['String']>
  zipCode?: Maybe<Scalars['String']>
  householdSize?: Maybe<Scalars['Int']>
  livingSpace?: Maybe<Scalars['Int']>
  ancillarySpace?: Maybe<Scalars['Int']>
  extraBuildings?: Maybe<ExtraBuilding[]>
  numberOfBathrooms?: Maybe<Scalars['Int']>
  yearOfConstruction?: Maybe<Scalars['Int']>
  isSubleted?: Maybe<Scalars['Boolean']>
}

export interface IncompleteQuote {
  __typename?: 'IncompleteQuote'
  id: Scalars['ID']
  currentInsurer?: Maybe<CurrentInsurer>
  startDate?: Maybe<Scalars['LocalDate']>
  details?: Maybe<IncompleteQuoteDetails>
  email?: Maybe<Scalars['String']>
  dataCollectionId?: Maybe<Scalars['ID']>
}

export type IncompleteQuoteDetails =
  | IncompleteApartmentQuoteDetails
  | IncompleteHouseQuoteDetails

export interface IndefinitePercentageDiscount {
  __typename?: 'IndefinitePercentageDiscount'
  percentageDiscount: Scalars['Float']
}

export interface InitiateDataCollectionInput {
  reference: Scalars['ID']
  insuranceProvider: Scalars['String']
  personalNumber: Scalars['String']
}

export interface InProgressReferral {
  __typename?: 'InProgressReferral'
  name?: Maybe<Scalars['String']>
}

export interface InsurableLimit {
  __typename?: 'InsurableLimit'
  label: Scalars['String']
  limit: Scalars['String']
  description: Scalars['String']
  type: InsurableLimitType
}

export enum InsurableLimitType {
  Deductible = 'DEDUCTIBLE',
  DeductibleNatureDamage = 'DEDUCTIBLE_NATURE_DAMAGE',
  DeductibleAllRisk = 'DEDUCTIBLE_ALL_RISK',
  InsuredAmount = 'INSURED_AMOUNT',
  GoodsIndividual = 'GOODS_INDIVIDUAL',
  GoodsFamily = 'GOODS_FAMILY',
  TravelDays = 'TRAVEL_DAYS',
  MedicalExpenses = 'MEDICAL_EXPENSES',
}

export interface Insurance {
  __typename?: 'Insurance'
  address?: Maybe<Scalars['String']>
  postalNumber?: Maybe<Scalars['String']>
  cost?: Maybe<InsuranceCost>
  personsInHousehold?: Maybe<Scalars['Int']>
  certificateUrl?: Maybe<Scalars['String']>
  status: InsuranceStatus
  type?: Maybe<InsuranceType>
  activeFrom?: Maybe<Scalars['LocalDate']>
  /** @deprecated Use previousInsurer instead */
  insuredAtOtherCompany?: Maybe<Scalars['Boolean']>
  presaleInformationUrl?: Maybe<Scalars['String']>
  policyUrl?: Maybe<Scalars['String']>
  /** @deprecated Use previousInsurer instead */
  currentInsurerName?: Maybe<Scalars['String']>
  livingSpace?: Maybe<Scalars['Int']>
  /** @deprecated Use arrangedPerilCategories instead */
  perilCategories?: Maybe<Array<Maybe<PerilCategory>>>
  /** @deprecated Use cost instead */
  monthlyCost?: Maybe<Scalars['Int']>
  /** @deprecated Field no longer supported */
  safetyIncreasers?: Maybe<Array<Scalars['String']>>
  arrangedPerilCategories: ArrangedPerilCategories
  renewal?: Maybe<Renewal>
  previousInsurer?: Maybe<PreviousInsurer>
  ancillaryArea?: Maybe<Scalars['Int']>
  yearOfConstruction?: Maybe<Scalars['Int']>
  numberOfBathrooms?: Maybe<Scalars['Int']>
  extraBuildings?: Maybe<ExtraBuilding[]>
  isSubleted?: Maybe<Scalars['Boolean']>
}

export interface InsuranceCompany {
  __typename?: 'InsuranceCompany'
  name: Scalars['String']
  switchable: Scalars['Boolean']
  logo: Icon
}

export interface InsuranceCompanyType {
  __typename?: 'InsuranceCompanyType'
  major: InsuranceCompany[]
  minor: InsuranceCompany[]
}

export interface InsuranceCost {
  __typename?: 'InsuranceCost'
  monthlyGross: MonetaryAmountV2
  monthlyDiscount: MonetaryAmountV2
  monthlyNet: MonetaryAmountV2
  freeUntil?: Maybe<Scalars['LocalDate']>
}

export interface InsuranceDataCollection {
  __typename?: 'InsuranceDataCollection'
  insuranceObjectStreetAddress?: Maybe<Scalars['String']>
  postalNumber?: Maybe<Scalars['String']>
  insuranceName?: Maybe<Scalars['String']>
  insuranceType?: Maybe<Scalars['String']>
  insuranceProvider?: Maybe<Scalars['String']>
  renewalDate?: Maybe<Scalars['LocalDate']>
  monthlyPremium?: Maybe<MonetaryAmountV2>
  monthlyNetPremium?: Maybe<MonetaryAmountV2>
  monthlyGrossPremium?: Maybe<MonetaryAmountV2>
  monthlyDiscount?: Maybe<MonetaryAmountV2>
}

export enum InsuranceStatus {
  Pending = 'PENDING',
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  InactiveWithStartDate = 'INACTIVE_WITH_START_DATE',
  Terminated = 'TERMINATED',
}

export interface InsuranceTerm {
  __typename?: 'InsuranceTerm'
  displayName: Scalars['String']
  url: Scalars['String']
  type?: Maybe<InsuranceTermType>
}

export enum InsuranceTermType {
  TermsAndConditions = 'TERMS_AND_CONDITIONS',
  PreSaleInfoEuStandard = 'PRE_SALE_INFO_EU_STANDARD',
  GeneralTerms = 'GENERAL_TERMS',
}

export enum InsuranceType {
  Rent = 'RENT',
  Brf = 'BRF',
  StudentRent = 'STUDENT_RENT',
  StudentBrf = 'STUDENT_BRF',
  House = 'HOUSE',
}

export type Key = Node & {
  __typename?: 'Key'
  status: Status
  updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  id: Scalars['ID']
  value: Scalars['String']
  translations?: Maybe<Translation[]>
  description?: Maybe<Scalars['String']>
  keyGearItemCoverageTitle?: Maybe<KeyGearItemCoverage>
  keyGearItemCoverageDescription?: Maybe<KeyGearItemCoverage>
}

export interface KeyTranslationsArgs {
  where?: Maybe<TranslationWhereInput>
  orderBy?: Maybe<TranslationOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export enum KeyboardType {
  Default = 'DEFAULT',
  Numberpad = 'NUMBERPAD',
  Decimalpad = 'DECIMALPAD',
  Numeric = 'NUMERIC',
  Email = 'EMAIL',
  Phone = 'PHONE',
}

/** A connection to a list of items. */
export interface KeyConnection {
  __typename?: 'KeyConnection'
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges: Array<Maybe<KeyEdge>>
  aggregate: AggregateKey
}

export interface KeyCreateInput {
  status?: Maybe<Status>
  value: Scalars['String']
  description?: Maybe<Scalars['String']>
  translations?: Maybe<TranslationCreateManyWithoutKeyInput>
  keyGearItemCoverageTitle?: Maybe<
    KeyGearItemCoverageCreateOneWithoutTitleInput
  >
  keyGearItemCoverageDescription?: Maybe<
    KeyGearItemCoverageCreateOneWithoutDescriptionInput
  >
}

export interface KeyCreateOneWithoutKeyGearItemCoverageDescriptionInput {
  create?: Maybe<KeyCreateWithoutKeyGearItemCoverageDescriptionInput>
  connect?: Maybe<KeyWhereUniqueInput>
}

export interface KeyCreateOneWithoutKeyGearItemCoverageTitleInput {
  create?: Maybe<KeyCreateWithoutKeyGearItemCoverageTitleInput>
  connect?: Maybe<KeyWhereUniqueInput>
}

export interface KeyCreateOneWithoutTranslationsInput {
  create?: Maybe<KeyCreateWithoutTranslationsInput>
  connect?: Maybe<KeyWhereUniqueInput>
}

export interface KeyCreateWithoutKeyGearItemCoverageDescriptionInput {
  status?: Maybe<Status>
  value: Scalars['String']
  description?: Maybe<Scalars['String']>
  translations?: Maybe<TranslationCreateManyWithoutKeyInput>
  keyGearItemCoverageTitle?: Maybe<
    KeyGearItemCoverageCreateOneWithoutTitleInput
  >
}

export interface KeyCreateWithoutKeyGearItemCoverageTitleInput {
  status?: Maybe<Status>
  value: Scalars['String']
  description?: Maybe<Scalars['String']>
  translations?: Maybe<TranslationCreateManyWithoutKeyInput>
  keyGearItemCoverageDescription?: Maybe<
    KeyGearItemCoverageCreateOneWithoutDescriptionInput
  >
}

export interface KeyCreateWithoutTranslationsInput {
  status?: Maybe<Status>
  value: Scalars['String']
  description?: Maybe<Scalars['String']>
  keyGearItemCoverageTitle?: Maybe<
    KeyGearItemCoverageCreateOneWithoutTitleInput
  >
  keyGearItemCoverageDescription?: Maybe<
    KeyGearItemCoverageCreateOneWithoutDescriptionInput
  >
}

/** An edge in a connection. */
export interface KeyEdge {
  __typename?: 'KeyEdge'
  /** The item at the end of the edge. */
  node: Key
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

export interface KeyGearItem {
  __typename?: 'KeyGearItem'
  id: Scalars['ID']
  deleted: Scalars['Boolean']
  /**
   * If this item was added automatically - what was the Hash of the identifiable information?
   * Use this to avoid automatically adding an Item which the user has already automatically added or
   * does not wish to have automatically added
   */
  name?: Maybe<Scalars['String']>
  physicalReferenceHash?: Maybe<Scalars['String']>
  photos: KeyGearItemPhoto[]
  category: KeyGearItemCategory
  receipts: KeyGearItemReceipt[]
  purchasePrice?: Maybe<MonetaryAmountV2>
  timeOfPurchase?: Maybe<Scalars['LocalDate']>
  valuation?: Maybe<KeyGearItemValuation>
  maxInsurableAmount?: Maybe<MonetaryAmountV2>
  deductible: MonetaryAmountV2
  covered: KeyGearItemCoverage[]
  exceptions: KeyGearItemCoverage[]
}

export enum KeyGearItemCategory {
  Phone = 'PHONE',
  Computer = 'COMPUTER',
  Tv = 'TV',
  Bike = 'BIKE',
  Jewelry = 'JEWELRY',
  Watch = 'WATCH',
  SmartWatch = 'SMART_WATCH',
  Tablet = 'TABLET',
}

export type KeyGearItemCoverage = Node & {
  __typename?: 'KeyGearItemCoverage'
  status: Status
  updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  id: Scalars['ID']
  title?: Maybe<Key>
  description?: Maybe<Key>
}

/** A connection to a list of items. */
export interface KeyGearItemCoverageConnection {
  __typename?: 'KeyGearItemCoverageConnection'
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges: Array<Maybe<KeyGearItemCoverageEdge>>
  aggregate: AggregateKeyGearItemCoverage
}

export interface KeyGearItemCoverageCreateInput {
  status?: Maybe<Status>
  title?: Maybe<KeyCreateOneWithoutKeyGearItemCoverageTitleInput>
  description?: Maybe<KeyCreateOneWithoutKeyGearItemCoverageDescriptionInput>
}

export interface KeyGearItemCoverageCreateOneWithoutDescriptionInput {
  create?: Maybe<KeyGearItemCoverageCreateWithoutDescriptionInput>
  connect?: Maybe<KeyGearItemCoverageWhereUniqueInput>
}

export interface KeyGearItemCoverageCreateOneWithoutTitleInput {
  create?: Maybe<KeyGearItemCoverageCreateWithoutTitleInput>
  connect?: Maybe<KeyGearItemCoverageWhereUniqueInput>
}

export interface KeyGearItemCoverageCreateWithoutDescriptionInput {
  status?: Maybe<Status>
  title?: Maybe<KeyCreateOneWithoutKeyGearItemCoverageTitleInput>
}

export interface KeyGearItemCoverageCreateWithoutTitleInput {
  status?: Maybe<Status>
  description?: Maybe<KeyCreateOneWithoutKeyGearItemCoverageDescriptionInput>
}

/** An edge in a connection. */
export interface KeyGearItemCoverageEdge {
  __typename?: 'KeyGearItemCoverageEdge'
  /** The item at the end of the edge. */
  node: KeyGearItemCoverage
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

export enum KeyGearItemCoverageOrderByInput {
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
}

export interface KeyGearItemCoveragePreviousValues {
  __typename?: 'KeyGearItemCoveragePreviousValues'
  status: Status
  updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  id: Scalars['ID']
}

export interface KeyGearItemCoverageSubscriptionPayload {
  __typename?: 'KeyGearItemCoverageSubscriptionPayload'
  mutation: MutationType
  node?: Maybe<KeyGearItemCoverage>
  updatedFields?: Maybe<Array<Scalars['String']>>
  previousValues?: Maybe<KeyGearItemCoveragePreviousValues>
}

export interface KeyGearItemCoverageSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<KeyGearItemCoverageSubscriptionWhereInput[]>
  /** Logical OR on all given filters. */
  OR?: Maybe<KeyGearItemCoverageSubscriptionWhereInput[]>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<KeyGearItemCoverageSubscriptionWhereInput[]>
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>
  node?: Maybe<KeyGearItemCoverageWhereInput>
}

export interface KeyGearItemCoverageUpdateInput {
  status?: Maybe<Status>
  title?: Maybe<KeyUpdateOneWithoutKeyGearItemCoverageTitleInput>
  description?: Maybe<KeyUpdateOneWithoutKeyGearItemCoverageDescriptionInput>
}

export interface KeyGearItemCoverageUpdateManyMutationInput {
  status?: Maybe<Status>
}

export interface KeyGearItemCoverageUpdateOneWithoutDescriptionInput {
  create?: Maybe<KeyGearItemCoverageCreateWithoutDescriptionInput>
  connect?: Maybe<KeyGearItemCoverageWhereUniqueInput>
  disconnect?: Maybe<Scalars['Boolean']>
  delete?: Maybe<Scalars['Boolean']>
  update?: Maybe<KeyGearItemCoverageUpdateWithoutDescriptionDataInput>
  upsert?: Maybe<KeyGearItemCoverageUpsertWithoutDescriptionInput>
}

export interface KeyGearItemCoverageUpdateOneWithoutTitleInput {
  create?: Maybe<KeyGearItemCoverageCreateWithoutTitleInput>
  connect?: Maybe<KeyGearItemCoverageWhereUniqueInput>
  disconnect?: Maybe<Scalars['Boolean']>
  delete?: Maybe<Scalars['Boolean']>
  update?: Maybe<KeyGearItemCoverageUpdateWithoutTitleDataInput>
  upsert?: Maybe<KeyGearItemCoverageUpsertWithoutTitleInput>
}

export interface KeyGearItemCoverageUpdateWithoutDescriptionDataInput {
  status?: Maybe<Status>
  title?: Maybe<KeyUpdateOneWithoutKeyGearItemCoverageTitleInput>
}

export interface KeyGearItemCoverageUpdateWithoutTitleDataInput {
  status?: Maybe<Status>
  description?: Maybe<KeyUpdateOneWithoutKeyGearItemCoverageDescriptionInput>
}

export interface KeyGearItemCoverageUpsertWithoutDescriptionInput {
  update: KeyGearItemCoverageUpdateWithoutDescriptionDataInput
  create: KeyGearItemCoverageCreateWithoutDescriptionInput
}

export interface KeyGearItemCoverageUpsertWithoutTitleInput {
  update: KeyGearItemCoverageUpdateWithoutTitleDataInput
  create: KeyGearItemCoverageCreateWithoutTitleInput
}

export interface KeyGearItemCoverageWhereInput {
  _search?: Maybe<Scalars['String']>
  /** Logical AND on all given filters. */
  AND?: Maybe<KeyGearItemCoverageWhereInput[]>
  /** Logical OR on all given filters. */
  OR?: Maybe<KeyGearItemCoverageWhereInput[]>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<KeyGearItemCoverageWhereInput[]>
  status?: Maybe<Status>
  /** All values that are not equal to given value. */
  status_not?: Maybe<Status>
  /** All values that are contained in given list. */
  status_in?: Maybe<Status[]>
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Status[]>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>
  title?: Maybe<KeyWhereInput>
  description?: Maybe<KeyWhereInput>
}

export interface KeyGearItemCoverageWhereUniqueInput {
  id?: Maybe<Scalars['ID']>
}

export interface KeyGearItemPhoto {
  __typename?: 'KeyGearItemPhoto'
  id: Scalars['ID']
  file: S3File
  markedAsDeleted: Scalars['Boolean']
}

export interface KeyGearItemReceipt {
  __typename?: 'KeyGearItemReceipt'
  id: Scalars['ID']
  file: S3File
  markedAsDeleted: Scalars['Boolean']
}

export interface KeyGearItemsFilter {
  /** default: false */
  deleted?: Maybe<Scalars['Boolean']>
}

export type KeyGearItemValuation =
  | KeyGearItemValuationFixed
  | KeyGearItemValuationMarketValue

export interface KeyGearItemValuationFixed {
  __typename?: 'KeyGearItemValuationFixed'
  /** Value between 100 and 0 which corresponds to the percentage of the item's value relative to purchase price */
  ratio: Scalars['Int']
  valuation: MonetaryAmountV2
}

export interface KeyGearItemValuationMarketValue {
  __typename?: 'KeyGearItemValuationMarketValue'
  /** Value between 100 and 0 which corresponds to the percentage of the item's value relative to current market value */
  ratio: Scalars['Int']
}

export enum KeyOrderByInput {
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
}

export interface KeyPreviousValues {
  __typename?: 'KeyPreviousValues'
  status: Status
  updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  id: Scalars['ID']
  value: Scalars['String']
  description?: Maybe<Scalars['String']>
}

export interface KeySubscriptionPayload {
  __typename?: 'KeySubscriptionPayload'
  mutation: MutationType
  node?: Maybe<Key>
  updatedFields?: Maybe<Array<Scalars['String']>>
  previousValues?: Maybe<KeyPreviousValues>
}

export interface KeySubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<KeySubscriptionWhereInput[]>
  /** Logical OR on all given filters. */
  OR?: Maybe<KeySubscriptionWhereInput[]>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<KeySubscriptionWhereInput[]>
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>
  node?: Maybe<KeyWhereInput>
}

export interface KeyUpdateInput {
  status?: Maybe<Status>
  value?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  translations?: Maybe<TranslationUpdateManyWithoutKeyInput>
  keyGearItemCoverageTitle?: Maybe<
    KeyGearItemCoverageUpdateOneWithoutTitleInput
  >
  keyGearItemCoverageDescription?: Maybe<
    KeyGearItemCoverageUpdateOneWithoutDescriptionInput
  >
}

export interface KeyUpdateManyMutationInput {
  status?: Maybe<Status>
  value?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
}

export interface KeyUpdateOneWithoutKeyGearItemCoverageDescriptionInput {
  create?: Maybe<KeyCreateWithoutKeyGearItemCoverageDescriptionInput>
  connect?: Maybe<KeyWhereUniqueInput>
  disconnect?: Maybe<Scalars['Boolean']>
  delete?: Maybe<Scalars['Boolean']>
  update?: Maybe<KeyUpdateWithoutKeyGearItemCoverageDescriptionDataInput>
  upsert?: Maybe<KeyUpsertWithoutKeyGearItemCoverageDescriptionInput>
}

export interface KeyUpdateOneWithoutKeyGearItemCoverageTitleInput {
  create?: Maybe<KeyCreateWithoutKeyGearItemCoverageTitleInput>
  connect?: Maybe<KeyWhereUniqueInput>
  disconnect?: Maybe<Scalars['Boolean']>
  delete?: Maybe<Scalars['Boolean']>
  update?: Maybe<KeyUpdateWithoutKeyGearItemCoverageTitleDataInput>
  upsert?: Maybe<KeyUpsertWithoutKeyGearItemCoverageTitleInput>
}

export interface KeyUpdateOneWithoutTranslationsInput {
  create?: Maybe<KeyCreateWithoutTranslationsInput>
  connect?: Maybe<KeyWhereUniqueInput>
  disconnect?: Maybe<Scalars['Boolean']>
  delete?: Maybe<Scalars['Boolean']>
  update?: Maybe<KeyUpdateWithoutTranslationsDataInput>
  upsert?: Maybe<KeyUpsertWithoutTranslationsInput>
}

export interface KeyUpdateWithoutKeyGearItemCoverageDescriptionDataInput {
  status?: Maybe<Status>
  value?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  translations?: Maybe<TranslationUpdateManyWithoutKeyInput>
  keyGearItemCoverageTitle?: Maybe<
    KeyGearItemCoverageUpdateOneWithoutTitleInput
  >
}

export interface KeyUpdateWithoutKeyGearItemCoverageTitleDataInput {
  status?: Maybe<Status>
  value?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  translations?: Maybe<TranslationUpdateManyWithoutKeyInput>
  keyGearItemCoverageDescription?: Maybe<
    KeyGearItemCoverageUpdateOneWithoutDescriptionInput
  >
}

export interface KeyUpdateWithoutTranslationsDataInput {
  status?: Maybe<Status>
  value?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  keyGearItemCoverageTitle?: Maybe<
    KeyGearItemCoverageUpdateOneWithoutTitleInput
  >
  keyGearItemCoverageDescription?: Maybe<
    KeyGearItemCoverageUpdateOneWithoutDescriptionInput
  >
}

export interface KeyUpsertWithoutKeyGearItemCoverageDescriptionInput {
  update: KeyUpdateWithoutKeyGearItemCoverageDescriptionDataInput
  create: KeyCreateWithoutKeyGearItemCoverageDescriptionInput
}

export interface KeyUpsertWithoutKeyGearItemCoverageTitleInput {
  update: KeyUpdateWithoutKeyGearItemCoverageTitleDataInput
  create: KeyCreateWithoutKeyGearItemCoverageTitleInput
}

export interface KeyUpsertWithoutTranslationsInput {
  update: KeyUpdateWithoutTranslationsDataInput
  create: KeyCreateWithoutTranslationsInput
}

export interface KeyWhereInput {
  _search?: Maybe<Scalars['String']>
  /** Logical AND on all given filters. */
  AND?: Maybe<KeyWhereInput[]>
  /** Logical OR on all given filters. */
  OR?: Maybe<KeyWhereInput[]>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<KeyWhereInput[]>
  status?: Maybe<Status>
  /** All values that are not equal to given value. */
  status_not?: Maybe<Status>
  /** All values that are contained in given list. */
  status_in?: Maybe<Status[]>
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Status[]>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>
  value?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  value_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  value_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  value_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  value_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  value_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  value_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  value_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  value_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  value_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  value_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  value_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  value_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  value_not_ends_with?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  description_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  description_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  description_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  description_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  description_not_ends_with?: Maybe<Scalars['String']>
  translations_every?: Maybe<TranslationWhereInput>
  translations_some?: Maybe<TranslationWhereInput>
  translations_none?: Maybe<TranslationWhereInput>
  keyGearItemCoverageTitle?: Maybe<KeyGearItemCoverageWhereInput>
  keyGearItemCoverageDescription?: Maybe<KeyGearItemCoverageWhereInput>
}

export interface KeyWhereUniqueInput {
  id?: Maybe<Scalars['ID']>
  value?: Maybe<Scalars['String']>
}

export type Language = Node & {
  __typename?: 'Language'
  status: Status
  updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  id: Scalars['ID']
  translations?: Maybe<Translation[]>
  code: Scalars['String']
  name: Scalars['String']
  marketingStories?: Maybe<MarketingStory[]>
  faqs?: Maybe<Faq[]>
  importantMessageses?: Maybe<ImportantMessage[]>
  appMarketingImages?: Maybe<AppMarketingImage[]>
}

export interface LanguageTranslationsArgs {
  where?: Maybe<TranslationWhereInput>
  orderBy?: Maybe<TranslationOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export interface LanguageMarketingStoriesArgs {
  where?: Maybe<MarketingStoryWhereInput>
  orderBy?: Maybe<MarketingStoryOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export interface LanguageFaqsArgs {
  where?: Maybe<FaqWhereInput>
  orderBy?: Maybe<FaqOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export interface LanguageImportantMessagesesArgs {
  where?: Maybe<ImportantMessageWhereInput>
  orderBy?: Maybe<ImportantMessageOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export interface LanguageAppMarketingImagesArgs {
  where?: Maybe<AppMarketingImageWhereInput>
  orderBy?: Maybe<AppMarketingImageOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** A connection to a list of items. */
export interface LanguageConnection {
  __typename?: 'LanguageConnection'
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges: Array<Maybe<LanguageEdge>>
  aggregate: AggregateLanguage
}

export interface LanguageCreateInput {
  status?: Maybe<Status>
  code: Scalars['String']
  name: Scalars['String']
  translations?: Maybe<TranslationCreateManyWithoutLanguageInput>
  marketingStories?: Maybe<MarketingStoryCreateManyWithoutLanguageInput>
  faqs?: Maybe<FaqCreateManyWithoutLanguageInput>
  importantMessageses?: Maybe<ImportantMessageCreateManyWithoutLanguageInput>
  appMarketingImages?: Maybe<AppMarketingImageCreateManyWithoutLanguageInput>
}

export interface LanguageCreateOneWithoutAppMarketingImagesInput {
  create?: Maybe<LanguageCreateWithoutAppMarketingImagesInput>
  connect?: Maybe<LanguageWhereUniqueInput>
}

export interface LanguageCreateOneWithoutFaqsInput {
  create?: Maybe<LanguageCreateWithoutFaqsInput>
  connect?: Maybe<LanguageWhereUniqueInput>
}

export interface LanguageCreateOneWithoutImportantMessagesesInput {
  create?: Maybe<LanguageCreateWithoutImportantMessagesesInput>
  connect?: Maybe<LanguageWhereUniqueInput>
}

export interface LanguageCreateOneWithoutMarketingStoriesInput {
  create?: Maybe<LanguageCreateWithoutMarketingStoriesInput>
  connect?: Maybe<LanguageWhereUniqueInput>
}

export interface LanguageCreateOneWithoutTranslationsInput {
  create?: Maybe<LanguageCreateWithoutTranslationsInput>
  connect?: Maybe<LanguageWhereUniqueInput>
}

export interface LanguageCreateWithoutAppMarketingImagesInput {
  status?: Maybe<Status>
  code: Scalars['String']
  name: Scalars['String']
  translations?: Maybe<TranslationCreateManyWithoutLanguageInput>
  marketingStories?: Maybe<MarketingStoryCreateManyWithoutLanguageInput>
  faqs?: Maybe<FaqCreateManyWithoutLanguageInput>
  importantMessageses?: Maybe<ImportantMessageCreateManyWithoutLanguageInput>
}

export interface LanguageCreateWithoutFaqsInput {
  status?: Maybe<Status>
  code: Scalars['String']
  name: Scalars['String']
  translations?: Maybe<TranslationCreateManyWithoutLanguageInput>
  marketingStories?: Maybe<MarketingStoryCreateManyWithoutLanguageInput>
  importantMessageses?: Maybe<ImportantMessageCreateManyWithoutLanguageInput>
  appMarketingImages?: Maybe<AppMarketingImageCreateManyWithoutLanguageInput>
}

export interface LanguageCreateWithoutImportantMessagesesInput {
  status?: Maybe<Status>
  code: Scalars['String']
  name: Scalars['String']
  translations?: Maybe<TranslationCreateManyWithoutLanguageInput>
  marketingStories?: Maybe<MarketingStoryCreateManyWithoutLanguageInput>
  faqs?: Maybe<FaqCreateManyWithoutLanguageInput>
  appMarketingImages?: Maybe<AppMarketingImageCreateManyWithoutLanguageInput>
}

export interface LanguageCreateWithoutMarketingStoriesInput {
  status?: Maybe<Status>
  code: Scalars['String']
  name: Scalars['String']
  translations?: Maybe<TranslationCreateManyWithoutLanguageInput>
  faqs?: Maybe<FaqCreateManyWithoutLanguageInput>
  importantMessageses?: Maybe<ImportantMessageCreateManyWithoutLanguageInput>
  appMarketingImages?: Maybe<AppMarketingImageCreateManyWithoutLanguageInput>
}

export interface LanguageCreateWithoutTranslationsInput {
  status?: Maybe<Status>
  code: Scalars['String']
  name: Scalars['String']
  marketingStories?: Maybe<MarketingStoryCreateManyWithoutLanguageInput>
  faqs?: Maybe<FaqCreateManyWithoutLanguageInput>
  importantMessageses?: Maybe<ImportantMessageCreateManyWithoutLanguageInput>
  appMarketingImages?: Maybe<AppMarketingImageCreateManyWithoutLanguageInput>
}

/** An edge in a connection. */
export interface LanguageEdge {
  __typename?: 'LanguageEdge'
  /** The item at the end of the edge. */
  node: Language
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

export enum LanguageOrderByInput {
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CodeAsc = 'code_ASC',
  CodeDesc = 'code_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
}

export interface LanguagePreviousValues {
  __typename?: 'LanguagePreviousValues'
  status: Status
  updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  id: Scalars['ID']
  code: Scalars['String']
  name: Scalars['String']
}

export interface LanguageSubscriptionPayload {
  __typename?: 'LanguageSubscriptionPayload'
  mutation: MutationType
  node?: Maybe<Language>
  updatedFields?: Maybe<Array<Scalars['String']>>
  previousValues?: Maybe<LanguagePreviousValues>
}

export interface LanguageSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<LanguageSubscriptionWhereInput[]>
  /** Logical OR on all given filters. */
  OR?: Maybe<LanguageSubscriptionWhereInput[]>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<LanguageSubscriptionWhereInput[]>
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>
  node?: Maybe<LanguageWhereInput>
}

export interface LanguageUpdateInput {
  status?: Maybe<Status>
  code?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  translations?: Maybe<TranslationUpdateManyWithoutLanguageInput>
  marketingStories?: Maybe<MarketingStoryUpdateManyWithoutLanguageInput>
  faqs?: Maybe<FaqUpdateManyWithoutLanguageInput>
  importantMessageses?: Maybe<ImportantMessageUpdateManyWithoutLanguageInput>
  appMarketingImages?: Maybe<AppMarketingImageUpdateManyWithoutLanguageInput>
}

export interface LanguageUpdateManyMutationInput {
  status?: Maybe<Status>
  code?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

export interface LanguageUpdateOneWithoutAppMarketingImagesInput {
  create?: Maybe<LanguageCreateWithoutAppMarketingImagesInput>
  connect?: Maybe<LanguageWhereUniqueInput>
  disconnect?: Maybe<Scalars['Boolean']>
  delete?: Maybe<Scalars['Boolean']>
  update?: Maybe<LanguageUpdateWithoutAppMarketingImagesDataInput>
  upsert?: Maybe<LanguageUpsertWithoutAppMarketingImagesInput>
}

export interface LanguageUpdateOneWithoutFaqsInput {
  create?: Maybe<LanguageCreateWithoutFaqsInput>
  connect?: Maybe<LanguageWhereUniqueInput>
  disconnect?: Maybe<Scalars['Boolean']>
  delete?: Maybe<Scalars['Boolean']>
  update?: Maybe<LanguageUpdateWithoutFaqsDataInput>
  upsert?: Maybe<LanguageUpsertWithoutFaqsInput>
}

export interface LanguageUpdateOneWithoutImportantMessagesesInput {
  create?: Maybe<LanguageCreateWithoutImportantMessagesesInput>
  connect?: Maybe<LanguageWhereUniqueInput>
  disconnect?: Maybe<Scalars['Boolean']>
  delete?: Maybe<Scalars['Boolean']>
  update?: Maybe<LanguageUpdateWithoutImportantMessagesesDataInput>
  upsert?: Maybe<LanguageUpsertWithoutImportantMessagesesInput>
}

export interface LanguageUpdateOneWithoutMarketingStoriesInput {
  create?: Maybe<LanguageCreateWithoutMarketingStoriesInput>
  connect?: Maybe<LanguageWhereUniqueInput>
  disconnect?: Maybe<Scalars['Boolean']>
  delete?: Maybe<Scalars['Boolean']>
  update?: Maybe<LanguageUpdateWithoutMarketingStoriesDataInput>
  upsert?: Maybe<LanguageUpsertWithoutMarketingStoriesInput>
}

export interface LanguageUpdateOneWithoutTranslationsInput {
  create?: Maybe<LanguageCreateWithoutTranslationsInput>
  connect?: Maybe<LanguageWhereUniqueInput>
  disconnect?: Maybe<Scalars['Boolean']>
  delete?: Maybe<Scalars['Boolean']>
  update?: Maybe<LanguageUpdateWithoutTranslationsDataInput>
  upsert?: Maybe<LanguageUpsertWithoutTranslationsInput>
}

export interface LanguageUpdateWithoutAppMarketingImagesDataInput {
  status?: Maybe<Status>
  code?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  translations?: Maybe<TranslationUpdateManyWithoutLanguageInput>
  marketingStories?: Maybe<MarketingStoryUpdateManyWithoutLanguageInput>
  faqs?: Maybe<FaqUpdateManyWithoutLanguageInput>
  importantMessageses?: Maybe<ImportantMessageUpdateManyWithoutLanguageInput>
}

export interface LanguageUpdateWithoutFaqsDataInput {
  status?: Maybe<Status>
  code?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  translations?: Maybe<TranslationUpdateManyWithoutLanguageInput>
  marketingStories?: Maybe<MarketingStoryUpdateManyWithoutLanguageInput>
  importantMessageses?: Maybe<ImportantMessageUpdateManyWithoutLanguageInput>
  appMarketingImages?: Maybe<AppMarketingImageUpdateManyWithoutLanguageInput>
}

export interface LanguageUpdateWithoutImportantMessagesesDataInput {
  status?: Maybe<Status>
  code?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  translations?: Maybe<TranslationUpdateManyWithoutLanguageInput>
  marketingStories?: Maybe<MarketingStoryUpdateManyWithoutLanguageInput>
  faqs?: Maybe<FaqUpdateManyWithoutLanguageInput>
  appMarketingImages?: Maybe<AppMarketingImageUpdateManyWithoutLanguageInput>
}

export interface LanguageUpdateWithoutMarketingStoriesDataInput {
  status?: Maybe<Status>
  code?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  translations?: Maybe<TranslationUpdateManyWithoutLanguageInput>
  faqs?: Maybe<FaqUpdateManyWithoutLanguageInput>
  importantMessageses?: Maybe<ImportantMessageUpdateManyWithoutLanguageInput>
  appMarketingImages?: Maybe<AppMarketingImageUpdateManyWithoutLanguageInput>
}

export interface LanguageUpdateWithoutTranslationsDataInput {
  status?: Maybe<Status>
  code?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  marketingStories?: Maybe<MarketingStoryUpdateManyWithoutLanguageInput>
  faqs?: Maybe<FaqUpdateManyWithoutLanguageInput>
  importantMessageses?: Maybe<ImportantMessageUpdateManyWithoutLanguageInput>
  appMarketingImages?: Maybe<AppMarketingImageUpdateManyWithoutLanguageInput>
}

export interface LanguageUpsertWithoutAppMarketingImagesInput {
  update: LanguageUpdateWithoutAppMarketingImagesDataInput
  create: LanguageCreateWithoutAppMarketingImagesInput
}

export interface LanguageUpsertWithoutFaqsInput {
  update: LanguageUpdateWithoutFaqsDataInput
  create: LanguageCreateWithoutFaqsInput
}

export interface LanguageUpsertWithoutImportantMessagesesInput {
  update: LanguageUpdateWithoutImportantMessagesesDataInput
  create: LanguageCreateWithoutImportantMessagesesInput
}

export interface LanguageUpsertWithoutMarketingStoriesInput {
  update: LanguageUpdateWithoutMarketingStoriesDataInput
  create: LanguageCreateWithoutMarketingStoriesInput
}

export interface LanguageUpsertWithoutTranslationsInput {
  update: LanguageUpdateWithoutTranslationsDataInput
  create: LanguageCreateWithoutTranslationsInput
}

export interface LanguageWhereInput {
  _search?: Maybe<Scalars['String']>
  /** Logical AND on all given filters. */
  AND?: Maybe<LanguageWhereInput[]>
  /** Logical OR on all given filters. */
  OR?: Maybe<LanguageWhereInput[]>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<LanguageWhereInput[]>
  status?: Maybe<Status>
  /** All values that are not equal to given value. */
  status_not?: Maybe<Status>
  /** All values that are contained in given list. */
  status_in?: Maybe<Status[]>
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Status[]>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>
  code?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  code_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  code_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  code_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  code_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  code_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  code_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  code_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  code_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  code_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  code_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  code_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  code_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  code_not_ends_with?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>
  translations_every?: Maybe<TranslationWhereInput>
  translations_some?: Maybe<TranslationWhereInput>
  translations_none?: Maybe<TranslationWhereInput>
  marketingStories_every?: Maybe<MarketingStoryWhereInput>
  marketingStories_some?: Maybe<MarketingStoryWhereInput>
  marketingStories_none?: Maybe<MarketingStoryWhereInput>
  faqs_every?: Maybe<FaqWhereInput>
  faqs_some?: Maybe<FaqWhereInput>
  faqs_none?: Maybe<FaqWhereInput>
  importantMessageses_every?: Maybe<ImportantMessageWhereInput>
  importantMessageses_some?: Maybe<ImportantMessageWhereInput>
  importantMessageses_none?: Maybe<ImportantMessageWhereInput>
  appMarketingImages_every?: Maybe<AppMarketingImageWhereInput>
  appMarketingImages_some?: Maybe<AppMarketingImageWhereInput>
  appMarketingImages_none?: Maybe<AppMarketingImageWhereInput>
}

export interface LanguageWhereUniqueInput {
  id?: Maybe<Scalars['ID']>
  code?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

export enum Locale {
  SvSe = 'sv_SE',
  EnSe = 'en_SE',
  NbNo = 'nb_NO',
  EnNo = 'en_NO',
}

export interface LoggingInput {
  timestamp: Scalars['TimeStamp']
  source: LoggingSource
  payload: Scalars['JSONObject']
  severity: LoggingSeverity
}

export enum LoggingSeverity {
  Default = 'DEFAULT',
  Debug = 'DEBUG',
  Info = 'INFO',
  Notice = 'NOTICE',
  Warning = 'WARNING',
  Error = 'ERROR',
  Critical = 'CRITICAL',
  Alert = 'ALERT',
  Emergency = 'EMERGENCY',
}

export enum LoggingSource {
  Ios = 'IOS',
  Android = 'ANDROID',
}

export type MarketingStory = Node & {
  __typename?: 'MarketingStory'
  status: Status
  updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  id: Scalars['ID']
  asset?: Maybe<Asset>
  duration?: Maybe<Scalars['Float']>
  importance?: Maybe<Scalars['Int']>
  backgroundColor: HedvigColor
  environment?: Maybe<Environment>
  language?: Maybe<Language>
}

/** A connection to a list of items. */
export interface MarketingStoryConnection {
  __typename?: 'MarketingStoryConnection'
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges: Array<Maybe<MarketingStoryEdge>>
  aggregate: AggregateMarketingStory
}

export interface MarketingStoryCreateInput {
  status?: Maybe<Status>
  duration?: Maybe<Scalars['Float']>
  importance?: Maybe<Scalars['Int']>
  backgroundColor: HedvigColor
  environment?: Maybe<Environment>
  asset?: Maybe<AssetCreateOneWithoutAssetMarketingStoryInput>
  language?: Maybe<LanguageCreateOneWithoutMarketingStoriesInput>
}

export interface MarketingStoryCreateManyWithoutAssetInput {
  create?: Maybe<MarketingStoryCreateWithoutAssetInput[]>
  connect?: Maybe<MarketingStoryWhereUniqueInput[]>
}

export interface MarketingStoryCreateManyWithoutLanguageInput {
  create?: Maybe<MarketingStoryCreateWithoutLanguageInput[]>
  connect?: Maybe<MarketingStoryWhereUniqueInput[]>
}

export interface MarketingStoryCreateWithoutAssetInput {
  status?: Maybe<Status>
  duration?: Maybe<Scalars['Float']>
  importance?: Maybe<Scalars['Int']>
  backgroundColor: HedvigColor
  environment?: Maybe<Environment>
  language?: Maybe<LanguageCreateOneWithoutMarketingStoriesInput>
}

export interface MarketingStoryCreateWithoutLanguageInput {
  status?: Maybe<Status>
  duration?: Maybe<Scalars['Float']>
  importance?: Maybe<Scalars['Int']>
  backgroundColor: HedvigColor
  environment?: Maybe<Environment>
  asset?: Maybe<AssetCreateOneWithoutAssetMarketingStoryInput>
}

/** An edge in a connection. */
export interface MarketingStoryEdge {
  __typename?: 'MarketingStoryEdge'
  /** The item at the end of the edge. */
  node: MarketingStory
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

export enum MarketingStoryOrderByInput {
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  DurationAsc = 'duration_ASC',
  DurationDesc = 'duration_DESC',
  ImportanceAsc = 'importance_ASC',
  ImportanceDesc = 'importance_DESC',
  BackgroundColorAsc = 'backgroundColor_ASC',
  BackgroundColorDesc = 'backgroundColor_DESC',
  EnvironmentAsc = 'environment_ASC',
  EnvironmentDesc = 'environment_DESC',
}

export interface MarketingStoryPreviousValues {
  __typename?: 'MarketingStoryPreviousValues'
  status: Status
  updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  id: Scalars['ID']
  duration?: Maybe<Scalars['Float']>
  importance?: Maybe<Scalars['Int']>
  backgroundColor: HedvigColor
  environment?: Maybe<Environment>
}

export interface MarketingStoryScalarWhereInput {
  _search?: Maybe<Scalars['String']>
  /** Logical AND on all given filters. */
  AND?: Maybe<MarketingStoryScalarWhereInput[]>
  /** Logical OR on all given filters. */
  OR?: Maybe<MarketingStoryScalarWhereInput[]>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<MarketingStoryScalarWhereInput[]>
  status?: Maybe<Status>
  /** All values that are not equal to given value. */
  status_not?: Maybe<Status>
  /** All values that are contained in given list. */
  status_in?: Maybe<Status[]>
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Status[]>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>
  duration?: Maybe<Scalars['Float']>
  /** All values that are not equal to given value. */
  duration_not?: Maybe<Scalars['Float']>
  /** All values that are contained in given list. */
  duration_in?: Maybe<Array<Scalars['Float']>>
  /** All values that are not contained in given list. */
  duration_not_in?: Maybe<Array<Scalars['Float']>>
  /** All values less than the given value. */
  duration_lt?: Maybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  duration_lte?: Maybe<Scalars['Float']>
  /** All values greater than the given value. */
  duration_gt?: Maybe<Scalars['Float']>
  /** All values greater than or equal the given value. */
  duration_gte?: Maybe<Scalars['Float']>
  importance?: Maybe<Scalars['Int']>
  /** All values that are not equal to given value. */
  importance_not?: Maybe<Scalars['Int']>
  /** All values that are contained in given list. */
  importance_in?: Maybe<Array<Scalars['Int']>>
  /** All values that are not contained in given list. */
  importance_not_in?: Maybe<Array<Scalars['Int']>>
  /** All values less than the given value. */
  importance_lt?: Maybe<Scalars['Int']>
  /** All values less than or equal the given value. */
  importance_lte?: Maybe<Scalars['Int']>
  /** All values greater than the given value. */
  importance_gt?: Maybe<Scalars['Int']>
  /** All values greater than or equal the given value. */
  importance_gte?: Maybe<Scalars['Int']>
  backgroundColor?: Maybe<HedvigColor>
  /** All values that are not equal to given value. */
  backgroundColor_not?: Maybe<HedvigColor>
  /** All values that are contained in given list. */
  backgroundColor_in?: Maybe<HedvigColor[]>
  /** All values that are not contained in given list. */
  backgroundColor_not_in?: Maybe<HedvigColor[]>
  environment?: Maybe<Environment>
  /** All values that are not equal to given value. */
  environment_not?: Maybe<Environment>
  /** All values that are contained in given list. */
  environment_in?: Maybe<Environment[]>
  /** All values that are not contained in given list. */
  environment_not_in?: Maybe<Environment[]>
}

export interface MarketingStorySubscriptionPayload {
  __typename?: 'MarketingStorySubscriptionPayload'
  mutation: MutationType
  node?: Maybe<MarketingStory>
  updatedFields?: Maybe<Array<Scalars['String']>>
  previousValues?: Maybe<MarketingStoryPreviousValues>
}

export interface MarketingStorySubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<MarketingStorySubscriptionWhereInput[]>
  /** Logical OR on all given filters. */
  OR?: Maybe<MarketingStorySubscriptionWhereInput[]>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<MarketingStorySubscriptionWhereInput[]>
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>
  node?: Maybe<MarketingStoryWhereInput>
}

export interface MarketingStoryUpdateInput {
  status?: Maybe<Status>
  duration?: Maybe<Scalars['Float']>
  importance?: Maybe<Scalars['Int']>
  backgroundColor?: Maybe<HedvigColor>
  environment?: Maybe<Environment>
  asset?: Maybe<AssetUpdateOneWithoutAssetMarketingStoryInput>
  language?: Maybe<LanguageUpdateOneWithoutMarketingStoriesInput>
}

export interface MarketingStoryUpdateManyDataInput {
  status?: Maybe<Status>
  duration?: Maybe<Scalars['Float']>
  importance?: Maybe<Scalars['Int']>
  backgroundColor?: Maybe<HedvigColor>
  environment?: Maybe<Environment>
}

export interface MarketingStoryUpdateManyMutationInput {
  status?: Maybe<Status>
  duration?: Maybe<Scalars['Float']>
  importance?: Maybe<Scalars['Int']>
  backgroundColor?: Maybe<HedvigColor>
  environment?: Maybe<Environment>
}

export interface MarketingStoryUpdateManyWithoutAssetInput {
  create?: Maybe<MarketingStoryCreateWithoutAssetInput[]>
  connect?: Maybe<MarketingStoryWhereUniqueInput[]>
  set?: Maybe<MarketingStoryWhereUniqueInput[]>
  disconnect?: Maybe<MarketingStoryWhereUniqueInput[]>
  delete?: Maybe<MarketingStoryWhereUniqueInput[]>
  update?: Maybe<MarketingStoryUpdateWithWhereUniqueWithoutAssetInput[]>
  updateMany?: Maybe<MarketingStoryUpdateManyWithWhereNestedInput[]>
  deleteMany?: Maybe<MarketingStoryScalarWhereInput[]>
  upsert?: Maybe<MarketingStoryUpsertWithWhereUniqueWithoutAssetInput[]>
}

export interface MarketingStoryUpdateManyWithoutLanguageInput {
  create?: Maybe<MarketingStoryCreateWithoutLanguageInput[]>
  connect?: Maybe<MarketingStoryWhereUniqueInput[]>
  set?: Maybe<MarketingStoryWhereUniqueInput[]>
  disconnect?: Maybe<MarketingStoryWhereUniqueInput[]>
  delete?: Maybe<MarketingStoryWhereUniqueInput[]>
  update?: Maybe<MarketingStoryUpdateWithWhereUniqueWithoutLanguageInput[]>
  updateMany?: Maybe<MarketingStoryUpdateManyWithWhereNestedInput[]>
  deleteMany?: Maybe<MarketingStoryScalarWhereInput[]>
  upsert?: Maybe<MarketingStoryUpsertWithWhereUniqueWithoutLanguageInput[]>
}

export interface MarketingStoryUpdateManyWithWhereNestedInput {
  where: MarketingStoryScalarWhereInput
  data: MarketingStoryUpdateManyDataInput
}

export interface MarketingStoryUpdateWithoutAssetDataInput {
  status?: Maybe<Status>
  duration?: Maybe<Scalars['Float']>
  importance?: Maybe<Scalars['Int']>
  backgroundColor?: Maybe<HedvigColor>
  environment?: Maybe<Environment>
  language?: Maybe<LanguageUpdateOneWithoutMarketingStoriesInput>
}

export interface MarketingStoryUpdateWithoutLanguageDataInput {
  status?: Maybe<Status>
  duration?: Maybe<Scalars['Float']>
  importance?: Maybe<Scalars['Int']>
  backgroundColor?: Maybe<HedvigColor>
  environment?: Maybe<Environment>
  asset?: Maybe<AssetUpdateOneWithoutAssetMarketingStoryInput>
}

export interface MarketingStoryUpdateWithWhereUniqueWithoutAssetInput {
  where: MarketingStoryWhereUniqueInput
  data: MarketingStoryUpdateWithoutAssetDataInput
}

export interface MarketingStoryUpdateWithWhereUniqueWithoutLanguageInput {
  where: MarketingStoryWhereUniqueInput
  data: MarketingStoryUpdateWithoutLanguageDataInput
}

export interface MarketingStoryUpsertWithWhereUniqueWithoutAssetInput {
  where: MarketingStoryWhereUniqueInput
  update: MarketingStoryUpdateWithoutAssetDataInput
  create: MarketingStoryCreateWithoutAssetInput
}

export interface MarketingStoryUpsertWithWhereUniqueWithoutLanguageInput {
  where: MarketingStoryWhereUniqueInput
  update: MarketingStoryUpdateWithoutLanguageDataInput
  create: MarketingStoryCreateWithoutLanguageInput
}

export interface MarketingStoryWhereInput {
  _search?: Maybe<Scalars['String']>
  /** Logical AND on all given filters. */
  AND?: Maybe<MarketingStoryWhereInput[]>
  /** Logical OR on all given filters. */
  OR?: Maybe<MarketingStoryWhereInput[]>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<MarketingStoryWhereInput[]>
  status?: Maybe<Status>
  /** All values that are not equal to given value. */
  status_not?: Maybe<Status>
  /** All values that are contained in given list. */
  status_in?: Maybe<Status[]>
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Status[]>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>
  duration?: Maybe<Scalars['Float']>
  /** All values that are not equal to given value. */
  duration_not?: Maybe<Scalars['Float']>
  /** All values that are contained in given list. */
  duration_in?: Maybe<Array<Scalars['Float']>>
  /** All values that are not contained in given list. */
  duration_not_in?: Maybe<Array<Scalars['Float']>>
  /** All values less than the given value. */
  duration_lt?: Maybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  duration_lte?: Maybe<Scalars['Float']>
  /** All values greater than the given value. */
  duration_gt?: Maybe<Scalars['Float']>
  /** All values greater than or equal the given value. */
  duration_gte?: Maybe<Scalars['Float']>
  importance?: Maybe<Scalars['Int']>
  /** All values that are not equal to given value. */
  importance_not?: Maybe<Scalars['Int']>
  /** All values that are contained in given list. */
  importance_in?: Maybe<Array<Scalars['Int']>>
  /** All values that are not contained in given list. */
  importance_not_in?: Maybe<Array<Scalars['Int']>>
  /** All values less than the given value. */
  importance_lt?: Maybe<Scalars['Int']>
  /** All values less than or equal the given value. */
  importance_lte?: Maybe<Scalars['Int']>
  /** All values greater than the given value. */
  importance_gt?: Maybe<Scalars['Int']>
  /** All values greater than or equal the given value. */
  importance_gte?: Maybe<Scalars['Int']>
  backgroundColor?: Maybe<HedvigColor>
  /** All values that are not equal to given value. */
  backgroundColor_not?: Maybe<HedvigColor>
  /** All values that are contained in given list. */
  backgroundColor_in?: Maybe<HedvigColor[]>
  /** All values that are not contained in given list. */
  backgroundColor_not_in?: Maybe<HedvigColor[]>
  environment?: Maybe<Environment>
  /** All values that are not equal to given value. */
  environment_not?: Maybe<Environment>
  /** All values that are contained in given list. */
  environment_in?: Maybe<Environment[]>
  /** All values that are not contained in given list. */
  environment_not_in?: Maybe<Environment[]>
  asset?: Maybe<AssetWhereInput>
  language?: Maybe<LanguageWhereInput>
}

export interface MarketingStoryWhereUniqueInput {
  id?: Maybe<Scalars['ID']>
}

export interface Member {
  __typename?: 'Member'
  id?: Maybe<Scalars['ID']>
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  phoneNumber?: Maybe<Scalars['String']>
  acceptLanguage?: Maybe<Scalars['String']>
  features: Feature[]
}

export interface MemberIsNotEligibleForCampaign {
  __typename?: 'MemberIsNotEligibleForCampaign'
  code: Scalars['String']
}

export interface Message {
  __typename?: 'Message'
  globalId: Scalars['ID']
  id: Scalars['ID']
  body: MessageBody
  header: MessageHeader
}

export type MessageBody =
  | MessageBodySingleSelect
  | MessageBodyMultipleSelect
  | MessageBodyText
  | MessageBodyNumber
  | MessageBodyAudio
  | MessageBodyBankIdCollect
  | MessageBodyFile
  | MessageBodyParagraph
  | MessageBodyUndefined

export type MessageBodyAudio = MessageBodyCore & {
  __typename?: 'MessageBodyAudio'
  type: Scalars['String']
  id: Scalars['ID']
  text: Scalars['String']
  url?: Maybe<Scalars['String']>
}

export type MessageBodyBankIdCollect = MessageBodyCore & {
  __typename?: 'MessageBodyBankIdCollect'
  type: Scalars['String']
  id: Scalars['ID']
  text: Scalars['String']
  referenceId?: Maybe<Scalars['String']>
}

export type MessageBodyChoices =
  | MessageBodyChoicesUndefined
  | MessageBodyChoicesSelection
  | MessageBodyChoicesLink

export interface MessageBodyChoicesCore {
  type: Scalars['String']
  value: Scalars['String']
  text: Scalars['String']
  selected: Scalars['Boolean']
}

export type MessageBodyChoicesLink = MessageBodyChoicesCore & {
  __typename?: 'MessageBodyChoicesLink'
  type: Scalars['String']
  value: Scalars['String']
  text: Scalars['String']
  selected: Scalars['Boolean']
  view?: Maybe<MessageBodyChoicesLinkView>
  appUrl?: Maybe<Scalars['String']>
  webUrl?: Maybe<Scalars['String']>
}

export enum MessageBodyChoicesLinkView {
  Offer = 'OFFER',
  Dashboard = 'DASHBOARD',
}

export type MessageBodyChoicesSelection = MessageBodyChoicesCore & {
  __typename?: 'MessageBodyChoicesSelection'
  type: Scalars['String']
  value: Scalars['String']
  text: Scalars['String']
  selected: Scalars['Boolean']
  clearable?: Maybe<Scalars['Boolean']>
}

export type MessageBodyChoicesUndefined = MessageBodyChoicesCore & {
  __typename?: 'MessageBodyChoicesUndefined'
  type: Scalars['String']
  value: Scalars['String']
  text: Scalars['String']
  selected: Scalars['Boolean']
}

export interface MessageBodyCore {
  type: Scalars['String']
  id: Scalars['ID']
  text: Scalars['String']
}

export type MessageBodyFile = MessageBodyCore & {
  __typename?: 'MessageBodyFile'
  type: Scalars['String']
  id: Scalars['ID']
  text: Scalars['String']
  key?: Maybe<Scalars['String']>
  mimeType?: Maybe<Scalars['String']>
  file: File
}

export type MessageBodyMultipleSelect = MessageBodyCore & {
  __typename?: 'MessageBodyMultipleSelect'
  type: Scalars['String']
  id: Scalars['ID']
  text: Scalars['String']
  choices?: Maybe<Array<Maybe<MessageBodyChoices>>>
}

export type MessageBodyNumber = MessageBodyCore & {
  __typename?: 'MessageBodyNumber'
  type: Scalars['String']
  id: Scalars['ID']
  text: Scalars['String']
  placeholder?: Maybe<Scalars['String']>
  keyboard?: Maybe<KeyboardType>
  textContentType?: Maybe<TextContentType>
}

export type MessageBodyParagraph = MessageBodyCore & {
  __typename?: 'MessageBodyParagraph'
  type: Scalars['String']
  id: Scalars['ID']
  text: Scalars['String']
}

export type MessageBodySingleSelect = MessageBodyCore & {
  __typename?: 'MessageBodySingleSelect'
  type: Scalars['String']
  id: Scalars['ID']
  text: Scalars['String']
  choices?: Maybe<Array<Maybe<MessageBodyChoices>>>
}

export type MessageBodyText = MessageBodyCore & {
  __typename?: 'MessageBodyText'
  type: Scalars['String']
  id: Scalars['ID']
  text: Scalars['String']
  placeholder?: Maybe<Scalars['String']>
  keyboard?: Maybe<KeyboardType>
  textContentType?: Maybe<TextContentType>
}

export type MessageBodyUndefined = MessageBodyCore & {
  __typename?: 'MessageBodyUndefined'
  type: Scalars['String']
  id: Scalars['ID']
  text: Scalars['String']
}

export interface MessageHeader {
  __typename?: 'MessageHeader'
  messageId: Scalars['ID']
  fromMyself: Scalars['Boolean']
  timeStamp: Scalars['String']
  richTextChatCompatible: Scalars['Boolean']
  editAllowed: Scalars['Boolean']
  shouldRequestPushNotifications: Scalars['Boolean']
  pollingInterval: Scalars['Int']
  loadingIndicator?: Maybe<Scalars['String']>
  markedAsRead: Scalars['Boolean']
  statusMessage?: Maybe<Scalars['String']>
}

export interface MonetaryAmountInput {
  amount: Scalars['String']
  currency: Scalars['String']
}

export interface MonetaryAmountV2 {
  __typename?: 'MonetaryAmountV2'
  amount: Scalars['String']
  currency: Scalars['String']
}

export interface MonetaryAmountV2Input {
  amount: Scalars['String']
  currency: Scalars['String']
}

export interface MonthlyCostDeduction {
  __typename?: 'MonthlyCostDeduction'
  amount?: Maybe<MonetaryAmountV2>
}

export interface Mutation {
  __typename?: 'Mutation'
  logout: Scalars['Boolean']
  createSession: Scalars['String']
  createSessionV2?: Maybe<SessionInformation>
  createOffer?: Maybe<Scalars['Boolean']>
  /** @deprecated Use `signOfferV2`. */
  signOffer?: Maybe<Scalars['Boolean']>
  signOfferV2: BankIdSignResponse
  uploadFile: File
  uploadFiles?: Maybe<File[]>
  selectCashbackOption: Cashback
  offerClosed: Scalars['Boolean']
  startDirectDebitRegistration: Scalars['URL']
  sendChatTextResponse: Scalars['Boolean']
  sendChatSingleSelectResponse: Scalars['Boolean']
  sendChatFileResponse: Scalars['Boolean']
  sendChatAudioResponse: Scalars['Boolean']
  resetConversation: Scalars['Boolean']
  editLastResponse: Scalars['Boolean']
  updateEmail: Member
  updatePhoneNumber: Member
  registerPushToken?: Maybe<Scalars['Boolean']>
  triggerFreeTextChat?: Maybe<Scalars['Boolean']>
  triggerClaimChat?: Maybe<Scalars['Boolean']>
  triggerCallMeChat?: Maybe<Scalars['Boolean']>
  emailSign?: Maybe<Scalars['Boolean']>
  markMessageAsRead: Message
  log?: Maybe<Scalars['Boolean']>
  /** @deprecated Use `swedishBankIdAuth`. */
  bankIdAuth: BankIdAuthResponse
  swedishBankIdAuth: BankIdAuthResponse
  norwegianBankIdAuth: NorwegianBankIdAuthResponse
  registerBranchCampaign?: Maybe<Scalars['Boolean']>
  updateLanguage: Scalars['Boolean']
  updatePickedLocale: Member
  exchangeToken: ExchangeTokenResponse
  registerDirectDebit: DirectDebitResponse
  cancelDirectDebitRequest: CancelDirectDebitStatus
  /** Tokenize payment details per member in order to be used in future and returns the status */
  tokenizePaymentDetails?: Maybe<TokenizationResponse>
  /** Submite additional payment details */
  submitAdditionalPaymentDetails: AdditionalPaymentsDetailsResponse
  submitAdyenRedirection: SubmitAdyenRedirectionResponse
  /**
   * Will be called from the client when 1) redeem manually a code, 2) click the link  --Fails if the code is invalid?--
   * @deprecated Use redeemCodeOnV2
   */
  redeemCode: RedemedCodeResult
  redeemCodeV2: RedeemedCodeV2Result
  /** @deprecated Use removeDiscountCodeV2 */
  removeDiscountCode: RedemedCodeResult
  removeAllDiscountCodes: RemoveCampaignCodeResult
  updateReferralCampaignCode: UpdateReferralCampaignCodeResult
  externalInsuranceProvider?: Maybe<ExternalInsuranceProviderMutation>
  createQuote: CreateQuoteResult
  editQuote: CreateQuoteResult
  removeCurrentInsurer: CreateQuoteResult
  removeStartDate: CreateQuoteResult
  signQuotes: StartSignResponse
  createKeyGearItem: KeyGearItem
  addPhotoToKeyGearItem: KeyGearItem
  deletePhotoFromKeyGearItem: KeyGearItem
  addReceiptToKeyGearItem: KeyGearItem
  deleteReceiptFromKeyGearItem: KeyGearItem
  updateCategoryForKeyGearItem: KeyGearItem
  /** # send null to remove */
  updatePurchasePriceForKeyGearItem: KeyGearItem
  /** # send null to remove */
  updateTimeOfPurchaseForKeyGearItem: KeyGearItem
  updateKeyGearItemName: KeyGearItem
  /**
   * """
   * When we've deleted an item, we mark it as deleted and should probably redact all information
   * except for the physicalReferenceHash.
   * """
   */
  deleteKeyGearItem: KeyGearItem
}

export interface MutationCreateSessionArgs {
  campaign?: Maybe<CampaignInput>
  trackingId?: Maybe<Scalars['UUID']>
}

export interface MutationCreateOfferArgs {
  details: OfferInput
}

export interface MutationSignOfferArgs {
  details: SignInput
}

export interface MutationSignOfferV2Args {
  details?: Maybe<SignInput>
}

export interface MutationUploadFileArgs {
  file: Scalars['Upload']
}

export interface MutationUploadFilesArgs {
  files: Array<Scalars['Upload']>
}

export interface MutationSelectCashbackOptionArgs {
  id: Scalars['ID']
}

export interface MutationSendChatTextResponseArgs {
  input: ChatResponseTextInput
}

export interface MutationSendChatSingleSelectResponseArgs {
  input: ChatResponseSingleSelectInput
}

export interface MutationSendChatFileResponseArgs {
  input: ChatResponseFileInput
}

export interface MutationSendChatAudioResponseArgs {
  input: ChatResponseAudioInput
}

export interface MutationUpdateEmailArgs {
  input: Scalars['String']
}

export interface MutationUpdatePhoneNumberArgs {
  input: Scalars['String']
}

export interface MutationRegisterPushTokenArgs {
  pushToken: Scalars['String']
}

export interface MutationTriggerClaimChatArgs {
  input: TriggerClaimChatInput
}

export interface MutationMarkMessageAsReadArgs {
  globalId: Scalars['ID']
}

export interface MutationLogArgs {
  input: LoggingInput
}

export interface MutationRegisterBranchCampaignArgs {
  campaign: CampaignInput
}

export interface MutationUpdateLanguageArgs {
  input: Scalars['String']
}

export interface MutationUpdatePickedLocaleArgs {
  pickedLocale: Locale
}

export interface MutationExchangeTokenArgs {
  input: ExchangeTokenInput
}

export interface MutationRegisterDirectDebitArgs {
  clientContext?: Maybe<RegisterDirectDebitClientContext>
}

export interface MutationTokenizePaymentDetailsArgs {
  req?: Maybe<TokenizationRequest>
}

export interface MutationSubmitAdditionalPaymentDetailsArgs {
  req?: Maybe<AdditionalPaymentsDetailsRequest>
}

export interface MutationSubmitAdyenRedirectionArgs {
  req?: Maybe<SubmitAdyenRedirectionRequest>
}

export interface MutationRedeemCodeArgs {
  code: Scalars['String']
}

export interface MutationRedeemCodeV2Args {
  code: Scalars['String']
  grossPrice?: Maybe<MonetaryAmountInput>
}

export interface MutationRemoveAllDiscountCodesArgs {
  grossPrice?: Maybe<MonetaryAmountInput>
}

export interface MutationUpdateReferralCampaignCodeArgs {
  code: Scalars['String']
}

export interface MutationCreateQuoteArgs {
  input: CreateQuoteInput
}

export interface MutationEditQuoteArgs {
  input: EditQuoteInput
}

export interface MutationRemoveCurrentInsurerArgs {
  input: RemoveCurrentInsurerInput
}

export interface MutationRemoveStartDateArgs {
  input: RemoveStartDateInput
}

export interface MutationSignQuotesArgs {
  input: SignQuotesInput
}

export interface MutationCreateKeyGearItemArgs {
  input: CreateKeyGearItemInput
}

export interface MutationAddPhotoToKeyGearItemArgs {
  input: AddPhotoToKeyGearItemInput
}

export interface MutationDeletePhotoFromKeyGearItemArgs {
  itemId: Scalars['ID']
  id: Scalars['ID']
}

export interface MutationAddReceiptToKeyGearItemArgs {
  input: AddReceiptToKeyGearItemInput
}

export interface MutationDeleteReceiptFromKeyGearItemArgs {
  itemId: Scalars['ID']
  id: Scalars['ID']
}

export interface MutationUpdateCategoryForKeyGearItemArgs {
  itemId: Scalars['ID']
  category: KeyGearItemCategory
}

export interface MutationUpdatePurchasePriceForKeyGearItemArgs {
  itemId: Scalars['ID']
  newPrice?: Maybe<MonetaryAmountV2Input>
}

export interface MutationUpdateTimeOfPurchaseForKeyGearItemArgs {
  id: Scalars['ID']
  newTimeOfPurchase?: Maybe<Scalars['LocalDate']>
}

export interface MutationUpdateKeyGearItemNameArgs {
  itemId: Scalars['ID']
  updatedName?: Maybe<Scalars['String']>
}

export interface MutationDeleteKeyGearItemArgs {
  id: Scalars['ID']
}

export enum MutationType {
  Created = 'CREATED',
  Updated = 'UPDATED',
  Deleted = 'DELETED',
}

/** A page in the `What's new`-screen in the app */
export interface News {
  __typename?: 'News'
  /** Illustration shown for the page */
  illustration: Icon
  /** Text key for the title of the page */
  title: Scalars['String']
  /** Text key for the paragraph shown below the title */
  paragraph: Scalars['String']
}

/** An object with an ID */
export interface Node {
  /** The id of the object. */
  id: Scalars['ID']
}

export interface NoDiscount {
  __typename?: 'NoDiscount'
  _?: Maybe<Scalars['Boolean']>
}

export interface NorwegianBankIdAuthResponse {
  __typename?: 'NorwegianBankIdAuthResponse'
  redirectUrl: Scalars['String']
}

export interface NorwegianBankIdSession {
  __typename?: 'NorwegianBankIdSession'
  redirectUrl?: Maybe<Scalars['String']>
}

export type NorwegianHomeContentAgreement = AgreementCore & {
  __typename?: 'NorwegianHomeContentAgreement'
  id: Scalars['ID']
  activeFrom?: Maybe<Scalars['LocalDate']>
  activeTo?: Maybe<Scalars['LocalDate']>
  premium: MonetaryAmountV2
  certificateUrl?: Maybe<Scalars['String']>
  status: AgreementStatus
  address: Address
  numberCoInsured: Scalars['Int']
  squareMeters: Scalars['Int']
  type?: Maybe<NorwegianHomeContentLineOfBusiness>
}

export enum NorwegianHomeContentLineOfBusiness {
  YouthRent = 'YOUTH_RENT',
  Rent = 'RENT',
  YouthOwn = 'YOUTH_OWN',
  Own = 'OWN',
}

export interface NorwegianHomeContentsDetails {
  __typename?: 'NorwegianHomeContentsDetails'
  street: Scalars['String']
  zipCode: Scalars['String']
  coInsured: Scalars['Int']
  livingSpace: Scalars['Int']
  isYouth: Scalars['Boolean']
  type: NorwegianHomeContentsType
}

export enum NorwegianHomeContentsType {
  Rent = 'RENT',
  Own = 'OWN',
}

export type NorwegianTravelAgreement = AgreementCore & {
  __typename?: 'NorwegianTravelAgreement'
  id: Scalars['ID']
  activeFrom?: Maybe<Scalars['LocalDate']>
  activeTo?: Maybe<Scalars['LocalDate']>
  premium: MonetaryAmountV2
  certificateUrl?: Maybe<Scalars['String']>
  status: AgreementStatus
  numberCoInsured: Scalars['Int']
  type?: Maybe<NorwegianTravelLineOfBusiness>
}

export interface NorwegianTravelDetails {
  __typename?: 'NorwegianTravelDetails'
  coInsured: Scalars['Int']
  isYouth: Scalars['Boolean']
}

export enum NorwegianTravelLineOfBusiness {
  Regular = 'REGULAR',
  Youth = 'YOUTH',
}

export interface OfferEvent {
  __typename?: 'OfferEvent'
  status: OfferStatus
  insurance?: Maybe<Insurance>
}

export interface OfferInput {
  firstName: Scalars['String']
  lastName: Scalars['String']
  age: Scalars['Int']
  address: Scalars['String']
  postalNumber: Scalars['String']
  city?: Maybe<Scalars['String']>
  insuranceType: InsuranceType
  squareMeters: Scalars['Int']
  personsInHousehold: Scalars['Int']
  previousInsurer?: Maybe<Scalars['String']>
}

export enum OfferStatus {
  Success = 'SUCCESS',
  Fail = 'FAIL',
}

/** Information about pagination in a connection. */
export interface PageInfo {
  __typename?: 'PageInfo'
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>
}

export enum PayinMethodStatus {
  Active = 'ACTIVE',
  Pending = 'PENDING',
  NeedsSetup = 'NEEDS_SETUP',
}

/** The contract is neither active or terminated, waiting to have an inception date set */
export interface PendingStatus {
  __typename?: 'PendingStatus'
  pendingSince?: Maybe<Scalars['LocalDate']>
}

export interface PercentageDiscountMonths {
  __typename?: 'PercentageDiscountMonths'
  percentageDiscount: Scalars['Float']
  quantity: Scalars['Int']
}

export interface Peril {
  __typename?: 'Peril'
  id?: Maybe<Scalars['ID']>
  title?: Maybe<Scalars['String']>
  imageUrl?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
}

export interface PerilCategory {
  __typename?: 'PerilCategory'
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  iconUrl?: Maybe<Scalars['String']>
  perils?: Maybe<Array<Maybe<Peril>>>
}

export interface PerilV2 {
  __typename?: 'PerilV2'
  title: Scalars['String']
  shortDescription: Scalars['String']
  description: Scalars['String']
  covered: Array<Scalars['String']>
  exceptions: Array<Scalars['String']>
  info: Scalars['String']
  icon: Icon
  iconName: Scalars['String']
}

export interface PersonalInformation {
  __typename?: 'PersonalInformation'
  firstName: Scalars['String']
  lastName: Scalars['String']
  streetAddress: Scalars['String']
  postalNumber: Scalars['String']
  city: Scalars['String']
}

export interface PersonalInformationInput {
  personalNumber: Scalars['String']
}

export enum Platform {
  Android = 'Android',
  IOs = 'iOS',
}

export interface PreviousInsurer {
  __typename?: 'PreviousInsurer'
  displayName?: Maybe<Scalars['String']>
  id: Scalars['ID']
  switchable: Scalars['Boolean']
}

export enum Project {
  Web = 'Web',
  WebOnboarding = 'WebOnboarding',
  App = 'App',
  All = 'All',
  Android = 'Android',
  Ios = 'IOS',
  AppContentService = 'AppContentService',
  BotService = 'BotService',
  ProductPricing = 'ProductPricing',
  NotificationService = 'NotificationService',
  Underwriter = 'Underwriter',
  MemberService = 'MemberService',
}

export interface ProviderStatus {
  __typename?: 'ProviderStatus'
  functional: Scalars['Boolean']
  insuranceProvider: Scalars['String']
}

export interface Query {
  __typename?: 'Query'
  languages: Array<Maybe<Language>>
  marketingStories: Array<Maybe<MarketingStory>>
  coreMLModels: Array<Maybe<CoreMlModel>>
  keyGearItemCoverages: Array<Maybe<KeyGearItemCoverage>>
  importantMessages: Array<Maybe<ImportantMessage>>
  appMarketingImages: Array<Maybe<AppMarketingImage>>
  insurance: Insurance
  cashback?: Maybe<Cashback>
  cashbackOptions: Array<Maybe<Cashback>>
  signStatus?: Maybe<SignStatus>
  member: Member
  gifs: Array<Maybe<Gif>>
  file: File
  messages: Array<Maybe<Message>>
  currentChatResponse?: Maybe<ChatResponse>
  chatState: ChatState
  avatars?: Maybe<Array<Maybe<Avatar>>>
  chatActions?: Maybe<Array<Maybe<ChatAction>>>
  geo: Geo
  angelStory?: Maybe<AngelStory>
  gateway__?: Maybe<Scalars['Boolean']>
  bankAccount?: Maybe<BankAccount>
  /** @deprecated Use `nextChargeDate` */
  chargeDate: Scalars['LocalDate']
  nextChargeDate?: Maybe<Scalars['LocalDate']>
  /** @deprecated Use `directDebitStatus` */
  registerAccountProcessingStatus: RegisterAccountProcessingStatus
  /** @deprecated Use `payinMethodStatus` */
  directDebitStatus: DirectDebitStatus
  /** Returns the status for the payin method (Trustly's direct debit for Sweden) (Adyen for Norway) */
  payinMethodStatus: PayinMethodStatus
  /** Returns all the available payments methods before the client requests a tokenization */
  availablePaymentMethods: AvailablePaymentMethodsResponse
  /** Returns the active payment method which the member chose to tokenize */
  activePaymentMethods?: Maybe<ActivePaymentMethodsResponse>
  adyenPublicKey: Scalars['String']
  /** Returns campaign associated with code */
  campaign: Campaign
  /** Returns information about the authed member's referralCampaign and referrals */
  referralInformation: Referrals
  /** Returns redeemed campaigns belonging to authedUser */
  redeemedCampaigns: Campaign[]
  /** Returns all contracts the member currently holds, regardless of activation/termination status */
  contracts: Contract[]
  /** Returns the aggregated insurance cost of a member's PENDING, ACTIVE or ACTIVE_IN_FUTURE current agreements */
  insuranceCost?: Maybe<InsuranceCost>
  /** Returns whether a member has at least one contract */
  hasContract: Scalars['Boolean']
  /** Returns whether a member is eligible to create a claim, i.e. if a member has an active contract */
  isEligibleToCreateClaim: Scalars['Boolean']
  balance: Balance
  chargeEstimation: ChargeEstimation
  chargeHistory: Charge[]
  personalInformation?: Maybe<PersonalInformation>
  houseInformation?: Maybe<HouseInformation>
  externalInsuranceProvider?: Maybe<ExternalInsuranceProvider>
  quote: Quote
  lastQuoteOfMember: Quote
  quoteBundle: QuoteBundle
  commonClaims: CommonClaim[]
  news: News[]
  welcome: Welcome[]
  perils: PerilV2[]
  insuranceTerms: InsuranceTerm[]
  termsAndConditions: InsuranceTerm
  insuranceCompanies: InsuranceCompanyType
  insurableLimits: InsurableLimit[]
  referralTerms: ReferralTerm
  embarkStory?: Maybe<EmbarkStory>
  /** Used */
  keyGearItems: KeyGearItem[]
  keyGearItem?: Maybe<KeyGearItem>
}

export interface QueryLanguagesArgs {
  where?: Maybe<LanguageWhereInput>
  orderBy?: Maybe<LanguageOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export interface QueryMarketingStoriesArgs {
  where?: Maybe<MarketingStoryWhereInput>
  orderBy?: Maybe<MarketingStoryOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export interface QueryCoreMlModelsArgs {
  where?: Maybe<CoreMlModelWhereInput>
  orderBy?: Maybe<CoreMlModelOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export interface QueryKeyGearItemCoveragesArgs {
  where?: Maybe<KeyGearItemCoverageWhereInput>
  orderBy?: Maybe<KeyGearItemCoverageOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export interface QueryImportantMessagesArgs {
  where?: Maybe<ImportantMessageWhereInput>
  orderBy?: Maybe<ImportantMessageOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export interface QueryAppMarketingImagesArgs {
  where?: Maybe<AppMarketingImageWhereInput>
  orderBy?: Maybe<AppMarketingImageOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export interface QueryGifsArgs {
  query: Scalars['String']
}

export interface QueryFileArgs {
  key: Scalars['String']
}

export interface QueryAngelStoryArgs {
  name: Scalars['String']
}

export interface QueryCampaignArgs {
  code: Scalars['String']
}

export interface QueryPersonalInformationArgs {
  input: PersonalInformationInput
}

export interface QueryHouseInformationArgs {
  input: HouseInformationInput
}

export interface QueryQuoteArgs {
  id?: Maybe<Scalars['ID']>
}

export interface QueryQuoteBundleArgs {
  input: QuoteBundleInput
}

export interface QueryCommonClaimsArgs {
  locale: Locale
}

export interface QueryNewsArgs {
  platform: Platform
  sinceVersion: Scalars['String']
  locale: Locale
}

export interface QueryWelcomeArgs {
  platform: Platform
  locale: Locale
}

export interface QueryPerilsArgs {
  contractType: TypeOfContract
  locale: Locale
}

export interface QueryInsuranceTermsArgs {
  contractType: TypeOfContract
  locale: Locale
}

export interface QueryTermsAndConditionsArgs {
  contractType: TypeOfContract
  locale: Locale
}

export interface QueryInsuranceCompaniesArgs {
  contractType: TypeOfContract
}

export interface QueryInsurableLimitsArgs {
  contractType: TypeOfContract
  locale: Locale
}

export interface QueryReferralTermsArgs {
  locale: Locale
}

export interface QueryEmbarkStoryArgs {
  name: Scalars['String']
}

export interface QueryKeyGearItemsArgs {
  where?: Maybe<KeyGearItemsFilter>
}

export interface QueryKeyGearItemArgs {
  id: Scalars['ID']
}

export type Quote = CompleteQuote | IncompleteQuote

export interface QuoteBundle {
  __typename?: 'QuoteBundle'
  quotes: BundledQuote[]
  bundleCost: InsuranceCost
}

export interface QuoteBundleInput {
  ids: Array<Scalars['ID']>
}

export type QuoteDetails =
  | SwedishApartmentQuoteDetails
  | SwedishHouseQuoteDetails
  | NorwegianHomeContentsDetails
  | NorwegianTravelDetails

export type RedeemedCodeV2Result =
  | SuccessfulRedeemResult
  | CannotRedeemOwnCampaign
  | CampaignCannotBeCombinedWithExisting
  | CannotRedeemEmptyCode
  | CampaignHasExpired
  | MemberIsNotEligibleForCampaign
  | CampaignDoesNotExist
  | CannotRedeemCampaignFromDifferentMarket

export interface RedemedCodeResult {
  __typename?: 'RedemedCodeResult'
  /** The currently redeemed incentive, this can be null */
  campaigns: Campaign[]
  cost: InsuranceCost
}

export type Referral =
  | ActiveReferral
  | InProgressReferral
  | AcceptedReferral
  | TerminatedReferral

export interface Referrals {
  __typename?: 'Referrals'
  campaign: Campaign
  referredBy?: Maybe<Referral>
  invitations: Referral[]
  costReducedIndefiniteDiscount?: Maybe<InsuranceCost>
}

export interface ReferralTerm {
  __typename?: 'ReferralTerm'
  url: Scalars['URL']
}

export enum RegisterAccountProcessingStatus {
  NotInitiated = 'NOT_INITIATED',
  Initiated = 'INITIATED',
  Requested = 'REQUESTED',
  InProgress = 'IN_PROGRESS',
  Confirmed = 'CONFIRMED',
  Cancelled = 'CANCELLED',
}

export interface RegisterDirectDebitClientContext {
  successUrl: Scalars['String']
  failureUrl: Scalars['String']
}

export type RemoveCampaignCodeResult =
  | SuccessfullyRemovedCampaignsResult
  | CannotRemoveActiveCampaignCode

export interface RemoveCurrentInsurerInput {
  id: Scalars['ID']
}

export interface RemoveStartDateInput {
  id: Scalars['ID']
}

export interface Renewal {
  __typename?: 'Renewal'
  certificateUrl: Scalars['String']
  date: Scalars['LocalDate']
}

export interface S3File {
  __typename?: 'S3File'
  preSignedUrl: Scalars['String']
}

export interface S3FileInput {
  bucket: Scalars['String']
  key: Scalars['String']
}

export interface SessionInformation {
  __typename?: 'SessionInformation'
  token: Scalars['String']
  memberId: Scalars['String']
}

export interface SignEvent {
  __typename?: 'SignEvent'
  status?: Maybe<SignStatus>
}

export interface SignInput {
  personalNumber: Scalars['String']
  email: Scalars['String']
}

export interface SignQuotesInput {
  quoteIds: Array<Scalars['ID']>
  successUrl?: Maybe<Scalars['String']>
  failUrl?: Maybe<Scalars['String']>
}

export enum SignState {
  Initiated = 'INITIATED',
  InProgress = 'IN_PROGRESS',
  Failed = 'FAILED',
  Completed = 'COMPLETED',
}

export interface SignStatus {
  __typename?: 'SignStatus'
  collectStatus?: Maybe<CollectStatus>
  signState?: Maybe<SignState>
}

export type StartSignResponse =
  | SwedishBankIdSession
  | NorwegianBankIdSession
  | FailedToStartSign

export enum Status {
  Draft = 'DRAFT',
  Published = 'PUBLISHED',
  Archived = 'ARCHIVED',
}

export interface StoredPaymentMethodsDetails {
  __typename?: 'StoredPaymentMethodsDetails'
  id: Scalars['String']
  cardName?: Maybe<Scalars['String']>
  brand?: Maybe<Scalars['String']>
  lastFourDigits: Scalars['String']
  expiryMonth: Scalars['String']
  expiryYear: Scalars['String']
  holderName?: Maybe<Scalars['String']>
}

export interface SubmitAdyenRedirectionRequest {
  md: Scalars['String']
  pares: Scalars['String']
}

export interface SubmitAdyenRedirectionResponse {
  __typename?: 'SubmitAdyenRedirectionResponse'
  resultCode: Scalars['String']
}

export interface Subscription {
  __typename?: 'Subscription'
  offer?: Maybe<OfferEvent>
  signStatus?: Maybe<SignEvent>
  message: Message
  currentChatResponse?: Maybe<ChatResponse>
  chatState: ChatState
  authStatus?: Maybe<AuthEvent>
  dataCollectionStatus?: Maybe<DataCollectingStatusResponse>
}

export interface SubscriptionCurrentChatResponseArgs {
  mostRecentTimestamp: Scalars['String']
}

export interface SubscriptionChatStateArgs {
  mostRecentTimestamp: Scalars['String']
}

export interface SubscriptionDataCollectionStatusArgs {
  reference: Scalars['ID']
}

export interface SuccessfullyRemovedCampaignsResult {
  __typename?: 'SuccessfullyRemovedCampaignsResult'
  campaignCodes: Array<Scalars['String']>
  insuranceCost?: Maybe<InsuranceCost>
}

export interface SuccessfullyUpdatedCode {
  __typename?: 'SuccessfullyUpdatedCode'
  code: Scalars['String']
}

export interface SuccessfulRedeemResult {
  __typename?: 'SuccessfulRedeemResult'
  campaigns: Campaign[]
  cost?: Maybe<InsuranceCost>
}

export type SwedishApartmentAgreement = AgreementCore & {
  __typename?: 'SwedishApartmentAgreement'
  id: Scalars['ID']
  activeFrom?: Maybe<Scalars['LocalDate']>
  activeTo?: Maybe<Scalars['LocalDate']>
  premium: MonetaryAmountV2
  certificateUrl?: Maybe<Scalars['String']>
  status: AgreementStatus
  address: Address
  numberCoInsured: Scalars['Int']
  squareMeters: Scalars['Int']
  type: SwedishApartmentLineOfBusiness
}

export enum SwedishApartmentLineOfBusiness {
  Rent = 'RENT',
  Brf = 'BRF',
  StudentRent = 'STUDENT_RENT',
  StudentBrf = 'STUDENT_BRF',
}

export interface SwedishApartmentQuoteDetails {
  __typename?: 'SwedishApartmentQuoteDetails'
  street: Scalars['String']
  zipCode: Scalars['String']
  householdSize: Scalars['Int']
  livingSpace: Scalars['Int']
  type: ApartmentType
}

export interface SwedishBankIdSession {
  __typename?: 'SwedishBankIdSession'
  autoStartToken?: Maybe<Scalars['String']>
}

export type SwedishHouseAgreement = AgreementCore & {
  __typename?: 'SwedishHouseAgreement'
  id: Scalars['ID']
  activeFrom?: Maybe<Scalars['LocalDate']>
  activeTo?: Maybe<Scalars['LocalDate']>
  premium: MonetaryAmountV2
  certificateUrl?: Maybe<Scalars['String']>
  status: AgreementStatus
  address: Address
  numberCoInsured: Scalars['Int']
  squareMeters: Scalars['Int']
  ancillaryArea: Scalars['Int']
  yearOfConstruction: Scalars['Int']
  numberOfBathrooms: Scalars['Int']
  extraBuildings: Array<Maybe<ExtraBuilding>>
  isSubleted: Scalars['Boolean']
}

export interface SwedishHouseQuoteDetails {
  __typename?: 'SwedishHouseQuoteDetails'
  street: Scalars['String']
  zipCode: Scalars['String']
  householdSize: Scalars['Int']
  livingSpace: Scalars['Int']
  ancillarySpace: Scalars['Int']
  extraBuildings: ExtraBuilding[]
  numberOfBathrooms: Scalars['Int']
  yearOfConstruction: Scalars['Int']
  isSubleted: Scalars['Boolean']
}

/** The contract is active today but will be terminated in the future, i.e. is active today but will not be in the future */
export interface TerminatedInFutureStatus {
  __typename?: 'TerminatedInFutureStatus'
  futureTermination?: Maybe<Scalars['LocalDate']>
}

export interface TerminatedReferral {
  __typename?: 'TerminatedReferral'
  name?: Maybe<Scalars['String']>
}

/**
 * The contract has been terminated in the past, terminated on the same date as its
 * start date or has never been activated and has a termination date set
 */
export interface TerminatedStatus {
  __typename?: 'TerminatedStatus'
  termination?: Maybe<Scalars['LocalDate']>
}

/** The contract has been active and has its termination date set to today, i.e. today is the last day the contract is active */
export interface TerminatedTodayStatus {
  __typename?: 'TerminatedTodayStatus'
  today?: Maybe<Scalars['LocalDate']>
}

export enum TextContentType {
  None = 'NONE',
  Url = 'URL',
  AddressCity = 'ADDRESS_CITY',
  AddressCityState = 'ADDRESS_CITY_STATE',
  AddressState = 'ADDRESS_STATE',
  CountryName = 'COUNTRY_NAME',
  CreditCardNumber = 'CREDIT_CARD_NUMBER',
  EmailAddress = 'EMAIL_ADDRESS',
  FamilyName = 'FAMILY_NAME',
  FullStreetAddress = 'FULL_STREET_ADDRESS',
  GivenName = 'GIVEN_NAME',
  JobTitle = 'JOB_TITLE',
  Location = 'LOCATION',
  MiddleName = 'MIDDLE_NAME',
  Name = 'NAME',
  NamePrefix = 'NAME_PREFIX',
  NameSuffix = 'NAME_SUFFIX',
  NickName = 'NICK_NAME',
  OrganizationName = 'ORGANIZATION_NAME',
  PostalCode = 'POSTAL_CODE',
  StreetAddressLine1 = 'STREET_ADDRESS_LINE1',
  StreetAddressLine2 = 'STREET_ADDRESS_LINE2',
  Sublocality = 'SUBLOCALITY',
  TelephoneNumber = 'TELEPHONE_NUMBER',
  Username = 'USERNAME',
  Password = 'PASSWORD',
}

export interface TitleAndBulletPoints {
  __typename?: 'TitleAndBulletPoints'
  color: HedvigColor
  icon: Icon
  title: Scalars['String']
  buttonTitle: Scalars['String']
  /** @deprecated not used */
  claimFirstMessage: Scalars['String']
  bulletPoints: BulletPoints[]
}

export enum TokenizationChannel {
  Android = 'ANDROID',
  Ios = 'IOS',
  Web = 'WEB',
}

export interface TokenizationRequest {
  paymentMethodDetails: Scalars['PaymentMethodDetails']
  channel: TokenizationChannel
  browserInfo?: Maybe<BrowserInfo>
  returnUrl: Scalars['String']
}

export type TokenizationResponse =
  | TokenizationResponseFinished
  | TokenizationResponseAction

export interface TokenizationResponseAction {
  __typename?: 'TokenizationResponseAction'
  action: Scalars['CheckoutPaymentsAction']
}

export interface TokenizationResponseFinished {
  __typename?: 'TokenizationResponseFinished'
  resultCode: Scalars['String']
}

export type Translation = Node & {
  __typename?: 'Translation'
  status: Status
  updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  id: Scalars['ID']
  language?: Maybe<Language>
  project?: Maybe<Project>
  key?: Maybe<Key>
  text: Scalars['String']
}

/** A connection to a list of items. */
export interface TranslationConnection {
  __typename?: 'TranslationConnection'
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges: Array<Maybe<TranslationEdge>>
  aggregate: AggregateTranslation
}

export interface TranslationCreateInput {
  status?: Maybe<Status>
  project?: Maybe<Project>
  text: Scalars['String']
  language?: Maybe<LanguageCreateOneWithoutTranslationsInput>
  key?: Maybe<KeyCreateOneWithoutTranslationsInput>
}

export interface TranslationCreateManyWithoutKeyInput {
  create?: Maybe<TranslationCreateWithoutKeyInput[]>
  connect?: Maybe<TranslationWhereUniqueInput[]>
}

export interface TranslationCreateManyWithoutLanguageInput {
  create?: Maybe<TranslationCreateWithoutLanguageInput[]>
  connect?: Maybe<TranslationWhereUniqueInput[]>
}

export interface TranslationCreateWithoutKeyInput {
  status?: Maybe<Status>
  project?: Maybe<Project>
  text: Scalars['String']
  language?: Maybe<LanguageCreateOneWithoutTranslationsInput>
}

export interface TranslationCreateWithoutLanguageInput {
  status?: Maybe<Status>
  project?: Maybe<Project>
  text: Scalars['String']
  key?: Maybe<KeyCreateOneWithoutTranslationsInput>
}

/** An edge in a connection. */
export interface TranslationEdge {
  __typename?: 'TranslationEdge'
  /** The item at the end of the edge. */
  node: Translation
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

export enum TranslationOrderByInput {
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ProjectAsc = 'project_ASC',
  ProjectDesc = 'project_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC',
}

export interface TranslationPreviousValues {
  __typename?: 'TranslationPreviousValues'
  status: Status
  updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  id: Scalars['ID']
  project?: Maybe<Project>
  text: Scalars['String']
}

export interface TranslationScalarWhereInput {
  _search?: Maybe<Scalars['String']>
  /** Logical AND on all given filters. */
  AND?: Maybe<TranslationScalarWhereInput[]>
  /** Logical OR on all given filters. */
  OR?: Maybe<TranslationScalarWhereInput[]>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<TranslationScalarWhereInput[]>
  status?: Maybe<Status>
  /** All values that are not equal to given value. */
  status_not?: Maybe<Status>
  /** All values that are contained in given list. */
  status_in?: Maybe<Status[]>
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Status[]>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>
  project?: Maybe<Project>
  /** All values that are not equal to given value. */
  project_not?: Maybe<Project>
  /** All values that are contained in given list. */
  project_in?: Maybe<Project[]>
  /** All values that are not contained in given list. */
  project_not_in?: Maybe<Project[]>
  text?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  text_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  text_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  text_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  text_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  text_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  text_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  text_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  text_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  text_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  text_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  text_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  text_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  text_not_ends_with?: Maybe<Scalars['String']>
}

export interface TranslationSubscriptionPayload {
  __typename?: 'TranslationSubscriptionPayload'
  mutation: MutationType
  node?: Maybe<Translation>
  updatedFields?: Maybe<Array<Scalars['String']>>
  previousValues?: Maybe<TranslationPreviousValues>
}

export interface TranslationSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<TranslationSubscriptionWhereInput[]>
  /** Logical OR on all given filters. */
  OR?: Maybe<TranslationSubscriptionWhereInput[]>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<TranslationSubscriptionWhereInput[]>
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>
  node?: Maybe<TranslationWhereInput>
}

export interface TranslationUpdateInput {
  status?: Maybe<Status>
  project?: Maybe<Project>
  text?: Maybe<Scalars['String']>
  language?: Maybe<LanguageUpdateOneWithoutTranslationsInput>
  key?: Maybe<KeyUpdateOneWithoutTranslationsInput>
}

export interface TranslationUpdateManyDataInput {
  status?: Maybe<Status>
  project?: Maybe<Project>
  text?: Maybe<Scalars['String']>
}

export interface TranslationUpdateManyMutationInput {
  status?: Maybe<Status>
  project?: Maybe<Project>
  text?: Maybe<Scalars['String']>
}

export interface TranslationUpdateManyWithoutKeyInput {
  create?: Maybe<TranslationCreateWithoutKeyInput[]>
  connect?: Maybe<TranslationWhereUniqueInput[]>
  set?: Maybe<TranslationWhereUniqueInput[]>
  disconnect?: Maybe<TranslationWhereUniqueInput[]>
  delete?: Maybe<TranslationWhereUniqueInput[]>
  update?: Maybe<TranslationUpdateWithWhereUniqueWithoutKeyInput[]>
  updateMany?: Maybe<TranslationUpdateManyWithWhereNestedInput[]>
  deleteMany?: Maybe<TranslationScalarWhereInput[]>
  upsert?: Maybe<TranslationUpsertWithWhereUniqueWithoutKeyInput[]>
}

export interface TranslationUpdateManyWithoutLanguageInput {
  create?: Maybe<TranslationCreateWithoutLanguageInput[]>
  connect?: Maybe<TranslationWhereUniqueInput[]>
  set?: Maybe<TranslationWhereUniqueInput[]>
  disconnect?: Maybe<TranslationWhereUniqueInput[]>
  delete?: Maybe<TranslationWhereUniqueInput[]>
  update?: Maybe<TranslationUpdateWithWhereUniqueWithoutLanguageInput[]>
  updateMany?: Maybe<TranslationUpdateManyWithWhereNestedInput[]>
  deleteMany?: Maybe<TranslationScalarWhereInput[]>
  upsert?: Maybe<TranslationUpsertWithWhereUniqueWithoutLanguageInput[]>
}

export interface TranslationUpdateManyWithWhereNestedInput {
  where: TranslationScalarWhereInput
  data: TranslationUpdateManyDataInput
}

export interface TranslationUpdateWithoutKeyDataInput {
  status?: Maybe<Status>
  project?: Maybe<Project>
  text?: Maybe<Scalars['String']>
  language?: Maybe<LanguageUpdateOneWithoutTranslationsInput>
}

export interface TranslationUpdateWithoutLanguageDataInput {
  status?: Maybe<Status>
  project?: Maybe<Project>
  text?: Maybe<Scalars['String']>
  key?: Maybe<KeyUpdateOneWithoutTranslationsInput>
}

export interface TranslationUpdateWithWhereUniqueWithoutKeyInput {
  where: TranslationWhereUniqueInput
  data: TranslationUpdateWithoutKeyDataInput
}

export interface TranslationUpdateWithWhereUniqueWithoutLanguageInput {
  where: TranslationWhereUniqueInput
  data: TranslationUpdateWithoutLanguageDataInput
}

export interface TranslationUpsertWithWhereUniqueWithoutKeyInput {
  where: TranslationWhereUniqueInput
  update: TranslationUpdateWithoutKeyDataInput
  create: TranslationCreateWithoutKeyInput
}

export interface TranslationUpsertWithWhereUniqueWithoutLanguageInput {
  where: TranslationWhereUniqueInput
  update: TranslationUpdateWithoutLanguageDataInput
  create: TranslationCreateWithoutLanguageInput
}

export interface TranslationWhereInput {
  _search?: Maybe<Scalars['String']>
  /** Logical AND on all given filters. */
  AND?: Maybe<TranslationWhereInput[]>
  /** Logical OR on all given filters. */
  OR?: Maybe<TranslationWhereInput[]>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<TranslationWhereInput[]>
  status?: Maybe<Status>
  /** All values that are not equal to given value. */
  status_not?: Maybe<Status>
  /** All values that are contained in given list. */
  status_in?: Maybe<Status[]>
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Status[]>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>
  project?: Maybe<Project>
  /** All values that are not equal to given value. */
  project_not?: Maybe<Project>
  /** All values that are contained in given list. */
  project_in?: Maybe<Project[]>
  /** All values that are not contained in given list. */
  project_not_in?: Maybe<Project[]>
  text?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  text_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  text_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  text_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  text_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  text_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  text_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  text_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  text_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  text_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  text_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  text_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  text_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  text_not_ends_with?: Maybe<Scalars['String']>
  language?: Maybe<LanguageWhereInput>
  key?: Maybe<KeyWhereInput>
}

export interface TranslationWhereUniqueInput {
  id?: Maybe<Scalars['ID']>
}

export interface TriggerClaimChatInput {
  claimTypeId?: Maybe<Scalars['ID']>
}

export enum TypeOfContract {
  SeHouse = 'SE_HOUSE',
  SeApartmentBrf = 'SE_APARTMENT_BRF',
  SeApartmentRent = 'SE_APARTMENT_RENT',
  SeApartmentStudentBrf = 'SE_APARTMENT_STUDENT_BRF',
  SeApartmentStudentRent = 'SE_APARTMENT_STUDENT_RENT',
  NoHomeContentOwn = 'NO_HOME_CONTENT_OWN',
  NoHomeContentRent = 'NO_HOME_CONTENT_RENT',
  NoHomeContentYouthOwn = 'NO_HOME_CONTENT_YOUTH_OWN',
  NoHomeContentYouthRent = 'NO_HOME_CONTENT_YOUTH_RENT',
  NoTravel = 'NO_TRAVEL',
  NoTravelYouth = 'NO_TRAVEL_YOUTH',
}

export interface UnderwritingLimit {
  __typename?: 'UnderwritingLimit'
  description: Scalars['String']
}

export interface UnderwritingLimitsHit {
  __typename?: 'UnderwritingLimitsHit'
  limits: UnderwritingLimit[]
}

export interface UnknownQuoteDetails {
  __typename?: 'UnknownQuoteDetails'
  unknown?: Maybe<Scalars['String']>
}

export interface UpcomingRenewal {
  __typename?: 'UpcomingRenewal'
  renewalDate: Scalars['LocalDate']
  draftCertificateUrl: Scalars['String']
}

export type UpdateReferralCampaignCodeResult =
  | SuccessfullyUpdatedCode
  | CodeAlreadyTaken
  | CodeTooLong
  | CodeTooShort
  | ExceededMaximumUpdates

export type UserFeature = Node & {
  __typename?: 'UserFeature'
  status: Status
  updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  id: Scalars['ID']
  feature?: Maybe<Feature>
  memberId?: Maybe<Scalars['String']>
}

/** A connection to a list of items. */
export interface UserFeatureConnection {
  __typename?: 'UserFeatureConnection'
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges: Array<Maybe<UserFeatureEdge>>
  aggregate: AggregateUserFeature
}

export interface UserFeatureCreateInput {
  status?: Maybe<Status>
  feature?: Maybe<Feature>
  memberId?: Maybe<Scalars['String']>
}

/** An edge in a connection. */
export interface UserFeatureEdge {
  __typename?: 'UserFeatureEdge'
  /** The item at the end of the edge. */
  node: UserFeature
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

export enum UserFeatureOrderByInput {
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  FeatureAsc = 'feature_ASC',
  FeatureDesc = 'feature_DESC',
  MemberIdAsc = 'memberId_ASC',
  MemberIdDesc = 'memberId_DESC',
}

export interface UserFeaturePreviousValues {
  __typename?: 'UserFeaturePreviousValues'
  status: Status
  updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  id: Scalars['ID']
  feature?: Maybe<Feature>
  memberId?: Maybe<Scalars['String']>
}

export interface UserFeatureSubscriptionPayload {
  __typename?: 'UserFeatureSubscriptionPayload'
  mutation: MutationType
  node?: Maybe<UserFeature>
  updatedFields?: Maybe<Array<Scalars['String']>>
  previousValues?: Maybe<UserFeaturePreviousValues>
}

export interface UserFeatureSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<UserFeatureSubscriptionWhereInput[]>
  /** Logical OR on all given filters. */
  OR?: Maybe<UserFeatureSubscriptionWhereInput[]>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<UserFeatureSubscriptionWhereInput[]>
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>
  node?: Maybe<UserFeatureWhereInput>
}

export interface UserFeatureUpdateInput {
  status?: Maybe<Status>
  feature?: Maybe<Feature>
  memberId?: Maybe<Scalars['String']>
}

export interface UserFeatureUpdateManyMutationInput {
  status?: Maybe<Status>
  feature?: Maybe<Feature>
  memberId?: Maybe<Scalars['String']>
}

export interface UserFeatureWhereInput {
  _search?: Maybe<Scalars['String']>
  /** Logical AND on all given filters. */
  AND?: Maybe<UserFeatureWhereInput[]>
  /** Logical OR on all given filters. */
  OR?: Maybe<UserFeatureWhereInput[]>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<UserFeatureWhereInput[]>
  status?: Maybe<Status>
  /** All values that are not equal to given value. */
  status_not?: Maybe<Status>
  /** All values that are contained in given list. */
  status_in?: Maybe<Status[]>
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Status[]>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>
  feature?: Maybe<Feature>
  /** All values that are not equal to given value. */
  feature_not?: Maybe<Feature>
  /** All values that are contained in given list. */
  feature_in?: Maybe<Feature[]>
  /** All values that are not contained in given list. */
  feature_not_in?: Maybe<Feature[]>
  memberId?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  memberId_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  memberId_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  memberId_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  memberId_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  memberId_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  memberId_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  memberId_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  memberId_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  memberId_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  memberId_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  memberId_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  memberId_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  memberId_not_ends_with?: Maybe<Scalars['String']>
}

export interface UserFeatureWhereUniqueInput {
  id?: Maybe<Scalars['ID']>
}

export interface VisibleNoDiscount {
  __typename?: 'VisibleNoDiscount'
  _?: Maybe<Scalars['Boolean']>
}

/** A page in the `Welcome`-screen in the app */
export interface Welcome {
  __typename?: 'Welcome'
  /** Illustration shown for the page */
  illustration: Icon
  /** Text key for the title of the page */
  title: Scalars['String']
  /** Text key for the paragraph shown below the title */
  paragraph: Scalars['String']
}

export type AvailablePaymentMethodsQueryVariables = Exact<{
  [key: string]: never
}>

export type AvailablePaymentMethodsQuery = { __typename?: 'Query' } & {
  availablePaymentMethods: {
    __typename?: 'AvailablePaymentMethodsResponse'
  } & Pick<AvailablePaymentMethodsResponse, 'paymentMethodsResponse'>
}

export type ContractsQueryVariables = Exact<{ [key: string]: never }>

export type ContractsQuery = { __typename?: 'Query' } & {
  contracts: Array<
    { __typename?: 'Contract' } & Pick<Contract, 'id' | 'typeOfContract'>
  >
}

export type EditQuoteMutationVariables = Exact<{
  input: EditQuoteInput
}>

export type EditQuoteMutation = { __typename?: 'Mutation' } & {
  editQuote:
    | ({ __typename?: 'CompleteQuote' } & Pick<CompleteQuote, 'id'>)
    | ({ __typename?: 'UnderwritingLimitsHit' } & {
        limits: Array<
          { __typename?: 'UnderwritingLimit' } & Pick<
            UnderwritingLimit,
            'description'
          >
        >
      })
}

export type ExchangeTokenMutationVariables = Exact<{
  exchangeToken: Scalars['String']
}>

export type ExchangeTokenMutation = { __typename?: 'Mutation' } & {
  exchangeToken:
    | ({ __typename: 'ExchangeTokenSuccessResponse' } & Pick<
        ExchangeTokenSuccessResponse,
        'token'
      >)
    | ({ __typename: 'ExchangeTokenExpiredResponse' } & Pick<
        ExchangeTokenExpiredResponse,
        '_'
      >)
    | ({ __typename: 'ExchangeTokenInvalidResponse' } & Pick<
        ExchangeTokenInvalidResponse,
        '_'
      >)
}

export type ExternalInsuranceDataQueryVariables = Exact<{
  reference: Scalars['ID']
}>

export type ExternalInsuranceDataQuery = { __typename?: 'Query' } & {
  externalInsuranceProvider?: Maybe<
    { __typename?: 'ExternalInsuranceProvider' } & {
      dataCollection: Array<
        { __typename?: 'InsuranceDataCollection' } & Pick<
          InsuranceDataCollection,
          'renewalDate' | 'insuranceProvider'
        > & {
            monthlyPremium?: Maybe<
              { __typename?: 'MonetaryAmountV2' } & Pick<
                MonetaryAmountV2,
                'currency' | 'amount'
              >
            >
          }
      >
    }
  >
}

export type ExternalInsuranceDataStatusSubscriptionVariables = Exact<{
  reference: Scalars['ID']
}>

export type ExternalInsuranceDataStatusSubscription = {
  __typename?: 'Subscription'
} & {
  dataCollectionStatus?: Maybe<
    { __typename?: 'DataCollectingStatusResponse' } & Pick<
      DataCollectingStatusResponse,
      'status'
    >
  >
}

export type FaqsQueryVariables = Exact<{
  language: Scalars['String']
}>

export type FaqsQuery = { __typename?: 'Query' } & {
  languages: Array<
    Maybe<
      { __typename?: 'Language' } & {
        faqs?: Maybe<
          Array<{ __typename?: 'Faq' } & Pick<Faq, 'id' | 'headline' | 'body'>>
        >
      }
    >
  >
}

export type MemberQueryVariables = Exact<{ [key: string]: never }>

export type MemberQuery = { __typename?: 'Query' } & {
  member: { __typename?: 'Member' } & Pick<
    Member,
    'id' | 'firstName' | 'lastName'
  >
}

export type MemberOfferQueryVariables = Exact<{ [key: string]: never }>

export type MemberOfferQuery = { __typename?: 'Query' } & {
  lastQuoteOfMember:
    | ({ __typename?: 'CompleteQuote' } & Pick<
        CompleteQuote,
        | 'id'
        | 'dataCollectionId'
        | 'ssn'
        | 'email'
        | 'firstName'
        | 'lastName'
        | 'startDate'
      > & {
          currentInsurer?: Maybe<
            { __typename?: 'CurrentInsurer' } & Pick<
              CurrentInsurer,
              'id' | 'displayName' | 'switchable'
            >
          >
          insuranceCost: { __typename?: 'InsuranceCost' } & Pick<
            InsuranceCost,
            'freeUntil'
          > & {
              monthlyDiscount: { __typename?: 'MonetaryAmountV2' } & Pick<
                MonetaryAmountV2,
                'amount' | 'currency'
              >
              monthlyGross: { __typename?: 'MonetaryAmountV2' } & Pick<
                MonetaryAmountV2,
                'amount' | 'currency'
              >
              monthlyNet: { __typename?: 'MonetaryAmountV2' } & Pick<
                MonetaryAmountV2,
                'amount' | 'currency'
              >
            }
          details:
            | ({ __typename?: 'CompleteApartmentQuoteDetails' } & Pick<
                CompleteApartmentQuoteDetails,
                'street' | 'zipCode' | 'householdSize' | 'livingSpace' | 'type'
              >)
            | ({ __typename?: 'CompleteHouseQuoteDetails' } & Pick<
                CompleteHouseQuoteDetails,
                | 'street'
                | 'zipCode'
                | 'householdSize'
                | 'livingSpace'
                | 'ancillarySpace'
                | 'numberOfBathrooms'
                | 'yearOfConstruction'
                | 'isSubleted'
              > & {
                  extraBuildings: Array<
                    | ({ __typename?: 'ExtraBuildingGarage' } & Pick<
                        ExtraBuildingGarage,
                        'area' | 'displayName' | 'hasWaterConnected'
                      >)
                    | ({ __typename?: 'ExtraBuildingCarport' } & Pick<
                        ExtraBuildingCarport,
                        'area' | 'displayName' | 'hasWaterConnected'
                      >)
                    | ({ __typename?: 'ExtraBuildingShed' } & Pick<
                        ExtraBuildingShed,
                        'area' | 'displayName' | 'hasWaterConnected'
                      >)
                    | ({ __typename?: 'ExtraBuildingStorehouse' } & Pick<
                        ExtraBuildingStorehouse,
                        'area' | 'displayName' | 'hasWaterConnected'
                      >)
                    | ({ __typename?: 'ExtraBuildingFriggebod' } & Pick<
                        ExtraBuildingFriggebod,
                        'area' | 'displayName' | 'hasWaterConnected'
                      >)
                    | ({ __typename?: 'ExtraBuildingAttefall' } & Pick<
                        ExtraBuildingAttefall,
                        'area' | 'displayName' | 'hasWaterConnected'
                      >)
                    | ({ __typename?: 'ExtraBuildingOuthouse' } & Pick<
                        ExtraBuildingOuthouse,
                        'area' | 'displayName' | 'hasWaterConnected'
                      >)
                    | ({ __typename?: 'ExtraBuildingGuesthouse' } & Pick<
                        ExtraBuildingGuesthouse,
                        'area' | 'displayName' | 'hasWaterConnected'
                      >)
                    | ({ __typename?: 'ExtraBuildingGazebo' } & Pick<
                        ExtraBuildingGazebo,
                        'area' | 'displayName' | 'hasWaterConnected'
                      >)
                    | ({ __typename?: 'ExtraBuildingGreenhouse' } & Pick<
                        ExtraBuildingGreenhouse,
                        'area' | 'displayName' | 'hasWaterConnected'
                      >)
                    | ({ __typename?: 'ExtraBuildingSauna' } & Pick<
                        ExtraBuildingSauna,
                        'area' | 'displayName' | 'hasWaterConnected'
                      >)
                    | ({ __typename?: 'ExtraBuildingBarn' } & Pick<
                        ExtraBuildingBarn,
                        'area' | 'displayName' | 'hasWaterConnected'
                      >)
                    | ({ __typename?: 'ExtraBuildingBoathouse' } & Pick<
                        ExtraBuildingBoathouse,
                        'area' | 'displayName' | 'hasWaterConnected'
                      >)
                    | ({ __typename?: 'ExtraBuildingOther' } & Pick<
                        ExtraBuildingOther,
                        'area' | 'displayName' | 'hasWaterConnected'
                      >)
                  >
                })
            | { __typename?: 'UnknownQuoteDetails' }
        })
    | ({ __typename?: 'IncompleteQuote' } & Pick<IncompleteQuote, 'id'>)
  redeemedCampaigns: Array<
    { __typename?: 'Campaign' } & Pick<Campaign, 'code'> & {
        incentive?: Maybe<
          | ({ __typename?: 'MonthlyCostDeduction' } & {
              amount?: Maybe<
                { __typename?: 'MonetaryAmountV2' } & Pick<
                  MonetaryAmountV2,
                  'amount' | 'currency'
                >
              >
            })
          | ({ __typename?: 'FreeMonths' } & Pick<FreeMonths, 'quantity'>)
          | { __typename?: 'NoDiscount' }
          | { __typename?: 'VisibleNoDiscount' }
          | ({ __typename?: 'PercentageDiscountMonths' } & Pick<
              PercentageDiscountMonths,
              'percentageDiscount'
            > & { quantityMonths: PercentageDiscountMonths['quantity'] })
          | { __typename?: 'IndefinitePercentageDiscount' }
        >
        owner?: Maybe<
          { __typename?: 'CampaignOwner' } & Pick<CampaignOwner, 'displayName'>
        >
      }
  >
  member: { __typename?: 'Member' } & Pick<
    Member,
    'id' | 'firstName' | 'lastName' | 'email'
  >
}

export type QuoteQueryVariables = Exact<{
  id: Scalars['ID']
  perilsLocale: Locale
}>

export type QuoteQuery = { __typename?: 'Query' } & {
  quote:
    | ({ __typename?: 'CompleteQuote' } & Pick<
        CompleteQuote,
        | 'id'
        | 'dataCollectionId'
        | 'ssn'
        | 'email'
        | 'firstName'
        | 'lastName'
        | 'startDate'
      > & {
          currentInsurer?: Maybe<
            { __typename?: 'CurrentInsurer' } & Pick<
              CurrentInsurer,
              'id' | 'displayName' | 'switchable'
            >
          >
          insuranceCost: { __typename?: 'InsuranceCost' } & Pick<
            InsuranceCost,
            'freeUntil'
          > & {
              monthlyDiscount: { __typename?: 'MonetaryAmountV2' } & Pick<
                MonetaryAmountV2,
                'amount' | 'currency'
              >
              monthlyGross: { __typename?: 'MonetaryAmountV2' } & Pick<
                MonetaryAmountV2,
                'amount' | 'currency'
              >
              monthlyNet: { __typename?: 'MonetaryAmountV2' } & Pick<
                MonetaryAmountV2,
                'amount' | 'currency'
              >
            }
          perils: Array<
            { __typename?: 'PerilV2' } & Pick<
              PerilV2,
              'title' | 'description' | 'covered' | 'exceptions' | 'info'
            > & {
                icon: { __typename?: 'Icon' } & {
                  variants: { __typename?: 'IconVariants' } & {
                    light: { __typename?: 'IconVariant' } & Pick<
                      IconVariant,
                      'svgUrl'
                    >
                  }
                }
              }
          >
          quoteDetails:
            | ({ __typename?: 'SwedishApartmentQuoteDetails' } & Pick<
                SwedishApartmentQuoteDetails,
                'street' | 'zipCode' | 'householdSize' | 'livingSpace' | 'type'
              >)
            | ({ __typename?: 'SwedishHouseQuoteDetails' } & Pick<
                SwedishHouseQuoteDetails,
                | 'street'
                | 'zipCode'
                | 'householdSize'
                | 'livingSpace'
                | 'ancillarySpace'
                | 'numberOfBathrooms'
                | 'yearOfConstruction'
                | 'isSubleted'
              > & {
                  extraBuildings: Array<
                    | ({ __typename?: 'ExtraBuildingGarage' } & Pick<
                        ExtraBuildingGarage,
                        'area' | 'displayName' | 'hasWaterConnected'
                      >)
                    | ({ __typename?: 'ExtraBuildingCarport' } & Pick<
                        ExtraBuildingCarport,
                        'area' | 'displayName' | 'hasWaterConnected'
                      >)
                    | ({ __typename?: 'ExtraBuildingShed' } & Pick<
                        ExtraBuildingShed,
                        'area' | 'displayName' | 'hasWaterConnected'
                      >)
                    | ({ __typename?: 'ExtraBuildingStorehouse' } & Pick<
                        ExtraBuildingStorehouse,
                        'area' | 'displayName' | 'hasWaterConnected'
                      >)
                    | ({ __typename?: 'ExtraBuildingFriggebod' } & Pick<
                        ExtraBuildingFriggebod,
                        'area' | 'displayName' | 'hasWaterConnected'
                      >)
                    | ({ __typename?: 'ExtraBuildingAttefall' } & Pick<
                        ExtraBuildingAttefall,
                        'area' | 'displayName' | 'hasWaterConnected'
                      >)
                    | ({ __typename?: 'ExtraBuildingOuthouse' } & Pick<
                        ExtraBuildingOuthouse,
                        'area' | 'displayName' | 'hasWaterConnected'
                      >)
                    | ({ __typename?: 'ExtraBuildingGuesthouse' } & Pick<
                        ExtraBuildingGuesthouse,
                        'area' | 'displayName' | 'hasWaterConnected'
                      >)
                    | ({ __typename?: 'ExtraBuildingGazebo' } & Pick<
                        ExtraBuildingGazebo,
                        'area' | 'displayName' | 'hasWaterConnected'
                      >)
                    | ({ __typename?: 'ExtraBuildingGreenhouse' } & Pick<
                        ExtraBuildingGreenhouse,
                        'area' | 'displayName' | 'hasWaterConnected'
                      >)
                    | ({ __typename?: 'ExtraBuildingSauna' } & Pick<
                        ExtraBuildingSauna,
                        'area' | 'displayName' | 'hasWaterConnected'
                      >)
                    | ({ __typename?: 'ExtraBuildingBarn' } & Pick<
                        ExtraBuildingBarn,
                        'area' | 'displayName' | 'hasWaterConnected'
                      >)
                    | ({ __typename?: 'ExtraBuildingBoathouse' } & Pick<
                        ExtraBuildingBoathouse,
                        'area' | 'displayName' | 'hasWaterConnected'
                      >)
                    | ({ __typename?: 'ExtraBuildingOther' } & Pick<
                        ExtraBuildingOther,
                        'area' | 'displayName' | 'hasWaterConnected'
                      >)
                  >
                })
            | ({ __typename?: 'NorwegianHomeContentsDetails' } & Pick<
                NorwegianHomeContentsDetails,
                'coInsured' | 'livingSpace' | 'street' | 'zipCode'
              > & { homeType: NorwegianHomeContentsDetails['type'] })
            | ({ __typename?: 'NorwegianTravelDetails' } & Pick<
                NorwegianTravelDetails,
                'coInsured'
              >)
        })
    | ({ __typename?: 'IncompleteQuote' } & Pick<IncompleteQuote, 'id'>)
}

export type QuoteBundleQueryVariables = Exact<{
  input: QuoteBundleInput
  locale: Locale
}>

export type QuoteBundleQuery = { __typename?: 'Query' } & {
  quoteBundle: { __typename?: 'QuoteBundle' } & {
    quotes: Array<
      { __typename?: 'BundledQuote' } & Pick<
        BundledQuote,
        | 'id'
        | 'dataCollectionId'
        | 'firstName'
        | 'lastName'
        | 'ssn'
        | 'birthDate'
        | 'startDate'
        | 'expiresAt'
        | 'email'
        | 'typeOfContract'
      > & {
          currentInsurer?: Maybe<
            { __typename?: 'CurrentInsurer' } & Pick<
              CurrentInsurer,
              'id' | 'displayName' | 'switchable'
            >
          >
          price: { __typename?: 'MonetaryAmountV2' } & Pick<
            MonetaryAmountV2,
            'amount' | 'currency'
          >
          perils: Array<
            { __typename?: 'PerilV2' } & Pick<
              PerilV2,
              'title' | 'description' | 'covered' | 'exceptions' | 'info'
            > & {
                icon: { __typename?: 'Icon' } & {
                  variants: { __typename?: 'IconVariants' } & {
                    light: { __typename?: 'IconVariant' } & Pick<
                      IconVariant,
                      'svgUrl'
                    >
                  }
                }
              }
          >
          insurableLimits: Array<
            { __typename?: 'InsurableLimit' } & Pick<
              InsurableLimit,
              'label' | 'limit' | 'description' | 'type'
            >
          >
          termsAndConditions: { __typename?: 'InsuranceTerm' } & Pick<
            InsuranceTerm,
            'displayName' | 'url'
          >
          insuranceTerms: Array<
            { __typename?: 'InsuranceTerm' } & Pick<
              InsuranceTerm,
              'displayName' | 'url' | 'type'
            >
          >
          quoteDetails:
            | ({ __typename?: 'SwedishApartmentQuoteDetails' } & Pick<
                SwedishApartmentQuoteDetails,
                'street' | 'zipCode' | 'householdSize' | 'livingSpace' | 'type'
              >)
            | ({ __typename?: 'SwedishHouseQuoteDetails' } & Pick<
                SwedishHouseQuoteDetails,
                | 'street'
                | 'zipCode'
                | 'householdSize'
                | 'livingSpace'
                | 'ancillarySpace'
                | 'numberOfBathrooms'
                | 'yearOfConstruction'
                | 'isSubleted'
              > & {
                  extraBuildings: Array<
                    | ({ __typename?: 'ExtraBuildingGarage' } & Pick<
                        ExtraBuildingGarage,
                        'area' | 'displayName' | 'hasWaterConnected'
                      >)
                    | ({ __typename?: 'ExtraBuildingCarport' } & Pick<
                        ExtraBuildingCarport,
                        'area' | 'displayName' | 'hasWaterConnected'
                      >)
                    | ({ __typename?: 'ExtraBuildingShed' } & Pick<
                        ExtraBuildingShed,
                        'area' | 'displayName' | 'hasWaterConnected'
                      >)
                    | ({ __typename?: 'ExtraBuildingStorehouse' } & Pick<
                        ExtraBuildingStorehouse,
                        'area' | 'displayName' | 'hasWaterConnected'
                      >)
                    | ({ __typename?: 'ExtraBuildingFriggebod' } & Pick<
                        ExtraBuildingFriggebod,
                        'area' | 'displayName' | 'hasWaterConnected'
                      >)
                    | ({ __typename?: 'ExtraBuildingAttefall' } & Pick<
                        ExtraBuildingAttefall,
                        'area' | 'displayName' | 'hasWaterConnected'
                      >)
                    | ({ __typename?: 'ExtraBuildingOuthouse' } & Pick<
                        ExtraBuildingOuthouse,
                        'area' | 'displayName' | 'hasWaterConnected'
                      >)
                    | ({ __typename?: 'ExtraBuildingGuesthouse' } & Pick<
                        ExtraBuildingGuesthouse,
                        'area' | 'displayName' | 'hasWaterConnected'
                      >)
                    | ({ __typename?: 'ExtraBuildingGazebo' } & Pick<
                        ExtraBuildingGazebo,
                        'area' | 'displayName' | 'hasWaterConnected'
                      >)
                    | ({ __typename?: 'ExtraBuildingGreenhouse' } & Pick<
                        ExtraBuildingGreenhouse,
                        'area' | 'displayName' | 'hasWaterConnected'
                      >)
                    | ({ __typename?: 'ExtraBuildingSauna' } & Pick<
                        ExtraBuildingSauna,
                        'area' | 'displayName' | 'hasWaterConnected'
                      >)
                    | ({ __typename?: 'ExtraBuildingBarn' } & Pick<
                        ExtraBuildingBarn,
                        'area' | 'displayName' | 'hasWaterConnected'
                      >)
                    | ({ __typename?: 'ExtraBuildingBoathouse' } & Pick<
                        ExtraBuildingBoathouse,
                        'area' | 'displayName' | 'hasWaterConnected'
                      >)
                    | ({ __typename?: 'ExtraBuildingOther' } & Pick<
                        ExtraBuildingOther,
                        'area' | 'displayName' | 'hasWaterConnected'
                      >)
                  >
                })
            | ({ __typename?: 'NorwegianHomeContentsDetails' } & Pick<
                NorwegianHomeContentsDetails,
                'coInsured' | 'livingSpace' | 'street' | 'zipCode' | 'isYouth'
              > & { homeType: NorwegianHomeContentsDetails['type'] })
            | ({ __typename?: 'NorwegianTravelDetails' } & Pick<
                NorwegianTravelDetails,
                'coInsured' | 'isYouth'
              >)
        }
    >
    bundleCost: { __typename?: 'InsuranceCost' } & Pick<
      InsuranceCost,
      'freeUntil'
    > & {
        monthlyDiscount: { __typename?: 'MonetaryAmountV2' } & Pick<
          MonetaryAmountV2,
          'amount' | 'currency'
        >
        monthlyGross: { __typename?: 'MonetaryAmountV2' } & Pick<
          MonetaryAmountV2,
          'amount' | 'currency'
        >
        monthlyNet: { __typename?: 'MonetaryAmountV2' } & Pick<
          MonetaryAmountV2,
          'amount' | 'currency'
        >
      }
  }
}

export type RedeemCodeMutationVariables = Exact<{
  code: Scalars['String']
}>

export type RedeemCodeMutation = { __typename?: 'Mutation' } & {
  redeemCode: { __typename?: 'RedemedCodeResult' } & {
    campaigns: Array<
      { __typename?: 'Campaign' } & {
        incentive?: Maybe<
          | ({ __typename?: 'MonthlyCostDeduction' } & {
              amount?: Maybe<
                { __typename?: 'MonetaryAmountV2' } & Pick<
                  MonetaryAmountV2,
                  'amount' | 'currency'
                >
              >
            })
          | ({ __typename?: 'FreeMonths' } & Pick<FreeMonths, 'quantity'>)
          | { __typename?: 'NoDiscount' }
          | { __typename?: 'VisibleNoDiscount' }
          | { __typename?: 'PercentageDiscountMonths' }
          | { __typename?: 'IndefinitePercentageDiscount' }
        >
        owner?: Maybe<
          { __typename?: 'CampaignOwner' } & Pick<
            CampaignOwner,
            'id' | 'displayName'
          >
        >
      }
    >
    cost: { __typename?: 'InsuranceCost' } & {
      monthlyGross: { __typename?: 'MonetaryAmountV2' } & Pick<
        MonetaryAmountV2,
        'amount' | 'currency'
      >
      monthlyNet: { __typename?: 'MonetaryAmountV2' } & Pick<
        MonetaryAmountV2,
        'amount' | 'currency'
      >
    }
  }
}

export type RedeemCodeV2MutationVariables = Exact<{
  code: Scalars['String']
}>

export type RedeemCodeV2Mutation = { __typename?: 'Mutation' } & {
  redeemCodeV2:
    | ({ __typename?: 'SuccessfulRedeemResult' } & {
        campaigns: Array<
          { __typename?: 'Campaign' } & {
            incentive?: Maybe<
              | ({ __typename?: 'MonthlyCostDeduction' } & {
                  amount?: Maybe<
                    { __typename?: 'MonetaryAmountV2' } & Pick<
                      MonetaryAmountV2,
                      'amount' | 'currency'
                    >
                  >
                })
              | { __typename?: 'FreeMonths' }
              | { __typename?: 'NoDiscount' }
              | { __typename?: 'VisibleNoDiscount' }
              | { __typename?: 'PercentageDiscountMonths' }
              | { __typename?: 'IndefinitePercentageDiscount' }
            >
            owner?: Maybe<
              { __typename?: 'CampaignOwner' } & Pick<
                CampaignOwner,
                'id' | 'displayName'
              >
            >
          }
        >
      })
    | { __typename?: 'CannotRedeemOwnCampaign' }
    | { __typename?: 'CampaignCannotBeCombinedWithExisting' }
    | { __typename?: 'CannotRedeemEmptyCode' }
    | { __typename?: 'CampaignHasExpired' }
    | { __typename?: 'MemberIsNotEligibleForCampaign' }
    | { __typename?: 'CampaignDoesNotExist' }
    | { __typename?: 'CannotRedeemCampaignFromDifferentMarket' }
}

export type RedeemedCampaignsQueryVariables = Exact<{ [key: string]: never }>

export type RedeemedCampaignsQuery = { __typename?: 'Query' } & {
  redeemedCampaigns: Array<
    { __typename?: 'Campaign' } & Pick<Campaign, 'code'> & {
        incentive?: Maybe<
          | ({ __typename?: 'MonthlyCostDeduction' } & {
              amount?: Maybe<
                { __typename?: 'MonetaryAmountV2' } & Pick<
                  MonetaryAmountV2,
                  'amount' | 'currency'
                >
              >
            })
          | ({ __typename?: 'FreeMonths' } & Pick<FreeMonths, 'quantity'>)
          | { __typename: 'NoDiscount' }
          | { __typename?: 'VisibleNoDiscount' }
          | ({ __typename?: 'PercentageDiscountMonths' } & Pick<
              PercentageDiscountMonths,
              'percentageDiscount'
            > & { quantityMonths: PercentageDiscountMonths['quantity'] })
          | ({ __typename: 'IndefinitePercentageDiscount' } & {
              indefinitiePercentageDiscount: IndefinitePercentageDiscount['percentageDiscount']
            })
        >
        owner?: Maybe<
          { __typename?: 'CampaignOwner' } & Pick<CampaignOwner, 'displayName'>
        >
      }
  >
}

export type ReferrerNameQueryVariables = Exact<{ [key: string]: never }>

export type ReferrerNameQuery = { __typename?: 'Query' } & {
  referralInformation: { __typename?: 'Referrals' } & {
    referredBy?: Maybe<
      | ({ __typename?: 'ActiveReferral' } & Pick<ActiveReferral, 'name'> & {
            discount: { __typename?: 'MonetaryAmountV2' } & Pick<
              MonetaryAmountV2,
              'amount' | 'currency'
            >
          })
      | ({ __typename?: 'InProgressReferral' } & Pick<
          InProgressReferral,
          'name'
        >)
      | { __typename?: 'AcceptedReferral' }
      | { __typename?: 'TerminatedReferral' }
    >
  }
}

export type RemoveDiscountCodeMutationVariables = Exact<{
  [key: string]: never
}>

export type RemoveDiscountCodeMutation = { __typename?: 'Mutation' } & {
  removeDiscountCode: { __typename: 'RedemedCodeResult' }
}

export type RemoveStartDateMutationVariables = Exact<{
  quoteId: Scalars['ID']
}>

export type RemoveStartDateMutation = { __typename?: 'Mutation' } & {
  removeStartDate:
    | ({ __typename?: 'CompleteQuote' } & Pick<CompleteQuote, 'startDate'>)
    | { __typename?: 'UnderwritingLimitsHit' }
}

export type SignQuotesMutationVariables = Exact<{
  quoteIds: Array<Scalars['ID']>
  successUrl?: Maybe<Scalars['String']>
  failUrl?: Maybe<Scalars['String']>
}>

export type SignQuotesMutation = { __typename?: 'Mutation' } & {
  signQuotes:
    | ({ __typename: 'SwedishBankIdSession' } & Pick<
        SwedishBankIdSession,
        'autoStartToken'
      >)
    | ({ __typename: 'NorwegianBankIdSession' } & Pick<
        NorwegianBankIdSession,
        'redirectUrl'
      >)
    | ({ __typename: 'FailedToStartSign' } & Pick<
        FailedToStartSign,
        'errorMessage'
      >)
}

export type SignStatusQueryVariables = Exact<{ [key: string]: never }>

export type SignStatusQuery = { __typename?: 'Query' } & {
  signStatus?: Maybe<
    { __typename?: 'SignStatus' } & Pick<SignStatus, 'signState'> & {
        collectStatus?: Maybe<
          { __typename?: 'CollectStatus' } & Pick<
            CollectStatus,
            'status' | 'code'
          >
        >
      }
  >
}

export type SignStatusListenerSubscriptionVariables = Exact<{
  [key: string]: never
}>

export type SignStatusListenerSubscription = { __typename?: 'Subscription' } & {
  signStatus?: Maybe<
    { __typename?: 'SignEvent' } & {
      status?: Maybe<
        { __typename?: 'SignStatus' } & Pick<SignStatus, 'signState'> & {
            collectStatus?: Maybe<
              { __typename?: 'CollectStatus' } & Pick<
                CollectStatus,
                'status' | 'code'
              >
            >
          }
      >
    }
  >
}

export type StartDateMutationVariables = Exact<{
  quoteId: Scalars['ID']
  date?: Maybe<Scalars['LocalDate']>
}>

export type StartDateMutation = { __typename?: 'Mutation' } & {
  editQuote:
    | ({ __typename?: 'CompleteQuote' } & Pick<CompleteQuote, 'startDate'>)
    | { __typename?: 'UnderwritingLimitsHit' }
}

export type SubmitAdditionalPaymentDetialsMutationVariables = Exact<{
  request: AdditionalPaymentsDetailsRequest
}>

export type SubmitAdditionalPaymentDetialsMutation = {
  __typename?: 'Mutation'
} & {
  submitAdditionalPaymentDetails:
    | ({ __typename?: 'AdditionalPaymentsDetailsResponseFinished' } & Pick<
        AdditionalPaymentsDetailsResponseFinished,
        'resultCode'
      >)
    | ({ __typename?: 'AdditionalPaymentsDetailsResponseAction' } & Pick<
        AdditionalPaymentsDetailsResponseAction,
        'action'
      >)
}

export type TokenizePaymentDetailsMutationVariables = Exact<{
  paymentsRequest: TokenizationRequest
}>

export type TokenizePaymentDetailsMutation = { __typename?: 'Mutation' } & {
  tokenizePaymentDetails?: Maybe<
    | ({ __typename?: 'TokenizationResponseFinished' } & Pick<
        TokenizationResponseFinished,
        'resultCode'
      >)
    | ({ __typename?: 'TokenizationResponseAction' } & Pick<
        TokenizationResponseAction,
        'action'
      >)
  >
}

export type UpdatePickedLocaleMutationVariables = Exact<{
  pickedLocale: Locale
}>

export type UpdatePickedLocaleMutation = { __typename?: 'Mutation' } & {
  updatePickedLocale: { __typename?: 'Member' } & Pick<Member, 'id'>
}

export const AvailablePaymentMethodsDocument = gql`
  query AvailablePaymentMethods {
    availablePaymentMethods {
      paymentMethodsResponse
    }
  }
`

/**
 * __useAvailablePaymentMethodsQuery__
 *
 * To run a query within a React component, call `useAvailablePaymentMethodsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAvailablePaymentMethodsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAvailablePaymentMethodsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAvailablePaymentMethodsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    AvailablePaymentMethodsQuery,
    AvailablePaymentMethodsQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<
    AvailablePaymentMethodsQuery,
    AvailablePaymentMethodsQueryVariables
  >(AvailablePaymentMethodsDocument, baseOptions)
}
export function useAvailablePaymentMethodsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    AvailablePaymentMethodsQuery,
    AvailablePaymentMethodsQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<
    AvailablePaymentMethodsQuery,
    AvailablePaymentMethodsQueryVariables
  >(AvailablePaymentMethodsDocument, baseOptions)
}
export type AvailablePaymentMethodsQueryHookResult = ReturnType<
  typeof useAvailablePaymentMethodsQuery
>
export type AvailablePaymentMethodsLazyQueryHookResult = ReturnType<
  typeof useAvailablePaymentMethodsLazyQuery
>
export type AvailablePaymentMethodsQueryResult = ApolloReactCommon.QueryResult<
  AvailablePaymentMethodsQuery,
  AvailablePaymentMethodsQueryVariables
>
export const ContractsDocument = gql`
  query Contracts {
    contracts {
      id
      typeOfContract
    }
  }
`

/**
 * __useContractsQuery__
 *
 * To run a query within a React component, call `useContractsQuery` and pass it any options that fit your needs.
 * When your component renders, `useContractsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContractsQuery({
 *   variables: {
 *   },
 * });
 */
export function useContractsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    ContractsQuery,
    ContractsQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<ContractsQuery, ContractsQueryVariables>(
    ContractsDocument,
    baseOptions,
  )
}
export function useContractsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    ContractsQuery,
    ContractsQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<ContractsQuery, ContractsQueryVariables>(
    ContractsDocument,
    baseOptions,
  )
}
export type ContractsQueryHookResult = ReturnType<typeof useContractsQuery>
export type ContractsLazyQueryHookResult = ReturnType<
  typeof useContractsLazyQuery
>
export type ContractsQueryResult = ApolloReactCommon.QueryResult<
  ContractsQuery,
  ContractsQueryVariables
>
export const EditQuoteDocument = gql`
  mutation EditQuote($input: EditQuoteInput!) {
    editQuote(input: $input) {
      ... on CompleteQuote {
        id
      }
      ... on UnderwritingLimitsHit {
        limits {
          description
        }
      }
    }
  }
`
export type EditQuoteMutationFn = ApolloReactCommon.MutationFunction<
  EditQuoteMutation,
  EditQuoteMutationVariables
>

/**
 * __useEditQuoteMutation__
 *
 * To run a mutation, you first call `useEditQuoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditQuoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editQuoteMutation, { data, loading, error }] = useEditQuoteMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEditQuoteMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    EditQuoteMutation,
    EditQuoteMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    EditQuoteMutation,
    EditQuoteMutationVariables
  >(EditQuoteDocument, baseOptions)
}
export type EditQuoteMutationHookResult = ReturnType<
  typeof useEditQuoteMutation
>
export type EditQuoteMutationResult = ApolloReactCommon.MutationResult<
  EditQuoteMutation
>
export type EditQuoteMutationOptions = ApolloReactCommon.BaseMutationOptions<
  EditQuoteMutation,
  EditQuoteMutationVariables
>
export const ExchangeTokenDocument = gql`
  mutation ExchangeToken($exchangeToken: String!) {
    exchangeToken(input: { exchangeToken: $exchangeToken }) {
      __typename
      ... on ExchangeTokenExpiredResponse {
        _
      }
      ... on ExchangeTokenInvalidResponse {
        _
      }
      ... on ExchangeTokenSuccessResponse {
        token
      }
    }
  }
`
export type ExchangeTokenMutationFn = ApolloReactCommon.MutationFunction<
  ExchangeTokenMutation,
  ExchangeTokenMutationVariables
>

/**
 * __useExchangeTokenMutation__
 *
 * To run a mutation, you first call `useExchangeTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useExchangeTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [exchangeTokenMutation, { data, loading, error }] = useExchangeTokenMutation({
 *   variables: {
 *      exchangeToken: // value for 'exchangeToken'
 *   },
 * });
 */
export function useExchangeTokenMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    ExchangeTokenMutation,
    ExchangeTokenMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    ExchangeTokenMutation,
    ExchangeTokenMutationVariables
  >(ExchangeTokenDocument, baseOptions)
}
export type ExchangeTokenMutationHookResult = ReturnType<
  typeof useExchangeTokenMutation
>
export type ExchangeTokenMutationResult = ApolloReactCommon.MutationResult<
  ExchangeTokenMutation
>
export type ExchangeTokenMutationOptions = ApolloReactCommon.BaseMutationOptions<
  ExchangeTokenMutation,
  ExchangeTokenMutationVariables
>
export const ExternalInsuranceDataDocument = gql`
  query ExternalInsuranceData($reference: ID!) {
    externalInsuranceProvider {
      dataCollection(reference: $reference) {
        renewalDate
        insuranceProvider
        monthlyPremium {
          currency
          amount
        }
      }
    }
  }
`

/**
 * __useExternalInsuranceDataQuery__
 *
 * To run a query within a React component, call `useExternalInsuranceDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useExternalInsuranceDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExternalInsuranceDataQuery({
 *   variables: {
 *      reference: // value for 'reference'
 *   },
 * });
 */
export function useExternalInsuranceDataQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    ExternalInsuranceDataQuery,
    ExternalInsuranceDataQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<
    ExternalInsuranceDataQuery,
    ExternalInsuranceDataQueryVariables
  >(ExternalInsuranceDataDocument, baseOptions)
}
export function useExternalInsuranceDataLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    ExternalInsuranceDataQuery,
    ExternalInsuranceDataQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<
    ExternalInsuranceDataQuery,
    ExternalInsuranceDataQueryVariables
  >(ExternalInsuranceDataDocument, baseOptions)
}
export type ExternalInsuranceDataQueryHookResult = ReturnType<
  typeof useExternalInsuranceDataQuery
>
export type ExternalInsuranceDataLazyQueryHookResult = ReturnType<
  typeof useExternalInsuranceDataLazyQuery
>
export type ExternalInsuranceDataQueryResult = ApolloReactCommon.QueryResult<
  ExternalInsuranceDataQuery,
  ExternalInsuranceDataQueryVariables
>
export const ExternalInsuranceDataStatusDocument = gql`
  subscription ExternalInsuranceDataStatus($reference: ID!) {
    dataCollectionStatus(reference: $reference) {
      status
    }
  }
`

/**
 * __useExternalInsuranceDataStatusSubscription__
 *
 * To run a query within a React component, call `useExternalInsuranceDataStatusSubscription` and pass it any options that fit your needs.
 * When your component renders, `useExternalInsuranceDataStatusSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExternalInsuranceDataStatusSubscription({
 *   variables: {
 *      reference: // value for 'reference'
 *   },
 * });
 */
export function useExternalInsuranceDataStatusSubscription(
  baseOptions?: ApolloReactHooks.SubscriptionHookOptions<
    ExternalInsuranceDataStatusSubscription,
    ExternalInsuranceDataStatusSubscriptionVariables
  >,
) {
  return ApolloReactHooks.useSubscription<
    ExternalInsuranceDataStatusSubscription,
    ExternalInsuranceDataStatusSubscriptionVariables
  >(ExternalInsuranceDataStatusDocument, baseOptions)
}
export type ExternalInsuranceDataStatusSubscriptionHookResult = ReturnType<
  typeof useExternalInsuranceDataStatusSubscription
>
export type ExternalInsuranceDataStatusSubscriptionResult = ApolloReactCommon.SubscriptionResult<
  ExternalInsuranceDataStatusSubscription
>
export const FaqsDocument = gql`
  query Faqs($language: String!) {
    languages(where: { code: $language }) {
      faqs {
        id
        headline
        body
      }
    }
  }
`

/**
 * __useFaqsQuery__
 *
 * To run a query within a React component, call `useFaqsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFaqsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFaqsQuery({
 *   variables: {
 *      language: // value for 'language'
 *   },
 * });
 */
export function useFaqsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    FaqsQuery,
    FaqsQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<FaqsQuery, FaqsQueryVariables>(
    FaqsDocument,
    baseOptions,
  )
}
export function useFaqsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    FaqsQuery,
    FaqsQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<FaqsQuery, FaqsQueryVariables>(
    FaqsDocument,
    baseOptions,
  )
}
export type FaqsQueryHookResult = ReturnType<typeof useFaqsQuery>
export type FaqsLazyQueryHookResult = ReturnType<typeof useFaqsLazyQuery>
export type FaqsQueryResult = ApolloReactCommon.QueryResult<
  FaqsQuery,
  FaqsQueryVariables
>
export const MemberDocument = gql`
  query Member {
    member {
      id
      firstName
      lastName
    }
  }
`

/**
 * __useMemberQuery__
 *
 * To run a query within a React component, call `useMemberQuery` and pass it any options that fit your needs.
 * When your component renders, `useMemberQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMemberQuery({
 *   variables: {
 *   },
 * });
 */
export function useMemberQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    MemberQuery,
    MemberQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<MemberQuery, MemberQueryVariables>(
    MemberDocument,
    baseOptions,
  )
}
export function useMemberLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    MemberQuery,
    MemberQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<MemberQuery, MemberQueryVariables>(
    MemberDocument,
    baseOptions,
  )
}
export type MemberQueryHookResult = ReturnType<typeof useMemberQuery>
export type MemberLazyQueryHookResult = ReturnType<typeof useMemberLazyQuery>
export type MemberQueryResult = ApolloReactCommon.QueryResult<
  MemberQuery,
  MemberQueryVariables
>
export const MemberOfferDocument = gql`
  query MemberOffer {
    lastQuoteOfMember {
      ... on CompleteQuote {
        id
        dataCollectionId
        ssn
        email
        firstName
        lastName
        startDate
        currentInsurer {
          id
          displayName
          switchable
        }
        insuranceCost {
          freeUntil
          monthlyDiscount {
            amount
            currency
          }
          monthlyGross {
            amount
            currency
          }
          monthlyNet {
            amount
            currency
          }
        }
        details {
          ... on CompleteApartmentQuoteDetails {
            street
            zipCode
            householdSize
            livingSpace
            type
          }
          ... on CompleteHouseQuoteDetails {
            street
            zipCode
            householdSize
            livingSpace
            ancillarySpace
            numberOfBathrooms
            yearOfConstruction
            isSubleted
            extraBuildings {
              ... on ExtraBuildingCore {
                area
                displayName
                hasWaterConnected
              }
            }
          }
        }
      }
      ... on IncompleteQuote {
        id
      }
    }
    redeemedCampaigns {
      incentive {
        ... on FreeMonths {
          quantity
        }
        ... on MonthlyCostDeduction {
          amount {
            amount
            currency
          }
        }
        ... on PercentageDiscountMonths {
          percentageDiscount
          quantityMonths: quantity
        }
      }
      code
      owner {
        displayName
      }
    }
    member {
      id
      firstName
      lastName
      email
    }
  }
`

/**
 * __useMemberOfferQuery__
 *
 * To run a query within a React component, call `useMemberOfferQuery` and pass it any options that fit your needs.
 * When your component renders, `useMemberOfferQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMemberOfferQuery({
 *   variables: {
 *   },
 * });
 */
export function useMemberOfferQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    MemberOfferQuery,
    MemberOfferQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<MemberOfferQuery, MemberOfferQueryVariables>(
    MemberOfferDocument,
    baseOptions,
  )
}
export function useMemberOfferLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    MemberOfferQuery,
    MemberOfferQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<
    MemberOfferQuery,
    MemberOfferQueryVariables
  >(MemberOfferDocument, baseOptions)
}
export type MemberOfferQueryHookResult = ReturnType<typeof useMemberOfferQuery>
export type MemberOfferLazyQueryHookResult = ReturnType<
  typeof useMemberOfferLazyQuery
>
export type MemberOfferQueryResult = ApolloReactCommon.QueryResult<
  MemberOfferQuery,
  MemberOfferQueryVariables
>
export const QuoteDocument = gql`
  query Quote($id: ID!, $perilsLocale: Locale!) {
    quote(id: $id) {
      ... on CompleteQuote {
        id
        dataCollectionId
        ssn
        email
        firstName
        lastName
        startDate
        currentInsurer {
          id
          displayName
          switchable
        }
        insuranceCost {
          freeUntil
          monthlyDiscount {
            amount
            currency
          }
          monthlyGross {
            amount
            currency
          }
          monthlyNet {
            amount
            currency
          }
        }
        perils(locale: $perilsLocale) {
          title
          description
          covered
          exceptions
          info
          icon {
            variants {
              light {
                svgUrl
              }
            }
          }
        }
        quoteDetails {
          ... on SwedishApartmentQuoteDetails {
            street
            zipCode
            householdSize
            livingSpace
            type
          }
          ... on SwedishHouseQuoteDetails {
            street
            zipCode
            householdSize
            livingSpace
            ancillarySpace
            numberOfBathrooms
            yearOfConstruction
            isSubleted
            extraBuildings {
              ... on ExtraBuildingCore {
                area
                displayName
                hasWaterConnected
              }
            }
          }
          ... on NorwegianHomeContentsDetails {
            coInsured
            livingSpace
            street
            homeType: type
            zipCode
          }
          ... on NorwegianTravelDetails {
            coInsured
          }
        }
      }
      ... on IncompleteQuote {
        id
      }
    }
  }
`

/**
 * __useQuoteQuery__
 *
 * To run a query within a React component, call `useQuoteQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuoteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuoteQuery({
 *   variables: {
 *      id: // value for 'id'
 *      perilsLocale: // value for 'perilsLocale'
 *   },
 * });
 */
export function useQuoteQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    QuoteQuery,
    QuoteQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<QuoteQuery, QuoteQueryVariables>(
    QuoteDocument,
    baseOptions,
  )
}
export function useQuoteLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    QuoteQuery,
    QuoteQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<QuoteQuery, QuoteQueryVariables>(
    QuoteDocument,
    baseOptions,
  )
}
export type QuoteQueryHookResult = ReturnType<typeof useQuoteQuery>
export type QuoteLazyQueryHookResult = ReturnType<typeof useQuoteLazyQuery>
export type QuoteQueryResult = ApolloReactCommon.QueryResult<
  QuoteQuery,
  QuoteQueryVariables
>
export const QuoteBundleDocument = gql`
  query QuoteBundle($input: QuoteBundleInput!, $locale: Locale!) {
    quoteBundle(input: $input) {
      quotes {
        id
        dataCollectionId
        currentInsurer {
          id
          displayName
          switchable
        }
        price {
          amount
          currency
        }
        firstName
        lastName
        ssn
        birthDate
        startDate
        expiresAt
        email
        typeOfContract
        perils(locale: $locale) {
          title
          description
          covered
          exceptions
          info
          icon {
            variants {
              light {
                svgUrl
              }
            }
          }
        }
        insurableLimits(locale: $locale) {
          label
          limit
          description
          type
        }
        termsAndConditions(locale: $locale) {
          displayName
          url
        }
        insuranceTerms(locale: $locale) {
          displayName
          url
          type
        }
        quoteDetails {
          ... on SwedishApartmentQuoteDetails {
            street
            zipCode
            householdSize
            livingSpace
            type
          }
          ... on SwedishHouseQuoteDetails {
            street
            zipCode
            householdSize
            livingSpace
            ancillarySpace
            numberOfBathrooms
            yearOfConstruction
            isSubleted
            extraBuildings {
              ... on ExtraBuildingCore {
                area
                displayName
                hasWaterConnected
              }
            }
          }
          ... on NorwegianHomeContentsDetails {
            coInsured
            livingSpace
            street
            homeType: type
            zipCode
            isYouth
          }
          ... on NorwegianTravelDetails {
            coInsured
            isYouth
          }
        }
      }
      bundleCost {
        freeUntil
        monthlyDiscount {
          amount
          currency
        }
        monthlyGross {
          amount
          currency
        }
        monthlyNet {
          amount
          currency
        }
      }
    }
  }
`

/**
 * __useQuoteBundleQuery__
 *
 * To run a query within a React component, call `useQuoteBundleQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuoteBundleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuoteBundleQuery({
 *   variables: {
 *      input: // value for 'input'
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useQuoteBundleQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    QuoteBundleQuery,
    QuoteBundleQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<QuoteBundleQuery, QuoteBundleQueryVariables>(
    QuoteBundleDocument,
    baseOptions,
  )
}
export function useQuoteBundleLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    QuoteBundleQuery,
    QuoteBundleQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<
    QuoteBundleQuery,
    QuoteBundleQueryVariables
  >(QuoteBundleDocument, baseOptions)
}
export type QuoteBundleQueryHookResult = ReturnType<typeof useQuoteBundleQuery>
export type QuoteBundleLazyQueryHookResult = ReturnType<
  typeof useQuoteBundleLazyQuery
>
export type QuoteBundleQueryResult = ApolloReactCommon.QueryResult<
  QuoteBundleQuery,
  QuoteBundleQueryVariables
>
export const RedeemCodeDocument = gql`
  mutation RedeemCode($code: String!) {
    redeemCode(code: $code) {
      campaigns {
        incentive {
          ... on MonthlyCostDeduction {
            amount {
              amount
              currency
            }
          }
          ... on FreeMonths {
            quantity
          }
        }
        owner {
          id
          displayName
        }
      }
      cost {
        monthlyGross {
          amount
          currency
        }
        monthlyNet {
          amount
          currency
        }
      }
    }
  }
`
export type RedeemCodeMutationFn = ApolloReactCommon.MutationFunction<
  RedeemCodeMutation,
  RedeemCodeMutationVariables
>

/**
 * __useRedeemCodeMutation__
 *
 * To run a mutation, you first call `useRedeemCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRedeemCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [redeemCodeMutation, { data, loading, error }] = useRedeemCodeMutation({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useRedeemCodeMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    RedeemCodeMutation,
    RedeemCodeMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    RedeemCodeMutation,
    RedeemCodeMutationVariables
  >(RedeemCodeDocument, baseOptions)
}
export type RedeemCodeMutationHookResult = ReturnType<
  typeof useRedeemCodeMutation
>
export type RedeemCodeMutationResult = ApolloReactCommon.MutationResult<
  RedeemCodeMutation
>
export type RedeemCodeMutationOptions = ApolloReactCommon.BaseMutationOptions<
  RedeemCodeMutation,
  RedeemCodeMutationVariables
>
export const RedeemCodeV2Document = gql`
  mutation RedeemCodeV2($code: String!) {
    redeemCodeV2(code: $code) {
      ... on SuccessfulRedeemResult {
        campaigns {
          incentive {
            ... on MonthlyCostDeduction {
              amount {
                amount
                currency
              }
            }
          }
          owner {
            id
            displayName
          }
        }
      }
    }
  }
`
export type RedeemCodeV2MutationFn = ApolloReactCommon.MutationFunction<
  RedeemCodeV2Mutation,
  RedeemCodeV2MutationVariables
>

/**
 * __useRedeemCodeV2Mutation__
 *
 * To run a mutation, you first call `useRedeemCodeV2Mutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRedeemCodeV2Mutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [redeemCodeV2Mutation, { data, loading, error }] = useRedeemCodeV2Mutation({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useRedeemCodeV2Mutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    RedeemCodeV2Mutation,
    RedeemCodeV2MutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    RedeemCodeV2Mutation,
    RedeemCodeV2MutationVariables
  >(RedeemCodeV2Document, baseOptions)
}
export type RedeemCodeV2MutationHookResult = ReturnType<
  typeof useRedeemCodeV2Mutation
>
export type RedeemCodeV2MutationResult = ApolloReactCommon.MutationResult<
  RedeemCodeV2Mutation
>
export type RedeemCodeV2MutationOptions = ApolloReactCommon.BaseMutationOptions<
  RedeemCodeV2Mutation,
  RedeemCodeV2MutationVariables
>
export const RedeemedCampaignsDocument = gql`
  query RedeemedCampaigns {
    redeemedCampaigns {
      incentive {
        ... on FreeMonths {
          quantity
        }
        ... on MonthlyCostDeduction {
          amount {
            amount
            currency
          }
        }
        ... on PercentageDiscountMonths {
          percentageDiscount
          quantityMonths: quantity
        }
        ... on IndefinitePercentageDiscount {
          __typename
          indefinitiePercentageDiscount: percentageDiscount
        }
        ... on NoDiscount {
          __typename
        }
      }
      code
      owner {
        displayName
      }
    }
  }
`

/**
 * __useRedeemedCampaignsQuery__
 *
 * To run a query within a React component, call `useRedeemedCampaignsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRedeemedCampaignsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRedeemedCampaignsQuery({
 *   variables: {
 *   },
 * });
 */
export function useRedeemedCampaignsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    RedeemedCampaignsQuery,
    RedeemedCampaignsQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<
    RedeemedCampaignsQuery,
    RedeemedCampaignsQueryVariables
  >(RedeemedCampaignsDocument, baseOptions)
}
export function useRedeemedCampaignsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    RedeemedCampaignsQuery,
    RedeemedCampaignsQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<
    RedeemedCampaignsQuery,
    RedeemedCampaignsQueryVariables
  >(RedeemedCampaignsDocument, baseOptions)
}
export type RedeemedCampaignsQueryHookResult = ReturnType<
  typeof useRedeemedCampaignsQuery
>
export type RedeemedCampaignsLazyQueryHookResult = ReturnType<
  typeof useRedeemedCampaignsLazyQuery
>
export type RedeemedCampaignsQueryResult = ApolloReactCommon.QueryResult<
  RedeemedCampaignsQuery,
  RedeemedCampaignsQueryVariables
>
export const ReferrerNameDocument = gql`
  query ReferrerName {
    referralInformation {
      referredBy {
        ... on ActiveReferral {
          name
          discount {
            amount
            currency
          }
        }
        ... on InProgressReferral {
          name
        }
      }
    }
  }
`

/**
 * __useReferrerNameQuery__
 *
 * To run a query within a React component, call `useReferrerNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useReferrerNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReferrerNameQuery({
 *   variables: {
 *   },
 * });
 */
export function useReferrerNameQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    ReferrerNameQuery,
    ReferrerNameQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<
    ReferrerNameQuery,
    ReferrerNameQueryVariables
  >(ReferrerNameDocument, baseOptions)
}
export function useReferrerNameLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    ReferrerNameQuery,
    ReferrerNameQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<
    ReferrerNameQuery,
    ReferrerNameQueryVariables
  >(ReferrerNameDocument, baseOptions)
}
export type ReferrerNameQueryHookResult = ReturnType<
  typeof useReferrerNameQuery
>
export type ReferrerNameLazyQueryHookResult = ReturnType<
  typeof useReferrerNameLazyQuery
>
export type ReferrerNameQueryResult = ApolloReactCommon.QueryResult<
  ReferrerNameQuery,
  ReferrerNameQueryVariables
>
export const RemoveDiscountCodeDocument = gql`
  mutation RemoveDiscountCode {
    removeDiscountCode {
      __typename
    }
  }
`
export type RemoveDiscountCodeMutationFn = ApolloReactCommon.MutationFunction<
  RemoveDiscountCodeMutation,
  RemoveDiscountCodeMutationVariables
>

/**
 * __useRemoveDiscountCodeMutation__
 *
 * To run a mutation, you first call `useRemoveDiscountCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveDiscountCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeDiscountCodeMutation, { data, loading, error }] = useRemoveDiscountCodeMutation({
 *   variables: {
 *   },
 * });
 */
export function useRemoveDiscountCodeMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    RemoveDiscountCodeMutation,
    RemoveDiscountCodeMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    RemoveDiscountCodeMutation,
    RemoveDiscountCodeMutationVariables
  >(RemoveDiscountCodeDocument, baseOptions)
}
export type RemoveDiscountCodeMutationHookResult = ReturnType<
  typeof useRemoveDiscountCodeMutation
>
export type RemoveDiscountCodeMutationResult = ApolloReactCommon.MutationResult<
  RemoveDiscountCodeMutation
>
export type RemoveDiscountCodeMutationOptions = ApolloReactCommon.BaseMutationOptions<
  RemoveDiscountCodeMutation,
  RemoveDiscountCodeMutationVariables
>
export const RemoveStartDateDocument = gql`
  mutation RemoveStartDate($quoteId: ID!) {
    removeStartDate(input: { id: $quoteId }) {
      ... on CompleteQuote {
        startDate
      }
    }
  }
`
export type RemoveStartDateMutationFn = ApolloReactCommon.MutationFunction<
  RemoveStartDateMutation,
  RemoveStartDateMutationVariables
>

/**
 * __useRemoveStartDateMutation__
 *
 * To run a mutation, you first call `useRemoveStartDateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveStartDateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeStartDateMutation, { data, loading, error }] = useRemoveStartDateMutation({
 *   variables: {
 *      quoteId: // value for 'quoteId'
 *   },
 * });
 */
export function useRemoveStartDateMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    RemoveStartDateMutation,
    RemoveStartDateMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    RemoveStartDateMutation,
    RemoveStartDateMutationVariables
  >(RemoveStartDateDocument, baseOptions)
}
export type RemoveStartDateMutationHookResult = ReturnType<
  typeof useRemoveStartDateMutation
>
export type RemoveStartDateMutationResult = ApolloReactCommon.MutationResult<
  RemoveStartDateMutation
>
export type RemoveStartDateMutationOptions = ApolloReactCommon.BaseMutationOptions<
  RemoveStartDateMutation,
  RemoveStartDateMutationVariables
>
export const SignQuotesDocument = gql`
  mutation SignQuotes(
    $quoteIds: [ID!]!
    $successUrl: String
    $failUrl: String
  ) {
    signQuotes(
      input: { quoteIds: $quoteIds, successUrl: $successUrl, failUrl: $failUrl }
    ) {
      __typename
      ... on FailedToStartSign {
        errorMessage
      }
      ... on SwedishBankIdSession {
        autoStartToken
      }
      ... on NorwegianBankIdSession {
        redirectUrl
      }
    }
  }
`
export type SignQuotesMutationFn = ApolloReactCommon.MutationFunction<
  SignQuotesMutation,
  SignQuotesMutationVariables
>

/**
 * __useSignQuotesMutation__
 *
 * To run a mutation, you first call `useSignQuotesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignQuotesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signQuotesMutation, { data, loading, error }] = useSignQuotesMutation({
 *   variables: {
 *      quoteIds: // value for 'quoteIds'
 *      successUrl: // value for 'successUrl'
 *      failUrl: // value for 'failUrl'
 *   },
 * });
 */
export function useSignQuotesMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    SignQuotesMutation,
    SignQuotesMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    SignQuotesMutation,
    SignQuotesMutationVariables
  >(SignQuotesDocument, baseOptions)
}
export type SignQuotesMutationHookResult = ReturnType<
  typeof useSignQuotesMutation
>
export type SignQuotesMutationResult = ApolloReactCommon.MutationResult<
  SignQuotesMutation
>
export type SignQuotesMutationOptions = ApolloReactCommon.BaseMutationOptions<
  SignQuotesMutation,
  SignQuotesMutationVariables
>
export const SignStatusDocument = gql`
  query SignStatus {
    signStatus {
      collectStatus {
        status
        code
      }
      signState
    }
  }
`

/**
 * __useSignStatusQuery__
 *
 * To run a query within a React component, call `useSignStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useSignStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSignStatusQuery({
 *   variables: {
 *   },
 * });
 */
export function useSignStatusQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    SignStatusQuery,
    SignStatusQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<SignStatusQuery, SignStatusQueryVariables>(
    SignStatusDocument,
    baseOptions,
  )
}
export function useSignStatusLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    SignStatusQuery,
    SignStatusQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<
    SignStatusQuery,
    SignStatusQueryVariables
  >(SignStatusDocument, baseOptions)
}
export type SignStatusQueryHookResult = ReturnType<typeof useSignStatusQuery>
export type SignStatusLazyQueryHookResult = ReturnType<
  typeof useSignStatusLazyQuery
>
export type SignStatusQueryResult = ApolloReactCommon.QueryResult<
  SignStatusQuery,
  SignStatusQueryVariables
>
export const SignStatusListenerDocument = gql`
  subscription SignStatusListener {
    signStatus {
      status {
        signState
        collectStatus {
          status
          code
        }
      }
    }
  }
`

/**
 * __useSignStatusListenerSubscription__
 *
 * To run a query within a React component, call `useSignStatusListenerSubscription` and pass it any options that fit your needs.
 * When your component renders, `useSignStatusListenerSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSignStatusListenerSubscription({
 *   variables: {
 *   },
 * });
 */
export function useSignStatusListenerSubscription(
  baseOptions?: ApolloReactHooks.SubscriptionHookOptions<
    SignStatusListenerSubscription,
    SignStatusListenerSubscriptionVariables
  >,
) {
  return ApolloReactHooks.useSubscription<
    SignStatusListenerSubscription,
    SignStatusListenerSubscriptionVariables
  >(SignStatusListenerDocument, baseOptions)
}
export type SignStatusListenerSubscriptionHookResult = ReturnType<
  typeof useSignStatusListenerSubscription
>
export type SignStatusListenerSubscriptionResult = ApolloReactCommon.SubscriptionResult<
  SignStatusListenerSubscription
>
export const StartDateDocument = gql`
  mutation StartDate($quoteId: ID!, $date: LocalDate) {
    editQuote(input: { id: $quoteId, startDate: $date }) {
      ... on CompleteQuote {
        startDate
      }
    }
  }
`
export type StartDateMutationFn = ApolloReactCommon.MutationFunction<
  StartDateMutation,
  StartDateMutationVariables
>

/**
 * __useStartDateMutation__
 *
 * To run a mutation, you first call `useStartDateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStartDateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [startDateMutation, { data, loading, error }] = useStartDateMutation({
 *   variables: {
 *      quoteId: // value for 'quoteId'
 *      date: // value for 'date'
 *   },
 * });
 */
export function useStartDateMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    StartDateMutation,
    StartDateMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    StartDateMutation,
    StartDateMutationVariables
  >(StartDateDocument, baseOptions)
}
export type StartDateMutationHookResult = ReturnType<
  typeof useStartDateMutation
>
export type StartDateMutationResult = ApolloReactCommon.MutationResult<
  StartDateMutation
>
export type StartDateMutationOptions = ApolloReactCommon.BaseMutationOptions<
  StartDateMutation,
  StartDateMutationVariables
>
export const SubmitAdditionalPaymentDetialsDocument = gql`
  mutation SubmitAdditionalPaymentDetials(
    $request: AdditionalPaymentsDetailsRequest!
  ) {
    submitAdditionalPaymentDetails(req: $request) {
      ... on AdditionalPaymentsDetailsResponseAction {
        action
      }
      ... on AdditionalPaymentsDetailsResponseFinished {
        resultCode
      }
    }
  }
`
export type SubmitAdditionalPaymentDetialsMutationFn = ApolloReactCommon.MutationFunction<
  SubmitAdditionalPaymentDetialsMutation,
  SubmitAdditionalPaymentDetialsMutationVariables
>

/**
 * __useSubmitAdditionalPaymentDetialsMutation__
 *
 * To run a mutation, you first call `useSubmitAdditionalPaymentDetialsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitAdditionalPaymentDetialsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitAdditionalPaymentDetialsMutation, { data, loading, error }] = useSubmitAdditionalPaymentDetialsMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useSubmitAdditionalPaymentDetialsMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    SubmitAdditionalPaymentDetialsMutation,
    SubmitAdditionalPaymentDetialsMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    SubmitAdditionalPaymentDetialsMutation,
    SubmitAdditionalPaymentDetialsMutationVariables
  >(SubmitAdditionalPaymentDetialsDocument, baseOptions)
}
export type SubmitAdditionalPaymentDetialsMutationHookResult = ReturnType<
  typeof useSubmitAdditionalPaymentDetialsMutation
>
export type SubmitAdditionalPaymentDetialsMutationResult = ApolloReactCommon.MutationResult<
  SubmitAdditionalPaymentDetialsMutation
>
export type SubmitAdditionalPaymentDetialsMutationOptions = ApolloReactCommon.BaseMutationOptions<
  SubmitAdditionalPaymentDetialsMutation,
  SubmitAdditionalPaymentDetialsMutationVariables
>
export const TokenizePaymentDetailsDocument = gql`
  mutation TokenizePaymentDetails($paymentsRequest: TokenizationRequest!) {
    tokenizePaymentDetails(req: $paymentsRequest) {
      ... on TokenizationResponseAction {
        action
      }
      ... on TokenizationResponseFinished {
        resultCode
      }
    }
  }
`
export type TokenizePaymentDetailsMutationFn = ApolloReactCommon.MutationFunction<
  TokenizePaymentDetailsMutation,
  TokenizePaymentDetailsMutationVariables
>

/**
 * __useTokenizePaymentDetailsMutation__
 *
 * To run a mutation, you first call `useTokenizePaymentDetailsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTokenizePaymentDetailsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [tokenizePaymentDetailsMutation, { data, loading, error }] = useTokenizePaymentDetailsMutation({
 *   variables: {
 *      paymentsRequest: // value for 'paymentsRequest'
 *   },
 * });
 */
export function useTokenizePaymentDetailsMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    TokenizePaymentDetailsMutation,
    TokenizePaymentDetailsMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    TokenizePaymentDetailsMutation,
    TokenizePaymentDetailsMutationVariables
  >(TokenizePaymentDetailsDocument, baseOptions)
}
export type TokenizePaymentDetailsMutationHookResult = ReturnType<
  typeof useTokenizePaymentDetailsMutation
>
export type TokenizePaymentDetailsMutationResult = ApolloReactCommon.MutationResult<
  TokenizePaymentDetailsMutation
>
export type TokenizePaymentDetailsMutationOptions = ApolloReactCommon.BaseMutationOptions<
  TokenizePaymentDetailsMutation,
  TokenizePaymentDetailsMutationVariables
>
export const UpdatePickedLocaleDocument = gql`
  mutation UpdatePickedLocale($pickedLocale: Locale!) {
    updatePickedLocale(pickedLocale: $pickedLocale) {
      id
    }
  }
`
export type UpdatePickedLocaleMutationFn = ApolloReactCommon.MutationFunction<
  UpdatePickedLocaleMutation,
  UpdatePickedLocaleMutationVariables
>

/**
 * __useUpdatePickedLocaleMutation__
 *
 * To run a mutation, you first call `useUpdatePickedLocaleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePickedLocaleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePickedLocaleMutation, { data, loading, error }] = useUpdatePickedLocaleMutation({
 *   variables: {
 *      pickedLocale: // value for 'pickedLocale'
 *   },
 * });
 */
export function useUpdatePickedLocaleMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdatePickedLocaleMutation,
    UpdatePickedLocaleMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    UpdatePickedLocaleMutation,
    UpdatePickedLocaleMutationVariables
  >(UpdatePickedLocaleDocument, baseOptions)
}
export type UpdatePickedLocaleMutationHookResult = ReturnType<
  typeof useUpdatePickedLocaleMutation
>
export type UpdatePickedLocaleMutationResult = ApolloReactCommon.MutationResult<
  UpdatePickedLocaleMutation
>
export type UpdatePickedLocaleMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdatePickedLocaleMutation,
  UpdatePickedLocaleMutationVariables
>
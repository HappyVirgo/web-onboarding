import React from 'react'
import { useMarket, Market } from 'components/utils/CurrentLocale'
import { DanishDetails } from './DanishDetails'
import { NorwegianDetails } from './NorwegianDetails'
import { SwedishDetails } from './SwedishDetails'
import { Details } from './types'

export default ({
  fieldSchema,
  formikProps,
  offerQuote,
  textKeys,
}: Details) => {
  const market = useMarket()
  return (
    <>
      {market === Market.Se && (
        <SwedishDetails
          fieldSchema={fieldSchema}
          formikProps={formikProps}
          offerQuote={offerQuote}
          textKeys={textKeys}
        />
      )}
      {market === Market.No && (
        <NorwegianDetails
          fieldSchema={fieldSchema}
          formikProps={formikProps}
          offerQuote={offerQuote}
          textKeys={textKeys}
        />
      )}
      {market === Market.Dk && (
        <DanishDetails
          fieldSchema={fieldSchema}
          formikProps={formikProps}
          offerQuote={offerQuote}
          textKeys={textKeys}
        />
      )}
    </>
  )
}

import {
  ApartmentType,
  CreateQuoteInput,
  useQuoteLazyQuery,
} from 'data/graphql'
import { Form, Formik, FormikProps } from 'formik'
import { Button } from 'new-components/buttons'
import { InputField } from 'new-components/inputs'
import { createQuote } from 'pages/Embark/createQuote'
import * as React from 'react'
import { StorageContainer, useStorage } from 'utils/StorageContainer'

enum QuoteType {
  NorwegianHome = 'norwegian-home',
  NorwegianTravel = 'norwegian-travel',
  SwedishApartment = 'swedish-apartment',
  SwedishHouse = 'swedish-house',
}

export const Offer: React.FC = () => {
  const [getQuote, { data, refetch }] = useQuoteLazyQuery()
  const [quoteId, setQuoteId] = React.useState<string>('') // TODO handle multiple quotes
  const [quoteType, setQuoteType] = React.useState(QuoteType.NorwegianHome)
  const storageState = useStorage()

  React.useEffect(() => {
    const quoteIds = storageState.session.getSession()?.quoteIds ?? []
    if (!quoteId && quoteIds[0]) {
      setQuoteId(quoteIds[0] ?? '')
      return
    }

    if (quoteId) {
      storageState.session.setSession({
        ...storageState.session.getSession(),
        quoteIds: [quoteId],
      })
      getQuote({ variables: { id: quoteId } })
    }
  }, [quoteId])

  return (
    <StorageContainer>
      {(storage) => (
        <>
          <Formik
            initialValues={{ quoteId }}
            onSubmit={() => {
              /* noop */
            }}
          >
            {() => (
              <InputField
                label="Quote id"
                placeholder="d6c60432-dc7b-4405-840e-b4fd8164e310"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setQuoteId(e.target.value)
                }}
                value={quoteId}
              />
            )}
          </Formik>

          {!data?.quote && (
            <>
              <Formik
                initialValues={{}}
                onSubmit={() => {
                  /* noop */
                }}
              >
                {() => (
                  <InputField
                    label="Type"
                    placeholder=""
                    options={[
                      {
                        label: 'Norwegian Home',
                        value: QuoteType.NorwegianHome,
                      },
                      {
                        label: 'Norwegian Travel',
                        value: QuoteType.NorwegianTravel,
                      },
                      {
                        label: 'Swedish Apartment',
                        value: QuoteType.SwedishApartment,
                      },
                      {
                        label: 'Swedish House',
                        value: QuoteType.SwedishHouse,
                      },
                    ]}
                    value={quoteType}
                    onChange={(value: React.ChangeEvent<HTMLSelectElement>) =>
                      setQuoteType(value.target.value as QuoteType)
                    }
                  />
                )}
              </Formik>

              {quoteType === QuoteType.NorwegianHome && (
                <Formik
                  initialValues={{
                    firstName: 'Blargh',
                    lastName: 'Blarghson',
                    currentInsurer: '',
                    birthDate: '1995-09-29',
                    ssn: '',
                    startDate: '',
                    email: 'blargis@hedvig.com',
                    norwegianHomeContents: {
                      coInsured: 0,
                      isYouth: false,
                      livingSpace: 0,
                      street: 'Gulebøjsveien 1',
                      type: 'RENT',
                      zipCode: '',
                    },
                  }}
                  onSubmit={async (values) => {
                    await createQuote(storage)({
                      input: {
                        ...values,
                        id: quoteId,
                        currentInsurer: values.currentInsurer || undefined,
                        // @ts-ignore
                        startDate: values.startDate || undefined,
                      },
                    })

                    await refetch()
                  }}
                >
                  {(props) => (
                    <>
                      <QuoteForm formik={props}>
                        <NorwegianHome formik={props} />
                      </QuoteForm>
                    </>
                  )}
                </Formik>
              )}

              {quoteType === QuoteType.NorwegianTravel && (
                <Formik
                  initialValues={{
                    firstName: 'Blargh',
                    lastName: 'Blarghson',
                    currentInsurer: '',
                    birthDate: '1995-09-29',
                    ssn: '',
                    startDate: '',
                    email: 'blargis@hedvig.com',
                    norwegianTravel: {
                      coInsured: 0,
                      isYouth: false,
                    },
                  }}
                  onSubmit={async (values) => {
                    await createQuote(storage)({
                      input: {
                        ...values,
                        id: quoteId,
                        currentInsurer: values.currentInsurer || undefined,
                        // @ts-ignore
                        startDate: values.startDate || undefined,
                      },
                    })

                    await refetch()
                  }}
                >
                  {(props) => (
                    <>
                      <QuoteForm formik={props}>
                        <NorwegianTravel formik={props} />
                      </QuoteForm>
                    </>
                  )}
                </Formik>
              )}

              {quoteType === QuoteType.SwedishApartment && (
                <Formik<Partial<CreateQuoteInput>>
                  initialValues={{
                    firstName: 'Blargh',
                    lastName: 'Blarghson',
                    currentInsurer: '',
                    birthDate: '1995-09-29',
                    ssn: '',
                    startDate: '',
                    email: 'blargis@hedvig.com',
                    swedishApartment: {
                      street: 'Storgatan 1',
                      zipCode: '',
                      livingSpace: 23,
                      householdSize: 1,
                      type: ApartmentType.Rent,
                    },
                  }}
                  onSubmit={async (values) => {
                    await createQuote(storage)({
                      input: {
                        ...values,
                        id: quoteId,
                        currentInsurer: values.currentInsurer || undefined,
                        // @ts-ignore
                        startDate: values.startDate || undefined,
                      },
                    })

                    await refetch()
                  }}
                >
                  {(props) => (
                    <>
                      <QuoteForm formik={props}>
                        <SwedishApartment formik={props} />
                      </QuoteForm>
                    </>
                  )}
                </Formik>
              )}
            </>
          )}
          {data?.quote && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </>
      )}
    </StorageContainer>
  )
}

interface WithFormikProps {
  formik: FormikProps<any>
}

const QuoteForm: React.FC<WithFormikProps> = ({ children, formik }) => {
  return (
    <Form>
      <InputField
        label="First name"
        placeholder="First name"
        {...formik.getFieldProps('firstName')}
      />
      <InputField
        label="Last name"
        placeholder="Last name"
        {...formik.getFieldProps('lastName')}
      />
      <InputField
        label="Current Insurer"
        placeholder="Current Insurer?"
        {...formik.getFieldProps('currentInsurer')}
      />
      <InputField
        label="Birth date"
        placeholder="2012-12-12"
        {...formik.getFieldProps('birthDate')}
      />
      <InputField
        label="ssn"
        placeholder="ssn"
        {...formik.getFieldProps('ssn')}
      />
      <InputField
        label="Start Date"
        placeholder="2020-03-13"
        {...formik.getFieldProps('startDate')}
      />
      <InputField
        label="Email"
        placeholder="Email?"
        {...formik.getFieldProps('email')}
      />

      {children}

      <Button type="submit">Create quote</Button>
    </Form>
  )
}

export const NorwegianHome: React.FC<WithFormikProps> = ({ formik }) => {
  return (
    <>
      <InputField
        label="Co-insured"
        placeholder="1"
        type="number"
        {...formik.getFieldProps('norwegianHomeContents.coInsured')}
      />
      <div>isYouth TODO</div>
      <InputField
        label="Living space"
        placeholder="23"
        type="number"
        {...formik.getFieldProps('norwegianHomeContents.livingSpace')}
      />
      <InputField
        label="Street"
        placeholder="Gulebøjsveien 1"
        {...formik.getFieldProps('norwegianHomeContents.street')}
      />
      <InputField
        label="Zip code"
        placeholder="1234"
        {...formik.getFieldProps('norwegianHomeContents.zipCode')}
      />
      <InputField
        label="Type"
        placeholder=""
        options={[
          { label: 'Own', value: 'OWN' },
          { label: 'Rent', value: 'RENT' },
        ]}
        {...formik.getFieldProps('norwegianHomeContents.type')}
      />
    </>
  )
}

export const NorwegianTravel: React.FC<WithFormikProps> = ({ formik }) => {
  return (
    <>
      <InputField
        label="Co-insured"
        placeholder="1"
        type="number"
        {...formik.getFieldProps('norwegianTravel.coInsured')}
      />
      <div>isYouth TODO</div>
    </>
  )
}

export const SwedishApartment: React.FC<WithFormikProps> = ({ formik }) => {
  return (
    <>
      <InputField
        label="Household size"
        placeholder="1"
        type="number"
        {...formik.getFieldProps('swedishApartment.householdSize')}
      />
      <InputField
        label="Living space"
        placeholder="23"
        type="number"
        {...formik.getFieldProps('swedishApartment.livingSpace')}
      />
      <InputField
        label="Street"
        placeholder="Gulebøjsveien 1"
        {...formik.getFieldProps('swedishApartment.street')}
      />
      <InputField
        label="Zip code"
        placeholder="12345"
        {...formik.getFieldProps('swedishApartment.zipCode')}
      />
      <InputField
        label="Type"
        placeholder=""
        options={[
          { label: 'Brf', value: ApartmentType.Brf },
          { label: 'Rent', value: ApartmentType.Rent },
          { label: 'Brf (student)', value: ApartmentType.StudentBrf },
          { label: 'Rent (student)', value: ApartmentType.StudentRent },
        ]}
        {...formik.getFieldProps('swedishApartment.type')}
      />
    </>
  )
}
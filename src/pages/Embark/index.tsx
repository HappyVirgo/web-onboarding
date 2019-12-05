import { css, Global } from '@emotion/core'
import styled from '@emotion/styled'
import {
  EmbarkProvider,
  Header,
  Passage,
  useEmbark,
} from '@hedviginsurance/embark'
import { AnimatePresence, motion } from 'framer-motion'
import * as React from 'react'
import { useHistory } from 'react-router'

import { colorsV2 } from '@hedviginsurance/brand'
import { StorageContainer } from '../../utils/StorageContainer'
import { createQuote } from './createQuote'
import { EmbarkBackground } from './EmbarkBackground'
import { resolveHouseInformation } from './houseInformation'
import { Landing } from './landing'
import { resolvePersonalInformation } from './personalInformation'

const EmbarkStyling = styled.div`
  height: 100vh;
  background-color: ${colorsV2.gray};

  * {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ul,
  li {
    list-style-type: none;
  }
`

const PassageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
`

interface EmbarkProps {
  data: any
  name: string
  baseUrl: string
}

const Embark: React.FunctionComponent<EmbarkProps> = (props) => {
  const history = useHistory()
  const {
    reducer: [state, dispatch],
    goTo,
  } = useEmbark(() => {
    if (
      history.location.state &&
      props.name === history.location.state.embarkPassageName
    ) {
      return {
        history: history.location.state.embarkPassageHistory || [
          props.data.startPassage,
        ],
        passageId:
          history.location.state.embarkPassageId || props.data.startPassage,
        data: props.data,
      }
    }

    return {
      history: [props.data.startPassage],
      passageId: props.data.startPassage,
      data: props.data,
    }
  })

  const currentPassage = state.data.passages.find(
    (passage: any) => passage.id === state.passageId,
  )

  React.useEffect(() => {
    const method =
      history.location.pathname === props.baseUrl ? 'replace' : 'push'
    const newPathName = `${props.baseUrl}${currentPassage.url ||
      `/${currentPassage.id}`}`

    if (history.location.pathname !== newPathName) {
      history[method](newPathName, {
        embarkPassageId: currentPassage.id,
        embarkPassageHistory: state.history,
        embarkPassageName: props.name,
      })
    }
  }, [currentPassage.id])

  return (
    <PassageContainer>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeOut', duration: 1 }}
      >
        <StorageContainer>
          {({ session }) => (
            <Header
              partnerName={
                (session &&
                  session.getSession() &&
                  session.getSession()!.partner) ||
                null
              }
              passage={currentPassage}
              storyData={state.data}
            />
          )}
        </StorageContainer>
      </motion.div>
      <Passage
        canGoBack={state.history.length > 1}
        historyGoBackListener={(goBack) =>
          history.listen((_: any, action: string) => {
            if (action === 'POP' && state.history.length > 1) {
              goBack()
            }
          })
        }
        passage={currentPassage}
        goBack={() => {
          dispatch({
            type: 'GO_BACK',
          })
        }}
        changePassage={goTo}
      />
    </PassageContainer>
  )
}

interface EmbarkRootProps {
  name?: string
  baseUrl?: string
  showLanding?: boolean
}

export const EmbarkRoot: React.FunctionComponent<EmbarkRootProps> = (props) => {
  const history = useHistory()
  const [data, setData] = React.useState<null | any>(null)
  const [initialStore, setInitialStore] = React.useState<null | {
    [key: string]: any
  }>()

  const isShowingLanding = props.showLanding || false

  React.useEffect(() => {
    if (!props.name) {
      return
    }

    // TODO load this via GraphQL
    fetch(
      `https://hedvig-embark.herokuapp.com/angel-data?name=${encodeURIComponent(
        props.name,
      )}`,
    )
      .then((res) => res.json())
      .then((angelData) => {
        setData(angelData)
      })
  }, [props.name])

  React.useEffect(() => {
    if (!props.name) {
      return
    }

    const prevStore = window.localStorage.getItem(
      `embark-store-${encodeURIComponent(props.name)}`,
    )

    if (!prevStore) {
      setInitialStore({})
      return
    }

    try {
      const parsedPrevStore = JSON.parse(prevStore)
      setInitialStore(parsedPrevStore as { [key: string]: any })
    } catch (err) {
      setInitialStore({})
    }
  }, [props.name])

  return (
    <EmbarkStyling>
      <Global
        styles={css`
          body {
            overflow: hidden;
          }
        `}
      />
      <EmbarkBackground />
      <AnimatePresence>
        {!isShowingLanding && (
          <motion.div
            key="embark"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              ease: 'easeOut',
              duration: 0.5,
              delay: 0.25,
            }}
          >
            {data && initialStore && (
              <StorageContainer>
                {(storageState) => (
                  <EmbarkProvider
                    externalRedirects={{
                      Offer: () => {
                        history.push('/new-member/offer')
                      },
                    }}
                    data={data}
                    resolvers={{
                      personalInformationApi: resolvePersonalInformation,
                      houseInformation: resolveHouseInformation,
                      createQuote: createQuote(storageState),
                    }}
                    initialStore={initialStore}
                    onStoreChange={(store) => {
                      window.localStorage.setItem(
                        `embark-store-${encodeURIComponent(props.name!)}`,
                        JSON.stringify(store),
                      )
                    }}
                  >
                    <Embark
                      baseUrl={props.baseUrl!}
                      data={data}
                      name={props.name!}
                    />
                  </EmbarkProvider>
                )}
              </StorageContainer>
            )}
          </motion.div>
        )}
        {isShowingLanding && (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              ease: 'easeOut',
              duration: 0.5,
              delay: 0.25,
            }}
          >
            <Landing />
          </motion.div>
        )}
      </AnimatePresence>
    </EmbarkStyling>
  )
}

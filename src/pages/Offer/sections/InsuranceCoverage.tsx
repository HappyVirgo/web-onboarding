import { colors, fonts } from '@hedviginsurance/brand'
import { ActionMap, Container } from 'constate'
import * as React from 'react'
import styled from 'react-emotion'
import { CardWrapper } from '../components/CardWrapper'
import { HeaderWrapper } from '../components/HeaderWrapper'

interface Props {
  headline: string
  subTitle: string
}

const PERILSIDE = 72

const Card = styled('div')({
  marginTop: '70px',
  paddingTop: '30px',
  paddingBottom: '30px',
  backgroundColor: colors.WHITE,
  boxShadow: '0px 8px 15px -13px rgba(0,0,0,0.67)',
  borderRadius: '10px',
})

const Wrapper = styled('div')({
  backgroundColor: colors.OFF_WHITE,
})

const Header = styled('h1')({
  color: colors.BLACK,
  marginTop: '30px',
  marginBottom: '30px',
  fontSize: '32px',
})

const InnerWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
})

const BigCol = styled('div')({})

const Row = styled('div')({
  marginLeft: '104px',
  marginRight: '104px',
  display: 'flex',
  alignItems: 'baseline',
  flexDirection: 'row',
  flexWrap: 'wrap',
  '@media (max-width: 700px)': {
    flexFlow: 'wrap',
    justifyContent: 'flex-start',
  },
})

const Col = styled('div')({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  cursor: 'pointer',
})

const PerilIcon = styled('img')({
  marginBottom: '10px',
  marginTop: '10px',
  marginRight: '30px',
  marginLeft: '30px',
  width: PERILSIDE,
  height: PERILSIDE,
})

const PerilTitle = styled('div')({
  marginBottom: '0px',
  marginTop: '0px',
  fontSize: '14px',
  textAlign: 'center',
  color: colors.DARK_GRAY,
  borderRadius: '30px',
  padding: '5px',
})

const DropDownText = styled('div')({
  marginTop: '30px',
  fontSize: '14px',
  textAlign: 'center',
  color: colors.DARK_GRAY,
  marginLeft: '104px',
  marginRight: '104px',
})

const Switcher = styled('div')({
  backgroundColor: colors.LIGHT_GRAY,
  borderRadius: '20px',
  display: 'flex',
  flexDirection: 'row',
  width: 'max-content',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginBottom: '30px',
  '@media (max-width: 400px)': {
    width: '90%',
    borderRadius: '40px',
  },
})

const SwitcherItem = styled('div')({
  borderRadius: '30px',
  paddingTop: '10px',
  paddingBottom: '10px',
  paddingRight: '20px',
  paddingLeft: '20px',
  fontSize: '14px',
  fontFamily: fonts.CIRCULAR,
  cursor: 'pointer',
  userSelect: 'none',
  textAlign: 'center',
})

const PERILS = [
  {
    key: 0,
    name: 'Din Bostad',
    icons: [
      {
        key: 0,
        title: 'Eldsvåda',
        icon: '/assets/offering/eldsvada2.svg',
        iconGrey: '/assets/offering/eldsvada2-grey.svg',
        expandableText:
          'En överhettad mobilladdare eller ett misslyckat försök att fritera pommes frites, bränder uppstår på de mest vardagliga vis. Om det börjar brinna i din lägenhet får du ersättning för brand- och rökskador.',
      },
      {
        key: 1,
        title: 'Inbrott',
        icon: '/assets/offering/inbrott.svg',
        iconGrey: '/assets/offering/inbrott-grey.svg',
        expandableText:
          'Ditt hem är din borg. Skulle inkräktare bryta sig in för att stjäla dina saker så ersätter Hedvig dig för det.',
      },
      {
        key: 2,
        title: 'Oväder',
        icon: '/assets/offering/ovader2.svg',
        iconGrey: '/assets/offering/ovader2-grey.svg',
        expandableText:
          'En storm kan vara mäktig så länge den håller sig utanför fönstret. När åskan tar kol på din nya TV och skyfallet letar sig in och svämmar över ditt källarförråd är det tur att du har Hedvig. Du ersätts om ett oväder orsakat skador.',
      },
      {
        key: 3,
        title: 'Skadegörelse',
        icon: '/assets/offering/skadegorelse2.svg',
        iconGrey: '/assets/offering/skadegorelse2-grey.svg',
        expandableText:
          'Om någon bryter sig in i din lägenhet för att vandalisera och förstöra så ersätter Hedvig dig för skadorna.',
      },
      {
        key: 4,
        title: 'Vattenläcka',
        icon: '/assets/offering/vattenlacka2.svg',
        iconGrey: '/assets/offering/vattenlacka2-grey.svg',
        expandableText:
          'Din diskmaskin går sönder och du kommer hem till en swimmingpool i köket och blöta grannar våningen under. Råkar du ut för en vattenläcka får du ersättning för skadorna.',
      },
      {
        key: 5,
        title: 'Vitvaror',
        icon: '/assets/offering/vitvaror.svg',
        iconGrey: '/assets/offering/vitvaror-grey.svg',
        expandableText:
          'Plötsligt tackar din spis för sig eller så blir det kortslutning i din prisbelönta kaffemaskin. Hedvig ersätter skador på dina vitvaror, så länge det inte rör sig om skador som din hyresvärd är skyldig att ersätta.',
      },
      {
        key: 6,
        title: 'Förköpsinfo',
        icon: '/assets/offering/forkopsinformation.svg',
        iconGrey: '/assets/offering/forkopsinformation-grey.svg',
        expandableText: 'Open pdf here instead.',
      },
      {
        key: 7,
        title: 'Försäkringsvillkor',
        icon: '/assets/offering/forsakringsvillkor.svg',
        iconGrey: '/assets/offering/forsakringsvillkor-grey.svg',
        expandableText: 'Open pdf here instead.',
      },
      {
        key: 8,
        title: 'Bostadsrättstillägg',
        icon: '/assets/offering/oval.svg',
        iconGrey: '/assets/offering/oval.svg',
        expandableText: 'No text here yet.',
      },
    ],
  },
  {
    key: 1,
    name: 'Dig och din familj',
    icons: [
      {
        key: 0,
        title: 'Juridisk tvist',
        icon: '/assets/offering/juridisk-tvist.svg',
        iconGrey: '/assets/offering/juridisk-tvist-grey.svg',
        expandableText:
          'Om du hamnar i domstol så täcker Hedvig kostnaden för ditt ombud, och andra rättegångskostnader. Hedvig täcker också om någon skulle kräva dig på skadestånd för att du har skadat någon, eller någons saker.',
      },
      {
        key: 1,
        title: 'Resetrubbel',
        icon: '/assets/offering/resetrubbel.svg',
        iconGrey: '/assets/offering/resetrubbel-grey.svg',
        expandableText:
          'Ibland klaffar inte allt som det ska när du ska ut i världen. Till exempel, om ditt bagage blir försenat ersätter Hedvig dig för att köpa saker du behöver. Och om det skulle bli oroligheter i landet du är i, som vid en naturkatastrof, så evakuerar Hedvig dig hem till Sverige.',
      },
      {
        key: 2,
        title: 'Överfall',
        icon: '/assets/offering/overfall.svg',
        iconGrey: '/assets/offering/overfall-grey.svg',
        expandableText:
          'En hemförsäkring skyddar även dig personligen. Om någon skulle utsätta dig för ett våldsbrott, till exempel misshandel eller rån ersätts du med ett fast belopp.',
      },
      {
        key: 3,
        title: 'Sjuk på resa',
        icon: '/assets/offering/sjuk-pa-resa.svg',
        iconGrey: '/assets/offering/sjuk-pa-resa-grey.svg',
        expandableText:
          'Få saker är roligare än att utforska världen, men det är mindre kul om man blir sjuk. Eller ännu värre, råkar ut för en olycka. Därför ersätts du både för missade resdagar och sjukhuskostnader. Är det riktigt illa står Hedvig för transporten hem till Sverige. Om du har skadats eller blivit sjuk utomlands och behöver akut vård, ring Hedvig Global Assistance dygnet runt på +45 38 48 94 61.',
      },
    ],
  },
  {
    key: 2,
    name: 'Dina prylar',
    icons: [
      {
        key: 0,
        title: 'Drulle',
        icon: '/assets/offering/drulle.svg',
        iconGrey: '/assets/offering/drulle-grey.svg',
        expandableText:
          'De flesta känner igen känslan av slow-motion när mobilen glider ur handen och voltar ner mot kall asfalt. "Drulle" kallas ibland för otursförsäkring, och det är just vad det är. Om du har otur och dina prylar går sönder, så ersätts du för dem.',
      },
      {
        key: 1,
        title: 'Stöld',
        icon: '/assets/offering/stold.svg',
        iconGrey: '/assets/offering/stold-grey.svg',
        expandableText:
          'Prylar är till för att användas, i synnerhet favoriterna. Älskade väskor och jackor följer med på restaurang, datorn får komma med på kafé, plånboken och cykeln är med överallt. Om något stjäls av dig så ersätts du för det.',
      },
      {
        key: 2,
        title: 'Skadegörelse',
        icon: '/assets/offering/skadegorelse.svg',
        iconGrey: '/assets/offering/skadegorelse-grey.svg',
        expandableText:
          'Varför vissa väljer att förstöra andras saker är en gåta. Hursomhelst så ersätts du när dina prylar förstörs av skadegörelse, eller i samband med att du blir överfallen.',
      },
      {
        key: 3,
        title: 'Eldsvåda',
        icon: '/assets/offering/ovader.svg',
        iconGrey: '/assets/offering/ovader-grey.svg',
        expandableText:
          'Om det skulle brinna så ersätter Hedvig utöver skador på din lägenhet även alla prylar som blir förstörda.',
      },

      {
        key: 4,
        title: 'Vattenläcka',
        icon: '/assets/offering/vattenlacka.svg',
        iconGrey: '/assets/offering/vattenlacka-grey.svg',
        expandableText:
          'Om du har en vattenläcka hemma så ersätter Hedvig utöver skador på din lägenhet även alla prylar som blir förstörda.',
      },
      {
        key: 5,
        title: 'Oväder',
        icon: '/assets/offering/ovader.svg',
        iconGrey: '/assets/offering/ovader-grey.svg',
        expandableText:
          'Hedvig ersätter dig om ett oväder på något sätt skulle orsaka skador på dina prylar, utöver skador på din lägenhet.',
      },
    ],
  },
]

interface State {
  activeTab: number
  showIconNumber: number
  showPerilNumber: number
  textToShow: string
}
interface Actions {
  handleIconClick: (peril: number, icon: number, text: string) => void
  handleActiveTab: (activeTab: number) => void
}

export const InsuranceCoverage: React.SFC<Props> = (props) => (
  <Wrapper>
    <Container<State, ActionMap<State, Actions>>
      initialState={{
        showIconNumber: undefined,
        showPerilNumber: undefined,
        activeTab: 0,
        textToShow: undefined,
      }}
      actions={{
        handleIconClick: (peril: number, icon: number, text: string) => () => ({
          showPerilNumber: peril,
          showIconNumber: icon,
          textToShow: text,
        }),
        handleActiveTab: (tab: number) => () => ({
          activeTab: tab,
          showPerilNumber: undefined,
          showIconNumber: undefined,
          textToShow: undefined,
        }),
      }}
    >
      {(state) => (
        <Wrapper>
          <InnerWrapper>
            <CardWrapper>
              <Card>
                <HeaderWrapper>
                  <Header>{props.headline}</Header>
                </HeaderWrapper>
                <Switcher>
                  {PERILS.map((peril) => (
                    <SwitcherItem
                      key={peril.key}
                      style={{
                        backgroundColor:
                          state.activeTab === peril.key
                            ? colors.DARK_PURPLE
                            : colors.LIGHT_GRAY,
                        color:
                          state.activeTab === peril.key
                            ? colors.WHITE
                            : colors.DARK_PURPLE,
                      }}
                      onClick={() => state.handleActiveTab(peril.key)}
                    >
                      {peril.name}
                    </SwitcherItem>
                  ))}
                </Switcher>
                {PERILS.map((peril) => (
                  <BigCol key={peril.key}>
                    {state.activeTab === peril.key ? (
                      <Row>
                        {peril.icons.map((column) => (
                          <Col
                            key={column.key}
                            onClick={() =>
                              state.handleIconClick(
                                peril.key,
                                column.key,
                                column.expandableText,
                              )
                            }
                          >
                            <PerilIcon
                              src={
                                state.showPerilNumber === peril.key &&
                                state.showIconNumber === column.key
                                  ? column.icon
                                  : column.iconGrey
                              }
                            />
                            <PerilTitle
                              style={{
                                color:
                                  state.showPerilNumber === peril.key &&
                                  state.showIconNumber === column.key
                                    ? colors.DARK_PURPLE
                                    : colors.DARK_GRAY,
                              }}
                            >
                              {column.title}
                            </PerilTitle>
                          </Col>
                        ))}
                      </Row>
                    ) : null}
                  </BigCol>
                ))}
                {state.showPerilNumber !== undefined &&
                state.showIconNumber !== undefined ? (
                  <DropDownText>{state.textToShow}</DropDownText>
                ) : null}
              </Card>
            </CardWrapper>
          </InnerWrapper>
        </Wrapper>
      )}
    </Container>
  </Wrapper>
)

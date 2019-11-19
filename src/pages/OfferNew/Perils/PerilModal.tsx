import styled from '@emotion/styled'
import { colorsV2 } from '@hedviginsurance/brand'
import hexToRgba from 'hex-to-rgba'
import * as React from 'react'
import { BackArrow } from '../../../components/icons/BackArrow'
import { ForwardArrow } from '../../../components/icons/ForwardArrow'
import { Modal, ModalProps } from '../../../components/ModalNew'
import { Peril } from './index'

const TRANSITION_MS = 250

interface PerilModalProps {
  perils: Peril[]
  currentPeril: number
  setCurrentPeril: (perilIndex: number) => void
}

const Header = styled('div')`
  width: 100%;
  height: 8.75rem;
  background-color: ${colorsV2.white};
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 0.125rem;
`

const Picker = styled('div')`
  width: 100%;
  height: 5.5rem;
  display: flex;
  flex-flow: row;
  margin: 0 -0.75rem;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
`

const PickerItem = styled('button')`
  width: 100px;
  flex-shrink: 0;
  padding: 0.5rem 0.5rem 0.625rem 0.5rem;
  margin: 0 0.5rem;
  background: none;
  border: none;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  svg {
    width: 2.75rem;
    height: 2.75rem;
  }

  :focus {
    outline: none;
  }
`

const PickerItemLabel = styled('div')`
  font-size: 0.9375rem;
  letter-spacing: -0.23px;
  text-align: center;
  white-space: nowrap;
  color: ${colorsV2.darkgray};
`

interface PerilItemsContainerProps {
  currentPeril: number
  transition: boolean
}

const PerilItemsContainer = styled('div')<PerilItemsContainerProps>`
  position: relative;
  height: 5.5rem;
  display: flex;
  ${(props) =>
    props.transition && `transition: all ${TRANSITION_MS}ms ease-in-out;`}

  ${(props) =>
    `transform: translateX(${
      props.currentPeril !== 0
        ? `calc((-100%/3) - ${(props.currentPeril - 12 - 1) * (100 + 16) +
            8}px)`
        : `calc((-100%/3) + 6.75rem)`
    });`}
`

const Indicator = styled('div')`
  position: absolute;
  width: 6.25rem;
  height: 0.125rem;
  bottom: 0;
  left: 0;
  background-color: ${colorsV2.black};
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  transition: transform 0.15s ease-in-out;
  left: 7.25rem;
`

const Gradient = styled('div')`
  height: 5rem;
  width: 6.25rem;
  position: absolute;
  display: flex;
  align-items: center;
  bottom: 0.5rem;
`

const LeftGradient = styled(Gradient)`
  left: 0;
  background: linear-gradient(
    to right,
    ${colorsV2.white} 30%,
    ${hexToRgba(colorsV2.white, 0)} 100%
  );
`

const RightGradient = styled(Gradient)`
  right: 0;
  justify-content: flex-end;
  background: linear-gradient(
    to left,
    ${colorsV2.white} 30%,
    ${hexToRgba(colorsV2.white, 0)} 100%
  );
`

const DirectionButton = styled('button')`
  width: 100%;
  height: 100%;
  display: flex;
  cursor: pointer;
  background: none;
  border: none;
  svg {
    transition: all 0.15s ease-in-out;
    fill: ${colorsV2.gray};
  }
  :focus {
    outline: none;
  }
  &:hover {
    svg {
      fill: ${colorsV2.violet500};
    }
  }
`

const BackButton = styled(DirectionButton)`
  margin-left: 0.625rem;
  justify-content: flex-start;
`

const ForwardButton = styled(DirectionButton)`
  margin-right: 0.625rem;
  justify-content: flex-end;
`

const Content = styled('div')`
  padding: 1.5rem;
`

export const PerilModal = (
  props: React.PropsWithChildren<PerilModalProps & ModalProps>,
) => {
  const [transitionEnabled, setTransitionEnabled] = React.useState(true)
  const [actionsAllowed, setActionsAllowed] = React.useState(true)

  React.useEffect(() => {
    const isBelowBoundary = props.currentPeril < props.perils.length
    const isAboveBoundary = props.currentPeril > props.perils.length * 2

    if (isBelowBoundary || isAboveBoundary) {
      setTimeout(() => {
        setTransitionEnabled(false)
        props.setCurrentPeril(
          props.currentPeril + (isBelowBoundary ? 1 : -1) * props.perils.length,
        )

        setTimeout(() => setTransitionEnabled(true), TRANSITION_MS)
      }, TRANSITION_MS)
    }

    setActionsAllowed(false)

    setTimeout(() => {
      setActionsAllowed(true)
    }, TRANSITION_MS * 2)
  }, [props.currentPeril])

  const trippledPerils = props.perils.concat(props.perils).concat(props.perils)

  return (
    <Modal isVisible={props.isVisible} onClose={props.onClose}>
      <Header>
        <Picker>
          <PerilItemsContainer
            currentPeril={props.currentPeril}
            transition={transitionEnabled}
          >
            {trippledPerils.map((peril, index) => (
              <PickerItem
                key={index}
                onClick={() =>
                  actionsAllowed &&
                  props.setCurrentPeril(index % trippledPerils.length)
                }
              >
                {peril.icon}
                <PickerItemLabel>{peril.title}</PickerItemLabel>
              </PickerItem>
            ))}
          </PerilItemsContainer>
          <Indicator />
        </Picker>

        <LeftGradient>
          <BackButton
            onClick={() =>
              actionsAllowed && props.setCurrentPeril(props.currentPeril - 1)
            }
          >
            <BackArrow />
          </BackButton>
        </LeftGradient>
        <RightGradient>
          <ForwardButton
            onClick={() =>
              actionsAllowed && props.setCurrentPeril(props.currentPeril + 1)
            }
          >
            <ForwardArrow />
          </ForwardButton>
        </RightGradient>
      </Header>
      <Content>
        {props.perils[props.currentPeril % props.perils.length].title}
      </Content>
    </Modal>
  )
}

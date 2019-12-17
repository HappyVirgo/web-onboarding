import styled from '@emotion/styled'
import { colorsV2 } from '@hedviginsurance/brand/dist'
import { useSignOfferMutation } from 'generated/graphql'
import { Button } from 'new-components/buttons'
import * as React from 'react'
import AnimateHeight from 'react-animate-height'
import { useMediaQuery } from 'react-responsive'
import { useTextKeys } from 'utils/hooks/useTextKeys'
import { SignStatus } from './SignStatus'
import { emailValidation } from './UserDetailsForm'

export const SignSpacer = styled('div')`
  height: 250px;
`
const Wrapper = styled('div')`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  padding: 0 8rem 2.5rem 4.5rem;
  background-image: linear-gradient(
    to bottom,
    rgba(249, 250, 252, 0),
    ${colorsV2.offwhite} 50%
  );

  @media (max-width: 40rem) {
    padding: 1rem;
    padding-top: 0;
  }
`

const ButtonWrapper = styled('div')`
  display: flex;
  width: 100%;
  justify-content: center;
`

const SignStateWrapper = styled('div')<{ isVisible: boolean }>`
  transition: opacity 100ms;
  ${({ isVisible }) => (isVisible ? 'opacity: 1' : 'opacity: 0')};
`
const Disclaimer = styled('p')`
  font-size: 0.75rem;
  margin: 1rem 0 0;
  color: ${colorsV2.gray};
  line-height: 1.5;
  padding: 0 0.5rem;

  @media (max-width: 40rem) {
    text-align: center;
  }
`

enum SignState {
  NOT_STARTED,
  STARTED,
  FAILED,
}

interface Props {
  className?: string
  email?: string
  personalNumber: string
}

export const Sign: React.FC<Props> = ({ className, email, personalNumber }) => {
  const isMobile = useMediaQuery({ maxWidth: 600 })
  const textKeys = useTextKeys()
  const [signOffer, signOfferMutation] = useSignOfferMutation({
    variables: {
      email: email!,
      personalNumber,
    },
  })
  const [signState, setSignState] = React.useState(SignState.NOT_STARTED)

  return (
    <Wrapper className={className}>
      <ButtonWrapper>
        <Button
          size={isMobile ? 'sm' : 'lg'}
          disabled={
            !email ||
            signState === SignState.STARTED ||
            signOfferMutation.loading ||
            !emailValidation.isValidSync(email ?? '')
          }
          onClick={async () => {
            if (!emailValidation.isValidSync(email ?? '')) {
              return
            }

            if (signOfferMutation.loading) {
              return
            }

            setSignState(SignState.STARTED)
            await signOffer()
          }}
        >
          {textKeys.CHECKOUT_SIGN_BUTTON_TEXT()}
        </Button>
      </ButtonWrapper>

      <AnimateHeight height={signState === SignState.NOT_STARTED ? 0 : 'auto'}>
        {
          <SignStateWrapper isVisible={signState !== SignState.NOT_STARTED}>
            <SignStatus
              isSigning={signState !== SignState.NOT_STARTED}
              error={Boolean(signOfferMutation.error)}
              onFailure={() => setSignState(SignState.FAILED)}
            />
          </SignStateWrapper>
        }
      </AnimateHeight>

      <Disclaimer>{textKeys.CHECKOUT_SIGN_DISCLAIMER()}</Disclaimer>
    </Wrapper>
  )
}

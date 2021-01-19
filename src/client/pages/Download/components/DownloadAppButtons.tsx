import React from 'react'
import styled from '@emotion/styled'
import { colorsV3 } from '@hedviginsurance/brand'
import { LARGE_SCREEN_MEDIA_QUERY } from 'utils/mediaQueries'
import { GooglePlayIcon } from './GooglePlayIcon'
import { AppStoreIcon } from './AppStoreIcon'

const ICON_COLOR = colorsV3.white

type ButtonData = {
  url: string
  iconComponent: React.ReactNode
}

const buttonData: ButtonData[] = [
  {
    url: 'https://play.google.com/store/apps/details?id=com.hedvig.app',
    iconComponent: <GooglePlayIcon />,
  },
  {
    url: 'https://apps.apple.com/app/hedvig/id1303668531',
    iconComponent: <AppStoreIcon />,
  },
]

const ButtonContainer = styled.div`
  width: 100%;
  max-width: 20rem;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;

  ${LARGE_SCREEN_MEDIA_QUERY} {
    max-width: 23rem;
  }
`

const AnchorLinkButton = styled.a`
  padding: 8px 24px;
  margin: 8px 0;
  border: 1px solid ${ICON_COLOR};
  border-radius: 8px;
  display: inline-flex;
  justify-content: center;
  color: ${ICON_COLOR};
  transition: 0.15s ease-in-out;

  svg {
    width: 100px;
  }

  :hover {
    background: ${ICON_COLOR};
    color: ${colorsV3.gray900};
  }

  ${LARGE_SCREEN_MEDIA_QUERY} {
    padding: 8px 24px;

    svg {
      width: 120px;
    }
  }
`

export const DownloadAppButtons = () => {
  return (
    <ButtonContainer>
      {buttonData.map(({ url, iconComponent }) => (
        <AnchorLinkButton key={url} href={url}>
          {iconComponent}
        </AnchorLinkButton>
      ))}
    </ButtonContainer>
  )
}

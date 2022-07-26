import styled from '@emotion/styled'
import React from 'react'
import { useRedeemedCampaignsQuery } from 'data/graphql'
import { getDiscountText } from 'pages/OfferNew/Introduction/Sidebar/utils'
import { OfferData } from 'pages/OfferNew/types'
import { useTextKeys } from 'utils/textKeys'
import { Badge } from '../Badge/Badge'

type DiscountTagProps = {
  offerData: OfferData
}

const DiscountInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: flex-start;

  & > *:not(:last-child) {
    margin-right: 0.5rem;
  }
`

export const DiscountTag: React.FC<DiscountTagProps> = ({ offerData }) => {
  const textKeys = useTextKeys()
  const { data: campaignData } = useRedeemedCampaignsQuery()
  const redeemedCampaigns = campaignData ? campaignData.redeemedCampaigns : []

  const discountText = getDiscountText(textKeys)(
    redeemedCampaigns,
    offerData.cost.monthlyGross.currency,
  )

  if (!discountText) return null

  return (
    <DiscountInfo>
      <Badge>{discountText}</Badge>
    </DiscountInfo>
  )
}

import styled from '@emotion/styled'
import { colorsV2 } from '@hedviginsurance/brand'
import { format, isToday, parse } from 'date-fns'
import { CurrentInsurer, useStartDateMutation } from 'generated/graphql'
import { DateInput } from 'new-components/DateInput'
import { Switch } from 'new-components/Switch'
import * as React from 'react'
import { useTextKeys } from 'utils/hooks/useTextKeys'
import { CalendarIcon } from './CalendarIcon'

interface Props {
  currentInsurer: CurrentInsurer | null
  startDate: string | null
  offerId: string
}

const RowButton = styled.button<{ datePickerOpen: boolean }>`
  width: 100%;
  padding: 0.8rem 1.2rem;
  display: flex;
  justify-content: space-between;
  border: 1px solid ${colorsV2.lightgray};
  outline: 0;
  background-color: transparent;
  border-radius: 8px;
  align-items: center;
  cursor: pointer;
  transition: background-color 250ms, border 250ms;

  :active {
    background-color: ${colorsV2.lightgray};
  }

  ${(props) =>
    props.datePickerOpen && `border: 1px solid ${colorsV2.violet500};`};
`

const Label = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`

const DateLabel = styled.span`
  margin-right: 5px;
`

const Title = styled.div`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 600;
  color: ${colorsV2.darkgray};
`

const SubTitle = styled.div`
  font-size: 0.75rem;
  line-height: 0.75rem;
  font-weight: 500;
  color: ${colorsV2.gray};
`

const Value = styled.div`
  font-size: 1rem;
  line-height: 1.5rem;
  color: ${colorsV2.darkgray};
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;

  @media (max-width: 600px) {
    font-size: 0.875rem;
  }
`

const HandleSwitchingWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  padding: 0 1.25rem;
`

const HandleSwitchingLabel = styled.span`
  font-size: 0.8rem;
  line-height: 0.9rem;
  font-weight: 500;
  color: ${colorsV2.gray};
  width: 50%;
`

export const StartDate: React.FC<Props> = ({
  offerId,
  startDate,
  currentInsurer,
}) => {
  const getDefaultDateValue = () => {
    if (startDate) {
      return parse(startDate, 'yyyy-MM-dd', new Date())
    }

    if (currentInsurer) {
      return null
    }

    return new Date()
  }

  const [datePickerOpen, setDatePickerOpen] = React.useState(false)
  const [dateValue, setDateValue] = React.useState(getDefaultDateValue)
  const textKeys = useTextKeys()
  const [setStartDate] = useStartDateMutation()

  const getDateLabel = () => {
    if (dateValue) {
      if (isToday(dateValue)) {
        return textKeys.SIDEBAR_STARTDATE_CELL_VALUE_NEW()
      }

      return format(dateValue, 'dd MMM yyyy')
    }

    return textKeys.SIDEBAR_STARTDATE_CELL_VALUE_SWITCHER()
  }

  return (
    <>
      <RowButton
        datePickerOpen={datePickerOpen}
        onClick={() => setDatePickerOpen(!datePickerOpen)}
      >
        <Label>
          <Title>{textKeys.SIDEBAR_STARTDATE_CELL_LABEL()}</Title>
          <SubTitle>{textKeys.SIDEBAR_STARTDATE_CELL_SUBLABEL()}</SubTitle>
        </Label>
        <Value>
          <DateLabel>{getDateLabel()}</DateLabel>
          <CalendarIcon
            color={dateValue ? colorsV2.violet500 : colorsV2.gray}
          />
        </Value>
      </RowButton>
      <DateInput
        open={datePickerOpen}
        setOpen={setDatePickerOpen}
        date={dateValue || new Date()}
        setDate={(newDateValue) => {
          setDateValue(newDateValue)
          setStartDate({
            variables: {
              quoteId: offerId,
              date: format(newDateValue, 'yyyy-MM-dd'),
            },
          })
        }}
      />
      {currentInsurer?.switchable && (
        <HandleSwitchingWrapper>
          <HandleSwitchingLabel>
            {textKeys.SIDEBAR_REQUEST_CANCELLATION()}
          </HandleSwitchingLabel>
          <Switch
            value={dateValue == null}
            onChange={(newValue) => {
              setStartDate({
                variables: {
                  quoteId: offerId,
                  date: null,
                },
              })
              setDateValue(newValue ? null : new Date())
            }}
          />
        </HandleSwitchingWrapper>
      )}
    </>
  )
}

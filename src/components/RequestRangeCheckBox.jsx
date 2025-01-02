import React, { useEffect } from 'react'
import { CheckBox } from './CheckBox'
import styled from 'styled-components'

export const RequestRangeCheckBox = ({serviceList, isRow}) => {
  const COURSE_PLANNING = "COURSE_PLANNING";
  const INGREDIENT_SELECTION = "INGREDIENT_SELECTION"
  const INGREDIENT_PURCHASE = "INGREDIENT_PURCHASE"
  const CLEANUP = "CLEANUP"

  return (
    <>
        <Container isRow={isRow}>
            <CheckBox text={'코스 구성'} checked={serviceList?.includes(COURSE_PLANNING)}/>
            <CheckBox text={'재료 선정'} checked={serviceList?.includes(INGREDIENT_SELECTION)}/>
            <CheckBox text={'재료 구입'} checked={serviceList?.includes(INGREDIENT_PURCHASE)}/>
            <CheckBox text={'뒷정리'} checked={serviceList?.includes(CLEANUP)}/>
        </Container>
    </>
  )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    flex-direction: ${({isRow})=> isRow ? 'row' : 'column'};
`
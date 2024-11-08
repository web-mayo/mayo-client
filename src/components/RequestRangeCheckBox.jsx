import React, { useEffect } from 'react'
import { CheckBox } from './CheckBox'
import styled from 'styled-components'

export const RequestRangeCheckBox = ({serviceList}) => {
  const COURSE = "코스구성";
  const INGREDIENT_CHOICE = "재료 선정"
  const INGREDIENT_BUY = "재료 구입"
  const CLEANUP = "뒷정리"

  return (
    <>
        <Container>
            <CheckBox text={'코스 구성'} checked={serviceList.includes(COURSE)}/>
            <CheckBox text={'재료 선정'} checked={serviceList.includes(INGREDIENT_CHOICE)}/>
            <CheckBox text={'재료 구입'} checked={serviceList.includes(INGREDIENT_BUY)}/>
            <CheckBox text={'뒷정리'} checked={serviceList.includes(CLEANUP)}/>
        </Container>
    </>
  )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`
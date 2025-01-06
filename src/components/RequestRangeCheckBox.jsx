import React, { useEffect } from 'react'
import { CheckBox } from './CheckBox'
import styled from 'styled-components'

export const RequestRangeCheckBox = ({serviceList, modifiable, isRow, onServiceListChange}) => {
  const COURSE_PLANNING = "COURSE_PLANNING";
  const INGREDIENT_SELECTION = "INGREDIENT_SELECTION"
  const INGREDIENT_PURCHASE = "INGREDIENT_PURCHASE"
  const CLEANUP = "CLEANUP"

  const handleCheckBoxChange = (service) => {
    if (serviceList?.includes(service)) {
      onServiceListChange(serviceList.filter((item) => item !== service));
    } else {
      onServiceListChange([...(serviceList || []), service]);
    }
  };

  return (
    <>
        <Container isRow={isRow}>
            <CheckBox text={'코스 구성'} modifiable={modifiable} checked={serviceList?.includes(COURSE_PLANNING)}
                      onChange={() => handleCheckBoxChange(COURSE_PLANNING)}/>
            <CheckBox text={'재료 선정'} modifiable={modifiable} checked={serviceList?.includes(INGREDIENT_SELECTION)}
                      onChange={() => handleCheckBoxChange(INGREDIENT_SELECTION)}/>
            <CheckBox text={'재료 구입'} modifiable={modifiable} checked={serviceList?.includes(INGREDIENT_PURCHASE)}
                      onChange={() => handleCheckBoxChange(INGREDIENT_PURCHASE)}/>
            <CheckBox text={'뒷정리'} modifiable={modifiable} checked={serviceList?.includes(CLEANUP)}
                      onChange={() => handleCheckBoxChange(CLEANUP)}/>
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
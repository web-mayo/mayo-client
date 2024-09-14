import React from 'react'
import { CheckBox } from './CheckBox'
import styled from 'styled-components'

export const RequestRangeCheckBox = () => {
  return (
    <>
        <Container>
            <CheckBox text={'코스 구성'}/>
            <CheckBox text={'재료 선정'}/>
            <CheckBox text={'재료 구입'}/>
            <CheckBox text={'뒷정리'}/>
        </Container>
    </>
  )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`
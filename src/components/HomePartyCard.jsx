import React from 'react'
import styled from 'styled-components'

export const HomePartyCard = ({onClick}) => {
  return (
    <PartyCardContainer onClick={onClick}>
              <PartyStatus>방문 예정</PartyStatus>
              <PartyImg src="images/reserveDefault.jpeg"></PartyImg>
              <PartyDesc>
                <PartyDescText>홈파티 한 줄 소개</PartyDescText>
                <PartyDescText>00월 00일 요일 오후 00시</PartyDescText>
              </PartyDesc>
    </PartyCardContainer>
  )
}

const PartyCardContainer = styled.div`
  border-radius: 8px;
  border: solid 1px #D9D9D9;
  width: 280px;
  cursor: pointer;
`
const PartyStatus = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: white;
  padding: 7px 16px 7px 16px;
  display: flex;
  align-items: center;
  border-radius: 6px 6px 0px 0px;
  background-color: ${(props)=>props.theme.main};
  overflow: hidden;
  height: 30px;
`
const PartyImg = styled.img`
  height: 280px;
  width: 280px;
  object-fit: cover;
`

const PartyDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 10px 16px 15px 16px;
`
const PartyDescText = styled.div`
  overflow: hidden;
  font-size: 16px;
  font-weight: 500;
`

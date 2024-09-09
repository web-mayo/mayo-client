import React from 'react'
import styled from 'styled-components'

export const ChefProfileCard = () => {
  return (
        <ChefCard>
            <ChefImgContainer>
                <ChefImg>🧑‍🍳</ChefImg>
            </ChefImgContainer>
            <NameText>홍길동 셰프</NameText>
            <History>[경력] 5년 | {'('}희망 시급{')'}</History>
            <ExtraBox>
                <SearchText>이탈리안</SearchText>
                <SearchText>플레이팅</SearchText>
            </ExtraBox>
        </ChefCard>
  )
}

const ChefCard = styled.div`
  width: 194px;
  height: 300px;
  padding: 13px 13px 13px 13px;
  border-radius: 8px;
  border: 1px solid #B65C1380;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`
const ChefImgContainer = styled.div`
  width: 170px;
  height: 170px;
  background-color: #EACFB9;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`

const ChefImg = styled.div`
  font-size: 80px;
`

const NameText = styled.div`
  font-size: 20px;
  font-weight: 600;
  padding-top: 20px;
`

const History = styled.div`
  color: #919191;
  padding-top: 5px;
  padding-bottom: 20px;
  font-size: 14px;
`
const SearchText = styled.div`
  color: #B65C1380;
  border-radius: 14px;
  background-color: white;
  border: 2px solid #B65C1380;
  padding: 5px 10px;
  font-size: 12px;
  font-weight: 600;
`


const ExtraBox = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
  padding-top: 5px;
`



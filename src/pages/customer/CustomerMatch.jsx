import React from 'react'
import styled from 'styled-components'
import { Title } from '../../components/Title'
import { HomePartyCard } from '../../components/HomePartyCard'

export const CustomerMatch = () => {
  return (
    <ReserveContainer>
        <Title title={'매칭'}></Title>
        <PaymentContainer>
            <PaymentTitleContainer>
                <PaymentTitle>결제 대기 중인 홈파티</PaymentTitle>
                <PaymentSubTitle>결제 시 예약이 확정됩니다. 홈파티를 클릭하여 결제를 완료해주세요.</PaymentSubTitle>
            </PaymentTitleContainer>
          
          <PaymentListContainer>
            <PaymentList>
            
                <PaymentCard>
                <PaymentCardHead>
                    <RequestImg src="images/bell.png"></RequestImg>
                    <RequestDesc>
                    <RequestDescTitle>지인 10명을 초대해서 열 예정인 홈파티입...</RequestDescTitle>
                    <RequestDescInfo>
                        <RequestDescInfoText>서대문구</RequestDescInfoText>|
                        <RequestDescInfoText>2024/10/01</RequestDescInfoText>
                    </RequestDescInfo>
                    </RequestDesc>
                    </PaymentCardHead>
                <RequestData>
                    <RequestDataLabel>&#91; 의뢰 접수 날짜 	&#93;</RequestDataLabel>
                    <RequestDate>2024/08/31</RequestDate>
                </RequestData>
                </PaymentCard>
            </PaymentList>
          <PaymentBtn>결제하러 가기</PaymentBtn>
          </PaymentListContainer>
        </PaymentContainer>
        <MatchedContainer>
            <MatchedTitleContainer>
                <MatchedTitle>홈파티 요청 및 매칭 목록</MatchedTitle>
                <MatchedSubTitle>홈파티를 틀릭하여 상세 정보를 확인해보세요!</MatchedSubTitle>

            </MatchedTitleContainer>
                
          <MatchedList>

            <HomePartyCard/>
            <HomePartyCard/>
            <HomePartyCard/>
            <HomePartyCard/>
            <HomePartyCard/>
            <HomePartyCard/>

          </MatchedList>
        </MatchedContainer>
      </ReserveContainer>
  )
}


const ReserveContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-bottom: 8%;
  gap: 50px;
` 
const PaymentContainer = styled.div`
  height: 45vh;
  width: 85%;
  border: solid 1px #D9D9D9;
  display: flex;
  flex-direction: row;
`
const PaymentTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${(props)=>props.theme.sub};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 45%;
    gap: 8px;
`

const PaymentTitle = styled.div`
    font-size: 22px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
`
const PaymentSubTitle = styled.div`
    font-size: 14px;
`
const PaymentListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60%;
`
const PaymentList = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    height: 70%;
    align-items: center;
`
const PaymentBtn = styled.button`
    background-color: ${(props)=>props.theme.main};
    justify-self: flex-end;
    color: white;
    padding: 0px 16px;
    border-radius: 5px;
    width: 208px;
    height: 39px;
    font-size: 16px;
    font-weight: 600;
    border: none;
`

const PaymentCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 7px 20px 7px;
  border: solid 1px #DDDDDD;
  cursor: pointer;
  height: 95px;
`
const PaymentCardHead = styled.div`
  display: flex;
  flex-direction: row;
  gap: 7%;
`

const RequestImg = styled.img`
  width: 30px;
  height: 30px;
  background-color: #B65C134D;
  padding: 12px;
  border-radius: 100px;
  
`
const RequestDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  justify-content: center;
`
const RequestDescTitle = styled.div`
  font-size: 18px;
  font-weight: 400;
  white-space: nowrap;
`
const RequestDescInfo = styled.div`
   display: flex;
   flex-direction: row;
   gap: 5px;
   color : rgba(0, 0, 0, 0.5);
   align-items: center;
`
const RequestDescInfoText = styled.div`
  font-size: 16px;
`
const RequestData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`
const RequestDataLabel = styled.div`
 color : #8E8E8E;
`
const RequestDate = styled.div`
  
`

const MatchedContainer = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  gap: 10px;

`
const MatchedTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 10vh;
    background-color: ${(props)=>props.theme.sub};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    
   
`

const MatchedTitle = styled.div`
    font-size: 18px;
    font-weight: 700;
    
`
const MatchedSubTitle = styled.div`
    font-size: 12px;
    font-weight: 400;
`

const MatchedList = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  overflow-x: scroll;
  gap: 1%;
`
const MatchedCard = styled.div`
  border-radius: 8px;
  border: solid 1px #D9D9D9;
  width: 280px;
  cursor: pointer;
`
const MatchedStatus = styled.div`
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
const MatchedImg = styled.img`
  height: 280px;
  width: 280px;
  object-fit: cover;
`

const MatchedDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 10px 16px 15px 16px;
`
const MatchedDescText = styled.div`
  overflow: hidden;
  font-size: 16px;
  font-weight: 500;
`

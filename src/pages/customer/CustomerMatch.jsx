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
                <PaymentCheckBox>✔️</PaymentCheckBox>
                <PaymentCardHead>
                    
                    <PaymentCardDesc>
                      <PaymentCardDescTitleContainer>
                        <PaymentCardDescTitle>홈파티 이름</PaymentCardDescTitle>
                        <PaymentCardDescSubTitle>홈파티 상세보기</PaymentCardDescSubTitle>
                      </PaymentCardDescTitleContainer>
                    <PaymentCardDescInfo>
                        <PaymentCardDescInfoText>&#91;  결제일자  &#93;</PaymentCardDescInfoText>
                        <PaymentCardDescInfoText>2024/10/01</PaymentCardDescInfoText>
                    </PaymentCardDescInfo>
                    </PaymentCardDesc>
                </PaymentCardHead>
                <PaymentCardData>
                    <PaymentPriceLabel>&#91; 금액 	&#93;</PaymentPriceLabel>
                    <PaymentPrice>00,000원</PaymentPrice>
                </PaymentCardData>
                </PaymentCard>
                <PaymentCard>
                <PaymentCheckBox>✔️</PaymentCheckBox>
                <PaymentCardHead>
                    
                    <PaymentCardDesc>
                      <PaymentCardDescTitleContainer>
                        <PaymentCardDescTitle>홈파티 이름</PaymentCardDescTitle>
                        <PaymentCardDescSubTitle>홈파티 상세보기</PaymentCardDescSubTitle>
                      </PaymentCardDescTitleContainer>
                    <PaymentCardDescInfo>
                        <PaymentCardDescInfoText>&#91;  결제일자  &#93;</PaymentCardDescInfoText>
                        <PaymentCardDescInfoText>2024/10/01</PaymentCardDescInfoText>
                    </PaymentCardDescInfo>
                    </PaymentCardDesc>
                </PaymentCardHead>
                <PaymentCardData>
                    <PaymentPriceLabel>&#91; 금액 	&#93;</PaymentPriceLabel>
                    <PaymentPrice>00,000원</PaymentPrice>
                </PaymentCardData>
                </PaymentCard>
                <PaymentCard>
                <PaymentCheckBox>✔️</PaymentCheckBox>
                <PaymentCardHead>
                    
                    <PaymentCardDesc>
                      <PaymentCardDescTitleContainer>
                        <PaymentCardDescTitle>홈파티 이름</PaymentCardDescTitle>
                        <PaymentCardDescSubTitle>홈파티 상세보기</PaymentCardDescSubTitle>
                      </PaymentCardDescTitleContainer>
                    <PaymentCardDescInfo>
                        <PaymentCardDescInfoText>&#91;  결제일자  &#93;</PaymentCardDescInfoText>
                        <PaymentCardDescInfoText>2024/10/01</PaymentCardDescInfoText>
                    </PaymentCardDescInfo>
                    </PaymentCardDesc>
                </PaymentCardHead>
                <PaymentCardData>
                    <PaymentPriceLabel>&#91; 금액 	&#93;</PaymentPriceLabel>
                    <PaymentPrice>00,000원</PaymentPrice>
                </PaymentCardData>
                </PaymentCard>
                <PaymentCard>
                <PaymentCheckBox>✔️</PaymentCheckBox>
                <PaymentCardHead>
                    
                    <PaymentCardDesc>
                      <PaymentCardDescTitleContainer>
                        <PaymentCardDescTitle>홈파티 이름</PaymentCardDescTitle>
                        <PaymentCardDescSubTitle>홈파티 상세보기</PaymentCardDescSubTitle>
                      </PaymentCardDescTitleContainer>
                    <PaymentCardDescInfo>
                        <PaymentCardDescInfoText>&#91;  결제일자  &#93;</PaymentCardDescInfoText>
                        <PaymentCardDescInfoText>2024/10/01</PaymentCardDescInfoText>
                    </PaymentCardDescInfo>
                    </PaymentCardDesc>
                </PaymentCardHead>
                <PaymentCardData>
                    <PaymentPriceLabel>&#91; 금액 	&#93;</PaymentPriceLabel>
                    <PaymentPrice>00,000원</PaymentPrice>
                </PaymentCardData>
                </PaymentCard>
            </PaymentList>
          <PaymentBtn>결제하러 가기</PaymentBtn>
          </PaymentListContainer>
        </PaymentContainer>
        <MatchedContainer>
            <MatchedTitleContainer>
                <MatchedTitle>홈파티 요청 및 매칭 목록</MatchedTitle>
                <MatchedSubTitle>홈파티를 클릭하여 상세 정보를 확인해보세요!</MatchedSubTitle>

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
  height: 58vh;
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
    height: 80%;
    align-items: center;
    width: 100%;
    gap: 10px;
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
    margin-top: 15px;
`

const PaymentCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5%;
  border: solid 1px #DDDDDD;
  cursor: pointer;
  height: 40px;
  width: 80%;
  border-radius: 8px;
`
const PaymentCardHead = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  margin-right: 40%;
`

const PaymentCheckBox = styled.div`
  
`

const PaymentCardDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  justify-content: center;
`
const PaymentCardDescTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
`
const PaymentCardDescTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  white-space: nowrap;
  
`
const PaymentCardDescSubTitle = styled.div`
  font-size: 14px;
  font-weight: 400;
  white-space: nowrap;
  color: #B3B3B3;
  font-size: 14px;
`
const PaymentCardDescInfo = styled.div`
   display: flex;
   flex-direction: row;
   gap: 10px;
   color : rgba(0, 0, 0, 0.5);
   align-items: center;
`
const PaymentCardDescInfoText = styled.div`
  font-size: 13px;
`
const PaymentCardData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
const PaymentPriceLabel = styled.div`
 color : #B3B3B3;
 font-size: 12px;
`
const PaymentPrice = styled.div`
  font-weight: 600;
  color: #FF0000;
  font-size: 18px;
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
    height: 13vh;
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


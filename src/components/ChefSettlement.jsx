import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

export const ChefSettlement = ({ budget }) => {
  const [settlement, setSettlement] = useState({});

  useEffect(()=>{
    setSettlement({
      activityPay: budget,
      fee: budget * 0.15,
      localTax: budget * 0.03,
      incomeTax: budget * 0.003,
      finalPayment : budget- budget * 0.15 - budget * 0.03 - budget * 0.003
    })
  },[budget])


  return (
         <SettleContainer>
              <SettleTitle>[ 정산 ]</SettleTitle>
    
              <SettleSection>
                <SettleDetailRow>
                  <SettleLabel>[ 활동비 ]</SettleLabel>
                  <SettleAmount>{budget}</SettleAmount>
                </SettleDetailRow>
              </SettleSection>
    
              <SettleDivider />
    
                <SettleSection>
                    <SettleDetailRow>
                        <SettleLabel>[ 내역 ]</SettleLabel>
                    </SettleDetailRow>
                    <SettleDetailContainer>
                        <SettleDetailRowText>
                            <span>[ 활동비 ]</span> <span style={{color: "black", fontSize: "15px"}}>{settlement?.activityPay}</span>
                        </SettleDetailRowText>
                        <SettleDetailRowText>
                            <span>[ 수수료(15%) ]</span> <span style={{color: "black", fontSize: "15px"}}>{settlement?.fee}원</span>
                        </SettleDetailRowText>
                        <SettleDetailRowText>
                            <span>[ 지방세(3%) ]</span> <span style={{color: "black", fontSize: "15px"}}>- {settlement?.localTax}원</span>
                        </SettleDetailRowText>
                        <SettleDetailRowText>
                            <span>[ 소득세(0.3%) ]</span> <span style={{color: "black", fontSize: "15px"}}>- {settlement?.incomeTax}원</span>
                        </SettleDetailRowText>
                    </SettleDetailContainer>
                </SettleSection>

              <SettleDivider />
    
              <SettleSection>
                <SettleFinalAmount>{settlement.finalPayment}원</SettleFinalAmount>
              </SettleSection>
    </SettleContainer>
  )
}


const SettleContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: auto;
`;

const SettleTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const SettleSection = styled.div`
  margin-bottom: 20px;
`;

const SettleDivider = styled.div`
  border-top: 2px dashed #B65C134D;
  margin: 20px 0;
`;

const SettleLabel = styled.span`
  font-size: 14px;
  color: #8E8E8E;
  font-weight: 400;
  float: left;
`;

const SettleAmount = styled.span`
  font-size: 16px;
  float: right;
`;

const SettleDetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-self: flex-end;
    gap: 5px;
`

const SettleDetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin-bottom: 8px;
`;

const SettleDetailRowText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 70px;
  font-size: 14px;
  font-weight: 400;
  color: #8E8E8E;
  margin-bottom: 8px;
`;

const SettleFinalAmount = styled.div`
  font-size: 18px;
  font-weight: 600;
  text-align: right;
`;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Title } from "../../components/Title";
import { HomePartyCard } from "../../components/HomePartyCard";
import moment from "moment";
import { comma } from "../../functions/funcs";
import { Payments } from "../../modal/Payments";
export const CustomerMatch = () => {
  // fake data
  var date = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
  const data = [
    {
      id: 1,
      name: "홈파티0",
      payDueDate: "2024-08-31",
      amount: 120000,
      headCount: 10,
      partyTime: date,
      service1: true,
      service2: true,
      service3: true,
      service4: true,
      message: "과일 얼러지가 있습니다.",
      Chef: {
        chefName: "홍길동",
        career: [
          "00호텔 5년 동안 메인 셰프로서 근무",
          "00호텔 2년간 수석 셰프로 근무",
        ],
        chefTalk: `안녕하세요 홍길동입니다. 동에 번쩍 서에 번쩍하는 맛을 보여드리겠습니다. 맛 좀 봐라 손님들!`,
      },
    },
    {
      id: 2,
      name: "홈파티1",
      payDueDate: "2024-08-31",
      amount: 121000,
      headCount: 10,
      partyTime: date,
      service1: true,
      service2: true,
      service3: true,
      service4: true,
      message: "과일 얼러지가 있습니다.",
      Chef: {
        chefName: "홍길동",
        career: [
          "00호텔 5년 동안 메인 셰프로서 근무",
          "00호텔 2년간 수석 셰프로 근무",
        ],
        chefTalk: `안녕하세요 홍길동입니다. 동에 번쩍 서에 번쩍하는 맛을 보여드리겠습니다. 맛 좀 봐라 손님들!`,
      },
    },
    {
      id: 3,

      name: "홈파티2",
      payDueDate: "2024-08-31",
      amount: 120000,
      headCount: 10,
      partyTime: date,
      service1: true,
      service2: true,
      service3: true,
      service4: true,
      message: "과일 얼러지가 있습니다.",
      Chef: {
        chefName: "홍길동",
        career: [
          "00호텔 5년 동안 메인 셰프로서 근무",
          "00호텔 2년간 수석 셰프로 근무",
        ],
        chefTalk: `안녕하세요 홍길동입니다. 동에 번쩍 서에 번쩍하는 맛을 보여드리겠습니다. 맛 좀 봐라 손님들!`,
      },
    },
    {
      id: 4,
      name: "홈파티3",
      payDueDate: "2024-08-31",
      amount: 398000,
      headCount: 10,
      partyTime: date,
      service1: true,
      service2: true,
      service3: true,
      service4: true,
      message: "과일 얼러지가 있습니다.",
      Chef: {
        chefName: "홍길동",
        career: [
          "00호텔 5년 동안 메인 셰프로서 근무",
          "00호텔 2년간 수석 셰프로 근무",
        ],
        chefTalk: `안녕하세요 홍길동입니다. 동에 번쩍 서에 번쩍하는 맛을 보여드리겠습니다. 맛 좀 봐라 손님들!`,
      },
    },
  ];
  // check dataList
  const [checkItems, setCheckItems] = useState([]);
  const checkItemHandler = (data, isChecked) => {
    if (!isChecked && Boolean(checkItems.find((item) => item.id === data.id))) {
      setCheckItems(checkItems.filter((item) => item.id !== data.id));
    } else if (
      isChecked &&
      !Boolean(checkItems.find((item) => item.id === data.id))
    ) {
      setCheckItems((originList) => [...originList, data]);
    }
  };
  // modal
  const [dialogOpen, setDialogOpen] = useState(false);
  const DialogSwitch = (bool) => {
    if (bool) {
      setDialogOpen(true);
    } else {
      setDialogOpen(false);
    }
  };
  useEffect(() => {}, [checkItems]);
  return (
    <ReserveContainer>
      <Title title={"매칭"}></Title>
      <PaymentContainer>
        <PaymentTitleContainer>
          <PaymentTitle>결제 대기 중인 홈파티</PaymentTitle>
          <PaymentSubTitle>
            결제 시 예약이 확정됩니다. 홈파티를 클릭하여 결제를 완료해주세요.
          </PaymentSubTitle>
        </PaymentTitleContainer>
        <PaymentListContainer>
          <PaymentList>
            {data.length === 0 && (
              <PaymentCard>현재 결제 대기 중인 파티가 없습니다.</PaymentCard>
            )}
            {data.length > 0 &&
              data.map((data) => (
                <PaymentCard key={`paymentCard-${data.id}`}>
                  <PaymentCheckBox
                    type="checkbox"
                    onChange={(e) => {
                      checkItemHandler(data, e.target.checked);
                    }}
                  ></PaymentCheckBox>
                  <PaymentCardHead>
                    <PaymentCardDesc>
                      <PaymentCardDescTitleContainer>
                        <PaymentCardDescTitle>{data.name}</PaymentCardDescTitle>
                        <PaymentCardDescSubTitle>
                          홈파티 상세보기
                        </PaymentCardDescSubTitle>
                      </PaymentCardDescTitleContainer>
                      <PaymentCardDescInfo>
                        <PaymentCardDescInfoText>
                          &#91; 결제 일자 &#93;
                        </PaymentCardDescInfoText>
                        <PaymentCardDescInfoText>
                          {data.payDueDate}
                        </PaymentCardDescInfoText>
                      </PaymentCardDescInfo>
                    </PaymentCardDesc>
                  </PaymentCardHead>
                  <PaymentCardData>
                    <PaymentPriceLabel>&#91; 금액 &#93;</PaymentPriceLabel>
                    <PaymentPrice>{comma(data.amount)}원</PaymentPrice>
                  </PaymentCardData>
                </PaymentCard>
              ))}
          </PaymentList>
          <PaymentBtn
            onClick={() => {
              checkItems.length > 0
                ? DialogSwitch(true)
                : alert("선택된 내용이 없습니다.");
            }}
          >
            결제하러 가기
          </PaymentBtn>
        </PaymentListContainer>
        <DialogBackdrop
          className="modal-background"
          style={{ display: dialogOpen ? "block" : "none" }}
        ></DialogBackdrop>

        <Dialog open={dialogOpen} id="payments">
          <Payments datas={checkItems} func={DialogSwitch}></Payments>
        </Dialog>
      </PaymentContainer>
      <MatchedContainer>
        <MatchedTitleContainer>
          <MatchedTitle>홈파티 요청 및 매칭 목록</MatchedTitle>
          <MatchedSubTitle>
            홈파티를 클릭하여 상세 정보를 확인해보세요!
          </MatchedSubTitle>
        </MatchedTitleContainer>

        <MatchedList>
          <HomePartyCard />
          <HomePartyCard />
          <HomePartyCard />
          <HomePartyCard />
          <HomePartyCard />
          <HomePartyCard />
        </MatchedList>
      </MatchedContainer>
    </ReserveContainer>
  );
};

const ReserveContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-bottom: 8%;
  gap: 50px;
`;
const PaymentContainer = styled.div`
  height: 58vh;
  width: 85%;
  border: solid 1px #d9d9d9;
  display: flex;
  flex-direction: row;
`;
const PaymentTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.sub};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 45%;
  gap: 8px;
`;

const PaymentTitle = styled.div`
  font-size: 22px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PaymentSubTitle = styled.div`
  font-size: 14px;
`;
const PaymentListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
`;
const PaymentList = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: 80%;
  align-items: center;
  width: 100%;
  gap: 10px;
`;
const PaymentBtn = styled.button`
  background-color: ${(props) => props.theme.main};
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
`;

const PaymentCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5%;
  border: solid 1px #dddddd;
  height: 40px;
  width: 80%;
  border-radius: 8px;
`;
const PaymentCardHead = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  flex: 1;
`;

const PaymentCheckBox = styled.input`
  width: 16px;
  height: 16px;
  margin-right: 16px;
`;

const PaymentCardDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  justify-content: center;
`;
const PaymentCardDescTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;
const PaymentCardDescTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  white-space: nowrap;
`;
const PaymentCardDescSubTitle = styled.div`
  font-size: 14px;
  font-weight: 400;
  white-space: nowrap;
  color: #b3b3b3;
  font-size: 14px;
`;
const PaymentCardDescInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  color: rgba(0, 0, 0, 0.5);
  align-items: center;
`;
const PaymentCardDescInfoText = styled.div`
  font-size: 13px;
`;
const PaymentCardData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const PaymentPriceLabel = styled.div`
  color: #b3b3b3;
  font-size: 12px;
`;
const PaymentPrice = styled.div`
  font-weight: 600;
  color: #ff0000;
  font-size: 18px;
`;

const MatchedContainer = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const MatchedTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 13vh;
  background-color: ${(props) => props.theme.sub};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const MatchedTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
`;
const MatchedSubTitle = styled.div`
  font-size: 12px;
  font-weight: 400;
`;

const MatchedList = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  overflow-x: scroll;
  gap: 1%;
`;
const Dialog = styled.dialog`
  border: 0;
  padding: 0;
  top: 50%;
  transform: translateY(-50%);
  max-height: calc(100% - 2em - 6px);
  overflow-y: scroll;
`;

const DialogBackdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
`;

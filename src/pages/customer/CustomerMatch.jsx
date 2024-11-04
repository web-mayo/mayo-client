import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Title } from "../../components/Title";
import {
  HomePartyCard,
  HomePartyCardEnd,
} from "../../components/HomePartyCard";
import moment from "moment";
import { comma } from "../../functions/funcs";
import { Payments } from "../../modal/Payments";
import { useNavigate } from "react-router-dom";
import { getMatchedParty } from "../../apis/CustomerPartyCtrler";
export const CustomerMatch = () => {
  const navigate = useNavigate();
  const [getOnce, setGetOnce] = useState(true);
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
  useEffect(() => {
    if (getOnce === true) {
      getMatchedParty();
      setGetOnce(false);
    }
  }, []);
  return (
    <ReserveContainer>
      <Title title={"매칭"}></Title>
      <PaymentContainer>
        <PaymentTitleContainer>
          <PaymentTitle>
            결제 대기 중인 홈파티
            <PaymentSubTitle>
              결제 시 예약이 확정됩니다. 홈파티를 클릭하여 결제를 완료해주세요.
            </PaymentSubTitle>
          </PaymentTitle>
        </PaymentTitleContainer>
        <PaymentListContainer>
          <PaymentList>
            {data.length === 0 && (
              <PaymentCard>현재 결제 대기 중인 파티가 없습니다.</PaymentCard>
            )}
            {data.length > 0 &&
              data.map((data) => (
                <PaymentCard key={`paymentCard-${data.id}`}>
                  <PaymentCardHead>
                    <PaymentCheckBox
                      type="checkbox"
                      onChange={(e) => {
                        checkItemHandler(data, e.target.checked);
                      }}
                    ></PaymentCheckBox>
                    <PaymentCardDesc>
                      <PaymentCardDescTitleContainer>
                        <PaymentCardDescTitle>{data.name}</PaymentCardDescTitle>
                        <PaymentCardDescSubTitle>
                          상세보기
                        </PaymentCardDescSubTitle>
                      </PaymentCardDescTitleContainer>
                    </PaymentCardDesc>
                  </PaymentCardHead>
                  <PaymentCardData>
                    <PaymentCardDescInfo>
                      <PaymentCardDescInfoText1>
                        &#91; 결제 기한 &#93;
                      </PaymentCardDescInfoText1>
                      <PaymentCardDescInfoText2>
                        {data.payDueDate}
                      </PaymentCardDescInfoText2>
                    </PaymentCardDescInfo>
                    <PaymentPrice>{comma(data.amount)}원</PaymentPrice>
                  </PaymentCardData>
                </PaymentCard>
              ))}
          </PaymentList>
          <PaymentBtnBox>
            <PaymentBtn
              onClick={() => {
                checkItems.length > 0
                  ? DialogSwitch(true)
                  : alert("선택된 내용이 없습니다.");
              }}
            >
              결제하러 가기
            </PaymentBtn>
          </PaymentBtnBox>
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
        <MatchedTitle>요청 완료 내역</MatchedTitle>
        <MatchedList>
          <HomePartyCard
            text={`요청 완료`}
            bgColor={"rgba(255, 243, 234, 1)"}
            textColor={`black`}
          />
          <HomePartyCard
            text={`요청 완료`}
            bgColor={"rgba(255, 243, 234, 1)"}
            textColor={`black`}
          />
          <HomePartyCard
            text={`요청 완료`}
            bgColor={"rgba(255, 243, 234, 1)"}
            textColor={`black`}
          />
          <HomePartyCard
            text={`요청 완료`}
            bgColor={"rgba(255, 243, 234, 1)"}
            textColor={`black`}
          />
        </MatchedList>
      </MatchedContainer>
      <MatchedContainer>
        <MatchedTitle>예약 확정 내역</MatchedTitle>
        <MatchedList>
          <HomePartyCard
            text={`예약 확정`}
            bgColor={"rgb(250, 124, 21)"}
            textColor={`white`}
          />
          <HomePartyCard
            text={`예약 확정`}
            bgColor={"rgb(250, 124, 21)"}
            textColor={`white`}
          />
          <HomePartyCard
            text={`예약 확정`}
            bgColor={"rgb(250, 124, 21)"}
            textColor={`white`}
          />
          <HomePartyCard
            text={`예약 확정`}
            bgColor={"rgb(250, 124, 21)"}
            textColor={`white`}
          />
        </MatchedList>
      </MatchedContainer>
      <MatchedContainer>
        <MatchedTitle>
          이용 완료 내역
          <LookEnded
            onClick={() => {
              navigate("");
            }}
          >
            전체 보기 &nbsp; {">"}
          </LookEnded>
        </MatchedTitle>
        <MatchedList>
          <HomePartyCardEnd
            bgColor={"rgba(185, 128, 83, 1)"}
            textColor={`white`}
          />
          <HomePartyCardEnd
            bgColor={"rgba(185, 128, 83, 1)"}
            textColor={`white`}
          />
          <HomePartyCardEnd
            bgColor={"rgba(185, 128, 83, 1)"}
            textColor={`white`}
          />
          <HomePartyCardEnd
            bgColor={"rgba(185, 128, 83, 1)"}
            textColor={`white`}
          />
        </MatchedList>
      </MatchedContainer>
    </ReserveContainer>
  );
};

const ReserveContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 8%;
`;
const PaymentContainer = styled.div`
  max-width: 1164px;
  width: 100%;
  margin: 0 auto;
`;
const PaymentTitleContainer = styled.div`
  padding: 0 30px;
`;

const PaymentTitle = styled.p`
  font-size: 22px;
  font-weight: 700;
`;
const PaymentSubTitle = styled.span`
  margin-left: 20px;
  font-size: 14px;
  font-weight: 400;
`;
const PaymentListContainer = styled.div`
  background-color: ${(props) => props.theme.sub};
  border-radius: 38px;
  padding: 30px 30px 16px;
`;
const PaymentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const PaymentCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: solid 1px #dddddd;
  border-radius: 8px;
  background-color: #fff;
  padding: 20px 30px;
  justify-content: space-between;
`;
const PaymentBtnBox = styled.div`
  margin-top: 10px;
  text-align: right;
`;
const PaymentBtn = styled.button`
  background-color: ${(props) => props.theme.main};
  align-items: end;
  color: white;
  padding: 0px 16px;
  border-radius: 5px;
  width: 130px;
  height: 36px;
  font-size: 16px;
  font-weight: 600;
  border: none;
`;

const PaymentCardHead = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
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
const PaymentCardDescSubTitle = styled.button`
  font-size: 14px;
  font-weight: 700;
  width: 111px;
  height: 26px;
  border: 1px solid rgba(182, 92, 19, 0.3);
  border-radius: 5px;
  background-color: rgba(182, 92, 19, 0.3);
`;
const PaymentCardDescInfo = styled.div``;
const PaymentCardDescInfoText1 = styled.span`
  font-size: 12px;
`;
const PaymentCardDescInfoText2 = styled.span`
  font-size: 14px;
  margin-left: 10px;
  font-weight: bold;
`;
const PaymentCardData = styled.div`
  display: flex;
  flex-direction: column;
`;
const PaymentPriceLabel = styled.div`
  color: #b3b3b3;
  font-size: 12px;
`;
const PaymentPrice = styled.div`
  font-weight: 600;
  color: #ff0000;
  font-size: 18px;
  line-height: 28px;
  text-align: right;
`;

const MatchedContainer = styled.div`
  padding-top: 70px;
  max-width: 1164px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const MatchedTitle = styled.div`
  font-size: 22px;
  font-weight: 700;
  position: relative;
  & > button {
    position: absolute;
    right: 0;
    border: 0;
    background-color: transparent;
  }
`;
const LookEnded = styled.button`
  font-size: 22px;
  font-weight: 700;
`;
const MatchedSubTitle = styled.div`
  font-size: 12px;
  font-weight: 400;
`;

const MatchedList = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  padding-top: 20px;
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

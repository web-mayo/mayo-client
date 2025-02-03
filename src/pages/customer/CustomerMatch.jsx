import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Title } from "../../components/Title";
import {
  HomePartyCard,
  HomePartyCardEnd,
  HomePartyCardNotSelected,
} from "../../components/HomePartyCard";
import moment from "moment";
import { comma } from "../../extraNeeds/funcs";
import { Payments } from "../../modal/Payments";
import { useNavigate } from "react-router-dom";
import { getMatchedParty } from "../../apis/CustomerPartyCtrler";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { HomePartyInfo } from "../../modal/HomePartyInfo";

export const CustomerMatch = () => {
  const navigate = useNavigate();
  const [getOnce, setGetOnce] = useState(true);
  const [accepted, setAccepted] = useState([]);
  const [waiting, setWaiting] = useState([]);
  const [finish, setFinished] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [notSelected, setNotSelected] = useState([]);
  // get data
  const getMathedLists = async () => {
    const mLists = await getMatchedParty();
    if (mLists && mLists.call && mLists.back) {
      mLists.back.forEach((party) => {
        switch (party.status) {
          case "ACCEPTED":
            setAccepted(party.list);
            break;
          case "CHEF_NOT_SELECTED":
            setNotSelected(party.list);
            break;
          case "COMPLETED":
            setCompleted(party.list);
            break;
          case "WAITING":
            setWaiting(party.list);
            break;
          default:
            setFinished(party.list);
        }
      });
    } else {
      return;
    }
  };
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
  // partyDetail
  const [partyDetailId, setPartyDetailId] = useState();
  const [chefCount, setChefCount] = useState(0);

  // modal
  const [payModalOpen, setPayModalOpen] = useState(false);
  const [partyDetailOpen, setPartyDetailOpen] = useState(false);
  const partyModalSwitch = () => {
    if (partyDetailOpen) {
      setPartyDetailOpen(false);
    } else {
      setPartyDetailOpen(true);
    }
  };
  const payModalSwitch = (bool) => {
    if (bool) {
      setPayModalOpen(true);
    } else {
      setPayModalOpen(false);
    }
  };

  // open
  const openPartyDetail = (partyId) => {
    setPartyDetailId(partyId);
    partyModalSwitch();
  };
  useEffect(() => {
    if (getOnce === true) {
      getMathedLists();
      setGetOnce(false);
    }
  }, []);
  useEffect(() => {}, [partyDetailId]);
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
            {accepted.length === 0 && (
              <PaymentCard>현재 결제 대기 중인 파티가 없습니다.</PaymentCard>
            )}
            {accepted &&
              accepted.length > 0 &&
              accepted.map((data) => (
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
                        <PaymentCardDescTitle>
                          {data.partyInfo}
                        </PaymentCardDescTitle>
                        <PaymentCardDescSubTitle
                          onClick={() => {
                            openPartyDetail(data.id);
                          }}
                        >
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
                        {moment(data.modifiedAt).format("YYYY/MM/DD ")}
                      </PaymentCardDescInfoText2>
                    </PaymentCardDescInfo>
                    <PaymentPrice>{comma(data.budget)}원</PaymentPrice>
                  </PaymentCardData>
                </PaymentCard>
              ))}
          </PaymentList>
          <PaymentBtnBox>
            <PaymentBtn
              onClick={() => {
                checkItems.length > 0
                  ? payModalSwitch(true)
                  : alert("선택된 내용이 없습니다.");
              }}
            >
              결제하러 가기
            </PaymentBtn>
          </PaymentBtnBox>
        </PaymentListContainer>
        <DialogBackdrop
          className="modal-background"
          style={{ display: payModalOpen ? "block" : "none" }}
        ></DialogBackdrop>

        <DialogTag open={payModalOpen} id="payments">
          <Payments datas={checkItems} func={payModalSwitch}></Payments>
        </DialogTag>
        <Dialog
          maxWidth="lg"
          children={HomePartyInfo(partyDetailId, chefCount)}
          open={partyDetailOpen}
          onClose={partyModalSwitch}
        ></Dialog>
      </PaymentContainer>
      <MatchedContainer>
        <MatchedTitle>매칭 대기 내역</MatchedTitle>
        <MatchedList>
          {notSelected && notSelected.length === 0 && (
            <>현재 대기 중인 내역이 없습니다.</>
          )}
          {notSelected &&
            notSelected.length > 0 &&
            notSelected.map((party) => (
              <HomePartyCardNotSelected
                key={"notSelected - " + party.id}
                onClick={() => {
                  if (party.chefCount == 0) {
                    openPartyDetail(party.id);
                    setChefCount(party.chefCount);
                  } else {
                    navigate("/customerMatch/" + party.id + "/selectChef");
                  }
                }}
                chefCount={Number(party.chefCount) > 0 ? party.chefCount : 0}
                bgcolor={
                  Number(party.chefCount) > 0
                    ? "rgba(255, 243, 234, 1)"
                    : "rgba(217, 217, 217, 1)"
                }
                textColor={`black`}
                info={party.partyInfo}
                partySchedule={party.partySchedule}
              />
            ))}
        </MatchedList>
      </MatchedContainer>
      <MatchedContainer>
        <MatchedTitle>요청 완료 내역</MatchedTitle>
        <MatchedList>
          {waiting && waiting.length === 0 && (
            <>현재 요청 완료된 내역이 없습니다.</>
          )}
          {waiting &&
            waiting.length > 0 &&
            waiting.map((party) => (
              <HomePartyCard
                onClick={() => {
                  openPartyDetail(party.id);
                }}
                key={"waiting - " + party.id}
                text={`요청 완료`}
                bgcolor={"rgba(255, 243, 234, 1)"}
                textColor={`black`}
                info={party.partyInfo}
                scheduledAt={party.partySchedule}
              />
            ))}
        </MatchedList>
      </MatchedContainer>
      <MatchedContainer>
        <MatchedTitle>예약 확정 내역</MatchedTitle>
        <MatchedList>
          {completed && completed.length === 0 && (
            <>현재 예약 확정 중인 내역이 없습니다.</>
          )}
          {completed &&
            completed.length > 0 &&
            completed.map((party) => (
              <HomePartyCard
                onClick={() => {
                  openPartyDetail(party.id);
                }}
                key={"completed - " + party.id}
                text={`예약 확정`}
                bgcolor={"rgb(250, 124, 21)"}
                textColor={`white`}
                info={party.partyInfo}
                partySchedule={party.partySchedule}
              />
            ))}
        </MatchedList>
      </MatchedContainer>
      <MatchedContainer>
        <MatchedTitle>
          이용 완료 내역
          <LookEnded
            onClick={() => {
              navigate("customerHistory");
            }}
          >
            전체 보기 &nbsp; {">"}
          </LookEnded>
        </MatchedTitle>
        <MatchedList>
          {finish && finish.length === 0 && <>이용한 내역이 없습니다.</>}
          {finish &&
            finish.length > 0 &&
            finish.map((party) => (
              <HomePartyCardEnd
                key={"finish - " + party.id}
                func={openPartyDetail}
                id={party.id}
                textcolor={`white`}
                info={party.partyInfo}
                partySchedule={party.partySchedule}
              />
            ))}
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
  max-height: 300px;
  overflow-y: scroll;
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
  text-align: center;
`;
const PaymentBtn = styled.button`
  background-color: ${(props) => props.theme.main};
  align-items: end;
  color: white;
  border-radius: 5px;
  width: 208px;
  height: 39px;
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
  padding-top: 50px;
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
  cursor: pointer;
`;
const MatchedSubTitle = styled.div`
  font-size: 12px;
  font-weight: 400;
`;

const MatchedList = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  padding: 20px 0;
  gap: 1%;
`;
const DialogTag = styled.dialog`
  border: 0;
  padding: 0;
  top: 50%;
  transform: translateY(-50%);
  max-height: calc(100% - 2em - 6px);
  overflow-y: scroll;
  z-index: 2;
`;

const DialogBackdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
`;

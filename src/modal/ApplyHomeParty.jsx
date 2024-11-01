import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import moment from "moment";
import { ApplyParty } from "../apis/ChefBoardAPI";
export const ApplyHomeParty = ({ setCancel, partyInfo }) => {
  // Hook Form
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  // dialog
  const DialogSwitch = (bool) => {
    const dialog = document.getElementById("completeApply");
    if (bool) {
      dialog.showModal();
      setCancel(true);
    } else {
      dialog.close();
    }
  };
  // checkBox checked
  const checkOrNot = (checkValue) => {
    if (partyInfo) {
      const list = partyInfo.serviceList;
      if (list.includes(checkValue)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };
  // api 통신
  const [feedback, setFeedback] = useState();
  // 중복 통신 막기
  const [rePostBan, setRePostBan] = useState(false);

  // 완료 후
  const onCompleted = (feedback) => {
    setRePostBan(false);
    if (feedback && feedback.call) {
      DialogSwitch(true);
    } else {
      if (feedback && feedback.back.response.data) {
        alert(feedback.back.response.data.message);
      } else {
        alert("문제가 생겼습니다. 다시 시도해주세요.");
      }
    }
  };
  // 전송
  const onSubmit = async () => {
    if (rePostBan) {
      return;
    }
    if (!window.confirm("신청하시겠습니까?")) {
      return;
    }
    const partyInput = {
      partyId: partyInfo.id,
    };
    const checkComplete = async () => {
      console.log(partyInput);
      const response = await ApplyParty(partyInput);
      setFeedback(response);
    };
    checkComplete();
    setRePostBan(true);
  };
  useEffect(() => {
    if (feedback) {
      onCompleted(feedback);
    }
  }, [feedback]);

  return (
    <>
      <Container1>
        <Container2>
          <Title>요리사 모집 중입니다!</Title>
        </Container2>
        <Container3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Container4>
              <Container5>
                <Inform>[ 한 줄 소개 ]</Inform>
                <Contents>{partyInfo && partyInfo.info}</Contents>
              </Container5>
              <Container5>
                <Inform>[ 일시 ] </Inform>
                <Contents>
                  {partyInfo &&
                    moment(partyInfo.schedule).format(
                      "YYYY년 MM월 DD일 HH시 MM분"
                    )}
                </Contents>
              </Container5>
              <Container5>
                <Inform>[ 인원 수 ]</Inform>
                <Contents>{partyInfo && partyInfo.numberOfPeople} 명</Contents>
              </Container5>
              <Container7>
                <Inform>[ 요청 서비스 범위 ]</Inform>
                <RangeBox>
                  <CheckBox
                    type="checkbox"
                    value={"COURSE_PLANNING"}
                    checked={checkOrNot("COURSE_PLANNING")}
                    disabled
                  ></CheckBox>
                  <RangeText>코스 구성</RangeText>
                </RangeBox>
                <RangeBox>
                  <CheckBox
                    type="checkbox"
                    value={"INGREDIENT_SELECTION"}
                    checked={checkOrNot("INGREDIENT_SELECTION")}
                    disabled
                  ></CheckBox>
                  <RangeText>재료 선정</RangeText>
                </RangeBox>
                <RangeBox>
                  <CheckBox
                    type="checkbox"
                    value={"INGREDIENT_PURCHASE"}
                    checked={checkOrNot("INGREDIENT_PURCHASE")}
                    disabled
                  ></CheckBox>
                  <RangeText>재료 구입</RangeText>
                </RangeBox>
                <RangeBox>
                  <CheckBox
                    type="checkbox"
                    value={"CLEANUP"}
                    checked={checkOrNot("CLEANUP")}
                    disabled
                  ></CheckBox>
                  <RangeText>뒷정리</RangeText>
                </RangeBox>
              </Container7>
              <Container8>
                <Inform>[ 고객 요청 사항 ]</Inform>
                <InputBox2></InputBox2>
              </Container8>
            </Container4>
            <Container6>
              <SaveButton>
                <SaveText
                  onClick={() => {
                    onSubmit();
                  }}
                >
                  신청
                </SaveText>
              </SaveButton>
              {/* <CancelBtn
                onClick={() => {
                  setCancel(false);
                }}
              >
                <SaveText>취소</SaveText>
              </CancelBtn> */}
            </Container6>
          </form>
        </Container3>
        <Dialog id="completeApply">
          <DialogText>신청이 완료되었습니다!</DialogText>
          <DialogBtn onClick={() => window.location.reload(true)}>
            게시판으로 돌아가기
          </DialogBtn>
        </Dialog>
      </Container1>
    </>
  );
};

const Container = styled.div`
  height: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container1 = styled.div`
  width: 437px;
  border-radius: 10px;
  border: 1px solid #d9d9d9;
`;

const Container2 = styled.div`
  width: 437px;
  height: 55px;
  border-radius: 10px 10px 0px 0px;
  background-color: #fff3ea;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-family: var(--sds-typography-body-font-family);
  font-size: 18px;
`;

const Container3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Container4 = styled.div`
  width: 363px;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 22px;
`;

const Container5 = styled.div`
  display: flex;
  flex-direction: column;
`;

const Inform = styled.label`
  font-size: 12px;
  line-height: 16px;
  color: rgba(142, 142, 142, 1);
`;

const Contents = styled.div`
  font-size: 16px;
`;

const Input = styled.input`
  border-radius: 8px;
  border: 1px solid #d9d9d9;
  height: 40px;
  padding-left: 16px;
  font-weight: 400;
  color: #8e8e8e;
`;

const Container7 = styled.div`
  height: 140px;
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
`;

const RangeBox = styled.div`
  display: flex;
  font-weight: 500;
  padding-top: 3px;
`;

const CheckBox = styled.input`
  width: 17px;
  height: 17px;
  border: 1.5px solid;
  border-radius: 6px;
`;

const RangeText = styled.div`
  padding-left: 10px;
  padding-bottom: 10px;
`;

const Container8 = styled.div``;

const InputBox2 = styled.div`
  display: block;
  border-radius: 8px;
  border: 1.5px solid #d9d9d9;
  height: 80px;
  padding: 10px 16px 0;
  font-weight: 400;
  &::placeholder {
    color: #8e8e8e;
    font-weight: 400;
  }
`;

const Container6 = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const SaveButton = styled.div`
  width: 160px;
  height: 40px;
  border-radius: 8px;
  background: #fa7c15;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const CancelBtn = styled.div`
  width: 160px;
  height: 40px;
  border-radius: 8px;
  background: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const SaveText = styled.div`
  color: white;
`;

const Dialog = styled.dialog`
  border: 0;
  width: 298px;
  height: 124px;
  border-radius: 10px;
  top: -20%;
`;
const DialogText = styled.p`
  margin-top: 48px;
  text-align: center;
  font-size: 20px;
  line-height: 28px;
  color: #000;
  font-weight: 600;
`;
const DialogBtn = styled.a`
  display: block;
  margin-top: 2px;
  text-align: center;
  font-size: 10px;
  line-height: 14px;
  color: #000;
  text-decoration: underline;
  cursor: pointer;
`;

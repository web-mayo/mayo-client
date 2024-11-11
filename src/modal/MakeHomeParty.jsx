import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import moment from "moment";
import { registHomeParty } from "../apis/CustomerPartyCtrler";
import { getCustomerKitchenList } from "../apis/CustomerMyPage";
export const MakeHomeParty = ({ setCancel }) => {
  // Hook Form
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  // get KitchenList
  const [kichenList, setKitchenList] = useState([]);
  const getKitchenList = async () => {
    const res = await getCustomerKitchenList();
    var kList = res?.back;
    kList.sort((a) => {
      if (a.kitchenMainStatus == "MAIN") {
        return -1;
      } else {
        return 1;
      }
    });
    setKitchenList(kList);
    setValue("kitchenId", kList[0].id);
  };
  useEffect(() => {
    getKitchenList();
  }, []);
  // checkService
  const checkItemHandler = (data, isChecked) => {
    if (!isChecked && Boolean(checkItems.find((item) => item === data))) {
      setCheckItems(checkItems.filter((item) => item !== data));
    } else if (
      isChecked &&
      !Boolean(checkItems.find((item) => item === data))
    ) {
      setCheckItems((originList) => [...originList, data]);
    }
  };
  const [checkItems, setCheckItems] = useState([]);
  // dialog
  const DialogSwitch = (bool) => {
    const dialog = document.getElementById("completeSignUp");
    if (bool) {
      dialog.showModal();
      setCancel(true);
    } else {
      dialog.close();
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
    const {
      partyInfo,
      kitchenId,
      budget,
      date,
      adultCount,
      childCount,
      partyComment,
    } = getValues();
    // date 현재시간 비교 필요.
    var registerInput = {
      partyInfo: partyInfo,
      budget: budget,
      partySchedule: moment(date).format("YYYYMMDDHHmmss"),
      adultCount: adultCount,
      childCount: childCount,
      partyServices: checkItems,
      partyComment: partyComment,
      kitchenId: kitchenId,
    };
    console.log(registerInput);
    const checkComplete = async () => {
      const response = await registHomeParty(registerInput);
      console.log(response);
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
          <Title>홈파티 일정을 올려보세요!</Title>
        </Container2>
        <Container3>
          <form id="FindPwdForm" onSubmit={handleSubmit(onSubmit)}>
            <Container4>
              <Container5>
                <Inform>홈파티 한 줄 소개</Inform>
                <Input
                  id="paragraph"
                  type="text"
                  placeholder="예시) 4인 가족의 양식 코스"
                  {...register("partyInfo", {})}
                ></Input>
              </Container5>
              <Container5>
                <Inform>일시</Inform>
                <Input
                  id="paragraph"
                  type="datetime-local"
                  placeholder="예시) 4인 가족의 양식 코스"
                  {...register("date", {})}
                ></Input>
              </Container5>
              <Container5>
                <Inform>인원 수</Inform>
                <CountBox>
                  어른{" "}
                  <InputCount
                    id="adult"
                    type="number"
                    defaultValue={0}
                    placeholder="00"
                    {...register("adultCount", {})}
                  ></InputCount>{" "}
                  명 / 어린이{" "}
                  <InputCount
                    id="kids"
                    type="number"
                    defaultValue={0}
                    placeholder="00"
                    {...register("childCount", {})}
                  ></InputCount>
                  명
                </CountBox>
              </Container5>
              <Container5>
                <Inform>홈파티 예산</Inform>
                <div>
                  <Input
                    width={100}
                    after={"원"}
                    id="budget"
                    type="text"
                    placeholder="300,000"
                    {...register("budget", {})}
                  ></Input>{" "}
                  원
                </div>
              </Container5>
              <Container5>
                <Inform>주방 정보</Inform>
                <SelectKitchen {...register("kitchenId", {})}>
                  {kichenList &&
                    kichenList.map((kitchen) => (
                      <option
                        key={"kitchenList" + kitchen.id}
                        value={kitchen.id}
                        selected={kitchen.kitchenMainStatus === "MAIN"}
                      >
                        {kitchen.nickName}
                        {kitchen.kitchenMainStatus == "MAIN" && "(메인)"}
                      </option>
                    ))}
                </SelectKitchen>
              </Container5>
              <Container7>
                <Inform>요청 서비스 범위</Inform>
                <RangeBox>
                  <CheckBox
                    type="checkbox"
                    value={"COURSE_PLANNING"}
                    onChange={(e) => {
                      checkItemHandler(e.target.value, e.target.checked);
                    }}
                  ></CheckBox>
                  <RangeText>코스 구성</RangeText>
                </RangeBox>
                <RangeBox>
                  <CheckBox
                    type="checkbox"
                    value={"INGREDIENT_SELECTION"}
                    onChange={(e) => {
                      checkItemHandler(e.target.value, e.target.checked);
                    }}
                  ></CheckBox>
                  <RangeText>재료 선정</RangeText>
                </RangeBox>
                <RangeBox>
                  <CheckBox
                    type="checkbox"
                    value={"INGREDIENT_PURCHASE"}
                    onChange={(e) => {
                      checkItemHandler(e.target.value, e.target.checked);
                    }}
                  ></CheckBox>
                  <RangeText>재료 구입</RangeText>
                </RangeBox>
                <RangeBox>
                  <CheckBox
                    type="checkbox"
                    value={"CLEANUP"}
                    onChange={(e) => {
                      checkItemHandler(e.target.value, e.target.checked);
                    }}
                  ></CheckBox>
                  <RangeText>뒷정리</RangeText>
                </RangeBox>
              </Container7>
              <Container8>
                <Inform>마이요리사에게 남길 말씀</Inform>
                <InputBox2
                  {...register("partyComment", {})}
                  placeholder="요청하고 싶은 음식, 알레르기 정보 등 자유롭게 남겨주세요!"
                ></InputBox2>
              </Container8>
            </Container4>
            <Container6>
              <SaveButton>
                <SaveText
                  onClick={() => {
                    onSubmit();
                  }}
                >
                  등록
                </SaveText>
              </SaveButton>
              <CancelBtn
                onClick={() => {
                  setCancel(false);
                }}
              >
                <SaveText>취소</SaveText>
              </CancelBtn>
            </Container6>
          </form>
        </Container3>
        <Dialog id="completeSignUp">
          <DialogText>등록이 완료되었습니다!</DialogText>
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
  /* height: 770px; */
  border-radius: 10px;
  border: 1px solid #d9d9d9;
`;

const Container2 = styled.div`
  width: 437px;
  height: 55px;
  border-radius: 10px 10px 0px 0px;
  border-bottom: 1px solid #d9d9d9;
  background-color: #fff3ea;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-family: var(--sds-typography-body-font-family);
  font-size: 18px;
  font-weight: 600;
`;

const Container3 = styled.div`
  /* height: 708px; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Container4 = styled.div`
  width: 363px;
  /* height: 581px; */
  padding-top: 30px;
  display: flex;
  gap: 15px;
  flex-direction: column;
  justify-content: space-between;
`;

const Container5 = styled.div`
  height: 70px;
  display: flex;
  flex-direction: column;
`;

const Inform = styled.label`
  font-weight: 600;
  padding-bottom: 8px;
  font-size: 14px;
`;
const CountBox = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
`;
const Input = styled.input`
  width: ${({ width }) => (width ? width + "px" : "auto")};
  border-radius: 8px;
  border: 1px solid #d9d9d9;
  height: 40px;
  font-weight: 400;
  padding-left: 16px;
  &::placeholder {
    color: #8e8e8e;
  }
`;
const SelectKitchen = styled.select`
  border-radius: 8px;
  border: 1px solid #d9d9d9;
  height: 40px;
  font-weight: 400;
  width: 250px;
  padding-left: 16px;
`;
const InputCount = styled.input`
  margin: 0 10px;
  border-radius: 8px;
  border: 1px solid #d9d9d9;
  height: 40px;
  width: 52px;
  text-align: center;
  &::placeholder {
    color: #8e8e8e;
  }
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

const InputBox2 = styled.textarea`
  display: block;
  border-radius: 8px;
  border: 1.5px solid #d9d9d9;
  height: 80px;
  padding: 10px 16px 0;
  font-weight: 400;
  width: 331px;
  resize: none;
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

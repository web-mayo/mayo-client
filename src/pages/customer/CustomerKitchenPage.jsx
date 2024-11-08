import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { RegistCustomerPhone } from "../../apis/CustomerAuth";

export const CustomerKitchenPage = ({ type }) => {
  const navigate = useNavigate();

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

  // api 통신
  const [feedback, setFeedback] = useState();
  // 중복 통신 막기
  const [rePostBan, setRePostBan] = useState(false);

  // 완료 후
  const onCompleted = (feedback) => {
    setRePostBan(false);
    if (feedback && feedback.call) {
    } else {
      if (feedback && feedback.back.response.data) {
        alert(feedback.back.response.data.message);
      } else {
        alert("주방 정보를 불러오는데 문제가 생겼습니다.");
      }
    }
  };

  const onSubmit = async () => {
    if (rePostBan) {
      return;
    }
    const { username, name, password, birthday, authNum, certEmail, certNum } =
      getValues();
    var registerInput = {
      userId: username,
      password: password,
      name: name,
      birthday: birthday,
      authCode: authNum,
      phone: certNum,
      email: certEmail,
    };

    const checkComplete = async () => {
      registerInput = { ...registerInput, phone: certNum };
      const response = await RegistCustomerPhone(registerInput);
      setFeedback(response);
      // registerInput = { ...registerInput, email: certEmail };
      // const response = await RegistCustomerEmail(registerInput);
      // setFeedback(response);
    };
    checkComplete();
    setRePostBan(true);
    onCompleted(feedback);
  };

  return (
    <Background>
      <Container>
        <TitleBox>
          <Title>주방 프로필 관리</Title>
        </TitleBox>
        <KitchenPart>
          <MainKitchen>
            <Ktitle>현재 메인으로 설정 중인 주방</Ktitle>
            <KitchenBox>작성된 주방 프로필이 없습니다.</KitchenBox>
          </MainKitchen>
          <SubKitchen>
            <Ktitle>기타 주방</Ktitle>
            <KitchenBox>작성된 주방 프로필이 없습니다.</KitchenBox>
          </SubKitchen>
          <AddNewKitchen>
            <AddKitchenBtn
              type="button"
              onClick={() => {
                navigate("/customerPage/edit");
              }}
            >
              + 새로운 주방 프로필 작성
            </AddKitchenBtn>
          </AddNewKitchen>

          <SubmitBtnBox>
            <PrevBtn>취소</PrevBtn>
            <SubmitButton>저장하기</SubmitButton>
          </SubmitBtnBox>
        </KitchenPart>
      </Container>
    </Background>
  );
};

const Background = styled.div`
  padding: 0 32px 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  margin: 0 auto;
  min-width: 740px;
  display: flex;
  flex-direction: column;
  gap: 26px;
  background-color: #ffffff;
`;
const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 32px 17px;
`;

const Title = styled.div`
  font-family: var(--sds-typography-body-font-family);
  font-size: 26px;
  line-height: 48px;
  font-weight: 700;
  text-align: center;
`;

const KitchenPart = styled.div`
  padding: 30px 0 100px;
`;

const MainKitchen = styled.div``;
const Ktitle = styled.p`
  margin: 0;
  padding: 0 0 10px 10px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
`;
const KitchenBox = styled.div`
  min-height: 190px;
  border: 1px solid rgba(217, 217, 217, 1);
  border-radius: 8px;
  box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;
const SubKitchen = styled.div`
  margin-top: 45px;
`;
const AddNewKitchen = styled.div`
  margin-top: 45px;
  text-align: center;
`;

const AddKitchenBtn = styled.button`
  width: 218px;
  height: 36px;
  border-radius: 10px;
  border: 1px solid black;
  background-color: transparent;
`;
const Label = styled.label`
  font-size: 14px;
  line-height: 20px;
  color: #000000;
  font-weight: 500;
`;
const ChangeCert = styled.div`
  float: right;
  font-size: 11px;
  font-weight: 500;
`;
const ChangeCertBtn = styled.button`
  width: 105px;
  height: 16px;
  border-radius: 28px;
  border: 0;
  background-color: rgba(250, 124, 21, 1);
  vertical-align: top;
  margin-left: 7px;
`;

const CertWay1 = styled.div``;
const CertWay2 = styled.div``;
const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-right: 8px;
`;
const Input = styled.input`
  padding: 8px 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.5);
  font-size: 14px;
  line-height: 20px;
`;
const SubmitBtnBox = styled.div`
  width: 100%;
  padding-top: 45px;
  display: flex;
  gap: 12px;
  justify-content: center;
`;
const PrevBtn = styled.button`
  border-radius: 8px;
  width: 95px;
  height: 48px;
  font-weight: 500;
  background-color: rgba(195, 195, 195, 1);
  font-size: 1rem;
  border-radius: 8px;
  border: 0;
  color: #ffffff;
`;
const SubmitButton = styled.button`
  width: 195px;
  height: 48px;
  font-weight: 500;
  background-color: #fa7c15;
  font-size: 1rem;
  border-radius: 8px;
  border: 0;
  color: #ffffff;
`;

const CertificationBox = styled.div`
  display: flex;
  gap: 8px;
  & > input {
    flex: 1;
  }
`;

const CertButton = styled.button`
  background-color: rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  border: 0;
  width: 105px;
  height: 36px;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
`;

const List = styled.li`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const AccountServices = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin: 0;
  color: #000;
  font-size: 14px;
  line-height: 24px;
  font-weight: 500;
`;

const RouteText = styled.a`
  margin: 0;
  padding: 0;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
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
const ErrorMessage = styled.p`
  padding: 0 12px;
  font-size: 12px;
  margin: 0;
  color: ${({ err }) => (err ? "red" : "green")};
`;

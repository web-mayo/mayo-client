import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  RegistCustomerEmail,
  RegistCustomerPhone,
} from "../../apis/CustomerAuth";
import {
  VerifyCustomerEmailRegist,
  VerifyCustomerPhoneRegist,
} from "../../apis/CustomerVerify";
import axios from "axios";
export const UserEditInfo = ({ type }) => {
  const navigate = useNavigate();

  // 모달
  const DialogSwitch = (bool) => {
    const dialog = document.getElementById("completeSignUp");
    if (bool) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  };

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
      DialogSwitch(true);
    } else {
      if (feedback && feedback.back.response.data) {
        alert(feedback.back.response.data.message);
      } else {
        alert("회원가입에 문제가 생겼습니다. 다시 시도해주세요.");
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
          <Title>회원 정보 수정</Title>
        </TitleBox>
        <InputForm id="FindPwdForm" onSubmit={handleSubmit(onSubmit)}>
          <BorderBox>
            <InputBox>
              <Label htmlFor="name">이름</Label>
              <Input
                id="name"
                type="text"
                placeholder="이름 입력"
                {...register("name", {
                  required: "이름은 필수입니다.",
                })}
              ></Input>
              {errors.name?.message && (
                <ErrorMessage err={true}>{errors.name?.message}</ErrorMessage>
              )}
            </InputBox>
            <InputBox>
              <Label htmlFor="birthday">생년월일</Label>
              <Input
                id="birthday"
                type="text"
                placeholder="YYYYMMDD"
                {...register("birthday", {
                  required: "생년월일을 적어주세요.",
                  maxLength: {
                    value: 8,
                    message: "형식에 맞게 적어주세요.",
                  },
                })}
              ></Input>
              {errors.birthday?.message && (
                <ErrorMessage err={true}>
                  {errors.birthday?.message}
                </ErrorMessage>
              )}
            </InputBox>
            <InputBox>
              <CertWay2>
                <Label htmlFor="number">이메일 주소</Label>
                <CertificationBox>
                  <Input
                    id="certEmail"
                    type="email"
                    placeholder="example@123.com"
                    {...register("certEmail", {})}
                  ></Input>
                  <CertButton
                    onClick={() => {
                      VerifyCustomerEmailRegist(getValues("certEmail"));
                    }}
                  >
                    인증번호 발송
                  </CertButton>
                </CertificationBox>
              </CertWay2>
            </InputBox>
            <InputBox>
              <CertWay1>
                <Label htmlFor="number">휴대폰 번호</Label>
                <CertificationBox>
                  <Input
                    id="certNum"
                    type="text"
                    placeholder="'-'없이 입력"
                    {...register("certNum", {})}
                  ></Input>
                  <CertButton
                    type="button"
                    onClick={() => {
                      VerifyCustomerPhoneRegist(getValues("certNum"));
                    }}
                  >
                    인증번호 발송
                  </CertButton>
                </CertificationBox>
              </CertWay1>
            </InputBox>
            <InputBox>
              <Label htmlFor="authNum">인증번호</Label>
              <Input
                id="authNum"
                type="text"
                {...register("authNum", {
                  required: "인증번호가 필요합니다.",
                })}
              ></Input>
              {errors.authNum?.message && (
                <ErrorMessage err={true}>
                  {errors.authNum?.message}
                </ErrorMessage>
              )}
            </InputBox>
          </BorderBox>
          <BtnBox>
            <PreBtn
              type="button"
              onClick={() => {
                navigate("/customerPage");
              }}
            >
              이전
            </PreBtn>
            <SubmitButton
              // type="submit"
              type="button"
              onClick={() => {
                onSubmit();
              }}
            >
              저장하기
            </SubmitButton>
          </BtnBox>
        </InputForm>
        <Dialog id="completeSignUp">
          <DialogText>회원정보가 수정되었습니다!</DialogText>
          <DialogBtn onClick={() => navigate("/login")}>
            로그인하러 가기
          </DialogBtn>
        </Dialog>
      </Container>
    </Background>
  );
};

const Background = styled.div`
  padding: 32px 32px 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 554px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 26px;
  background-color: #ffffff;
`;
const BorderBox = styled.div`
  padding: 32px 40px 50px;
  display: flex;
  flex-direction: column;
  gap: 26px;
  border: 1px solid rgba(217, 217, 217, 1);
  border-radius: 10px;
`;
const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 7.5px 17px;
`;

const Title = styled.div`
  font-family: var(--sds-typography-body-font-family);
  font-size: 36px;
  line-height: 48px;
  font-weight: 700;
  text-align: center;
`;
const ColoredText = styled.span`
  color: rgba(250, 124, 21, 1);
`;

const TitleDesc = styled.p`
  text-align: center;
  font-size: 16px;
  line-height: 24px;
  margin: 0;
`;

const InputForm = styled.form``;
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
const BtnBox = styled.div`
  width: 100%;
  padding-top: 45px;
  display: flex;
  gap: 12px;
  justify-content: center;
`;
const PreBtn = styled.button`
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

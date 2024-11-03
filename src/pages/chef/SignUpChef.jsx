import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  VerifyChefEmailRegist,
  VerifyChefPhoneRegist,
} from "../../apis/ChefVerify";
import { RegistChefEmail, RegistChefPhone } from "../../apis/ChefAuth";
export const SignUpChef = () => {
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState();
  // 중복 통신 막기
  const [rePostBan, setRePostBan] = useState(false);
  // 모달
  const DialogSwitch = (bool) => {
    const dialog = document.getElementById("completeSignUp");
    if (bool) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  };

  // 인증방법 변경
  const [certWay, setCertWay] = useState(0);
  const setCertWayHandler = (value) => {
    if (value !== 1 && value !== 0) {
      alert("certification error");
      setCertWay(0);
      return;
    }
    setCertWay(value);
  };

  // Hook Form
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm();

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
      username: username,
      password: password,
      name: name,
      birthday: birthday,
      authNum: authNum,
    };

    const checkComplete = async () => {
      if (certWay === 0) {
        registerInput = { ...registerInput, phone: certNum };
        const response = await RegistChefPhone(registerInput);
        setFeedback(response);
        console.log(response);
      } else {
        registerInput = { ...registerInput, email: certEmail };
        const response = await RegistChefEmail(registerInput);
        setFeedback(response);
        console.log(response);
      }
    };
    checkComplete();
    setRePostBan(true);
    onCompleted(feedback);
  };

  return (
    <Background>
      <Container>
        <TitleBox>
          <Title>
            <ColoredText>마이요리사</ColoredText>가 되는 첫 단계!
          </Title>
          <TitleDesc>
            😀 가입 후 “마이요리사"님을 찾는 고객들을 만나보세요 😀
          </TitleDesc>
        </TitleBox>
        <InputForm id="FindPwdForm" onSubmit={handleSubmit(onSubmit)}>
          <InputBox>
            <Label htmlFor="userName">아이디</Label>
            <Input
              id="userName"
              type="text"
              placeholder="4 ~ 20자리 / 영문, 숫자 사용가능"
              {...register("username", {
                required: true,
                maxLength: 20,
                pattern: /^[A-Za-z0-9]*$/,
              })}
            ></Input>
          </InputBox>
          <InputBox>
            <Label htmlFor="password">비밀번호</Label>
            <Input
              id="password"
              type="password"
              placeholder="8 ~ 16자리 / 영문 소문자, 숫자 조합"
              {...register("password", {
                required: true,
                minLength: 8,
                maxLength: 16,
                pattern: /^[a-z0-9]*$/,
              })}
            ></Input>
          </InputBox>
          <InputBox>
            <Label htmlFor="passwordCheck">비밀번호 확인</Label>
            <Input
              id="passwordCheck"
              type="password"
              placeholder="비밀번호 재입력"
              {...register("passwordChk", {
                required: true,
                // validate: (value) =>
                //   value === watch("password") ||
                //   "비밀번호가 일치하지 않습니다.",
              })}
            ></Input>
          </InputBox>
          <InputBox>
            <Label htmlFor="name">이름</Label>
            <Input
              id="name"
              type="text"
              placeholder="이름 입력"
              {...register("name", {
                required: true,
              })}
            ></Input>
          </InputBox>
          <InputBox>
            <Label htmlFor="birthday">생년월일</Label>
            <Input
              id="birthday"
              type="number"
              placeholder="YYYYMMDD"
              {...register("birthday", {
                required: true,
              })}
            ></Input>
          </InputBox>
          <InputBox>
            <CertWay1 certway={certWay}>
              <Label htmlFor="certNum">
                휴대폰 번호
                <ChangeCert>
                  이메일 인증을 원하시면,
                  <ChangeCertBtn
                    type="button"
                    onClick={() => {
                      setCertWayHandler(1);
                    }}
                  >
                    이메일 인증하기
                  </ChangeCertBtn>
                </ChangeCert>
              </Label>
              <CertificationBox>
                <Input
                  id="certNum"
                  type="number"
                  placeholder="'-'없이 입력"
                  {...register("certNum", {
                    // certWay에 따라서 require 변경
                  })}
                ></Input>
                <CertButton
                  onClick={() => {
                    VerifyChefPhoneRegist(getValues("certNum"));
                  }}
                >
                  인증번호 발송
                </CertButton>
              </CertificationBox>
            </CertWay1>
            <CertWay2 certway={certWay}>
              <Label htmlFor="certEmail">
                이메일 주소
                <ChangeCert>
                  휴대폰 인증을 원하시면,
                  <ChangeCertBtn
                    type="button"
                    onClick={() => {
                      setCertWayHandler(0);
                    }}
                  >
                    휴대폰 인증하기
                  </ChangeCertBtn>
                </ChangeCert>
              </Label>
              <CertificationBox>
                <Input
                  id="certEmail"
                  type="email"
                  placeholder="example@123.com"
                  {...register("certEmail", {})}
                ></Input>
                <CertButton
                  onClick={() => {
                    VerifyChefEmailRegist(getValues("certEmail"));
                  }}
                >
                  인증번호 발송
                </CertButton>
              </CertificationBox>
            </CertWay2>
          </InputBox>
          <InputBox>
            <Label htmlFor="authNum">인증번호</Label>
            <Input
              id="authNum"
              type="text"
              {...register("authNum", {
                required: true,
              })}
            ></Input>
          </InputBox>
          <SubmitButton
            type="submit"
            onClick={() => {
              onSubmit();
            }}
          >
            인증확인
          </SubmitButton>
        </InputForm>
        <AccountServices>
          <List>
            <RouteText onClick={() => navigate("/login")}>로그인</RouteText>
          </List>
          |
          <List>
            <RouteText onClick={() => navigate("/SignUpCustomer")}>
              고객 회원가입
            </RouteText>
          </List>
        </AccountServices>
        <Dialog id="completeSignUp">
          <DialogText>회원가입이 완료되었습니다!</DialogText>
          <DialogBtn onClick={() => navigate("/loginChef")}>
            로그인하러 가기
          </DialogBtn>
        </Dialog>
      </Container>
    </Background>
  );
};

const Background = styled.div`
  padding: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff3ea;
`;

const Container = styled.div`
  width: 554px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 26px;
  background-color: #ffffff;
  padding: 65.5px 0;
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

const InputForm = styled.form`
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  gap: 26px;
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
  cursor: pointer;
`;

const CertWay1 = styled.div`
  display: ${({ certway }) => (certway === 0 ? "block" : "none")};
`;
const CertWay2 = styled.div`
  display: ${({ certway }) => (certway === 1 ? "block" : "none")};
`;
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
const SubmitButton = styled.button`
  width: 100%;
  font-weight: 500;
  background-color: #fa7c15;
  font-size: 1rem;
  line-height: 24px;
  padding: 12px;
  border-radius: 8px;
  border-color: transparent;
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
  cursor: pointer;
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

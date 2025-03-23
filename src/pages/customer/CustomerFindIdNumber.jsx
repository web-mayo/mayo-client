import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  VerifyCustomerPhoneUsername,
  VerifyCustomerPhoneUsernameCheck,
} from "../../apis/CustomerVerify";
import axios from "axios";

export const CustomerFindIdNumber = () => {
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState();
  const [rePostBan, setRePostBan] = useState(false);

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
      console.log(feedback);
      navigate("/findIdCompletedCustomer", {
        state: { data: feedback.back.result },
      });
    } else {
      if (feedback && feedback.back.response.data) {
        alert(feedback.back.response.data.message);
      } else {
        alert("아이디를 불러오지 못했습니다. 다시 시도해주세요.");
      }
    }
  };

  const onSubmit = async () => {
    if (rePostBan) {
      return;
    }
    const { name, phone, authCode } = getValues();
    const FindIdbyNumberInput = {
      name: name,
      phone: phone,
      authCode: authCode,
    };
    const conn = async () => {
      const response =
        await VerifyCustomerPhoneUsernameCheck(FindIdbyNumberInput);
      console.log(response);
      setFeedback(response);
    };
    conn();
    setRePostBan(true);
  };
  useEffect(() => {
    if (feedback) {
      onCompleted(feedback);
    }
  }, [feedback]);
  return (
    <Background>
      <Container>
        <LoginRole>
          <LoginCustomers>고객</LoginCustomers>
          <LoginChefes onClick={() => navigate("/FindIdNumberChef")}>
            요리사
          </LoginChefes>
        </LoginRole>
        <TitleBox>
          {/* <SubDesc>고객용</SubDesc> */}
          <Title>휴대폰 번호로 찾기</Title>
          <TitleDesc>
            회원정보에 등록된 정보로 아이디를 찾을 수 있습니다.
          </TitleDesc>
        </TitleBox>
        <InputForm id="FindIdForm" onSubmit={handleSubmit(onSubmit)}>
          <InputBox>
            <Label htmlFor="name">이름</Label>
            <Input
              id="name"
              type="text"
              {...register("name", {
                required: true,
              })}
            ></Input>
          </InputBox>
          <InputBox>
            <Label htmlFor="phone">휴대폰 번호</Label>
            <CertificationBox>
              <Input
                id="phone"
                type="number"
                placeholder="'-'없이 입력"
                {...register("phone", {
                  required: true,
                })}
              ></Input>
              <CertButton
                onClick={() => {
                  if (getValues("phone")) {
                    VerifyCustomerPhoneUsername(getValues("phone"));
                  } else {
                    alert("전화번호를 적어주세요");
                  }
                }}
              >
                인증번호 발송
              </CertButton>
            </CertificationBox>
          </InputBox>
          <InputBox>
            <Label htmlFor="certNumber">인증번호</Label>
            <Input
              id="certNumber"
              type="text"
              {...register("authCode", {
                required: true,
              })}
            ></Input>
          </InputBox>
          <SubmitButton type="submit">인증확인</SubmitButton>
        </InputForm>
        <AccountServices>
          <List>
            <RouteText onClick={() => navigate("/login")}>로그인</RouteText>
          </List>
          |
          <List>
            <RouteText onClick={() => navigate("/FindPwdNumberCustomer")}>
              비밀번호 찾기
            </RouteText>
          </List>
          |
          <List>
            <RouteText onClick={() => navigate("/SelectSignUp")}>
              회원가입
            </RouteText>
          </List>
        </AccountServices>
        <ChefLoginRouteBox>
          {/* <RoleChangeText onClick={() => navigate("/FindIdNumberChef")}>
            혹시 요리사님 이신가요?
          </RoleChangeText> */}
        </ChefLoginRouteBox>
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
const LoginRole = styled.div`
  padding: 0 50px;
  & > div {
    cursor: pointer;
    width: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    color: #fff;
    height: 32px;
    font-weight: bold;
  }
`;
const LoginChefes = styled.div`
  background-color: #d9d9d9;

  border-radius: 0 4px 4px 0;
`;
const LoginCustomers = styled.div`
  background-color: #fb7d15;

  border-radius: 4px 0 0 4px;
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
const SubDesc = styled.p`
  font-family: var(--sds-typography-body-font-family);
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  margin: 0;
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
  padding: 6px 12px;
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
const RoleChangeText = styled.p`
  margin-top: 20px;
  padding: 0;
  color: #000;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
const ChefLoginRouteBox = styled.div`
  text-align: center;
  margin: 0;
  padding: 1px 50px;
  color: #fa7c15;
  font-size: 12px;
  line-height: 14px;
  font-weight: 400;
  & > a {
    border-bottom: 1px solid #fa7c15;
  }
  & > a:hover {
    border-bottom: 1px solid #fa7c15;
    text-decoration: none;
  }
`;

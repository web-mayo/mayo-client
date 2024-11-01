import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getToken } from "../../token.jsx";
import { logIn } from "../../token.jsx";
import axios from "axios";
import { useRecoilState } from "recoil";
import { userStateRecoil } from "../../recoil/userState.js";
import { useSetRecoilState } from "recoil";
export const LoginCustomer = () => {
  const [userState, setUserState] = useRecoilState(userStateRecoil);

  const [rePostBan, setRePostBan] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    if (rePostBan) {
      return;
    }
    // login
    const url = process.env.REACT_APP_SERVER_URL;
    const { username, password } = getValues();
    const loginCustomerInput = {
      username: username,
      password: password,
    };
    setRePostBan(true);
    axios
      .post(url + "/customer/auth/login", loginCustomerInput)
      .then((res) => {
        console.log(res.headers);
        const accessToken = res.headers.authorization.split(" ")[1];
        const refreshToken = res.headers.refreshtoken.split(" ")[1];
        localStorage.setItem("mayo-Token", accessToken);
        localStorage.setItem("mayo-Refresh", refreshToken);
        const token = getToken();
        logIn(token);
      })
      .catch((err) => {
        console.log(err);
        setRePostBan(false);
        alert(err.response.data.message);
      });
  };

  const navigate = useNavigate();

  return (
    <Background>
      <Container>
        <LoginRole>
          <LoginCustomers>고객</LoginCustomers>
          <LoginChefes onClick={() => navigate("/loginChef")}>
            요리사
          </LoginChefes>
        </LoginRole>
        {/* <TitleBox>
          <Title>고객 로그인</Title>
        </TitleBox> */}
        <SNSLoginBox>
          <List>
            <SNSLoginButton>
              <img src="images/google.png" alt="구글 소셜로그인" />
            </SNSLoginButton>
          </List>
          <List>
            <SNSLoginButton>
              <img src="images/apple.png" alt="애플 소셜로그인" />
            </SNSLoginButton>
          </List>
        </SNSLoginBox>
        <InputForm id="c_loginForm" onSubmit={handleSubmit(onSubmit)}>
          <InputBox>
            <Label htmlFor="c_username">아이디</Label>
            <Input
              id="c_username"
              type="text"
              placeholder="아이디를 입력해주세요"
              {...register("username", {
                required: true,
                maxLength: 20,
                pattern: /^[A-Za-z0-9]*$/,
              })}
            ></Input>
          </InputBox>
          <InputBox>
            <Label htmlFor="c_password">비밀번호</Label>
            <Input
              id="c_password"
              type="password"
              placeholder="비밀번호를 입력해주세요"
              {...register("password", {
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
            로그인
          </SubmitButton>
        </InputForm>
        <AccountServices>
          <List>
            <RouteText onClick={() => navigate("/FindPwdNumberCustomer")}>
              비밀번호 찾기
            </RouteText>
          </List>
          |
          <List>
            <RouteText onClick={() => navigate("/FindIdNumberCustomer")}>
              아이디 찾기
            </RouteText>
          </List>
          |
          <List>
            <RouteText onClick={() => navigate("/SelectSignUp")}>
              회원가입
            </RouteText>
          </List>
        </AccountServices>
        {/* <ChefLoginRouteBox>
          <RouteText onClick={() => navigate("/loginChef")}>
            요리사 로그인
          </RouteText>
        </ChefLoginRouteBox> */}
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
    font-size: 28px;
    color: #fff;
    height: 48px;
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
  padding: 7.5px 17px;
`;

const Title = styled.div`
  font-family: var(--sds-typography-body-font-family);
  font-size: 36px;
  line-height: 48px;
  font-weight: 700;
  text-align: center;
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

const SNSLoginButton = styled.button`
  background-color: #fff;
  margin: 0;
  padding: 0;
  border: 0;
`;

const SNSLoginBox = styled.ul`
  display: flex;
  gap: 10px;
  margin: 0;
  align-items: center;
  justify-content: center;
  padding: 0;
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

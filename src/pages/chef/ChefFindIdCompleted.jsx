import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const ChefFindIdCompleted = () => {
  const navigate = useNavigate();
  return (
    <Background>
      <Container>
        <TitleBox>
          <Title>아이디 찾기 완료</Title>
          <TitleDesc>회원정보와 일치하는 아이디입니다.</TitleDesc>
        </TitleBox>
        <FindIdDataBox>
          <ShowDataId>skykkm0810</ShowDataId>
          <ShowDataCreated>가입일 : 2024-09</ShowDataCreated>
        </FindIdDataBox>
        <SubmitButton
          type="button"
          onClick={() => {
            navigate("/loginChef");
          }}
        >
          로그인
        </SubmitButton>
        <ChefLoginRouteBox>
          <RouteText onClick={() => navigate("/login")}>고객 로그인</RouteText>
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
  display: flex;
  width: 554px;
  margin: 0 auto;
  flex-direction: column;
  gap: 26px;
  background-color: #ffffff;
  padding: 65.5px 50px;
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

const TitleDesc = styled.p`
  text-align: center;
  font-size: 16px;
  line-height: 24px;
  margin: 0;
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

const FindIdDataBox = styled.div`
  border-top: 2px solid #fa7c15;
  border-bottom: 2px solid #fa7c15;
  padding: 58.5px 0;
`;
const ShowDataId = styled.div`
  text-align: center;
  padding: 8px 0;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  color: #000;
`;
const ShowDataCreated = styled.div`
  margin-top: 4px;
  text-align: center;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: rgba(142, 142, 142, 1);
`;

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Title } from "../components/Title";
import { useNavigate } from "react-router-dom";
import {
  PrivacyPolicyText,
  personalChefServiceText,
  PurchaseServiceText,
} from "../extraNeeds/FooterTexts";
export const TermsOfUse = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState(0);
  return (
    <>
      <Container>
        <Title fontsize={"26px"} title={"약관 및 정책"} />
        <ContentContainer>
          <ContainerTop>
            <ServiceTap
              tabOn={tab == 0 ? true : false}
              onClick={() => {
                setTab(0);
              }}
            >
              마이요리사(mayo) 개인셰프 서비스 이용약관
            </ServiceTap>
            <ServiceTap
              tabOn={tab == 1 ? true : false}
              onClick={() => {
                setTab(1);
              }}
            >
              mayo 구매·대여 대행 서비스 이용약관
            </ServiceTap>
          </ContainerTop>
          <ContainerMiddle>
            <TextBox>
              {tab == 0 ? personalChefServiceText : PurchaseServiceText}
            </TextBox>
          </ContainerMiddle>
        </ContentContainer>
      </Container>
    </>
  );
};

const Container = styled.div``;

const ContentContainer = styled.div`
  width: 1175px;
  margin: 0 auto;
  padding: 70px 0 100px;
  box-sizing: border-box;
`;
const ContainerTop = styled.div``;

const ServiceTap = styled.button`
  display: inline-block;
  width: 50%;
  height: 78px;
  border: 0;
  border-bottom: ${({ tabOn }) =>
    tabOn ? "5px solid #FA7C15" : "2px solid #000"};
  color: ${({ tabOn }) => (tabOn ? "#FA7C15" : " #000")};
  font-size: 22px;
  font-weight: ${({ tabOn }) => (tabOn ? "bold" : "medium")};
  background-color: transparent;
  padding: 0;
  box-sizing: border-box;
  cursor: pointer;
`;

const ContainerMiddle = styled.div`
  width: 100%;
  height: 677px;
  background-color: #fff3ea;
  padding: 30px 22px;
  box-sizing: border-box;
`;
const TextBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  overflow-y: auto;
  font-size: 18px;
  white-space: pre-wrap;
`;

const ContainerBottom = styled.div`
  width: 835px;
  height: 188px;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 20px 40px;
  gap: 15px;
`;

const Picture = styled.img`
  width: 188px;
  height: 188px;
`;

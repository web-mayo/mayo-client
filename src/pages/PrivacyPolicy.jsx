import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Title } from "../components/Title";
import { useNavigate } from "react-router-dom";
import {
  PrivacyPolicyText,
  personalChefServiceText,
  PurchaseServiceText,
} from "../extraNeeds/FooterTexts";
export const PrivacyPolicy = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState(0);
  return (
    <>
      <Container>
        <Title fontsize={"26px"} title={"개인정보처리 방침"} />
        <ContentContainer>{PrivacyPolicyText}</ContentContainer>
      </Container>
    </>
  );
};

const Container = styled.div``;

const ContentContainer = styled.div`
  width: 1102px;
  margin: 0 auto;
  padding: 100px 0;
  box-sizing: border-box;
  font-size: 18px;
  line-height: 32px;
  white-space: pre-wrap;
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

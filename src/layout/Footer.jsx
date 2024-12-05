import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
export const Footer = () => {
  const navigate = useNavigate();
  return (
    <FooterContainer>
      <Container>
        <InfoSection>
          <LogoImg src="/images/mainlogo.png"></LogoImg>
          <Info>전화상담 : 010-5697-5598</Info>
          <Info>이메일 : njh200205@cau.ac.kr</Info>
        </InfoSection>
        <Section>
          <SectionTitle>mayo</SectionTitle>
          <InfoBtn>mayo 메인</InfoBtn>
          <InfoBtn>mayo 이야기</InfoBtn>
        </Section>
        <Section>
          <SectionTitle>지원</SectionTitle>
          <InfoBtn>공지사항</InfoBtn>
          <InfoBtn>자주 묻는 질문</InfoBtn>
          <InfoBtn
            onClick={() => {
              navigate("/termsOfUse");
            }}
          >
            약관 및 정책
          </InfoBtn>
          <InfoBtn
            onClick={() => {
              navigate("/privacyPolicy");
            }}
          >
            개인정보처리방침
          </InfoBtn>
        </Section>
      </Container>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 90%;
  border-top: 1.5px solid #f5bf96;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10%;
  height: 30vh;
  padding-top: 7vh;
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-right: 35%;
`;
const LogoImg = styled.img`
  width: 80px;
  margin-bottom: 3vh;
`;
const Info = styled.div`
  font-size: 16px;
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const SectionTitle = styled.div`
  font-weight: 700;
  margin-bottom: 2vh;
`;
const InfoBtn = styled.div`
  cursor: pointer;
`;

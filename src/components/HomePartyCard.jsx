import React from "react";
import styled from "styled-components";

export const HomePartyCard = ({ onClick, bgColor, text, textColor }) => {
  return (
    <PartyCardContainer onClick={onClick}>
      <PartyStatus bgColor={bgColor} textColor={textColor}>
        {text}
      </PartyStatus>
      <PartyImg src="images/reserveDefault.jpeg"></PartyImg>
      <PartyDesc>
        <PartyDescText>홈파티 한 줄 소개</PartyDescText>
        <PartyDescText>00월 00일 요일 오후 00시</PartyDescText>
      </PartyDesc>
    </PartyCardContainer>
  );
};

export const HomePartyCardEnd = ({ onClick, bgColor, textColor }) => {
  return (
    <PartyCardContainer onClick={onClick}>
      <PartyStatus bgColor={bgColor} textColor={textColor}>
        파견 완료
      </PartyStatus>
      <PartyImg src="images/reserveDefault.jpeg"></PartyImg>
      <PartyDesc>
        <PartyDescText>홈파티 한 줄 소개</PartyDescText>
        <PartyDescText>00월 00일 요일 오후 00시</PartyDescText>
        <PartyButtonBox>
          <PartyDetailBtn>상세 보기</PartyDetailBtn>
          <PartyReviewBtn>후기 작성하기</PartyReviewBtn>
        </PartyButtonBox>
      </PartyDesc>
    </PartyCardContainer>
  );
};

const PartyCardContainer = styled.div`
  border-radius: 8px;
  width: 280px;
  cursor: pointer;
  box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.1);
`;
const PartyStatus = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({ textColor }) => (textColor ? textColor : "black")};
  padding: 7px 16px 7px 16px;
  display: flex;
  align-items: center;
  border-radius: 6px 6px 0px 0px;
  background-color: ${({ bgColor }) =>
    bgColor ? `${bgColor}` : "rgb(250, 124, 21)"};
  overflow: hidden;
  height: 30px;
`;
const PartyImg = styled.img`
  height: 280px;
  width: 280px;
  object-fit: cover;
`;

const PartyDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 10px 16px 15px 16px;
`;
const PartyDescText = styled.div`
  overflow: hidden;
  font-size: 16px;
  font-weight: 500;
`;
const PartyButtonBox = styled.div`
  display: flex;
  padding-top: 16px;
  width: 100%;
  gap: 5px;
  justify-content: center;
  & > button {
    color: white;
    font-weight: 600;
    border: 0;
    border-radius: 8px;
    width: 128px;
    height: 33px;
    font-size: 12px;
    line-height: 16px;
  }
`;
const PartyDetailBtn = styled.button`
  background-color: rgba(219, 174, 137, 1);
`;
const PartyReviewBtn = styled.button`
  background-color: rgba(250, 124, 21, 1);
`;

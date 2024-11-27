import React from "react";
import styled from "styled-components";
import moment from "moment";

export const HomePartyCard = ({
  onClick,
  info,
  scheduledAt,
  bgcolor,
  text,
  textColor,
}) => {
  return (
    <PartyCardContainer onClick={onClick}>
      <PartyStatus bgcolor={bgcolor} textcolor={textColor}>
        {text}
      </PartyStatus>
      <PartyImg src="images/reserveDefault.jpeg"></PartyImg>
      <PartyDesc>
        <PartyDescText>{info}</PartyDescText>
        <PartyDescText>{scheduledAt}</PartyDescText>
      </PartyDesc>
    </PartyCardContainer>
  );
};

export const HomePartyCardEnd = ({
  onClick,
  bgcolor,
  textcolor,
  info,
  partySchedule,
}) => {
  return (
    <PartyCardContainer onClick={onClick}>
      <PartyStatus bgcolor={"rgba(68, 68, 68, 1)"} textcolor={textcolor}>
        방문 완료
      </PartyStatus>
      <PartyImg src="images/reserveDefault.jpeg"></PartyImg>
      <PartyDesc>
        <PartyDescText>{info}</PartyDescText>
        <PartyDescText>
          {moment(partySchedule).format("MM월 DD일 dddd h a")}
        </PartyDescText>
        <PartyButtonBox>
          <PartyDetailBtn>상세 보기</PartyDetailBtn>
          <PartyReviewBtn>후기 작성하기</PartyReviewBtn>
        </PartyButtonBox>
      </PartyDesc>
    </PartyCardContainer>
  );
};

export const HomePartyCardMatchFinished = ({
  onClick,
  info,
  scheduledAt,
  bgcolor,
  text,
  textColor,
}) => {
  return (
    <PartyCardContainer onClick={onClick}>
      <PartyStatus bgcolor={bgcolor} textColor={textColor}>
        방문 완료
      </PartyStatus>
      <PartyImg src="images/reserveDefault.jpeg"></PartyImg>
      <PartyDesc>
        <PartyDescText>{info}</PartyDescText>
        <PartyDateLabel>[ 완료일 ]</PartyDateLabel>
        <PartyDescText>{scheduledAt}</PartyDescText>
      </PartyDesc>
    </PartyCardContainer>
  );
};

export const HomePartyCardNotSelected = ({
  onClick,
  bgcolor,
  chefCount,
  textcolor,
  info,
  partySchedule,
}) => {
  return (
    <PartyCardContainer onClick={onClick}>
      <PartyStatus bgcolor={bgcolor} textcolor={textcolor}>
        {chefCount > 0 ? (
          <>
            <ChefCount>{chefCount}명</ChefCount>의 요리사님이 신청해주셨어요!
          </>
        ) : (
          "아직 요리사님이 신청 안 하셨어요"
        )}
      </PartyStatus>
      <PartyImg src="images/reserveDefault.jpeg"></PartyImg>
      <PartyDesc>
        <PartyDescText>{info}</PartyDescText>
        <PartyDescText>
          {moment(partySchedule).format("MM월 DD일 dddd h a")}
        </PartyDescText>
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
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  color: ${({ textcolor }) => (textcolor ? textcolor : "black")};
  padding: 7px 16px;
  display: flex;
  align-items: center;
  border-radius: 6px 6px 0px 0px;
  background-color: ${({ bgcolor }) =>
    bgcolor ? `${bgcolor}` : "rgb(250, 124, 21)"};
  overflow: hidden;
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
    &[id="review"] {
      width: 100%;
    }
  }
`;
const PartyDetailBtn = styled.button`
  background-color: rgba(219, 174, 137, 1);
`;
const PartyReviewBtn = styled.button`
  background-color: rgba(250, 124, 21, 1);
`;

const PartySeeReview = styled.button`
  background-color: rgba(250, 124, 21, 1);
`;
const ChefCount = styled.span`
  color: red;
  font-weight: bold;
`;

const PartyDateLabel = styled.div`
  color: #8E8E8E;
  font-size: 14px;
  margin-top: 3px;
  margin-bottom: 3px;
`
import React from "react";
import styled from "styled-components";
import "moment/locale/ko";
import moment from "moment";
import { useNavigate } from "react-router-dom";

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
      <PartyImg src="/images/reserveDefault.jpeg"></PartyImg>
      <PartyDesc>
        <PartyDescText>{info}</PartyDescText>

        <PartyDescText>
          {moment(scheduledAt).format("MM월 DD일 dddd a h시")}
        </PartyDescText>
      </PartyDesc>
    </PartyCardContainer>
  );
};
export const HomePartyCardMatched = ({
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
      <PartyImg src="/images/reserveDefault.jpeg"></PartyImg>
      <PartyDesc>
        <PartyDescText>{info}</PartyDescText>
        <PartyDescText2>[ 완료일 ]</PartyDescText2>
        <PartyDescText>
          {moment(scheduledAt).format("MM월 DD일 dddd a h시")}
        </PartyDescText>
        <MatchedButton type="button" onClick={onClick}>
          결제 정보 확인하기
        </MatchedButton>
      </PartyDesc>
    </PartyCardContainer>
  );
};

export const HomePartyCardEnd = ({
  bgcolor,
  textcolor,
  info,
  partySchedule,
  id,
  func,
}) => {
  const navigate = useNavigate();
  return (
    <PartyCardContainer>
      <PartyStatus bgcolor={"rgba(68, 68, 68, 1)"} textcolor={textcolor}>
        방문 완료
      </PartyStatus>
      <PartyImg src="/images/reserveDefault.jpeg"></PartyImg>
      <PartyDesc>
        <PartyDescText>{info}</PartyDescText>
        <PartyDescText2>[ 완료일 ]</PartyDescText2>
        <PartyDescText>
          {moment(partySchedule).format("MM월 DD일 dddd a h시")}
        </PartyDescText>
        <PartyButtonBox>
          <PartyDetailBtn
            onClick={() => {
              func(id);
            }}
          >
            상세 보기
          </PartyDetailBtn>
          <PartyReviewBtn
            onClick={() => {
              navigate("/customerMatch/reviewpage/" + id);
            }}
          >
            후기 작성하기
          </PartyReviewBtn>
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
      <PartyStatus bgcolor="#444444" textcolor="#FFFFFF">
        방문 완료
      </PartyStatus>
      <PartyImg src="/images/reserveDefault.jpeg"></PartyImg>
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
      <PartyImg src="/images/reserveDefault.jpeg"></PartyImg>
      <PartyDesc>
        <PartyDescText>{info}</PartyDescText>
        <PartyDescText>
          {moment(partySchedule).format("MM월 DD일 dddd a h시")}
        </PartyDescText>
      </PartyDesc>
    </PartyCardContainer>
  );
};

const PartyCardContainer = styled.div`
  border-radius: 8px;
  width: 280px;
  cursor: ${({ onClick }) => (onClick ? "pointer" : "default")};
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
  gap: 10px;
  padding: 10px 16px 15px 16px;
`;
const PartyDescText = styled.div`
  overflow: hidden;
  font-size: 16px;
  font-weight: 500;
`;
const PartyDescText2 = styled.div`
  font-size: 14px;
  line-height: 16px;
  color: #8e8e8e;
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
  cursor: pointer;
`;
const PartyReviewBtn = styled.button`
  background-color: rgba(250, 124, 21, 1);
  cursor: pointer;
`;

const PartySeeReview = styled.button`
  background-color: rgba(250, 124, 21, 1);
`;
const ChefCount = styled.span`
  color: red;
  font-weight: bold;
`;

const PartyDateLabel = styled.div`
  color: #8e8e8e;
  font-size: 14px;
  margin-top: 3px;
  margin-bottom: 3px;
`;
const MatchedButton = styled.button`
  background-color: rgba(250, 124, 21, 1);
  height: 32px;
  font-size: 14px;
  border: 0;
  border-radius: 8px;
  color: white;
`;

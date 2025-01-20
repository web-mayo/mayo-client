import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { allowScroll } from "../modal/modal";
import { RequestRangeCheckBox } from "./RequestRangeCheckBox";
import {
  fecthChefPartyMatchWaitDetail,
  fetchChefPartyApplyAccept,
  fetchChefPartyApplyDetail,
  fetchChefPartyApplyReject,
  fetchChefPartyMatchedDetail,
  fetchChefPartyMatchFinishedDetail,
  fetchChefPartyReview,
} from "../apis/chefPartyApply";
import { listToString } from "../extraNeeds/listToString";
import { ReviewModal } from "../modal/ReviewModal";

export const Request = ({
  chefId,
  status,
  title,
  matchStatus,
  selectedId,
  setModal,
  prevScrollY,
}) => {
  const [requestData, setRequestData] = useState({});
  const [matchData, setMatchData] = useState({});
  const [isReview, setIsReview] = useState(false);
  const [partyReview, setPartyReview] = useState({});
  const [reviewModal, setReviewModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (status === "request") {
        const result = await fetchChefPartyApplyDetail(chefId, selectedId);
        setRequestData(result);
      } else if (status === "match") {
        if (matchStatus === "beforeMatch") {
          const result = await fecthChefPartyMatchWaitDetail(selectedId);
          setMatchData(result);
        } else if (matchStatus === "matched") {
          const result = await fetchChefPartyMatchedDetail(chefId, selectedId);
          setMatchData(result);
        } else if (matchStatus === "completed") {
          const result = await fetchChefPartyMatchFinishedDetail(selectedId);
          try {
            const reviewResult = await fetchChefPartyReview(
              parseInt(chefId),
              selectedId
            );
            setPartyReview(reviewResult);
            setIsReview(true);
          } catch (e) {// 후기 미작성의 경우
            //setIsReview(false);
            setIsReview(true); // 임시로
          }
          setMatchData(result);
        }
      }
    };
    fetchData();
  }, [selectedId, status, matchStatus]);

  const handleClose = () => {
    setModal(false);
    allowScroll(prevScrollY);
  };

  const handleRequestAccept = () => {
    fetchChefPartyApplyAccept(selectedId);
  };
  const handleRequestReject = () => {
    fetchChefPartyApplyReject(selectedId);
  };

  const viewReview = () => {
    setReviewModal(true);
  }

  if (status == "request") {
    return (
      <RequestContainer>
        <Title>
          <TitleText>{title}</TitleText>
          <TitleDate></TitleDate>
        </Title>
        <Content>
          <InfoItem>
            <InfoTitle>&#91;한 줄 소개&#93;</InfoTitle>
            <InfoText>{requestData.info || ""}</InfoText>
          </InfoItem>
          <InfoItem>
            <InfoTitle>&#91;일시&#93;</InfoTitle>
            <InfoText>{requestData.scheduleAt?.substr(0, 10) || ""}</InfoText>
          </InfoItem>
          <InfoItem>
            <InfoTitle>&#91;인원수&#93;</InfoTitle>
            <InfoText>
              어른 {requestData.adult || "0"}명 / 어린이{" "}
              {requestData.child || "0"}명{" "}
            </InfoText>
          </InfoItem>
          <InfoItem>
            <InfoTitle>&#91;홈파티 예산&#93;</InfoTitle>
            <InfoText>{requestData.budget}</InfoText>
          </InfoItem>

          <InfoItem>
            <InfoTitle>&#91;요청 서비스 범위&#93;</InfoTitle>
            <CheckList>
              <RequestRangeCheckBox serviceList={requestData.serviceList} />
            </CheckList>
          </InfoItem>
          <InfoItem>
            <InfoTitle>&#91;상세 주소&#93;</InfoTitle>
            <InfoText>{requestData.address || ""}</InfoText>
          </InfoItem>
          <InfoItem>
            <InfoTitle>&#91;화구 종류&#93;</InfoTitle>
            <InfoText>{requestData.burnerType || ""}</InfoText>
          </InfoItem>
          <InfoItem>
            <InfoTitle>&#91;주방 사진&#93;</InfoTitle>
            {requestData.kitchenImages?.map((image) => (
              <ContentImage
                id={image.kitchenImagesId}
                src={image.imageName}
              ></ContentImage>
            ))}
          </InfoItem>
          <InfoItem>
            <InfoTitle>&#91;조리 기구 및 도구&#93;</InfoTitle>
            <InfoText>{listToString(requestData.kitchenTools) || ""}</InfoText>
          </InfoItem>
          <InfoItem>
            <InfoTitle>&#91;주방 관련 요청사항&#93;</InfoTitle>
            <InfoText>{requestData.kitchenRequirements || ""}</InfoText>
          </InfoItem>
          <InfoItem>
            <InfoTitle>&#91;주방 관련 특이사항&#93;</InfoTitle>
            <InfoText>{requestData.kitchenConsideration || ""}</InfoText>
          </InfoItem>
          <InfoItem>
            <InfoTitle>&#91;고객 요청사항&#93;</InfoTitle>
            <InfoTextArea readOnly className="textarea">
              {requestData.comment}
            </InfoTextArea>
          </InfoItem>
          <RequestBtns>
            <AcceptBtn onClick={() => handleRequestAccept()}>
              요청 수락
            </AcceptBtn>
            <RejectBtn onClick={() => handleRequestReject()}>
              요청 거절
            </RejectBtn>
          </RequestBtns>
          <CloseBtn onClick={handleClose}>닫기</CloseBtn>
        </Content>
      </RequestContainer>
    );
  } else if (status == "match") {
    return (
      <>
      {reviewModal && <ReviewModal onClose={() => setReviewModal(false)} />}
      <RequestContainer>
        <Title>
          <TitleText>{matchData.info || ""}</TitleText>
        </Title>
        <Content>
          <Section>
            <ImageWrapper>
              <StatusLabel>예약 확정</StatusLabel>
              <ContentImage src="images/reserveDefault.jpeg" />
            </ImageWrapper>
            <InfoList>
              <InfoItemContainer>
                <InfoColumn>
                  <InfoItem>
                    <InfoTitle>[ 일시 ]</InfoTitle>
                    <InfoText>
                      {matchData.scheduleAt?.substr(0, 10) || ""}
                    </InfoText>
                  </InfoItem>
                  <InfoItem>
                    <InfoTitle>[ 인원 수 ]</InfoTitle>
                    <InfoText>
                      어른 {matchData.adult}명 / 어린이 {matchData.child}명
                    </InfoText>
                  </InfoItem>
                  <InfoItem>
                    <InfoTitle>[ 홈파티 예산 ]</InfoTitle>
                    <InfoText>{matchData.budget || ""}</InfoText>
                  </InfoItem>
                </InfoColumn>
                <InfoColumn>
                  <InfoItem>
                    <InfoTitle>[ 주방 주소 ]</InfoTitle>
                    <InfoText></InfoText>
                  </InfoItem>
                  <InfoItem>
                    <InfoTitle>[ 요청 서비스 범위 ]</InfoTitle>
                    <CheckList>
                      <RequestRangeCheckBox
                        serviceList={matchData.serviceList || ""}
                      />
                    </CheckList>
                  </InfoItem>
                </InfoColumn>
                <InfoColumn>
                  {isReview ? (
                    <InfoReviewBtn isReview={isReview} onClick={()=>viewReview()}>
                      작성된 후기 보기
                    </InfoReviewBtn>
                  ) : (
                    <InfoReviewBtn isReview={isReview}>
                      후기 미작성
                    </InfoReviewBtn>
                  )}
                </InfoColumn>
              </InfoItemContainer>
              <InfoItem>
                <InfoTitle>[ 마이 요리사에게 남길 말씀 ]</InfoTitle>
                <InfoTextArea id="match" readOnly>
                  {matchData.comment || ""}
                </InfoTextArea>
              </InfoItem>
            </InfoList>
          </Section>
          <Divider />
          <Section>
            <ImageWrapper>
              <ContentImage src="images/kitchenProfile.jpeg" />
            </ImageWrapper>
            <InfoList>
              <InfoTitleMain>[ 주방 프로필 ]</InfoTitleMain>
              <InfoItemContainer>
                <InfoColumn>
                  <InfoItem>
                    <InfoTitle>[ 주소 ]</InfoTitle>
                    <InfoText>{matchData.address || ""}</InfoText>
                  </InfoItem>
                  <InfoItem>
                    <InfoTitle>[ 상세 주소 ]</InfoTitle>
                    <InfoText>OO아파트 000호</InfoText>
                  </InfoItem>
                  <InfoItem>
                    <InfoTitle>[ 화구 종류 ]</InfoTitle>
                    <InfoText>{matchData.burnerType || ""}</InfoText>
                  </InfoItem>
                </InfoColumn>
                <InfoColumn>
                  <InfoItem>
                    <InfoTitle>[ 조리 기구 및 도구 ]</InfoTitle>
                    <InfoText>
                      {listToString(matchData?.kitchenTools) || ""}
                    </InfoText>
                  </InfoItem>
                  <InfoItem>
                    <InfoTitle>[ 주방 관련 요청사항 ]</InfoTitle>
                    <InfoText>{matchData.kitchenRequirements || ""}</InfoText>
                  </InfoItem>
                  <InfoItem>
                    <InfoTitle>[ 주방 관련 특이사항 ]</InfoTitle>
                    <InfoText>{matchData.kitchenConsideration || ""}</InfoText>
                  </InfoItem>
                </InfoColumn>
              </InfoItemContainer>
            </InfoList>
          </Section>
          <CloseBtn onClick={handleClose}>닫기</CloseBtn>
        </Content>
      </RequestContainer>
      </>
    ); 
  }
};

const RequestContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  padding-bottom: 30px;
  overflow-x: hidden;
`;

const Title = styled.div`
  background-color: ${(props) => props.theme.sub};
  padding: 13px;
  width: 100%;
  text-align: center;
  margin-bottom: 22px;
`;

const TitleText = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

const TitleDate = styled.div`
  color: #8e8e8e;
  font-size: 14px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 16px;
`;

const Section = styled.div`
  display: flex;
  gap: 18px;
  align-items: flex-start;
`;

const ImageWrapper = styled.div`
  width: 250px;
  position: relative;
`;

const StatusLabel = styled.div`
  display: flex;
  align-items: center;
  padding-left: 14px;
  color: white;
  font-size: 14px;
  background-color: ${(props) => props.theme.main};
  border-radius: 8px 8px 0px 0px;
  height: 30px;
`;

const ContentImage = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 0px 0px 8px 8px;
  object-fit: cover;
`;

const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding-top: 20px;
`;

const InfoItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 80px;
`;

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InfoTitle = styled.div`
  font-size: 13px;
  color: #8e8e8e;
  font-weight: 400;
`;

const InfoTitleMain = styled(InfoTitle)`
  font-weight: 700;
  color: black;
  margin-bottom: 10px;
`;

const InfoText = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

const CheckList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const InfoTextArea = styled.textarea`
  width: 91%;
  font-size: 15px;
  resize: none;

  &[id="match"] {
    width: 100%;
    height: 60px;
  }
`;

const InfoReviewBtn = styled.button`
  font-size: 14px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 33px;
  color: white;
  white-space: nowrap;
  background-color: ${({ isReview }) => (isReview ? "#FA7C15" : "#4B4B4B")};
  border: none;
  border-radius: 8px;
  cursor: ${({ isReview }) => (isReview ? "pointer" : "default")};
`;

const Divider = styled.div`
  width: 100%;
  margin: 12px 0;
  border: solid 1.1px #b65c134d;
`;

const RequestBtns = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  width: 100%;
  gap: 2%;
`;
const AcceptBtn = styled.button`
  color: white;
  width: 64%;
  height: 4vh;
  background-color: ${(props) => props.theme.main};
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;
const RejectBtn = styled.button`
  color: white;
  width: 34%;
  background-color: #ee1101;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;

const CloseBtn = styled.button`
  font-size: 13px;
  width: 100px;
  align-self: center;
  height: 3vh;
  background-color: ${(props) => props.theme.sub};
  border: none;
  cursor: pointer;
  border-radius: 8px;
  padding: 5px 10px;
`;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getMatchedPartyDetail } from "../apis/CustomerPartyCtrler";
import moment from "moment";

const bgColorByStatus = (status, chefCount) => {
  switch (status) {
    case "ACCEPTED":
      return "rgba(250, 124, 21, 1)";
    case "CHEF_NOT_SELECTED":
      if (chefCount > 0) {
        return "rgba(255, 243, 234, 1)";
      } else {
        return "rgba(217, 217, 217, 1)";
      }
    case "COMPLETED":
      return "rgba(250, 124, 21, 1)";
    case "WAITING":
      return "rgba(255, 243, 234, 1)";
    default:
      return "rgba(68, 68, 68, 1)";
  }
};
const colorByStatus = (status) => {
  switch (status) {
    case "ACCEPTED":
      return "#fff";
    case "COMPLETED":
      return "#fff";
    case "FINISH":
      return "#fff";
    default:
      return "black";
  }
};

export const HomePartyInfo = (partyId, chefCount) => {
  const [partyData, setPartyData] = useState({});
  // homePartyData
  const getPartyInfo = async (pId) => {
    const response = await getMatchedPartyDetail(pId);
    if (response && response.back) {
      setPartyData(response.back);
    }
  };
  console.log(partyData?.kitchen?.kitchenImageList);
  useEffect(() => {
    if (partyId) {
      getPartyInfo(partyId);
    }
  }, [partyId]);
  useEffect(() => {
    console.log(partyData);
  }, [partyData]);
  // checkBox checked
  const checkOrNot = (checkValue) => {
    if (partyData) {
      const list = partyData.partyServices;
      if (list && list.includes(checkValue)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  return (
    <Container>
      <ContainerHead>홈파티 한 줄 소개</ContainerHead>
      <ContainerBody>
        <ContentsBox>
          <PartyPart>
            <ImageSection>
              <ImgBox
                src={
                  partyData && partyData.kitchen?.kitchenImagesList
                    ? "https://" + partyData.kitchen?.kitchenImagesList[0]
                    : `/images/food.png`
                }
              ></ImgBox>
              <StatusTags
                bgstatus={partyData.partyStatus}
                chefcount={chefCount}
                colorStatus={partyData.partyStatus}
              >
                {partyData.partyStatus == "CHEF_NOT_SELECTED" &&
                  chefCount > 0 &&
                  chefCount + "명의 요리사님이 신청해주셨어요!"}

                {partyData.partyStatus == "CHEF_NOT_SELECTED" &&
                  chefCount == 0 &&
                  "아직 요리사님이 신청하지 않았어요."}
                {partyData.partyStatus == "WAITING" && "요청 완료"}
                {partyData.partyStatus == "COMPLETED" && "예약 확정"}
                {partyData.partyStatus == "FINISH" && "방문 완료"}
                {partyData.partyStatus == "ACCEPTED" && "결제 대기"}
              </StatusTags>
            </ImageSection>
            <DescSection>
              <DescTop>
                <TopLeft>
                  <DescFormat>
                    <Dtitle>[ 일시 ]</Dtitle>
                    <Dcontents>
                      {partyData.partySchedule
                        ? moment(partyData.partySchedule).format(
                            "YYYY년 MM월 DD일 hh:mm"
                          )
                        : " 000년 00월 00일 00:00"}
                    </Dcontents>
                  </DescFormat>
                  <DescFormat>
                    <Dtitle>[ 인원 수 ] </Dtitle>
                    <Dcontents>
                      어른 {partyData.adultCount ? partyData.adultCount : 0}명 /
                      어린이
                      {partyData.childCount ? partyData.childCount : 0}명
                    </Dcontents>
                  </DescFormat>
                  <DescFormat>
                    <Dtitle>[ 홈파티 예산 ]</Dtitle>
                    <Dcontents>
                      {partyData.budget ? partyData.budget : 0} 원
                    </Dcontents>
                  </DescFormat>
                </TopLeft>
                <TopRight>
                  <DescFormat>
                    <Dtitle>[ 주방 주소 ]</Dtitle>
                    <Dcontents>
                      <div>{partyData.kitchen?.address}</div>
                      <div>{partyData.kitchen?.addressSub}</div>
                    </Dcontents>
                  </DescFormat>
                  <DescFormat>
                    <Dtitle>[ 요청 서비스 범위 ]</Dtitle>
                    <Dcontents>
                      <RangeBox>
                        <CheckBox
                          type="checkbox"
                          value={"COURSE_PLANNING"}
                          checked={checkOrNot("COURSE_PLANNING")}
                          disabled
                        ></CheckBox>
                        <RangeText>코스 구성</RangeText>
                      </RangeBox>
                      <RangeBox>
                        <CheckBox
                          type="checkbox"
                          value={"INGREDIENT_SELECTION"}
                          checked={checkOrNot("INGREDIENT_SELECTION")}
                          disabled
                        ></CheckBox>
                        <RangeText>재료 선정</RangeText>
                      </RangeBox>
                      <RangeBox>
                        <CheckBox
                          type="checkbox"
                          value={"INGREDIENT_PURCHASE"}
                          checked={checkOrNot("INGREDIENT_PURCHASE")}
                          disabled
                        ></CheckBox>
                        <RangeText>재료 구입</RangeText>
                      </RangeBox>
                      <RangeBox>
                        <CheckBox
                          type="checkbox"
                          value={"CLEANUP"}
                          checked={checkOrNot("CLEANUP")}
                          disabled
                        ></CheckBox>
                        <RangeText>뒷정리</RangeText>
                      </RangeBox>
                    </Dcontents>
                  </DescFormat>
                </TopRight>
              </DescTop>
              <DescBottom>
                <DescFormat>
                  <Dtitle>[ 마이요리사에게 남길 말씀 ]</Dtitle>
                  <Dcontents>
                    <TextField
                      readOnly
                      value={
                        partyData.partyComment
                          ? partyData.partyComment
                          : "남기신 말이 없습니다"
                      }
                    ></TextField>
                  </Dcontents>
                </DescFormat>
              </DescBottom>
            </DescSection>
          </PartyPart>
          {partyData && partyData.chef?.chefName && (
            <ChefPart>
              <ChefImgBox>
                <ChefImg src="/images/chefImage.png"></ChefImg>
              </ChefImgBox>
              <ChefProfile>
                <NameBox>
                  <Name>{partyData.chef?.chefName} 셰프</Name>
                  <Tags>
                    {partyData.chef?.chefInfoRegion && (
                      <Tag>{partyData.chef?.chefInfoRegion}</Tag>
                    )}
                    {/* <Tag>기업행사</Tag>
                    <Tag>이탈리안</Tag> */}
                  </Tags>
                </NameBox>
                <CareerBox>
                  <DescFormat>
                    <Dtitle>[ 대표경력 ]</Dtitle>
                    <Dcontents>{partyData.chef?.chefInfoExperience}</Dcontents>
                  </DescFormat>
                  <DescFormat>
                    <Dtitle>[ 활동 연수 ]</Dtitle>
                    <Dcontents>{partyData.chef?.chefDescription}</Dcontents>
                  </DescFormat>
                  <DescFormat>
                    <Dtitle>[ 한 줄 소개 ]</Dtitle>
                    <Dcontents>{partyData.chef?.chefInfoIntroduce}</Dcontents>
                  </DescFormat>
                </CareerBox>
                <ServiceBox>
                  <DescFormat>
                    <Dtitle>[ 최소 서비스 시간 ]</Dtitle>
                    <Dcontents>3시간</Dcontents>
                  </DescFormat>
                  <DescFormat>
                    <Dtitle>[ 희망 시급 ]</Dtitle>
                    <Dcontents>30,000원</Dcontents>
                  </DescFormat>
                  <DescFormat>
                    <Dtitle>[ 서비스 가능 범위 ]</Dtitle>
                    <Dcontents>
                      <RangeBox>
                        <CheckBox
                          type="checkbox"
                          value={"COURSE_PLANNING"}
                          checked={checkOrNot("COURSE_PLANNING")}
                          disabled
                        ></CheckBox>
                        <RangeText>코스 구성</RangeText>
                      </RangeBox>
                      <RangeBox>
                        <CheckBox
                          type="checkbox"
                          value={"INGREDIENT_SELECTION"}
                          checked={checkOrNot("INGREDIENT_SELECTION")}
                          disabled
                        ></CheckBox>
                        <RangeText>재료 선정</RangeText>
                      </RangeBox>
                      <RangeBox>
                        <CheckBox
                          type="checkbox"
                          value={"INGREDIENT_PURCHASE"}
                          checked={checkOrNot("INGREDIENT_PURCHASE")}
                          disabled
                        ></CheckBox>
                        <RangeText>재료 구입</RangeText>
                      </RangeBox>
                      <RangeBox>
                        <CheckBox
                          type="checkbox"
                          value={"CLEANUP"}
                          checked={checkOrNot("CLEANUP")}
                          disabled
                        ></CheckBox>
                        <RangeText>뒷정리</RangeText>
                      </RangeBox>
                    </Dcontents>
                  </DescFormat>
                </ServiceBox>
              </ChefProfile>
            </ChefPart>
          )}
        </ContentsBox>
      </ContainerBody>
    </Container>
  );
};
const Container = styled.div`
  margin: 0 auto;
  border: 2px solid rgba(217, 217, 217, 1);
  border-radius: 10px;
`;
const ContainerHead = styled.div`
  background-color: rgba(255, 243, 234, 1);
  padding: 16px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
`;
const ContainerBody = styled.div`
  padding: 0 40px;
  background-color: #ffffff;
`;
const ContentsBox = styled.div`
  padding-top: 40px;
  padding-bottom: 20px;
`;
const PartyPart = styled.div`
  display: flex;
  gap: 60px;
  padding: 0 18px 20px;
`;
const ImageSection = styled.div`
  width: 260px;
  height: 280px;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
`;
const ImgBox = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StatusTags = styled.div`
  width: 100%;
  font-size: 12px;
  height: 30px;
  text-indent: 16px;
  display: flex;
  align-items: center;
  background-color: ${({ bgstatus, chefcount }) =>
    bgstatus && bgColorByStatus(bgstatus, chefcount)};
  color: ${({ colorStatus }) => colorStatus && colorByStatus(colorStatus)};
  position: absolute;
  top: 0;
  left: 0;
`;
const DescSection = styled.div``;
const DescTop = styled.div`
  display: flex;
  gap: 50px;
`;
const TopLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const TopRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const DescBottom = styled.div`
  width: 100%;
`;
const DescFormat = styled.div``;
const Dtitle = styled.div`
  color: rgba(142, 142, 142, 1);
  font-size: 12px;
  line-height: 16px;
`;
const Dcontents = styled.div`
  margin-top: 8px;
  font-size: 16px;
`;
const RangeBox = styled.div`
  display: flex;
  font-weight: 500;
  padding-top: 3px;
`;

const CheckBox = styled.input`
  width: 17px;
  height: 17px;
  border: 1.5px solid;
  border-radius: 6px;
`;

const RangeText = styled.div`
  padding-left: 10px;
`;
const TextField = styled.textarea`
  width: calc(100% - 32px);
  padding: 12px 16px;
  border-radius: 8px;
  height: 48px;
  resize: none;
`;
const ChefPart = styled.div`
  display: flex;
  gap: 40px;
  padding: 20px 18px 0;
  border-top: 2px solid rgba(182, 92, 19, 0.3);
`;
const ChefImgBox = styled.div`
  width: 110px;
  height: 110px;
  background-color: rgba(182, 92, 19, 0.3);
  border-radius: 8px;
  overflow: hidden;
`;
const ChefImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const ChefProfile = styled.div``;
const NameBox = styled.div`
  display: flex;
  gap: 40px;
`;
const Name = styled.div`
  font-weight: 700;
  font-size: 18px;
`;
const Tags = styled.div`
  display: flex;
  gap: 8px;
`;
const Tag = styled.div`
  font-size: 10px;
  text-align: center;
  padding: 6px 9px;
  border: 1px solid rgba(182, 92, 19, 0.5);
  border-radius: 18px;
  color: rgba(182, 92, 19, 0.5);
`;
const CareerBox = styled.div`
  padding-top: 8px;
  display: flex;
  gap: 60px;
  & > div {
    position: relative;
  }
  & > div::after {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    right: -30px;

    transform: translateY(-50%);
    width: 1px;
    height: 22px;
    background-color: rgba(179, 179, 179, 1);
  }
  & > div:last-child:after {
    content: "";
    display: inline;
    width: 0;
    height: 0;
  }
  & > div > div:last-child {
    margin-top: 4px;
  }
`;
const ServiceBox = styled.div`
  padding-top: 8px;
  display: flex;
  gap: 60px;
  & > div {
    position: relative;
  }
  & > div::after {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    right: -30px;

    transform: translateY(-50%);
    width: 1px;
    height: 22px;
    background-color: rgba(179, 179, 179, 1);
  }
  & > div:last-child:after {
    content: "";
    display: inline;
    width: 0;
    height: 0;
  }
  & > div:last-child > div:last-child {
    display: flex;
    gap: 10px;
  }
  & > div > div:last-child {
    margin-top: 4px;
  }
`;

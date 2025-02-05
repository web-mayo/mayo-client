import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Title } from "../../components/Title";
import { HomePartyCardEnd } from "../../components/HomePartyCard";
import { useNavigate } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import moment from "moment";
import { useForm } from "react-hook-form";
import {
  getFinishedPartyList,
  getFinishedPartyWithoutReviewList,
} from "../../apis/CustomerPartyCtrler";
import { isLoggined } from "../../token";
import { GetPartyReviewList } from "../../apis/CustomerPartyReviewCtlr";
import { makeReviewArray } from "../../extraNeeds/funcs";
import { ReviewEnumToText, paginationCounter } from "../../extraNeeds/funcs";
import { HomePartyInfo } from "../../modal/HomePartyInfo";
import { Dialog } from "@mui/material";
export const CustomerHistory = () => {
  const navigate = useNavigate();
  const [writtenReview, setWrittenReview] = useState(false);
  const [reviewArray, setReviewArray] = useState([]);
  const [noReviewArray, setNoReviewArray] = useState([]);
  const [finishedArray, setFinishedArray] = useState([]);
  const [partyId, setPartyId] = useState(0);
  const [partyDetailOpen, setPartyDetailOpen] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  // hook form
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();

  // modal
  const partyModalSwitch = () => {
    if (partyDetailOpen) {
      setPartyDetailOpen(false);
    } else {
      setPartyDetailOpen(true);
    }
  };
  // 상세보기
  const [partyDetailId, setPartyDetailId] = useState(0);
  const openPartyDetail = (partyId) => {
    setPartyDetailId(partyId);
    partyModalSwitch();
  };
  // checkBox checked
  const checkOrNot = (checkValue, partyInfo) => {
    if (partyInfo) {
      const list = partyInfo.serviceName;
      if (list && list.includes(checkValue)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };
  // pagination color change
  const theme = {
    "& .Mui-selected": {
      bgcolor: "rgba(250, 124, 21, 1) !Important",
      color: "#ffffff !Important",
    },
  };
  const handleReviewClick = (id) => {
    if (id) {
      navigate("/customerMatch/reviewpage/" + id);
    }
  };
  // 리스트 불러오기
  const getPartyLists = async (page) => {
    var filterInput = {
      startDate: moment(getValues("startDate")).format("YYYYMMDD"),
      endDate: moment(getValues("endDate")).format("YYYYMMDD"),
      page: page ? page : 1,
    };
    const getFinishedList = await getFinishedPartyList(filterInput);
    console.log(getFinishedList);
    setPageNumber(paginationCounter(getFinishedList.back.count, 8));
    setFinishedArray(getFinishedList.back.homePartyFinishList);
  };
  const noReviewPartyList = async () => {
    const getNoReviewList = await getFinishedPartyWithoutReviewList();
    setNoReviewArray(getNoReviewList.back);
  };
  const getReviewLists = async () => {
    const reviewRes = await GetPartyReviewList();
    if (reviewRes.call) {
      var lists = reviewRes?.back.result;
      setReviewArray(makeReviewArray(lists));
    }
  };
  useEffect(() => {
    setValue("startDate", moment("2024-06-30").format("YYYY-MM-DD"));
    setValue("endDate", moment().add(1, "M").format("YYYY-MM-DD"));
    if (isLoggined) {
      getPartyLists();
      getReviewLists();
      noReviewPartyList();
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Container>
        <Title title={"이용 완료 내역"} />
        <HistoryContainer>
          <DurationFilter>
            이용 기간 설정
            <StartInput>
              <input
                type="date"
                {...register("startDate", {
                  onChange: (e) => getPartyLists(),
                })}
              />
            </StartInput>
            ~
            <EndInput>
              <input
                type="date"
                {...register("endDate", {
                  onChange: (e) => getPartyLists(),
                })}
              />
            </EndInput>
          </DurationFilter>
          <EndListBox>
            {/* card */}
            {finishedArray && finishedArray.length === 0 && (
              <NoReview>이용한 내역이 없습니다.</NoReview>
            )}
            {finishedArray &&
              finishedArray.length > 0 &&
              finishedArray.map((party) => (
                <HomePartyCardEnd
                  key={"finish - " + party.id}
                  func={openPartyDetail}
                  id={party.id}
                  textcolor={`white`}
                  info={party.partyInfo}
                  partySchedule={party.partySchedule}
                />
              ))}
          </EndListBox>
          <PaginationBox>
            <Pagination
              onChange={(e, page) => {
                getPartyLists(page);
              }}
              showLastButton={true}
              count={pageNumber}
              shape="rounded"
              sx={theme}
            />
          </PaginationBox>
          <GoToMatchMain>
            <GoToMatchBtn
              onClick={() => {
                navigate("/customerMatch");
              }}
            >
              매칭 내역 메인으로
            </GoToMatchBtn>
          </GoToMatchMain>
        </HistoryContainer>
        <ReviewContainer>
          <Title
            backgroundcolor={"white"}
            title={"마요 요리사 서비스 평가를 해주세요."}
            subTitle={
              "고객님 이용은 만족되셨을까요? 소중한 후기를 남겨주시면 마요 서비스에 도움이 됩니다."
            }
          />
          <SubtitleBox>
            <ReviewOptionNone
              active={writtenReview}
              onClick={() => setWrittenReview(false)}
            >
              후기 미작성
            </ReviewOptionNone>
            <ReviewOptionWritten
              active={writtenReview}
              onClick={() => setWrittenReview(true)}
            >
              작성한 후기
            </ReviewOptionWritten>
          </SubtitleBox>
          <ReviewContent>
            <ReviewInnerContent>
              {!writtenReview && noReviewArray.length === 0 && (
                <NoReview>이용한 내역이 없습니다.</NoReview>
              )}
              {!writtenReview &&
                noReviewArray &&
                noReviewArray.map((arr, index) => (
                  <ReviewBox key={"noReviewBox - " + index}>
                    <ReviewTop>
                      <DayBox>
                        <UseDay>이용 일시</UseDay>
                        <DayText>
                          |{" "}
                          {moment(arr.partySchedule).format("YYYY년 MM월 DD일")}
                        </DayText>
                      </DayBox>
                      <Button
                        onClick={() => {
                          handleReviewClick(arr.customerHomePartyId);
                        }}
                      >
                        후기 작성하기
                      </Button>
                    </ReviewTop>
                    <ReviewBottom>
                      <NameContainer>
                        <Name>{arr.partyInfo}</Name>
                      </NameContainer>
                      <ChefProfileContainer>
                        <Image src="/images/chefImage.png"></Image>
                        <ChefExplain>
                          <NameText>{arr.chefName}</NameText>
                          <Career>
                            <p>[ 대표 경력 ]</p>
                            <div>{arr.chefInfoExperience}</div>
                          </Career>
                          <Introduce>
                            <p>[ 한 줄 소개 ]</p>
                            <div>{arr.chefInfoIntroduce}</div>
                          </Introduce>
                        </ChefExplain>
                      </ChefProfileContainer>
                      <RequestContainer>
                        <Container7>
                          <Inform>[ 요청 서비스 범위 ]</Inform>
                          <RangeBox>
                            <CheckBox
                              type="checkbox"
                              value={"COURSE_PLANNING"}
                              checked={checkOrNot("COURSE_PLANNING", arr)}
                              disabled
                            ></CheckBox>
                            <RangeText>코스 구성</RangeText>
                          </RangeBox>
                          <RangeBox>
                            <CheckBox
                              type="checkbox"
                              value={"INGREDIENT_SELECTION"}
                              checked={checkOrNot("INGREDIENT_SELECTION", arr)}
                              disabled
                            ></CheckBox>
                            <RangeText>재료 선정</RangeText>
                          </RangeBox>
                          <RangeBox>
                            <CheckBox
                              type="checkbox"
                              value={"INGREDIENT_PURCHASE"}
                              checked={checkOrNot("INGREDIENT_PURCHASE", arr)}
                              disabled
                            ></CheckBox>
                            <RangeText>재료 구입</RangeText>
                          </RangeBox>
                          <RangeBox>
                            <CheckBox
                              type="checkbox"
                              value={"CLEANUP"}
                              checked={checkOrNot("CLEANUP", arr)}
                              disabled
                            ></CheckBox>
                            <RangeText>뒷정리</RangeText>
                          </RangeBox>
                        </Container7>
                      </RequestContainer>
                    </ReviewBottom>
                  </ReviewBox>
                ))}
              {writtenReview &&
                reviewArray &&
                reviewArray.map((arr, index) => (
                  <ReviewBox key={"reviewBox - " + index}>
                    <ReviewTop>
                      <DayBox>
                        <UseDay>작성 일시</UseDay>
                        <DayText>| {arr.date}</DayText>
                      </DayBox>
                    </ReviewTop>
                    <ReviewListBox>
                      {arr.reviews &&
                        arr.reviews.map((review, index) => (
                          <ReviewCard key={"review - " + index}>
                            <CardTop>
                              <ChefName>
                                <span>{review.chefName} 셰프</span> 후기
                              </ChefName>
                              <PartyDetail
                                onClick={() => {
                                  setPartyId(review.homePartyId);
                                  setPartyDetailOpen(true);
                                }}
                              >
                                홈파티 상세
                              </PartyDetail>
                            </CardTop>
                            <Desc>{review.reviewContent}</Desc>
                            <Tags>
                              <MainTag>
                                {ReviewEnumToText(
                                  "service",
                                  review.serviceReason[0]
                                )}
                              </MainTag>
                              <SubTag>
                                +{review.serviceReason.length - 1}
                              </SubTag>
                            </Tags>
                          </ReviewCard>
                        ))}
                    </ReviewListBox>
                  </ReviewBox>
                ))}
              {writtenReview && !reviewArray && (
                <NoReview>작성된 리뷰가 없습니다.</NoReview>
              )}
            </ReviewInnerContent>
          </ReviewContent>
        </ReviewContainer>
        <Dialog
          maxWidth="lg"
          children={HomePartyInfo(partyDetailId)}
          open={partyDetailOpen}
          onClose={partyModalSwitch}
        ></Dialog>
      </Container>
    </>
  );
};
const MainTag = styled.div`
  display: inline-block;
  padding: 0 7px;
  height: 20px;
  background-color: rgba(182, 92, 19, 0.3);
  font-size: 12px;
  line-height: 20px;
  border-radius: 2px;
`;
const SubTag = styled.div`
  margin-left: 5px;
  padding: 0 7px;
  height: 20px;
  display: inline-block;
  background-color: rgba(182, 92, 19, 0.3);
  font-size: 12px;
  line-height: 20px;
  border-radius: 2px;
`;

const ChefName = styled.div`
  display: flex;
  font-size: 14px;
  align-items: end;
  & > span {
    font-size: 18px;
    font-weight: 700;
    margin-right: 10px;
  }
`;
const PartyDetail = styled.button`
  width: 111px;
  height: 26px;
  background-color: transparent;
  color: rgba(182, 92, 19, 0.5);
  border: 1px solid rgba(182, 92, 19, 0.3);
  border-radius: 5px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;
const ReviewListBox = styled.div`
  display: flex;
  gap: 8px;
`;
const ReviewCard = styled.div`
  border: 2px solid rgba(182, 92, 19, 0.3);
  border-radius: 8px;
  width: 355px;
  height: 168px;
  padding: 28.5px 34.5px;
  box-sizing: border-box;
`;
const CardTop = styled.div`
  width: 100%;
  height: 26px;
  display: flex;
  justify-content: space-between;
`;
const Desc = styled.div`
  margin-top: 15px;
  height: 40px;
  font-size: 14px;
  line-height: 20px;
  display: -webkit-box;
  /* 줄 갯수 */
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
const Tags = styled.div`
  text-align: right;
  height: 27px;
  padding: 3.5px 2px;
  box-sizing: border-box;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 33px;
`;
const DurationFilter = styled.div`
  height: 58px;
  display: flex;
  padding-left: 8px;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
`;
const StartInput = styled.div`
  margin: 0 10px 0 30px;
`;
const EndInput = styled.div`
  margin: 0 0 0 10px;
`;
const EndListBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px 20px;
`;
const HistoryContainer = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
const PaginationBox = styled.div`
  padding-top: 40px;
  margin: 0 auto;
  width: fit-content;
`;
const GoToMatchMain = styled.div`
  padding-top: 45px;
  text-align: center;
`;
const GoToMatchBtn = styled.button`
  width: 340px;
  height: 48px;
  background-color: rgba(250, 124, 21, 1);
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  border: 0;
  border-radius: 8px;
`;
const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1195px;
  margin: 70px auto 0;
`;

const SubtitleBox = styled.div`
  height: 57px;
  display: flex;
  justify-content: space-evenly;
`;

const ReviewOptionNone = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.active ? "black" : props.theme.main)};
  font-size: 18px;
  font-weight: 700;
  border-bottom: 3px solid
    ${(props) => (props.active ? "black" : props.theme.main)};
  cursor: pointer;
  width: 240px;
`;

const ReviewOptionWritten = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.active ? props.theme.main : "black")};
  font-size: 18px;
  font-weight: 700;
  border-bottom: 3px solid
    ${(props) => (props.active ? props.theme.main : "black")};
  cursor: pointer;
  width: 240px;
`;

const ReviewContent = styled.div`
  max-height: 825px;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.sub};
  flex-direction: column;
  gap: 15px;
  padding: 45px 25px;
  box-sizing: border-box;
`;
const ReviewInnerContent = styled.div`
  overflow-y: auto;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow-y: auto;
`;
const ReviewBox = styled.div`
  box-sizing: border-box;
  max-width: 1147px;
  width: 100%;
  height: 245px;
  border-radius: 10px;
  background: white;
  padding: 15px 30px;
`;

const ReviewTop = styled.div`
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  padding-left: 16px;
`;

const DayBox = styled.div`
  display: flex;
`;

const UseDay = styled.div`
  color: #919191;
  font-size: 14px;
  padding-right: 5px;
`;

const DayText = styled.div`
  font-size: 14px;
  font-weight: 600;
`;

const Button = styled.div`
  border-radius: 6px;
  width: 125px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
  background-color: rgba(250, 124, 21, 1);
  color: white;
`;

const ReviewBottom = styled.div`
  height: 180px;
  border-radius: 8px;
  border: 2px solid #eacfb9;
  display: flex;
  align-items: center;
`;

const NameContainer = styled.div`
  padding: 0 60px;
  max-width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 3px;
    height: 70px;
    background-color: rgba(182, 92, 19, 0.3);
  }
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

const Bar = styled.div`
  font-size: 60px;
  font-weight: 100;
  color: #eacfb9;
  padding-bottom: 10px;
`;

const ChefProfileContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 3px;
    height: 70px;
    background-color: rgba(182, 92, 19, 0.3);
  }
`;

const Image = styled.img`
  width: 120px;
  height: 120px;
  border: 0;
  background: #eacfb9;
  border-radius: 10px;
`;

const ChefExplain = styled.div`
  display: flex;
  flex-direction: column;
  height: 120px;
  gap: 8px;
`;
const NameText = styled.div`
  display: flex;
  align-items: center;
  height: 25px;
  font-weight: 700;
  font-size: 16px;
`;
const RequestContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 60px;
`;
const Career = styled.div`
  margin-top: 8px;
  & > p {
    font-size: 12px;
    line-height: 16px;
    color: #8e8e8e;
    margin: 0;
  }
  & > div {
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
  }
`;
const Introduce = styled.div`
  margin-top: 8px;
  & > p {
    font-size: 12px;
    line-height: 16px;
    color: #8e8e8e;
    margin: 0;
  }
  & > div {
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
  }
`;
const Container7 = styled.div`
  height: 140px;
  display: flex;
  flex-direction: column;
`;
const RangeBox = styled.div`
  display: flex;
  font-weight: 500;
  padding-top: 3px;
`;
const Inform = styled.label`
  font-size: 12px;
  line-height: 16px;
  color: rgba(142, 142, 142, 1);
`;
const RangeText = styled.div`
  padding-left: 10px;
  display: flex;
  align-items: center;
`;
const CheckBox = styled.input`
  width: 17px;
  height: 17px;
  border: 1.5px solid;
  border-radius: 6px;
`;
const NoReview = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100px;
  border-radius: 10px;
  background: white;
  padding: 15px 30px;
  display: flex;
  font-size: 18px;
  font-weight: 700;
  justify-content: center;
  align-items: center;
`;

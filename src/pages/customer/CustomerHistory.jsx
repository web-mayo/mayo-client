import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Title } from "../../components/Title";
import { HomePartyCardEnd } from "../../components/HomePartyCard";
import { useNavigate } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import moment from "moment";
import { useForm } from "react-hook-form";
import { getFinishedPartyList } from "../../apis/CustomerPartyCtrler";
import { isLoggined } from "../../token";
import { GetPartyReviewList } from "../../apis/CustomerPartyReviewCtlr";
import { makeReviewArray } from "../../functions/funcs";
export const CustomerHistory = () => {
  const navigate = useNavigate();
  const [writtenReview, setWrittenReview] = useState(false);
  // hook form
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();
  setValue("startDate", moment("2024-06-30").format("YYYY-MM-DD"));
  setValue("endDate", moment().add(1, "M").format("YYYY-MM-DD"));
  // checkBox checked
  const checkOrNot = (checkValue) => {
    // if (partyInfo) {
    //   const list = partyInfo.serviceList;
    //   if (list.includes(checkValue)) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // } else {
    //   return false;
    // }
  };
  // pagination color change
  const theme = {
    "& .Mui-selected": {
      bgcolor: "rgba(250, 124, 21, 1) !Important",
      color: "#ffffff !Important",
    },
  };
  const handleReviewClick = () => {
    navigate("/reviewpage");
  };
  // 리스트 불러오기
  const getPartyLists = async () => {
    var filterInput = {
      startDate: moment(getValues("startDate")).format("YYYYMMDD"),
      endDate: moment(getValues("endDate")).format("YYYYMMDD"),
      page: 0,
    };
    const getFinishedList = await getFinishedPartyList(filterInput);
  };
  const getReviewLists = async () => {
    const reviewRes = await GetPartyReviewList();
    if (reviewRes.call) {
      var lists = reviewRes?.back.result;
      makeReviewArray(lists);
    }
  };
  useEffect(() => {
    if (isLoggined) {
      getPartyLists();
      getReviewLists();
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
              <input type="date" {...register("startDate", {})} />
            </StartInput>
            ~
            <EndInput>
              <input type="date" {...register("endDate", {})} />
            </EndInput>
          </DurationFilter>
          <EndListBox>
            {/* card */}
            <HomePartyCardEnd textcolor={"white"} />
          </EndListBox>
          <PaginationBox>
            <Pagination
              showLastButton={true}
              count={1}
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
            {!writtenReview && (
              <ReviewBox>
                <ReviewTop>
                  <DayBox>
                    <UseDay>이용 일시</UseDay>
                    <DayText>| 2024년 08월 31일</DayText>
                  </DayBox>
                  <Button
                    onClick={() => {
                      handleReviewClick();
                    }}
                  >
                    후기 작성하기
                  </Button>
                </ReviewTop>
                <ReviewBottom>
                  <NameContainer>
                    <Name>홈파티 한 줄 소개</Name>
                  </NameContainer>
                  <ChefProfileContainer>
                    <Image src="/images/chefImage.png"></Image>
                    <ChefExplain>
                      <NameText>홍길동 셰프</NameText>
                      <Career>
                        <p>[ 대표 경력 ]</p>
                        <div>OO호텔 5년 동안 메인 셰프로서 근무</div>
                      </Career>
                      <Introduce>
                        <p>[ 한 줄 소개 ]</p>
                        <div>~~~~~</div>
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
                    </Container7>
                  </RequestContainer>
                </ReviewBottom>
              </ReviewBox>
            )}
          </ReviewContent>
        </ReviewContainer>
      </Container>
    </>
  );
};

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
  justify-content: center;
  gap: 10px 20px;
`;
const HistoryContainer = styled.div`
  max-width: 1147px;
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
  height: 825px;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.sub};
  flex-direction: column;
  gap: 15px;
  overflow-y: auto;
  padding: 45px 25px;
`;

const ReviewBox = styled.div`
  width: calc(100% - 70px);
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

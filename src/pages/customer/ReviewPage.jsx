import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import { PostPartyReview } from "../../apis/CustomerPartyReviewCtlr";
import { getMatchedPartyDetail } from "../../apis/CustomerPartyCtrler";
import moment from "moment";
export const ReviewPage = () => {
  const navigate = useNavigate();
  const [reviewPoint, setReviewPoint] = useState(50);
  const [serviceList, setServiceList] = useState([]);
  const [foodList, setFoodList] = useState([]);
  const [partyData, setPartyData] = useState({});
  const partyId = useLocation().pathname.split("/")[3];
  // hook form
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();
  // state Array
  const checkItemHandlers = (setFunc, stateArr, value) => {
    if (Boolean(stateArr.find((item) => item === value))) {
      setFunc(stateArr.filter((item) => item !== value));
    } else if (!Boolean(stateArr.find((item) => item === value))) {
      setFunc((originList) => [...originList, value]);
    }
  };
  // 체크 확인
  const checkOrNot = (checkValue) => {
    if (partyData && partyData.serviceList) {
      const list = partyData.serviceList;
      if (list.includes(checkValue)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };
  // 체크 버튼 색 구분
  const BtnColorChange = (type, value) => {
    if (type == "service") {
      if (Boolean(serviceList.find((item) => item === value))) {
        return true;
      } else {
        return false;
      }
    } else {
      if (Boolean(foodList.find((item) => item === value))) {
        return true;
      } else {
        return false;
      }
    }
  };
  // 모달
  const DialogSwitch = (bool) => {
    const dialog = document.getElementById("completeSignUp");
    if (bool) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  };
  // 리뷰 전송
  const postReviewHandler = async () => {
    const { reviewContent, ratingReason } = getValues();
    var postReviewInput = {
      homePartyId: Number(partyId),
      ratingScore: reviewPoint,
      ratingReason: ratingReason,
      reviewContent: reviewContent,
      serviceList: serviceList,
      foodList: foodList,
    };
    console.log(postReviewInput);
    const postRes = await PostPartyReview(postReviewInput);
    console.log(postRes);
    if (postRes.call) {
      DialogSwitch(true);
    } else {
      alert(postRes.back.response.data.message);
    }
  };
  // 파티 정보
  const getPartyInfo = async (partyId) => {
    const response = await getMatchedPartyDetail(partyId);
    if (response && response.back) {
      setPartyData(response.back);
      repostBan = true;
    }
  };
  var repostBan = false;
  useEffect(() => {
    if (repostBan) {
      return;
    } else {
      getPartyInfo(partyId);
    }
  }, [partyId]);
  return (
    <>
      <Container>
        <TitleBox>
          <Title>후기 작성하기</Title>
        </TitleBox>
        <Container1>
          <Container2>
            <Homeparty>
              <PartyInfo>
                <Name>{partyData?.partyInfo}</Name>
                <Scheduled>
                  일시 |{" "}
                  {moment(partyData?.partySchedule).format("YYYY년 MM월 DD일")}
                </Scheduled>
              </PartyInfo>
              <ChefInfo>
                <Image src="/images/chefImage.png"></Image>
                <ChefExplain>
                  <NameText>{partyData?.chef?.chefName}</NameText>

                  <Career>
                    <p>[ 대표 경력 ]</p>
                    <div>
                      {partyData?.chef?.chefInfoExperience
                        ? partyData?.chef?.chefInfoExperience
                        : "없음"}
                    </div>
                  </Career>
                  <Introduce>
                    <p>[ 한 줄 소개 ]</p>
                    <div>
                      {partyData?.chef?.chefInfoDescription
                        ? partyData?.chef?.chefInfoDescription
                        : "없음"}
                    </div>
                  </Introduce>
                </ChefExplain>
              </ChefInfo>
              <ServiceRange>
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
              </ServiceRange>
            </Homeparty>
          </Container2>
          <Container3>
            <SelectBox>
              <ServiceBox>
                <BoxTexts>
                  <span>'서비스'</span> 관련해서 좋았던 부분을 선택해주세요!
                </BoxTexts>
                <BlockList>
                  <ReviewBlock
                    btncolor={BtnColorChange("service", "HYGIENIC")}
                    onClick={() => {
                      checkItemHandlers(
                        setServiceList,
                        serviceList,
                        "HYGIENIC"
                      );
                    }}
                  >
                    위생적이에요
                  </ReviewBlock>
                  <ReviewBlock
                    btncolor={BtnColorChange("service", "FRIENDLY")}
                    onClick={() => {
                      checkItemHandlers(
                        setServiceList,
                        serviceList,
                        "FRIENDLY"
                      );
                    }}
                  >
                    친절해요
                  </ReviewBlock>
                  <ReviewBlock
                    btncolor={BtnColorChange("service", "MINIMAL_CONVERSATION")}
                    onClick={() => {
                      checkItemHandlers(
                        setServiceList,
                        serviceList,
                        "MINIMAL_CONVERSATION"
                      );
                    }}
                  >
                    필요한 대화만 오가요
                  </ReviewBlock>
                  <ReviewBlock
                    btncolor={BtnColorChange("service", "GOOD_PERFORMANCE")}
                    onClick={() => {
                      checkItemHandlers(
                        setServiceList,
                        serviceList,
                        "GOOD_PERFORMANCE"
                      );
                    }}
                  >
                    퍼포먼스가 좋아요
                  </ReviewBlock>
                  <ReviewBlock
                    btncolor={BtnColorChange("service", "COOKS_WELL")}
                    onClick={() => {
                      checkItemHandlers(
                        setServiceList,
                        serviceList,
                        "COOKS_WELL"
                      );
                    }}
                  >
                    원하는 음식을 잘해줬어요
                  </ReviewBlock>
                  <ReviewBlock
                    btncolor={BtnColorChange("service", "ENJOY_CONVERSATION")}
                    onClick={() => {
                      checkItemHandlers(
                        setServiceList,
                        serviceList,
                        "ENJOY_CONVERSATION"
                      );
                    }}
                  >
                    대화가 즐거워요
                  </ReviewBlock>
                  <ReviewBlock
                    btncolor={BtnColorChange(
                      "service",
                      "COMFORTABLE_ATMOSPHERE"
                    )}
                    onClick={() => {
                      checkItemHandlers(
                        setServiceList,
                        serviceList,
                        "COMFORTABLE_ATMOSPHERE"
                      );
                    }}
                  >
                    분위기가 편안해요
                  </ReviewBlock>
                  <ReviewBlock
                    btncolor={BtnColorChange("service", "EXPLAINS_WELL")}
                    onClick={() => {
                      checkItemHandlers(
                        setServiceList,
                        serviceList,
                        "EXPLAINS_WELL"
                      );
                    }}
                  >
                    설명을 잘해주세요
                  </ReviewBlock>
                  <ReviewBlock
                    btncolor={BtnColorChange("service", "FAST_SERVICE")}
                    onClick={() => {
                      checkItemHandlers(
                        setServiceList,
                        serviceList,
                        "FAST_SERVICE"
                      );
                    }}
                  >
                    음식이 빨리 나와요
                  </ReviewBlock>
                  <ReviewBlock
                    btncolor={BtnColorChange(
                      "service",
                      "NO_EXCESSIVE_RECOMMENDATION"
                    )}
                    onClick={() => {
                      checkItemHandlers(
                        setServiceList,
                        serviceList,
                        "NO_EXCESSIVE_RECOMMENDATION"
                      );
                    }}
                  >
                    과도한 권유가 없어요
                  </ReviewBlock>
                </BlockList>
              </ServiceBox>
              <FoodBox>
                <BoxTexts>
                  <span>'음식'</span> 관련해서 좋았던 부분을 선택해주세요!
                </BoxTexts>
                <BlockList>
                  <ReviewBlock
                    btncolor={BtnColorChange("food", "SPECIAL_MENU")}
                    onClick={() => {
                      checkItemHandlers(setFoodList, foodList, "SPECIAL_MENU");
                    }}
                  >
                    특별한 메뉴가 있어요
                  </ReviewBlock>
                  <ReviewBlock
                    btncolor={BtnColorChange("food", "TASTY_FOOD")}
                    onClick={() => {
                      checkItemHandlers(setFoodList, foodList, "TASTY_FOOD");
                    }}
                  >
                    음식이 맛있어요
                  </ReviewBlock>
                  <ReviewBlock
                    btncolor={BtnColorChange("food", "UNIQUE_COURSE")}
                    onClick={() => {
                      checkItemHandlers(setFoodList, foodList, "UNIQUE_COURSE");
                    }}
                  >
                    코스가 독특해요
                  </ReviewBlock>
                  <ReviewBlock
                    btncolor={BtnColorChange("food", "LARGE_PORTIONS")}
                    onClick={() => {
                      checkItemHandlers(
                        setFoodList,
                        foodList,
                        "LARGE_PORTIONS"
                      );
                    }}
                  >
                    양이 많아요
                  </ReviewBlock>
                  <ReviewBlock
                    btncolor={BtnColorChange("food", "WELL_STRUCTURED_MENU")}
                    onClick={() => {
                      checkItemHandlers(
                        setFoodList,
                        foodList,
                        "WELL_STRUCTURED_MENU"
                      );
                    }}
                  >
                    메뉴 구성이 알차요
                  </ReviewBlock>
                  <ReviewBlock
                    btncolor={BtnColorChange("food", "TIMELY_DISH")}
                    onClick={() => {
                      checkItemHandlers(setFoodList, foodList, "TIMELY_DISH");
                    }}
                  >
                    요리가 시간에 맞게 나와요
                  </ReviewBlock>
                  <ReviewBlock
                    btncolor={BtnColorChange("food", "WORTH_THE_PRICE")}
                    onClick={() => {
                      checkItemHandlers(
                        setFoodList,
                        foodList,
                        "WORTH_THE_PRICE"
                      );
                    }}
                  >
                    비싼 만큼 가치있어요
                  </ReviewBlock>
                  <ReviewBlock
                    btncolor={BtnColorChange(
                      "food",
                      "PERFECT_FOR_SPECIAL_OCCASIONS"
                    )}
                    onClick={() => {
                      checkItemHandlers(
                        setFoodList,
                        foodList,
                        "PERFECT_FOR_SPECIAL_OCCASIONS"
                      );
                    }}
                  >
                    특별한 날에 딱이에요
                  </ReviewBlock>
                  <ReviewBlock
                    btncolor={BtnColorChange("food", "ARTISTIC_PLATING")}
                    onClick={() => {
                      checkItemHandlers(
                        setFoodList,
                        foodList,
                        "ARTISTIC_PLATING"
                      );
                    }}
                  >
                    플레이팅이 예술이에요
                  </ReviewBlock>
                </BlockList>
              </FoodBox>
            </SelectBox>
            <EvaluationBox>
              <ScoreTop>
                <ScoreTitle>비공개 평점</ScoreTitle>
                <ExtraText>
                  {"("}평점은 관리자만 확인 가능합니다. 해당 정보는 매칭 및 추천
                  시스템에 사용됩니다.{")"}
                </ExtraText>
                <p>{reviewPoint}</p>
              </ScoreTop>
              <ScoreMiddle>
                <ScoreNumber>
                  <Min>0</Min>
                  <Max>100</Max>
                </ScoreNumber>
                <Range
                  min="0"
                  max="100"
                  defaultValue={50}
                  onChange={(e) => {
                    setReviewPoint(e.target.value);
                  }}
                ></Range>
              </ScoreMiddle>
              <ScoreBottom>
                <Reason>
                  평점의 이유{"("}선택{")"}
                </Reason>
                <TextBox
                  {...register("ratingReason", {})}
                  placeholder="평점의 이유를 작성해주세요."
                ></TextBox>
              </ScoreBottom>
            </EvaluationBox>
          </Container3>
          <Container4>
            <ReviewTitle>후기 남기기</ReviewTitle>
            <TextBox2
              {...register("reviewContent", {})}
              placeholder="후기를 자유롭게 남겨주세요!"
            ></TextBox2>
          </Container4>
        </Container1>
        <BottomContainer>
          <Button
            onClick={() => {
              postReviewHandler();
            }}
          >
            <ButtonText>후기 제출</ButtonText>
          </Button>
        </BottomContainer>
        <Dialog id="completeSignUp">
          <DialogText>리뷰가 등록되었습니다.</DialogText>
          <DialogBtn onClick={() => navigate("/customerMatch")}>
            매칭내역 페이지로 이동하기
          </DialogBtn>
        </Dialog>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 1057px;
  background: #fff3ea;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleBox = styled.div`
  width: 1192px;
  height: 113px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 800;
`;

const Container1 = styled.div`
  width: 1147px;
  height: 840px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Container2 = styled.div`
  width: 1147px;
  height: 180px;
  border-radius: 8px;
  background: #ffffff;
`;
const Homeparty = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
const PartyInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 270px;
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
  font-weight: 600;
  text-align: center;
`;
const Scheduled = styled.div`
  margin-top: 8px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  text-align: center;
  color: rgba(142, 142, 142, 1);
`;
const ChefInfo = styled.div`
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
const ServiceRange = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 97px 0 60px;
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
const Container3 = styled.div`
  width: 1147px;
  height: 370px;
  display: flex;
  justify-content: space-between;
`;

const SelectBox = styled.div`
  width: 732px;
  height: 370px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ServiceBox = styled.div`
  box-sizing: border-box;
  width: 732px;
  height: 177px;
  border-radius: 8px;
  background: #ffffff;
  padding: 25px 30px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
const BoxTexts = styled.div`
  line-height: 20px;
  font-size: 14px;
  & > span {
    font-size: 20px;
    font-weight: 600;
    color: #fa7c15;
  }
`;
const BlockList = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
const ReviewBlock = styled.div`
  border-radius: 5px;
  background-color: ${({ btncolor }) =>
    btncolor ? "#ff7f0e" : "rgba(255, 243, 234, 1)"};
  color: ${({ btncolor }) => (btncolor ? "white" : "black")};
  padding: 8px 12px;
  box-sizing: border-box;
  height: 36px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const FoodBox = styled.div`
  box-sizing: border-box;
  width: 732px;
  height: 177px;
  border-radius: 8px;
  background: #ffffff;
  padding: 25px 30px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const EvaluationBox = styled.div`
  width: 328px;
  height: 316px;
  border-radius: 8px;
  background: #ffffff;
  padding: 27px 36px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ScoreTop = styled.div`
  width: 328px;
  height: 50px;
  display: flex;
  flex-direction: column;
  & > p {
    font-weight: bold;
    font-size: 18px;
  }
`;

const ScoreTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  padding-bottom: 5px;
`;

const ExtraText = styled.div`
  color: #919191;
  font-size: 8.7px;
`;

const ScoreMiddle = styled.div``;

const ScoreNumber = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Min = styled.div``;

const Max = styled.div``;

const Range = styled.input.attrs({ type: "range" })`
  -webkit-appearance: none;
  width: 328px;
  height: 6px;
  background: #f9d3b2; /* 트랙의 배경색 */
  border-radius: 5px;
  outline: none;
  transition: background 0.3s;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    background: #ff7f0e; /* 손잡이 색상 */
    border-radius: 50%;
    cursor: pointer;
    margin-top: -6px; /* 트랙 중앙에 맞추기 위한 margin */
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: #ff7f0e;
    border-radius: 50%;
    cursor: pointer;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 6px;
    background: #f9d3b2; /* 트랙의 배경색 */
    border-radius: 5px;
  }

  &::-moz-range-track {
    width: 100%;
    height: 6px;
    background: #f9d3b2;
    border-radius: 5px;
  }
`;

const ScoreBottom = styled.div`
  display: flex;
  flex-direction: column;
`;

const Reason = styled.div`
  padding-bottom: 8px;
  padding-left: 10px;
  font-size: 15px;
  font-weight: 600;
`;

const TextBox = styled.textarea`
  width: 318px;
  height: 100px;
  border-radius: 8px;
  border: 1px solid #d9d9d9;
  padding-left: 10px;
  padding-top: 10px;
  font-size: 15px;
  &::placeholder {
    color: #929292;
  }
  resize: none;
`;

const Container4 = styled.div`
  width: 1100px;
  height: 170px;
  border-radius: 8px;
  background: #ffffff;
  padding: 25px;
`;

const ReviewTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  padding-bottom: 20px;
`;

const TextBox2 = styled.textarea`
  width: 1090px;
  height: 110px;
  border-radius: 8px;
  border: 1px solid #d9d9d9;
  &::placeholder {
    color: #929292;
  }
  padding-left: 10px;
  padding-top: 10px;
  font-size: 15px;
  resize: none;
`;

const BottomContainer = styled.div`
  width: 100vw;
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.div`
  width: 307px;
  height: 48px;
  border-radius: 8px;
  background: #fa7c15;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ButtonText = styled.div`
  color: white;
  font-weight: 600;
`;
const Dialog = styled.dialog`
  border: 0;
  width: 450px;
  height: 124px;
  border-radius: 10px;
  top: -20%;
`;
const DialogText = styled.p`
  margin-top: 48px;
  text-align: center;
  font-size: 20px;
  line-height: 28px;
  color: #000;
  font-weight: 600;
`;
const DialogBtn = styled.a`
  display: block;
  margin-top: 2px;
  text-align: center;
  font-size: 10px;
  line-height: 14px;
  color: #000;
  text-decoration: underline;
  cursor: pointer;
`;

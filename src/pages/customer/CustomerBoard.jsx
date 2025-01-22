import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { ChefProfileCard } from "../../components/ChefProfileCard";
import { Title } from "../../components/Title";
import { useNavigate } from "react-router-dom";
import { MakeHomeParty } from "../../modal/MakeHomeParty";
import { Tag } from "../../components/Tag";
import { GetMyChefLists } from "../../apis/CustomerBoardAPI";
import { RequestHomeParty } from "../../modal/RequestHomeParty";
import { makeQueryForChefList } from "../../extraNeeds/funcs";
export const CustomerBoard = () => {
  const navigate = useNavigate();
  const [chefId, setChefId] = useState(0);
  const [categories, setCategories] = useState([]);
  const [services, setServices] = useState([]);
  const [areas, setAreas] = useState([]);
  const [pages, setPages] = useState(1);
  const [chefLists, setChefLists] = useState([]);
  // modal
  const [cancel, setCancel] = useState(true);
  const [cancel2, setCancel2] = useState(true);
  const DialogSwitch = (bool) => {
    const dialog = document.getElementById("enrollHomeParty");
    if (bool) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  };
  const DialogSwitch2 = (bool) => {
    const dialog = document.getElementById("requestHomeParty");
    if (bool) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  };
  useEffect(() => {
    if (!cancel) {
      DialogSwitch(false);
    }
  }, [cancel]);
  useEffect(() => {
    if (!cancel2) {
      DialogSwitch2(false);
    }
  }, [cancel2]);
  // scroll
  const ScrollMove = (dir) => {
    const scrollEl = document.getElementById("ChefProfileBox");
    if (dir) {
      scrollEl.scrollBy({ left: 200 });
    } else {
      scrollEl.scrollBy({ left: -200 });
    }
  };
  // checkFilter
  const categoryHandler = (data, isChecked) => {
    if (!isChecked && Boolean(categories.find((item) => item === data))) {
      setCategories(categories.filter((item) => item !== data));
    } else if (
      isChecked &&
      !Boolean(categories.find((item) => item === data))
    ) {
      setCategories((originList) => [...originList, data]);
    }
  };
  const serviceHandler = (data, isChecked) => {
    if (!isChecked && Boolean(services.find((item) => item === data))) {
      setServices(services.filter((item) => item !== data));
    } else if (isChecked && !Boolean(services.find((item) => item === data))) {
      setServices((originList) => [...originList, data]);
    }
  };
  const areaHandler = (data, isChecked) => {
    if (!isChecked && Boolean(areas.find((item) => item === data))) {
      setAreas(areas.filter((item) => item !== data));
    } else if (isChecked && !Boolean(areas.find((item) => item === data))) {
      setAreas((originList) => [...originList, data]);
    }
  };
  // chef List with filter
  const getMyChefLists = async () => {
    const keyWords = {
      categories: categories,
      services: services,
      areas: areas,
      page: pages,
    };
    const querystring = makeQueryForChefList(keyWords);
    console.log(querystring);
    const res = await GetMyChefLists(querystring);
    if (res && res?.back?.result?.chefSearch) {
      setChefLists(res?.back?.result?.chefSearch);
    }
  };
  useEffect(() => {
    getMyChefLists();
  }, []);
  useEffect(() => {
    getMyChefLists();
  }, [categories, services, areas]);
  return (
    <>
      <CustomerBoardContainer>
        <Title title={"마이요리사 찾기"} backgroundcolor={"white"} />
        <Middle>
          <Title
            title={"마이요리사가 필요하신가요?"}
            subTitle={"고객님에게 맞는 요리사님을 찾아보세요!"}
            backgroundcolor={"white"}
          ></Title>
          <UploadButton
            onClick={() => {
              DialogSwitch(true, "enrollHomeParty");
            }}
          >
            <Upload>홈파티 등록하기 {">"} </Upload>
          </UploadButton>
        </Middle>
        <Bottom>
          <PartyContainer>
            <ActiveChefContainer>
              <TitleBox>
                <ChefTitle>
                  MAYO기 Pick한 <span>추천 요리사</span>
                </ChefTitle>
              </TitleBox>
              <ArrowLeftIcon
                icon={faChevronLeft}
                onClick={() => {
                  ScrollMove(0);
                }}
              />
              <ChefMiddle id="ChefProfileBox">
                <ChefProfileCard />
                <ChefProfileCard />
                <ChefProfileCard />
                <ChefProfileCard />
                <ChefProfileCard />
                <ChefProfileCard />
              </ChefMiddle>
              <ArrowRightIcon
                icon={faChevronRight}
                onClick={() => {
                  ScrollMove(1);
                }}
              />

              {/* <GotoChefList
                onClick={() => {
                  navigate("/chefList");
                }}
              >
                지금 확인하러 가기
              </GotoChefList> */}
            </ActiveChefContainer>
          </PartyContainer>
        </Bottom>
      </CustomerBoardContainer>
      <FindChef>
        <Title
          title={"고객님에게 딱 맞는 요리사를 확인해보세요."}
          backgroundcolor={"white"}
        />
        <FlexBox>
          {/* 왼쪽 */}
          <ChefFilterBox>
            <p>검색 필터 설정</p>
            <ChefFilter>
              <FilterBox>
                <FilterName>요리 카테고리</FilterName>
                <FilterRow>
                  <FilterList>
                    <RangeBox>
                      <CheckBox
                        type="checkbox"
                        value={"한식"}
                        onChange={(e) => {
                          categoryHandler(e.target.value, e.target.checked);
                        }}
                      ></CheckBox>
                      <RangeText>한식</RangeText>
                    </RangeBox>
                  </FilterList>
                  <FilterList>
                    <RangeBox>
                      <CheckBox
                        type="checkbox"
                        value={"양식"}
                        onChange={(e) => {
                          categoryHandler(e.target.value, e.target.checked);
                        }}
                      ></CheckBox>
                      <RangeText>양식</RangeText>
                    </RangeBox>
                  </FilterList>
                  <FilterList>
                    <RangeBox>
                      <CheckBox
                        type="checkbox"
                        value={"중식"}
                        onChange={(e) => {
                          categoryHandler(e.target.value, e.target.checked);
                        }}
                      ></CheckBox>
                      <RangeText>중식</RangeText>
                    </RangeBox>
                  </FilterList>
                  <FilterList>
                    <RangeBox>
                      <CheckBox
                        type="checkbox"
                        value={"일식"}
                        onChange={(e) => {
                          categoryHandler(e.target.value, e.target.checked);
                        }}
                      ></CheckBox>
                      <RangeText>일식</RangeText>
                    </RangeBox>
                  </FilterList>
                </FilterRow>
              </FilterBox>
              <FilterBox>
                <FilterName>서비스 유형</FilterName>
                <FilterRow>
                  <FilterList>
                    <RangeBox>
                      <CheckBox
                        type="checkbox"
                        value={"프라이빗 파티"}
                        onChange={(e) => {
                          serviceHandler(e.target.value, e.target.checked);
                        }}
                      ></CheckBox>
                      <RangeText>프라이빗 파티</RangeText>
                    </RangeBox>
                  </FilterList>
                  <FilterList>
                    <RangeBox>
                      <CheckBox
                        type="checkbox"
                        value={"기업 행사"}
                        onChange={(e) => {
                          serviceHandler(e.target.value, e.target.checked);
                        }}
                      ></CheckBox>
                      <RangeText>기업 행사</RangeText>
                    </RangeBox>
                  </FilterList>
                  <FilterList>
                    <RangeBox>
                      <CheckBox
                        type="checkbox"
                        value={"기타 소모임"}
                        onChange={(e) => {
                          serviceHandler(e.target.value, e.target.checked);
                        }}
                      ></CheckBox>
                      <RangeText>기타 소모임</RangeText>
                    </RangeBox>
                  </FilterList>
                  <FilterList>
                    <RangeBox>
                      <CheckBox
                        type="checkbox"
                        value={"집들이"}
                        onChange={(e) => {
                          serviceHandler(e.target.value, e.target.checked);
                        }}
                      ></CheckBox>
                      <RangeText>집들이</RangeText>
                    </RangeBox>
                  </FilterList>
                </FilterRow>
              </FilterBox>
              <FilterBox>
                <FilterName>출장 지역</FilterName>
                <FilterRow>
                  <FilterList>
                    <RangeBox>
                      <CheckBox
                        type="checkbox"
                        value={"전국"}
                        onChange={(e) => {
                          categoryHandler(e.target.value, e.target.checked);
                        }}
                      ></CheckBox>
                      <RangeText>전국</RangeText>
                    </RangeBox>
                  </FilterList>
                  <FilterList>
                    <RangeBox>
                      <CheckBox
                        type="checkbox"
                        value={"서울"}
                        onChange={(e) => {
                          areaHandler(e.target.value, e.target.checked);
                        }}
                      ></CheckBox>
                      <RangeText>서울</RangeText>
                    </RangeBox>
                  </FilterList>
                  <FilterList>
                    <RangeBox>
                      <CheckBox
                        type="checkbox"
                        value={"경기도"}
                        onChange={(e) => {
                          areaHandler(e.target.value, e.target.checked);
                        }}
                      ></CheckBox>
                      <RangeText>경기도</RangeText>
                    </RangeBox>
                  </FilterList>
                  <FilterList>
                    <RangeBox>
                      <CheckBox
                        type="checkbox"
                        value={"강원도"}
                        onChange={(e) => {
                          areaHandler(e.target.value, e.target.checked);
                        }}
                      ></CheckBox>
                      <RangeText>강원도</RangeText>
                    </RangeBox>
                  </FilterList>
                  <FilterList>
                    <RangeBox>
                      <CheckBox
                        type="checkbox"
                        value={"경상도"}
                        onChange={(e) => {
                          areaHandler(e.target.value, e.target.checked);
                        }}
                      ></CheckBox>
                      <RangeText>경상도</RangeText>
                    </RangeBox>
                  </FilterList>
                  <FilterList>
                    <RangeBox>
                      <CheckBox
                        type="checkbox"
                        value={"전라도"}
                        onChange={(e) => {
                          areaHandler(e.target.value, e.target.checked);
                        }}
                      ></CheckBox>
                      <RangeText>전라도</RangeText>
                    </RangeBox>
                  </FilterList>
                  <FilterList>
                    <RangeBox>
                      <CheckBox
                        type="checkbox"
                        value={"충청도"}
                        onChange={(e) => {
                          areaHandler(e.target.value, e.target.checked);
                        }}
                      ></CheckBox>
                      <RangeText>충청도</RangeText>
                    </RangeBox>
                  </FilterList>
                </FilterRow>
              </FilterBox>
            </ChefFilter>
          </ChefFilterBox>
          {/* 오른쪽 */}
          <ChefListBox>
            <p>검색 결과 총 {chefLists.length}개</p>
            <ChefList>
              {chefLists &&
                chefLists.length > 0 &&
                chefLists.map((chef, index) => (
                  <ChefListCard key={"chef - " + index}>
                    <CardLeft>
                      <ChefImg src="images/chefImage.png"></ChefImg>
                      <ChefProfile>
                        <Name>{chef.chefName}</Name>
                        <Career>
                          <p>[ 대표 경력 ]</p>
                          <div>{chef.chefInfoExperience}</div>
                        </Career>
                        <Introduce>
                          <p>[ 한 줄 소개 ]</p>
                          <div>{chef.chefInfoAdditional}</div>
                        </Introduce>
                      </ChefProfile>
                    </CardLeft>
                    <CardRight>
                      <Info>
                        {chef.chefHashList &&
                          chef.chefHashList.length > 0 &&
                          chef.chefHashList[0].chefHashTag !== null &&
                          chef.chefHashList.map((hash, index) => (
                            <Tag
                              key={"hash - " + index}
                              text={hash.chefHashTag}
                            ></Tag>
                          ))}
                        <p>
                          [ 경력 ] 5년
                          {chef.hopePay !== "null" &&
                            " | " + chef.hopePay + "원"}
                        </p>
                      </Info>
                      <Requset
                        type="button"
                        onClick={() => {
                          setChefId(chef.id);
                          DialogSwitch2(true);
                        }}
                      >
                        요청하기
                      </Requset>
                    </CardRight>
                  </ChefListCard>
                ))}
            </ChefList>
          </ChefListBox>
        </FlexBox>
      </FindChef>
      <EnrollDialog id="enrollHomeParty">
        <MakeHomeParty setCancel={setCancel} />
      </EnrollDialog>
      <EnrollDialog id="requestHomeParty">
        <RequestHomeParty setCancel={setCancel2} chefId={chefId} />
      </EnrollDialog>
    </>
  );
};

const CustomerBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Middle = styled.div`
  /* background: #fff3ea; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container2 = styled.div`
  width: 600px;
`;

const InputBox = styled.div`
  border-radius: 6px;
  width: 600px;
  height: 45px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Input = styled.input`
  padding-left: 15px;
  width: 100%;
  border: none;
  &:focus {
    outline: none;
  }
  font-size: 14px;
`;

const SignBox2 = styled.div`
  display: flex;
`;

const Bar = styled.div`
  padding-right: 10px;
  font-size: 14px;
  color: #d9d9d9;
`;

const ArrowLeftIcon = styled(FontAwesomeIcon)`
  color: #fa7c15;
  position: absolute;
  top: 50%;
  left: 40px;
  font-size: 22px;
  cursor: pointer;
`;
const ArrowRightIcon = styled(FontAwesomeIcon)`
  color: #fa7c15;
  position: absolute;
  top: 50%;
  right: 40px;
  font-size: 22px;
  cursor: pointer;
`;

const SuggestBox = styled.div`
  width: 600px;
  height: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10px;
  font-weight: 500;
  font-size: 14px;
`;

const Suggest = styled.div`
  padding-left: 20px;
  font-size: 14px;
`;

const SearchBox = styled.div`
  width: 600px;
  display: flex;
`;

const SearchBox2 = styled.div`
  padding-right: 10px;
`;

const SearchText = styled.div`
  color: #b65c1380;
  border-radius: 14px;
  background-color: white;
  border: 2px solid #b65c1380;
  padding: 5px 10px;
  font-size: 12px;
  font-weight: 600;
`;

const ResultBox = styled.div`
  width: 600px;
  font-weight: 500;
`;
const Result = styled.div`
  padding-left: 20px;
  padding-top: 25px;
`;
const SearchResultBackground = styled.div`
  background-color: ${(props) => props.theme.sub};
`;
const SearchResultContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  width: 910px;
  gap: 10px;
  margin-top: 20px;
`;

const SearchBtn = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.sub};
  height: 60px;
`;

const SearchBtnIcon = styled.div`
  content: "";
  width: 20px;
  height: 20px;
  border-top: 3.5px solid #b65c1380;
  border-right: 3.5px solid #b65c1380;
  display: inline-block;
  transform: ${({ showResult }) =>
    showResult ? "rotate(-45deg)" : "rotate(135deg)"};
  position: absolute;
  cursor: pointer;
  margin-top: 15px;
`;

const Bottom = styled.div`
  display: flex;
  padding-top: 80px;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
`;

const PartyContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PartyUploadContainer = styled.div`
  width: 360px;
  height: 525px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.sub};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PartyTitle = styled.div`
  font-size: 22px;
  font-weight: 600;
`;

const PartySub = styled.div`
  font-size: 14px;
  font-weight: 600;
  padding-top: 10px;
`;

const NickBox = styled.div`
  text-decoration: underline;
  display: flex;
  padding-top: 15px;
  padding-bottom: 25px;
`;

const Kitchen = styled.div`
  font-size: 12px;
  padding-top: 4px;
`;

const Nick = styled.div`
  font-weight: 600;
  font-size: 14px;
`;

const UploadButton = styled.div`
  width: 208px;
  height: 40px;
  background-color: ${(props) => props.theme.main};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Upload = styled.div`
  color: white;
  font-weight: 600;
  font-size: 17px;
`;

const ActiveChefContainer = styled.div`
  max-width: 1024px;
  width: 100%;
  height: 480px;
  border-radius: 8px;
  background-color: #fff3ea;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  position: relative;
`;

const TitleBox = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ChefTitle = styled.div`
  font-size: 22px;
  font-weight: 600;
  & > span {
    color: rgb(250, 124, 21);
  }
`;

const ChefMiddle = styled.div`
  padding: 0 0 10px;
  width: calc(100% - 160px);
  overflow-x: scroll;
  scroll-behavior: smooth;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;
const GotoChefList = styled.button`
  color: white;
  font-weight: 700;
  width: 208px;
  height: 40px;
  background-color: ${(props) => props.theme.main};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
`;
const Dialog = styled.dialog`
  border: 0;
  width: 298px;
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
const EnrollDialog = styled.dialog`
  border: 0;
  padding: 0;
`;

const FindChef = styled.div`
  padding: 40px 0;
`;

const FlexBox = styled.div`
  display: flex;
  max-width: 1024px;
  width: 100%;
  flex-direction: row;
  gap: 18px;
  margin: 0 auto;
`;
const ChefFilterBox = styled.div`
  width: 200px;
  & > p {
    font-weight: bold;
    font-size: 16px;
    margin: 0 0 14px 8px;
  }
`;
const ChefFilter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const FilterBox = styled.div`
  padding: 24px;
  box-sizing: border-box;
  border: 1px solid #d0d0d0;
  border-radius: 12px;
`;
const FilterName = styled.div`
  box-sizing: border-box;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;
const FilterRow = styled.ul`
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  & > li {
    margin-top: 10px;
  }
`;
const FilterList = styled.li`
  box-sizing: border-box;
  list-style: none;
  margin: 0;
  padding: 0;
`;
const ChefListBox = styled.div`
  flex: 1;
  & > p {
    font-size: 16px;
    margin: 0 0 14px;
  }
`;
const ChefList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
const ChefListCard = styled.div`
  padding: 30px 40px;
  display: flex;
  max-width: 750px;
  width: 100%;
  border: 2px solid rgba(182, 92, 19, 0.3);
  border-radius: 8px;
`;

const CardLeft = styled.div`
  width: 400px;
  height: 120px;
  display: flex;
  gap: 16px;
`;
const ChefImg = styled.img`
  height: 100%;
  width: 116px;
`;
const ChefProfile = styled.div`
  flex: 1;
`;
const Name = styled.div`
  font-size: 16px;
  line-height: 25px;
`;
const Career = styled.div`
  margin-top: 8px;
  & > p {
    margin: 0;
    font-size: 12px;
    line-height: 16px;
    color: #8e8e8e;
  }
  & > div {
    font-weight: 500;
    font-size: 16px;
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
  }
`;
const CardRight = styled.div`
  justify-content: space-between;
  align-items: end;
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const Info = styled.div`
  max-width: 500px;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 8px;
  & > p {
    display: inline-block;
    vertical-align: middle;
    font-size: 12px;
    line-height: 16px;
    color: #8e8e8e;
    margin: 0;
  }
`;
const Requset = styled.button`
  background-color: #fa7c15;
  width: 128px;
  height: 33px;
  color: #fff;
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  border: 0;
  border-radius: 8px;
`;
const RangeBox = styled.div`
  display: flex;
  align-items: center;
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

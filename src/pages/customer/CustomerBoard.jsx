import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { ChefProfileCard } from "../../components/ChefProfileCard";
import { Title } from "../../components/Title";
import { useNavigate } from "react-router-dom";
import { HomeParty } from "../../modal/HomeParty";
import { CheckBox } from "../../components/CheckBox";
import { Tag } from "../../components/Tag";

export const CustomerBoard = () => {
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState(false);
  const DialogSwitch = (bool, elId) => {
    const dialog = document.getElementById(elId);
    if (bool) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  };
  const ScrollMove = (dir) => {
    const scrollEl = document.getElementById("ChefProfileBox");
    if (dir) {
      scrollEl.scrollBy({ left: 200 });
    } else {
      scrollEl.scrollBy({ left: -200 });
    }
  };
  return (
    <>
      <CustomerBoardContainer>
        <Title title={"마이요리사 찾기"} backgroundColor={"white"} />
        <Middle>
          <Title
            title={"마이요리사가 필요하신가요?"}
            subTitle={"고객님에게 맞는 요리사님을 찾아보세요!"}
            backgroundColor={"white"}
          ></Title>
          <UploadButton
            onClick={() => {
              DialogSwitch(true, "enrollHomeParty");
            }}
          >
            <Upload>홈파티 등록하기 {">"} </Upload>
          </UploadButton>
          {/* <Container2>
            <InputBox>
              <Input placeholder="대표 경력, 해시태그 등 입력"></Input>
              <SignBox2>
                <Bar>|</Bar>
                <SearchIcon
                  icon={faMagnifyingGlass}
                  onClick={() => {
                    setSearchResults(true);
                  }}
                />
              </SignBox2>
            </InputBox>
            <SuggestBox>
              <Suggest>추천 검색어</Suggest>
            </SuggestBox>
            <SearchBox>
              <SearchBox2>
                <SearchText>한식</SearchText>
              </SearchBox2>
              <SearchBox2>
                <SearchText>일식</SearchText>
              </SearchBox2>
              <SearchBox2>
                <SearchText>이탈리안</SearchText>
              </SearchBox2>
              <SearchBox2>
                <SearchText>호텔 셰프</SearchText>
              </SearchBox2>
              <SearchBox2>
                <SearchText>메인셰프</SearchText>
              </SearchBox2>
              <SearchBox2>
                <SearchText>플레이팅</SearchText>
              </SearchBox2>
              <SearchBox2>
                <SearchText>비건요리</SearchText>
              </SearchBox2>
            </SearchBox>
            <ResultBox>
              <Result>검색 결과</Result>
            </ResultBox>
          </Container2> */}

          {/* {searchResults && (
            <SearchResultBackground>
              <SearchResultContainer>
                <ChefProfileCard />
                <ChefProfileCard />
                <ChefProfileCard />
                <ChefProfileCard />
                <ChefProfileCard />
                <ChefProfileCard />
                <ChefProfileCard />
              </SearchResultContainer>
            </SearchResultBackground>
          )} */}

          {/* <SearchBtn>
            <SearchBtnIcon
              showResult={searchResults}
              onClick={() => {
                setSearchResults(!searchResults);
              }}
            />
          </SearchBtn> */}
        </Middle>
        <Bottom>
          <PartyContainer>
            {/* <PartyUploadContainer>
              <PartyTitle>홈파티 일정 올리기</PartyTitle>
              <PartySub>
                계획 중인 홈파티 일정을 올려 마이요리사를 구해보세요!
              </PartySub>
              <NickBox>
                <Kitchen>현재 설정 중인 주방: </Kitchen>
                <Nick>[주방 닉네임]</Nick>
              </NickBox>
              <UploadButton
                onClick={() => {
                  DialogSwitch(true, "enrollHomeParty");
                }}
              >
                <Upload>홈파티 게시</Upload>
              </UploadButton>
            </PartyUploadContainer> */}
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
          backgroundColor={"white"}
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
                    <CheckBox text={"한식"} size={"14px"}></CheckBox>
                  </FilterList>
                  <FilterList>
                    <CheckBox text={"양식"} size={"14px"}></CheckBox>
                  </FilterList>
                  <FilterList>
                    <CheckBox text={"중식"} size={"14px"}></CheckBox>
                  </FilterList>
                  <FilterList>
                    <CheckBox text={"일식"} size={"14px"}></CheckBox>
                  </FilterList>
                </FilterRow>
              </FilterBox>
              <FilterBox>
                <FilterName>서비스 유형</FilterName>
                <FilterRow>
                  <FilterList>
                    <CheckBox text={"프라이빗 파티"} size={"14px"}></CheckBox>
                  </FilterList>
                  <FilterList>
                    <CheckBox text={"기업 행사"} size={"14px"}></CheckBox>
                  </FilterList>
                  <FilterList>
                    <CheckBox text={"기타 소모임"} size={"14px"}></CheckBox>
                  </FilterList>
                  <FilterList>
                    <CheckBox text={"집들이"} size={"14px"}></CheckBox>
                  </FilterList>
                </FilterRow>
              </FilterBox>
              <FilterBox>
                <FilterName>출장 지역</FilterName>
                <FilterRow>
                  <FilterList>
                    <CheckBox text={"전국"} size={"14px"}></CheckBox>
                  </FilterList>
                  <FilterList>
                    <CheckBox text={"서울"} size={"14px"}></CheckBox>
                  </FilterList>
                  <FilterList>
                    <CheckBox text={"경기도"} size={"14px"}></CheckBox>
                  </FilterList>
                  <FilterList>
                    <CheckBox text={"강원도"} size={"14px"}></CheckBox>
                  </FilterList>
                  <FilterList>
                    <CheckBox text={"경상도"} size={"14px"}></CheckBox>
                  </FilterList>
                  <FilterList>
                    <CheckBox text={"전라도"} size={"14px"}></CheckBox>
                  </FilterList>
                  <FilterList>
                    <CheckBox text={"충청도"} size={"14px"}></CheckBox>
                  </FilterList>
                </FilterRow>
              </FilterBox>
            </ChefFilter>
          </ChefFilterBox>
          {/* 오른쪽 */}
          <ChefListBox>
            <p>검색 결과 총 30개</p>
            <ChefList>
              <ChefListCard>
                <CardLeft>
                  <ChefImg src="images/chefImage.png"></ChefImg>
                  <ChefProfile>
                    <Name></Name>
                    <Career>
                      <p>[ 대표 경력 ]</p>
                      <div>00호텔 5년 동안 메인 셰프로서 근무</div>
                    </Career>
                    <Introduce>
                      <p>[ 한 줄 소개 ]</p>
                      <div>~~~~~~~</div>
                    </Introduce>
                  </ChefProfile>
                </CardLeft>
                <CardRight>
                  <Info>
                    <Tag text={"이탈리안"}></Tag>
                    <Tag text={"플레이팅"}></Tag>
                    <p>[ 경력 ] 5년 | 28만원</p>
                  </Info>
                  <Requset type="button">요청하기</Requset>
                </CardRight>
              </ChefListCard>
              <ChefListCard>
                <CardLeft>
                  <ChefImg src="images/chefImage.png"></ChefImg>
                  <ChefProfile>
                    <Name></Name>
                    <Career>
                      <p>[ 대표 경력 ]</p>
                      <div>00호텔 5년 동안 메인 셰프로서 근무</div>
                    </Career>
                    <Introduce>
                      <p>[ 한 줄 소개 ]</p>
                      <div>~~~~~~~</div>
                    </Introduce>
                  </ChefProfile>
                </CardLeft>
                <CardRight>
                  <Info>
                    <Tag text={"이탈리안"}></Tag>
                    <Tag text={"플레이팅"}></Tag>
                    <p>[ 경력 ] 5년 | 28만원</p>
                  </Info>
                  <Requset type="button">요청하기</Requset>
                </CardRight>
              </ChefListCard>
              <ChefListCard>
                <CardLeft>
                  <ChefImg src="images/chefImage.png"></ChefImg>
                  <ChefProfile>
                    <Name></Name>
                    <Career>
                      <p>[ 대표 경력 ]</p>
                      <div>00호텔 5년 동안 메인 셰프로서 근무</div>
                    </Career>
                    <Introduce>
                      <p>[ 한 줄 소개 ]</p>
                      <div>~~~~~~~</div>
                    </Introduce>
                  </ChefProfile>
                </CardLeft>
                <CardRight>
                  <Info>
                    <Tag text={"이탈리안"}></Tag>
                    <Tag text={"플레이팅"}></Tag>
                    <p>[ 경력 ] 5년 | 28만원</p>
                  </Info>
                  <Requset type="button">요청하기</Requset>
                </CardRight>
              </ChefListCard>
              <ChefListCard>
                <CardLeft>
                  <ChefImg src="images/chefImage.png"></ChefImg>
                  <ChefProfile>
                    <Name></Name>
                    <Career>
                      <p>[ 대표 경력 ]</p>
                      <div>00호텔 5년 동안 메인 셰프로서 근무</div>
                    </Career>
                    <Introduce>
                      <p>[ 한 줄 소개 ]</p>
                      <div>~~~~~~~</div>
                    </Introduce>
                  </ChefProfile>
                </CardLeft>
                <CardRight>
                  <Info>
                    <Tag text={"이탈리안"}></Tag>
                    <Tag text={"플레이팅"}></Tag>
                    <p>[ 경력 ] 5년 | 28만원</p>
                  </Info>
                  <Requset type="button">요청하기</Requset>
                </CardRight>
              </ChefListCard>
            </ChefList>
          </ChefListBox>
        </FlexBox>
      </FindChef>
      <EnrollDialog id="enrollHomeParty">
        <HomeParty />
      </EnrollDialog>
      <Dialog id="completeSignUp">
        <DialogText>등록이 완료되었습니다!</DialogText>
        <DialogBtn onClick={() => window.location.reload(true)}>
          게시판으로 돌아가기
        </DialogBtn>
      </Dialog>
    </>
  );
};

const CustomerBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Middle = styled.div`
  width: 100vw;
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
    margin-top: 12px;
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

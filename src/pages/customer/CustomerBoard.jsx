import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { ChefProfileCard } from "../../components/ChefProfileCard";
import { Title } from "../../components/Title";
import { useNavigate } from "react-router-dom";
import { HomeParty } from "../../modal/HomeParty";
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

  return (
    <>
      <CustomerBoardContainer>
        <Title title={"게시판"} backgroundColor={"white"} />
        <Middle>
          <Title
            title={"마이요리사 찾기"}
            subTitle={"고객님에게 맞는 요리사님을 찾아보세요!"}
          ></Title>
          <Container2>
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
          </Container2>

          {searchResults && (
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
          )}

          <SearchBtn>
            <SearchBtnIcon
              showResult={searchResults}
              onClick={() => {
                setSearchResults(!searchResults);
              }}
            />
          </SearchBtn>
        </Middle>
        <Bottom>
          <PartyContainer>
            <PartyUploadContainer>
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
            </PartyUploadContainer>
            <ActiveChefContainer>
              <TitleBox>
                <ChefTitle>활동 중인 마이요리사</ChefTitle>
              </TitleBox>

              <ChefMiddle>
                <ChefProfileCard />
                <ChefProfileCard />
                <ChefProfileCard />
                <ChefProfileCard />
              </ChefMiddle>

              <GotoChefList
                onClick={() => {
                  navigate("/chefList");
                }}
              >
                지금 확인하러 가기
              </GotoChefList>
            </ActiveChefContainer>
          </PartyContainer>
        </Bottom>
      </CustomerBoardContainer>
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

  background: #fff3ea;
  display: flex;
  flex-direction: column;
  align-items: center;
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

const SearchIcon = styled(FontAwesomeIcon)`
  color: #919191;
  padding-right: 10px;
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
  height: 680px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
`;

const PartyContainer = styled.div`
  width: 90%;
  height: 525px;
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
  width: 900px;
  height: 525px;
  border-radius: 8px;
  background-color: #fff3ea;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
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
`;

const ChefMiddle = styled.div`
  padding: 0px 35px 10px 35px;
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

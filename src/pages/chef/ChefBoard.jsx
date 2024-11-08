import React, { useEffect, useState } from "react";
import { Title } from "../../components/Title";
import styled from "styled-components";
import { CheckBox } from "../../components/CheckBox";
import { GetListHomeParty } from "../../apis/ChefBoardAPI";
import moment from "moment/moment";
import { ApplyHomeParty } from "../../modal/ApplyHomeParty";
export const ChefBoard = () => {
  const [dialogData, setDialogData] = useState();
  const [partyList, setPartyList] = useState([]);
  const [count, setCount] = useState(0);
  const [cancel, setCancel] = useState();

  // dialog
  const DialogSwitch = (bool) => {
    const dialog = document.getElementById("applyHomePartyDialog");
    if (bool) {
      dialog.showModal();
      setCancel(true);
    } else {
      dialog.close();
    }
  };

  const callHomePartyList = async () => {
    const response = await GetListHomeParty({ page: 1, pageSize: 12 });
    setPartyList(response.back.result.partyList);
    setCount(response.back.result.count);
  };
  useEffect(() => {
    callHomePartyList();
    // dialogBackdrop
  }, []);
  return (
    <>
      <ChefBoardContainer>
        <Title
          title={"홈파티 찾기"}
          subTitle={"요리사 모집 중인 홈파티에 신청해보세요."}
          backgroundcolor={"white"}
        ></Title>
        {/* <CalenderSection>
          <CalendarTitle>
            <SubTitle>홈파티 찾기</SubTitle>
            <SubTitleDesc>요리사 모집중인 홈파티에 신청해보세요!</SubTitleDesc>
          </CalendarTitle>
          <CalendarContainer>
            <CalendarPart setSearchDate={setSearchDate} />
          </CalendarContainer>
          <CalenderSearchBtn onClick={handleShowSearch}>검색</CalenderSearchBtn>
        </CalenderSection> */}
        <SearchSection>
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
          <SearchHomeParty>
            <p>검색 결과 총 {count} 개</p>
            <HomePartyList>
              {partyList &&
                partyList.length > 0 &&
                partyList.map((party, index) => (
                  <SearchCard
                    key={`homeParty` + index}
                    onClick={() => {
                      DialogSwitch(true);
                      setDialogData(party);
                    }}
                  >
                    <SearchCardTitle>
                      <SearchCardPlace>용산구</SearchCardPlace>
                      <SearchCardDate>
                        {moment(party.schedule).format("YYYY/MM/DD")}
                      </SearchCardDate>
                    </SearchCardTitle>
                    <SearchCardIntro>{party.info}</SearchCardIntro>
                    <SearchCardPeople>
                      {party.numberOfPeople}명
                    </SearchCardPeople>
                  </SearchCard>
                ))}
            </HomePartyList>
          </SearchHomeParty>
        </SearchSection>
        <Dialog id="applyHomePartyDialog">
          <ApplyHomeParty setCancel={setCancel} partyInfo={dialogData} />
        </Dialog>
      </ChefBoardContainer>
    </>
  );
};

const ChefBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5%;
`;

const CalenderSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.sub};
`;
const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 75vh;
`;
const CalendarTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80px;
  gap: 10px;
`;
const SubTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 23px;
  font-weight: 600;
`;
const SubTitleDesc = styled.div`
  display: flex;
  justify-content: center;
  font-size: 14px;
`;

const CalenderSearchBtn = styled.button`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.main};
  width: 100px;
  height: 35px;
  padding: 8px 40px;
  border-radius: 25px;
  white-space: nowrap;
  border: none;
  font-size: 15px;
  cursor: pointer;
`;
const SearchSection = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  padding-top: 40px;
  gap: 48px;
`;
const SearchSectionContainer = styled.div`
  margin-top: 2vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 80px;
  row-gap: 60px;
`;
const SearchCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 189px;
  height: 189px;
  gap: 18px;
  box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.25);
  border-radius: 15px 15px 0px 0px;
  border: 2px solid rgba(255, 243, 234, 1);
  overflow: hidden;
  cursor: pointer;
`;
const SearchCardTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;
  background-color: ${(props) => props.theme.sub};
  padding:
    0px 30px,
    0px 30px;
  height: 41px;
  width: 100%;
  font-size: 14px;
`;
const SearchCardDate = styled.div``;

const SearchCardPlace = styled.div``;
const SearchCardIntro = styled.div`
  font-size: 18px;
  font-weight: 600;
  height: 73px;
`;
const SearchCardPeople = styled.div`
  font-size: 16px;
`;
const SearchPageSelectionLayout = styled.div``;
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
const SearchHomeParty = styled.div`
  flex-grow: 1;
  & > p {
    font-size: 16px;
    margin: 0 0 14px;
  }
`;
const HomePartyList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 18px;
`;
const Dialog = styled.dialog`
  border: 0;
  padding: 0;
  border-radius: 10px;
`;

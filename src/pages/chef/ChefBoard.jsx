import React, { useState } from 'react'
import { Title } from '../../components/Title'
import styled from 'styled-components'
import { CalendarPart } from '../../components/CalendarPart'


export const ChefBoard = () => {
  const [showSearchSec, setShowSearchSec] = useState(false);
  const [searchDate, setSearchDate] = useState();

  const handleShowSearch = () => {
    if(searchDate){
      setShowSearchSec(true);
    }
  }

  return (
    <>
    <ChefBoardContainer>
      <Title title={'게시판'} backgroundColor={'white'}></Title>
        <CalenderSection>
          <CalendarTitle>
            <SubTitle>마이요리사 찾기</SubTitle>
            <SubTitleDesc>마이요리사님 일정에 맞는 홈파티를 찾아보세요!</SubTitleDesc>
          </CalendarTitle>
          <CalendarContainer>
            <CalendarPart setSearchDate={setSearchDate}/>
          </CalendarContainer>
          <CalenderSearchBtn onClick={handleShowSearch}>검색</CalenderSearchBtn>
        </CalenderSection>
    { showSearchSec &&
    <>
      <SearchSection>
        <Title title={'홈파티찾기'} subTitle={'요리사 모집 중인 홈파티에 신청해보세요!'} backgroundColor={'white'}></Title>
        <SearchSectionContainer>
          <SearchCard>
            <SearchCardTitle>
              <SearchCardPlace>용산구</SearchCardPlace>
              <SearchCardDate>2024/08/31</SearchCardDate>
            </SearchCardTitle>
            <SearchCardIntro>한줄소개</SearchCardIntro>
            <SearchCardPeople>0명</SearchCardPeople>
          </SearchCard>
          <SearchCard>
            <SearchCardTitle>
              <SearchCardPlace>용산구</SearchCardPlace>
              <SearchCardDate>2024/08/31</SearchCardDate>
            </SearchCardTitle>
            <SearchCardIntro>한줄소개</SearchCardIntro>
            <SearchCardPeople>0명</SearchCardPeople>
          </SearchCard>
          <SearchCard>
            <SearchCardTitle>
              <SearchCardPlace>용산구</SearchCardPlace>
              <SearchCardDate>2024/08/31</SearchCardDate>
            </SearchCardTitle>
            <SearchCardIntro>한줄소개</SearchCardIntro>
            <SearchCardPeople>0명</SearchCardPeople>
          </SearchCard>
          <SearchCard>
            <SearchCardTitle>
              <SearchCardPlace>용산구</SearchCardPlace>
              <SearchCardDate>2024/08/31</SearchCardDate>
            </SearchCardTitle>
            <SearchCardIntro>한줄소개</SearchCardIntro>
            <SearchCardPeople>0명</SearchCardPeople>
          </SearchCard>
          <SearchCard>
            <SearchCardTitle>
              <SearchCardPlace>용산구</SearchCardPlace>
              <SearchCardDate>2024/08/31</SearchCardDate>
            </SearchCardTitle>
            <SearchCardIntro>한줄소개</SearchCardIntro>
            <SearchCardPeople>0명</SearchCardPeople>
          </SearchCard>
          <SearchCard>
            <SearchCardTitle>
              <SearchCardPlace>용산구</SearchCardPlace>
              <SearchCardDate>2024/08/31</SearchCardDate>
            </SearchCardTitle>
            <SearchCardIntro>한줄소개</SearchCardIntro>
            <SearchCardPeople>0명</SearchCardPeople>
          </SearchCard>
          <SearchPageSelectionLayout>
          </SearchPageSelectionLayout>
        </SearchSectionContainer>
      </SearchSection>
    </>
    }
     </ChefBoardContainer>
    </>
  )
}

const ChefBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5%;
`

const CalenderSection= styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${(props)=>props.theme.sub};
`
const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 75vh;
`
const CalendarTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80px;
  gap: 10px;
`
const SubTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 23px;
    font-weight: 600;
`
const SubTitleDesc = styled.div`
      display: flex;
    justify-content: center;
    font-size: 14px;
`

const CalenderSearchBtn = styled.button`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props)=>props.theme.main};
  width: 100px;
  height: 35px;
  padding: 8px 40px;
  border-radius: 25px;
  white-space: nowrap;
  border: none;
  font-size: 15px;
  cursor: pointer;
`
const SearchSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
`
const SearchSectionContainer = styled.div`
  margin-top: 2vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 80px;
  row-gap: 60px;

`
const SearchCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 189px;
  height: 189px;
  gap: 18px;
  box-shadow: 0px 1px 6px 0px #00000040;
  border-radius: 15px 15px 0px 0px;
  overflow: hidden;
  cursor: pointer;
`
const SearchCardTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;
  background-color: ${(props)=>props.theme.sub};
  padding: 0px 30px, 0px 30px;
  height: 41px;
  width: 100%;
  font-size: 14px;
`
const SearchCardDate = styled.div`
  
`

const SearchCardPlace = styled.div`
  
`
const SearchCardIntro = styled.div`
  font-size: 18px;
  font-weight: 600;
  height: 73px;
`
const SearchCardPeople = styled.div`
  font-size: 16px;
`
const SearchPageSelectionLayout = styled.div`
  
`

import React, { useState } from 'react'
import styled from 'styled-components'
import { Title } from '../../components/Title'
import { HomePartyCard } from '../../components/HomePartyCard'
import { useNavigate } from 'react-router-dom'

export const CustomerHistory = () => {
  const navigate = useNavigate();
  const [writtenReview, setWrittenReview] = useState(false);

  const handleReviewClick = () => {
    navigate('/reviewpage');
  }

  return (
    <>
      <Container>
        <Title title={'이용 내역'} subTitle={'고객님의 과거 이용내역을 확인해보세요!'}/>
        <HistoryContainer>
            <HomePartyCard />
            <HomePartyCard />
            <HomePartyCard />
        </HistoryContainer>
          <Title title={'후기 목록'} />
          <ReviewContainer>
            <SubtitleBox>
                <ReviewOptionNone active={writtenReview} onClick={()=>setWrittenReview(false)}>
                  후기 미작성</ReviewOptionNone>
                <ReviewOptionWritten active={writtenReview} onClick={()=>setWrittenReview(true)}> 
                  작성한 후기</ReviewOptionWritten>
            </SubtitleBox>
            <ReviewContent>

              {!writtenReview &&
                <ReviewBox>
                  <ReviewTop>
                    <DayBox>
                      <UseDay>이용 일시</UseDay>
                      <DayText>| 2024년 08월 31일</DayText>
                    </DayBox>
                    <Button onClick={()=>{handleReviewClick();}}>
                      후기 작성하기
                    </Button>
                  </ReviewTop>
                  <ReviewBottom>
                    <NameContainer>
                      <Name>홈파티 이름</Name>
                    </NameContainer>
                      <Bar>|</Bar>
                    <ChefProfileContainer>
                      <Background>
                        <Image>🧑‍🍳</Image>
                      </Background>
                      <ChefExplain>
                        {/* <NameText>홍길동 셰프</NameText>
                         */}
                      </ChefExplain>
                    </ChefProfileContainer>
                    <Bar>|</Bar>
                    <RequestContainer>

                    </RequestContainer>
                  </ReviewBottom>
                </ReviewBox>
              }
            </ReviewContent>
          </ReviewContainer>
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 33px;
  margin-bottom: 5%;
`

const HistoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  overflow-x: scroll;
`

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const SubtitleBox = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-evenly;
`

const ReviewOptionNone = styled.div`
  color: ${(props)=>props.active ? 'black' : props.theme.main};
  font-size: 18px;
  font-weight: 700;
  border-bottom: 3px solid ${(props)=>props.active ? 'black' : props.theme.main};
  cursor: pointer;
  padding-left: 50px;
  padding-right: 50px;
`

const ReviewOptionWritten = styled.div`
  color: ${(props)=>props.active ? props.theme.main : 'black'};
  font-size: 18px;
  font-weight: 700;
  border-bottom: 3px solid ${(props)=>props.active ? props.theme.main : 'black'};
  cursor: pointer;
  padding-left: 50px;
  padding-right: 50px;
`


const ReviewContent = styled.div`
  height: 825px;
  display: flex;
  align-items: center;
  background-color: ${(props)=>props.theme.sub};
  flex-direction: column;
  gap: 25px;
  overflow-y: scroll;
  padding: 25px;
`


const ReviewBox = styled.div`
  width:90%;
  height: 245px;
  border-radius: 10px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`

const ReviewTop = styled.div`
  width: 95%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 7px;
`

const DayBox = styled.div`
  display: flex;
`

const UseDay = styled.div`
  color: #919191;
  font-size: 14px;
  padding-right: 5px;
`

const DayText = styled.div`
  font-size: 14px;
  font-weight: 600;
`

const Button = styled.div`
  border: 2px solid #EACFB9;
  border-radius: 6px;
  width: 120px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: 600;
  font-size: 15px;
  background-color: #EACFB9;
  color: black;
`

const ReviewBottom = styled.div`
  width: 95%;
  height: 180px;
  border-radius: 8px;
  border: 2px solid #EACFB9;
  display: flex;
  align-items: center;
`

const NameContainer = styled.div`
  width: 250px;
  padding-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Name = styled.div`
  font-size: 20px;
  font-weight: 600;
`


const Bar = styled.div`
  font-size: 60px;
  font-weight: 100;
  color: #EACFB9;
  padding-bottom: 10px;
`

const ChefProfileContainer = styled.div`
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 100px;
`

const Background = styled.div`
  background: #EACFB9;
  width: 110px;
  height: 110px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Image = styled.div`
  font-size: 50px;
`

const ChefExplain = styled.div``

const RequestContainer = styled.div`
  
`
import React from 'react'
import styled from 'styled-components'
import { Title } from '../../components/Title'
import { HomePartyCard } from '../../components/HomePartyCard'

export const CustomerHistory = () => {
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
                <NonWritingTitle>후기 미작성</NonWritingTitle>
                <WrittenTitle>작성한 후기</WrittenTitle>
            </SubtitleBox>
            <ReviewContent>
                <ReviewBox>
                  <ReviewTop>
                    <DayBox>
                      <UseDay>이용 일시</UseDay>
                      <DayText>| 2024년 08월 31일</DayText>
                    </DayBox>
                    <Button>
                      <ButtonText>후기 작성하기</ButtonText>
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
                <ReviewBox>
                  <ReviewTop>
                    <DayBox>
                      <UseDay>이용 일시</UseDay>
                      <DayText>| 2024년 08월 31일</DayText>
                    </DayBox>
                    <Button>
                      <ButtonText>후기 작성하기</ButtonText>
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
                <ReviewBox>
                  <ReviewTop>
                    <DayBox>
                      <UseDay>이용 일시</UseDay>
                      <DayText>| 2024년 08월 31일</DayText>
                    </DayBox>
                    <Button>
                      <ButtonText>후기 작성하기</ButtonText>
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
                <ReviewBox>
                  <ReviewTop>
                    <DayBox>
                      <UseDay>이용 일시</UseDay>
                      <DayText>| 2024년 08월 31일</DayText>
                    </DayBox>
                    <Button>
                      <ButtonText>후기 작성하기</ButtonText>
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
                <ReviewBox>
                  <ReviewTop>
                    <DayBox>
                      <UseDay>이용 일시</UseDay>
                      <DayText>| 2024년 08월 31일</DayText>
                    </DayBox>
                    <Button>
                      <ButtonText>후기 작성하기</ButtonText>
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
                <ReviewBox>
                  <ReviewTop>
                    <DayBox>
                      <UseDay>이용 일시</UseDay>
                      <DayText>| 2024년 08월 31일</DayText>
                    </DayBox>
                    <Button>
                      <ButtonText>후기 작성하기</ButtonText>
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
                <ReviewBox>
                  <ReviewTop>
                    <DayBox>
                      <UseDay>이용 일시</UseDay>
                      <DayText>| 2024년 08월 31일</DayText>
                    </DayBox>
                    <Button>
                      <ButtonText>후기 작성하기</ButtonText>
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

const NonWritingTitle = styled.div`
  color: ${(props)=>props.theme.main};
  font-size: 18px;
  font-weight: 700;
  border-bottom: 5px solid ${(props)=>props.theme.main};
`

const WrittenTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  border-bottom: 3px solid black;
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
  margin-bottom: 5px;
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
  border: 1px solid #EACFB9;
  border-radius: 6px;
  width: 120px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const ButtonText = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #EACFB9;
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
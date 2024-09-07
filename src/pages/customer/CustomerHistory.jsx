import React from 'react'
import styled from 'styled-components'
import { Title } from '../../components/Title'

export const CustomerHistory = () => {
  return (
    <>
      <Container>
        <Title title={'이용 내역'} subTitle={'고객님의 과거 이용내역을 확인해보세요!'}/>
        <HistoryContainer>
            <UsageBox>
              <PictureBox>
                <Finished>
                  <TitleText>파견 완료</TitleText>
                </Finished>
                <Picture src="images/food.png"></Picture>
              </PictureBox>
                <Explain>
                  <Text1>홈파티 한 줄 소개</Text1>
                  <Text2>00월 00일 요일 오후 00시</Text2>
                </Explain>
            </UsageBox>
        </HistoryContainer>
        <Container2>
          <TitleBox>
            <Title>후기 목록</Title>
          </TitleBox>
          <ReviewContainer>
            <SubtitleBox>
              <NonWriting>
                <NonWritingTitle>후기 미작성</NonWritingTitle>
              </NonWriting>
              <Written>
                <WrittenTitle>작성한 후기</WrittenTitle>
              </Written>
            </SubtitleBox>
            <MainBox>
              <SubBox>
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
                    <BarContainer>
                      <Bar>|</Bar>
                    </BarContainer>
                    <ChefBox>
                      <Background>
                        <Image>🧑‍🍳</Image>
                      </Background>
                      <ChefExplain>
                        {/* <NameText>홍길동 셰프</NameText>
                         */}
                      </ChefExplain>
                    </ChefBox>
                  </ReviewBottom>
                </ReviewBox>
              </SubBox>
            </MainBox>
          </ReviewContainer>
        </Container2>
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const HistoryContainer = styled.div`
  height: 537px;
  display: flex;
  flex-direction: column;
`

const TitleBox = styled.div`
  height: 113px;
  background: #FFF3EA;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`


const UsageContainer = styled.div`
  height: 424px;
  display: flex;
  align-items: center;
  overflow: scroll-x;
`

const UsageBox = styled.div`
  width: 300px;
  height: 360px;
  border: 1px solid #D9D9D9;
  border-radius: 10px;
`

const PictureBox = styled.div`
  width: 300px;
  height: 280px;
`

const Finished = styled.div`
  width: 300px;
  height: 30px;
  border-bottom: 1px solid #D9D9D9;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const TitleText = styled.div`
  padding-left: 15px;
  font-size: 14px;
`

const Picture = styled.img`
  width: 300px;
  height: 250px;
  border-bottom: 1px solid #D9D9D9;
`

const Explain = styled.div`
  width: 300px;
  height: 80px;
`

const Text1 = styled.div`
  padding-top: 10px;
  padding-left: 15px;
`

const Text2 = styled.div`
  padding-top: 3px;
  padding-left: 15px;
`

const Container2 = styled.div`
  width: 1370px;
  height: 1020px;
  padding-top: 30px;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const ReviewContainer = styled.div`
  width: 1370px;
  height: 875px;
  display: flex;
  flex-direction: column;
`

const SubtitleBox = styled.div`
  width: 1370px;
  height: 50px;
  display: flex;
  justify-content: space-evenly;
`

const NonWriting = styled.div`
  width: 280px;
  border-bottom: 5px solid #FA7C15;
  display: flex;
  justify-content: center;
  align-items: center;
`

const NonWritingTitle = styled.div`
  color: #FA7C15;
  font-size: 18px;
  font-weight: 700;
`

const Written = styled.div`
  width: 280px;
  border-bottom: 3px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`

const WrittenTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
`

const MainBox = styled.div`
  width: 1370px;
  height: 825px;
  background-color: #FFF3EA;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SubBox = styled.div`
  overflow: scroll-y;
  width: 1320px;
  height: 730px;
`

const ReviewBox = styled.div`
  width: 1320px;
  height: 230px;
  border-radius: 10px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ReviewTop = styled.div`
  width: 1260px;
  height: 30px;
  padding-bottom: 3px;
  display: flex;
  justify-content: space-between;
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
`

const ButtonText = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #EACFB9;
`

const ReviewBottom = styled.div`
  width: 1260px;
  height: 165px;
  border-radius: 8px;
  border: 2px solid #EACFB9;
  display: flex;
`

const NameContainer = styled.div`
  width: 250px;
  height: 165px;
  padding-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Name = styled.div`
  font-size: 20px;
  font-weight: 600;
`

const BarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Bar = styled.div`
  font-size: 60px;
  font-weight: 100;
  color: #EACFB9;
  padding-bottom: 10px;
`

const ChefBox = styled.div`
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
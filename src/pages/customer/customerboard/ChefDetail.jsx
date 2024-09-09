import React from 'react'
import styled from 'styled-components'

export const ChefDetail = () => {
  return (
    <>
      <Container>
        <Container1>
          <Container2>
            <TitleBox>
              <NameText>[홍길동 셰프]</NameText>
              <ProfileText>프로필</ProfileText>
            </TitleBox>
          </Container2>
          <Container3>
            <Middle>
              <ChefBox>
                <Background>
                  <Image>🧑‍🍳</Image>
                </Background>
                <NameText2>홍길동 셰프</NameText2>
                <History>[경력] 5년 | {'('}희망 시급{')'}</History>
                <ExtraBox>
                  <SearchText>이탈리안</SearchText>
                  <SearchText>플레이팅</SearchText>
                </ExtraBox>
              </ChefBox>
              <ExplainBox>
                <HistoryBox>
                  <SubTitle>[대표 경력]</SubTitle>
                  <Text>00호텔 5년 동안 메인 셰프로서 근무</Text>
                </HistoryBox>
                <IntroBox>
                  <SubTitle>[한 줄 소개]</SubTitle>
                  <Text>~~~~~</Text>
                  <Picture></Picture>
                </IntroBox>
                <CourseBox>
                  <SubTitle>[코스 상세]</SubTitle>
                  <TextBox>
                    <Text2>{'('}시그니처 코스 구성 및 메뉴 설명{')'}</Text2>
                  </TextBox>
                </CourseBox>
              </ExplainBox>
            </Middle>
          </Container3>
          <Container4>
            <RequestButton>
              <RequestText>요청</RequestText>
            </RequestButton>
          </Container4>
        </Container1>
      </Container>
    </>
  )
}

const Container = styled.div`
  width: 100vw;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container1 = styled.div`
  width: 635px;
  height: 530px;
  border-radius: 10px;
  border: 1px solid #D9D9D9;
`

const Container2 = styled.div`
  width: 635px;
  height: 55px;
  border-radius: 10px 10px 0px 0px;
  background-color: #FFF3EA;
  display: flex;
  justify-content: center;
  align-items: center;
`

const TitleBox = styled.div`
  height: 22px;
  display: flex;
`

const NameText = styled.div`
  font-size: 17px;
  font-weight: 800;
`

const ProfileText = styled.div`
  font-size: 17px;
  font-weight: 500;
  padding-left: 5px;
`

const Container3 = styled.div`
  width: 635px;
  height: 362px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Middle = styled.div`
  width: 575px;
  height: 327px;
  display: flex;
  justify-content: space-between;
  padding-top: 35px;
`

const ChefBox = styled.div`
  width: 194px;
  height: 300px;
  padding: 20px 0px 20px 0px;
  border-radius: 8px;
  border: 1px solid #B65C1380;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Background = styled.div`
  width: 170px;
  height: 170px;
  background-color: #EACFB9;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`

const Image = styled.div`
  font-size: 80px;
`

const NameText2 = styled.div`
  font-size: 20px;
  font-weight: 800;
  padding-top: 20px;
`

const History = styled.div`
  color: #919191;
  padding-top: 5px;
  padding-bottom: 20px;
  font-size: 14px;
`

const ExtraBox = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
  padding-top: 5px;
`

const SearchText = styled.div`
  color: #B65C1380;
  border-radius: 14px;
  background-color: white;
  border: 2px solid #B65C1380;
  padding: 5px 10px;
  font-size: 12px;
  font-weight: 600;
`

const ExplainBox = styled.div`
  width: 363px;
  height: 340px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const HistoryBox = styled.div``

const IntroBox = styled.div``

const CourseBox = styled.div``

const SubTitle = styled.div`
  font-size: 14px;
  color: #919191;
  padding-bottom: 5px;
`

const TextBox = styled.div`
  width: 363px;
  height: 85px;
  border-radius: 10px;
  border: 1.7px solid #D9D9D9;
`

const Text = styled.div`
  font-weight: 600;
  font-size: 17px;
  padding-bottom: 5px;
`

const Text2 = styled.div`
  font-weight: 600;
  font-size: 17px;
  padding-left: 15px;
  padding-top: 13px;
`

const Picture = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  border: 1px solid black;
`

const Container4 = styled.div`
  width: 635px;
  height: 125px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const RequestButton = styled.div`
  width: 208px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #FA7C15;
`

const RequestText = styled.div`
  color: white;
`
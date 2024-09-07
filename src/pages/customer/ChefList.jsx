import React from 'react'
import styled from 'styled-components'
import { Title } from '../../components/Title'

export const ChefList = () => {
  return (
    <>
      <Container>
          <Title title={'활동 가능한 요리사 리스트'} subTitle={'고객님에게 맞는 마이요리사님을 찾아보세요!'}/>
          <ContentContainer>
            <ChefCardContainer>
            <ContainerTop>
                <Background>
                  <Image>🧑‍🍳</Image>
                </Background>  
                <ExplainBox>
                  <NameBox>
                    <Name>홍길동 셰프</Name>
                    <ExtraBox>
                      <SearchText>이탈리안</SearchText>
                      <SearchText>플레이팅</SearchText>
                    </ExtraBox>
                  </NameBox>
                  <DetailBox>
                    <Detail1>
                      <Content>[대표 경력]</Content>
                      <Text>00호텔 5년 동안 메인 셰프로서 근무</Text>
                    </Detail1>
                    <Bar>|</Bar>
                    <Detail2>
                      <Content>[활동 연수]</Content>
                      <Text>5년 | {'('}희망 시급{')'}</Text>
                    </Detail2>
                    <Bar>|</Bar>
                    <Detail3>
                      <Content>[한 줄 소개]</Content>
                      <Text>~~~~~~~~~~</Text>
                    </Detail3>
                  </DetailBox>
                </ExplainBox>   
              </ContainerTop>
              <ContainerMiddle>
                <Border></Border>
              </ContainerMiddle>
              <ContainerBottom>
                <Picture src="images/사진 스크롤.png"></Picture>
              </ContainerBottom>
            </ChefCardContainer>
            <ChefCardContainer>
            <ContainerTop>
                <Background>
                  <Image>🧑‍🍳</Image>
                </Background>  
                <ExplainBox>
                  <NameBox>
                    <Name>홍길동 셰프</Name>
                    <ExtraBox>
                      <SearchText>이탈리안</SearchText>
                      <SearchText>플레이팅</SearchText>
                    </ExtraBox>
                  </NameBox>
                  <DetailBox>
                    <Detail1>
                      <Content>[대표 경력]</Content>
                      <Text>00호텔 5년 동안 메인 셰프로서 근무</Text>
                    </Detail1>
                    <Bar>|</Bar>
                    <Detail2>
                      <Content>[활동 연수]</Content>
                      <Text>5년 | {'('}희망 시급{')'}</Text>
                    </Detail2>
                    <Bar>|</Bar>
                    <Detail3>
                      <Content>[한 줄 소개]</Content>
                      <Text>~~~~~~~~~~</Text>
                    </Detail3>
                  </DetailBox>
                </ExplainBox>   
              </ContainerTop>
              <ContainerMiddle>
                <Border></Border>
              </ContainerMiddle>
              <ContainerBottom>
                <Picture src="images/사진 스크롤.png"></Picture>
              </ContainerBottom>
            </ChefCardContainer>
            <ChefCardContainer>
            <ContainerTop>
                <Background>
                  <Image>🧑‍🍳</Image>
                </Background>  
                <ExplainBox>
                  <NameBox>
                    <Name>홍길동 셰프</Name>
                    <ExtraBox>
                      <SearchText>이탈리안</SearchText>
                      <SearchText>플레이팅</SearchText>
                    </ExtraBox>
                  </NameBox>
                  <DetailBox>
                    <Detail1>
                      <Content>[대표 경력]</Content>
                      <Text>00호텔 5년 동안 메인 셰프로서 근무</Text>
                    </Detail1>
                    <Bar>|</Bar>
                    <Detail2>
                      <Content>[활동 연수]</Content>
                      <Text>5년 | {'('}희망 시급{')'}</Text>
                    </Detail2>
                    <Bar>|</Bar>
                    <Detail3>
                      <Content>[한 줄 소개]</Content>
                      <Text>~~~~~~~~~~</Text>
                    </Detail3>
                  </DetailBox>
                </ExplainBox>   
              </ContainerTop>
              <ContainerMiddle>
                <Border></Border>
              </ContainerMiddle>
              <ContainerBottom>
                <Picture src="images/사진 스크롤.png"></Picture>
              </ContainerBottom>
            </ChefCardContainer>
          </ContentContainer>
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 1216px;
  background: #FFF3EA;
  flex-direction: column;
  align-items: center;
  padding-bottom: 5%;
`


const ContentContainer = styled.div`
  width: 915px;
  height: 1089px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const ChefCardContainer = styled.div`
  width: 915px;
  height: 353px;
  background: white;
  border: Mixed solid #B65C134D;
  display: flex;
  flex-direction: column;
`

const ContainerTop = styled.div`
  width: 834px;
  height: 85px;
  padding: 20px 40px;
  display: flex;
`

const Background = styled.div`
  width: 85px;
  height: 85px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #B65C134D;
  border-radius: 8px;
`

const Image = styled.div`
  font-size: 40px;
`

const ExplainBox = styled.div`
  height: 85px;
  display: flex;
  flex-direction: column;
  padding-left: 40px;
`

const NameBox = styled.div`
  display: flex;
  padding-top: 7px;
  padding-bottom: 5px;
`

const Name = styled.div`
  font-size: 18px;
  font-weight: 600;
  padding-right: 60px;
`

const ExtraBox = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
  
`

const SearchText = styled.div`
  color: #B65C1380;
  border-radius: 14px;
  background-color: white;
  border: 2px solid #B65C1380;
  padding: 5px 10px;
  font-size: 11px;
  font-weight: 600;
`

const DetailBox = styled.div`
  display: flex;
  justify-content: space-between;
`

const Detail1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`

const Detail2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 160px;
`

const Detail3 = styled.div``

const Content = styled.div`
  color: #919191;
  font-size: 13.5px;
`

const Text = styled.div``

const Bar = styled.div`
  color: #919191;
  font-size: 20px;
  font-weight: 300;
  padding-top: 5px;
  padding-right: 30px;
`

const ContainerMiddle = styled.div`
  width: 835px;
  padding-left: 40px;
`

const Border = styled.div`
  width: 835px;
  border: 1.7px solid #B65C134D;
`

const ContainerBottom = styled.div`
  width: 835px;
  height: 188px;
  display: flex;
  overflow: scroll-x;
  padding: 20px 40px;
`

const Picture = styled.img`
  width: 188px;
  height: 188px;
`
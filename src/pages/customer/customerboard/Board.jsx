import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

export const Board = () => {
  return (
    <>
      <Top>
        <BoardTitle>게시판</BoardTitle>
      </Top>
      <Middle>
        <Container1>
          <FindTitle>마이요리사 찾기</FindTitle>
          <FindText>고객님에게 맞는 요리사님을 찾아보세요!</FindText>
        </Container1>
        <Container2>
          <InputBox>
            <Input>대표 경력, 해시태그 등 입력</Input>
            <SignBox2>
              <Bar>|</Bar>
              <SearchIcon icon={ faMagnifyingGlass }/>
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
            <Result>검색 결과:</Result>
          </ResultBox>
        </Container2>
        <SignBox>
          <Sign></Sign>
        </SignBox>
      </Middle>
      <Bottom>
        <Container3>
          <Container4>
            <PartyTitle>홈파티 일정 올리기</PartyTitle>
            <PartySub>계획 중인 홈파티 일정을 올려 마이요리사를 구해보세요!</PartySub>
            <NickBox>
              <Kitchen>현재 설정 중인 주방: </Kitchen>
              <Nick>[주방 닉네임]</Nick>
            </NickBox>
            <UploadButton>
              <Upload>홈파티 게시</Upload>
            </UploadButton>
          </Container4>
          <Container5>
            <TitleBox>
              <ChefTitle>활동 중인 마이요리사</ChefTitle>
            </TitleBox>
            <ChefMiddle>
              <ChefBox>
                <Background>
                  <Image>🧑‍🍳</Image>
                </Background>
                <NameText>홍길동 셰프</NameText>
                <History>[경력] 5년 | {'('}희망 시급{')'}</History>
                <ExtraBox>
                  <SearchText>이탈리안</SearchText>
                  <SearchText>플레이팅</SearchText>
                </ExtraBox>
              </ChefBox>
              <ChefBox>
                <Background>
                  <Image>🧑‍🍳</Image>
                </Background>
                <NameText>홍길동 셰프</NameText>
                <History>[경력] 5년 | {'('}희망 시급{')'}</History>
                <ExtraBox>
                  <SearchText>이탈리안</SearchText>
                  <SearchText>플레이팅</SearchText>
                </ExtraBox>
              </ChefBox>
              <ChefBox>
                <Background>
                  <Image>🧑‍🍳</Image>
                </Background>
                <NameText>홍길동 셰프</NameText>
                <History>[경력] 5년 | {'('}희망 시급{')'}</History>
                <ExtraBox>
                  <SearchText>이탈리안</SearchText>
                  <SearchText>플레이팅</SearchText>
                </ExtraBox>
              </ChefBox>
              <ChefBox>
                <Background>
                  <Image>🧑‍🍳</Image>
                </Background>
                <NameText>홍길동 셰프</NameText>
                <History>[경력] 5년 | {'('}희망 시급{')'}</History>
                <ExtraBox>
                  <SearchText>이탈리안</SearchText>
                  <SearchText>플레이팅</SearchText>
                </ExtraBox>
              </ChefBox>
            </ChefMiddle>
            <ChefBottom>
              <Box>
                <NumNow>1</NumNow>
                <Num>2</Num>
                <Num>3</Num>
                <Num>...</Num>
                <Num>67</Num>
                <Num>68</Num>
                <NextSign></NextSign>
                <NextSign2>
                  <NextSign></NextSign><NextSign></NextSign>
                </NextSign2>
              </Box>
            </ChefBottom>
          </Container5>
        </Container3>
      </Bottom>
    </>
  )
}

const Top = styled.div`
  height: 115px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const BoardTitle = styled.div`
  font-weight: 900;
  font-size: 24px;
`

const Middle = styled.div`
  width: 100vw;
  height: 350px;
  background: #FFF3EA;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Container1 = styled.div`
  width: 260px;
  height: 80px;
  padding-top: 45px;
  display: flex;
  flex-direction: column;
`

const FindTitle = styled.div`
  text-align: center;
  font-weight: 800;
  font-size: 22px;
  padding-bottom: 10px;
`

const FindText = styled.div`
  text-align: center;
  font-weight: 600;
  font-size: 14px;
`

const Container2 = styled.div`
  width: 600px;
  // height: 121px;
`

const InputBox = styled.div`
  border-radius: 6px;
  width: 600px;
  height: 45px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Input = styled.div`
  color: #919191;
  padding-left: 15px;
`

const SignBox2 = styled.div`
  display: flex;
`

const Bar = styled.div`
  padding-right: 10px;
  font-size: 14px;
  color: #D9D9D9;
`

const SearchIcon = styled(FontAwesomeIcon)`
  color: #919191;
  padding-right: 10px;
  font-size: 22px;
`

const SuggestBox = styled.div`
  width: 600px;
  height: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Suggest = styled.div`
  padding-left: 20px;
  font-size: 14px;
`

const SearchBox = styled.div`
  width: 600px;
  display: flex;
`

const SearchBox2 = styled.div`
  padding-right: 10px;
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

const ResultBox = styled.div`
  width: 600px;
  height: 40px;
`

const Result = styled.div`
  padding-left: 20px;
  padding-top: 25px;
`

const SignBox = styled.div`
  padding-top: 10px;
`

const Sign = styled.div`
  content: '';
  width: 20px;
  height: 20px;
  border-top: 3.5px solid #B65C1380;
  border-right: 3.5px solid #B65C1380;
  display: inline-block;
  transform: rotate(135deg);
  position: absolute;
`

const Bottom = styled.div`
  height: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container3 = styled.div`
  width: 1360px;
  height: 490px;
  display: flex;
  justify-content: space-between;
`

const Container4 = styled.div`
  width: 406px;
  height: 490px;
  border-radius: 8px;
  background-color: #FFF3EA;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const PartyTitle = styled.div`
  font-size: 22px;
  font-weight: 800;
`

const PartySub = styled.div`
  font-size: 14px;
  font-weight: 600;
  padding-top: 10px;
`

const NickBox = styled.div`
  text-decoration: underline;
  display: flex;
  padding-top: 15px;
  padding-bottom: 25px;
`

const Kitchen = styled.div`
  font-size: 12px;
  padding-top: 4px;
`

const Nick = styled.div`
  font-weight: 600;
  font-size: 14px;
`

const UploadButton = styled.div`
  width: 208px;
  height: 40px;
  background-color: #FA7C15;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Upload = styled.div`
  color: white;
  font-weight: 600;
  font-size: 17px;
`

const Container5 = styled.div`
  width: 924px;
  height: 490px;
  border-radius: 8px;
  background-color: #FFF3EA;
`

const TitleBox = styled.div`
  width: 864px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ChefTitle = styled.div`
  font-size: 22px;
  font-weight: 800;
`

const ChefMiddle = styled.div`
  width: 850px;
  height: 310px;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
`

const ChefBox = styled.div`
  width: 198px;
  height: 310px;
  border-radius: 10px;
  border: 2px solid #B65C1380;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

const NameText = styled.div`
  font-size: 20px;
  font-weight: 800;
  padding-top: 10px;
`

const History = styled.div`
  color: #919191;
  padding-top: 5px;
  padding-bottom: 20px;
`

const ExtraBox = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
`

const ChefBottom = styled.div`
  width: 864px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 40px;
`

const Box = styled.div`
  width: 350px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NumNow = styled.div`
  cont-size: 17px;
  border-radius: 10px;
  background-color: #FA7C15;
  padding: 8px 15px;
  color: white;
`

const Num = styled.div`
  font-size: 17px;
  padding: 8px 15px;
`

const NextSign = styled.div`
  content: '';
  width: 5.5px;
  height: 5.5px;
  border-top: 1px solid;
  border-right: 1px solid;
  transform: rotate(45deg);
`

const NextSign2 = styled.div`
  display: flex;
  padding-left: 20px;
`
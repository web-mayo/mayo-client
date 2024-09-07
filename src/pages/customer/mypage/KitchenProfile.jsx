import React from 'react'
import styled from 'styled-components'

export const KitchenProfile = () => {
  return (
    <>
      <Top>
        <Title>주방 프로필 작성</Title>
      </Top>
      <Middle>
        <Container>
          <Container1>
            <Container3>
              <CusText>주방 닉네임</CusText>
            </Container3>
            <Container4>
              <Box>
                <ExText>최대 10글자까지 자유롭게 수정 가능.</ExText>
              </Box>
            </Container4>
          </Container1>
          <Container2>
            <Container3>
              <CusText>주소</CusText>
            </Container3>
            <Container4>
              <Box></Box>
            </Container4>
          </Container2>
          <Container1>
            <Container3>
              <CusText>상세주소</CusText>
            </Container3>
            <Container4>
              <Box>
                <ExText>000동 000호</ExText>
              </Box>
            </Container4>
          </Container1>
          <Container1>
            <Container3>
              <CusText>화구 종류</CusText>
            </Container3>
            <Container4>
              <Box2>
                <Box4>
                  <Type>
                    <TextBox>
                      <TypeText>화구 종류를 선택해주세요</TypeText>
                    </TextBox>
                    <SignBox>
                      <TypeSign>▼</TypeSign>
                    </SignBox>
                  </Type>
                </Box4>
                <Box4>
                  <Count>
                    <CountText>화구 개수를 입력해주세요.</CountText>
                  </Count>
                </Box4>
              </Box2>
            </Container4>
          </Container1>
          <Container1>
            <Container3>
              <CusText>주방 사진</CusText>
            </Container3>
            <Container4>
            <Box2>
              <Box3>
                <UpButton>
                  <UpText>사진 업로드{'('}최대 10MB{')'}</UpText>  
                </UpButton>
              </Box3>
            </Box2>
            </Container4>
          </Container1>
          <Container1>
            <Container3>
              <CusText>조리 기구 및 도구</CusText>
            </Container3>
            <Container5>
              <ElementBox>
                <ColBox>
                  <Element>
                    <CheckBox></CheckBox>
                    <ElementText>오븐</ElementText>
                  </Element>
                  <Element>
                    <CheckBox></CheckBox>
                    <ElementText>전기압력솥밥</ElementText>
                  </Element>
                  <Element>
                    <CheckBox></CheckBox>
                    <ElementText>전기그릴</ElementText>
                  </Element>
                </ColBox>
                <ColBox>
                  <Element>
                    <CheckBox></CheckBox>
                    <ElementText>전자레인지</ElementText>
                  </Element>
                  <Element>
                    <CheckBox></CheckBox>
                    <ElementText>믹서기</ElementText>
                  </Element>
                  <Element>
                    <CheckBox></CheckBox>
                    <ElementText>튀김기</ElementText>
                  </Element>
                </ColBox>
                <ColBox>
                
                </ColBox>
                <ColBox>

                </ColBox>
              </ElementBox>
              <Box5>
                <ExText>기타 조리 기구 입력{'('}나열{')'}</ExText>
                <ExText2>{'('}ex. 솥밥기계, 수비드 머신{')'}</ExText2>
              </Box5>
            </Container5>
          </Container1>
          <Container1>
            <Container3>
              <CusText>주방 관련 요청사항</CusText>
            </Container3>
            <Container4>
              <Box>
                <ExText>주방에 관련된 요청사항을 작성해주세요.</ExText>
              </Box>
            </Container4>
          </Container1>
          <Container2>
            <Container3>
              <CusText>주방 관련 특이사항</CusText>
            </Container3>
            <Container4>
              <Box>
                <ExText>예시{')'} 음식물 이송설비 시스템이 있습니다.</ExText>
              </Box>
            </Container4>
          </Container2>
        </Container>
      </Middle>
      <Bottom>
        <Button>
          <SaveText>저장하기</SaveText>
        </Button>
      </Bottom>
    </>
  )
}

const Top = styled.div`
  width: 100vw;
  height: 115px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.div`
  font-weight: 900;
  font-size: 22px;
`
const Middle = styled.div`
  height: 948px;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  width: 1098px;
  height: 948px;
  border: 1px solid #D9D9D9;
  display: flex;
  flex-direction: column;
`

const Container1 = styled.div`
  border-bottom: 1px solid #D9D9D9;
  flex-grow: 1;
  display: flex;
`

const Container2 = styled.div`
  flex-grow: 1;
  display: flex;
`

const Container3 = styled.div`
  flex-grow: 1;
  border-right: 1px solid #D9D9D9;
  background: #FFF3EA;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 282px;
`

const Container4 = styled.div`
  width: 816px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const CusText = styled.div`
  font-weight: 700;
  padding-left: 60px;
`

const Box = styled.div`
  width: 794.49px;
  height: 99px;
  border-radius: 8px;
  border: 1px solid #D9D9D9;
`

const Container5 = styled.div`
  width: 816px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ElementBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 449px;
  height: 96px;
  padding-top: 7px;
`

const ColBox = styled.div`
  display: flex;
  
`

const Element = styled.div`
  display: flex;
  width: 140px;
`

const CheckBox = styled.div`
  width: 15px;
  height: 15px;
  border: 1.5px solid;
  border-radius: 5px;
`

const ElementText = styled.div`
  padding-left: 8px;
  font-size: 14px;
`

const Box5 = styled.div`
  width: 300px;
  height: 99px;
  border-radius: 8px;
  border: 1px solid #D9D9D9;
`

const ExText = styled.div`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  color: #B3B3B3;
  padding-left: 20px;
  padding-top: 20px;
`

const ExText2 = styled.div`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  color: #B3B3B3;
  padding-left: 20px;
  padding-top: 3px;
`

const Box2 = styled.div`
  width: 794.49px;
  height: 99px;
  display: flex;
`
const Box4 = styled.div`
  padding-right: 10px;
  width: 239px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Type = styled.div`
  width: 239px;
  height: 50px;
  border: 1px solid black;
  border-radius: 4px;
  display: flex;
`
const TextBox = styled.div`
  width: 194px;
  height: 50px;
  border-right: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`

const TypeText = styled.div`
  font-size: 15px;
  font-weight: 500;
`

const SignBox = styled.div`
  width: 45px;
  height: 50px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: #D9D9D9;
  display: flex;
  justify-content: center;
  align-items: center;
`

const TypeSign = styled.div`
  font-size: 20px;
`

const Count = styled.div`
  width: 239px;
  height: 50px;
  border: 1px solid #D9D9D9;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CountText = styled.div`
  font-family: Roboto;
  font-size: 15px;
  font-weight: 400;
  color: #B3B3B3;
`

const Box3 = styled.div`
  width: 215px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const UpButton = styled.div`
  border-radius: 8px;
  border: 1px solid #8E8E8E;
  background-color: #D9D9D9;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const UpText = styled.div`
  font-size: 15px;
`

const Bottom = styled.div`
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Button = styled.div`
  width: 307px;
  height: 48px;
  border-radius: 8px;
  background: #FA7C15;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SaveText = styled.div`
  font-weight: 700;
  font-size: 17px;
  color: white;
`

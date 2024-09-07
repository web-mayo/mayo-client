import React from 'react'
import styled from 'styled-components'

export const UserKitchenWrite = () => {
  return (
    <>
      <Top>
        <Title>주방 프로필 수정</Title>
      </Top>
      <Middle>
        <Container>
          <Info>
            <InfoLabelContainer>
              <InfoLabel>주방 닉네임</InfoLabel>
            </InfoLabelContainer>
            <InfoValueContainer>
              <InfoValueTextArea placeholder="최대 10글자까지 자유롭게 수정 가능.">
              </InfoValueTextArea>
            </InfoValueContainer>
          </Info>
          <Info>
            <InfoLabelContainer>
              <InfoLabel>주소</InfoLabel>
            </InfoLabelContainer>
            <InfoValueContainer>
              <InfoValueTextArea></InfoValueTextArea>
            </InfoValueContainer>
          </Info>
          <Info>
            <InfoLabelContainer>
              <InfoLabel>상세주소</InfoLabel>
            </InfoLabelContainer>
            <InfoValueContainer>
              <InfoValueTextArea placeholder="000동 000호">
              </InfoValueTextArea>
            </InfoValueContainer>
          </Info>
          <Info>
            <InfoLabelContainer>
              <InfoLabel>화구 종류</InfoLabel>
            </InfoLabelContainer>
            <InfoValueContainer>
              
            </InfoValueContainer>
          </Info>
          <Container1>
            <InfoLabelContainer>
              <InfoLabel>주방 사진</InfoLabel>
            </InfoLabelContainer>
            <InfoValueContainer>
            <InfoValueTextArea2>
              <InfoValueTextArea3>
                <UpButton>
                  <UpText>사진 업로드{'('}최대 10MB{')'}</UpText>  
                </UpButton>
              </InfoValueTextArea3>
            </InfoValueTextArea2>
            </InfoValueContainer>
          </Container1>
          <Container1>
            <InfoLabelContainer>
              <InfoLabel>조리 기구 및 도구</InfoLabel>
            </InfoLabelContainer>
            <InfoValueContainer>
              <InfoValueTextArea></InfoValueTextArea>
            </InfoValueContainer>
          </Container1>
          <Container1>
            <InfoLabelContainer>
              <InfoLabel>주방 관련 요청사항</InfoLabel>
            </InfoLabelContainer>
            <InfoValueContainer>
              <InfoValueTextArea>
                <ExText>주방에 관련된 요청사항을 작성해주세요.</ExText>
              </InfoValueTextArea>
            </InfoValueContainer>
          </Container1>
          <Info>
            <InfoLabelContainer>
              <InfoLabel>주방 관련 특이사항</InfoLabel>
            </InfoLabelContainer>
            <InfoValueContainer>
              <InfoValueTextArea>
                <ExText>예시{')'} 음식물 이송설비 시스템이 있습니다.</ExText>
              </InfoValueTextArea>
            </InfoValueContainer>
          </Info>
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

const Info = styled.div`
  flex-grow: 1;
  display: flex;
`

const InfoLabelContainer = styled.div`
  flex-grow: 1;
  border-right: 1px solid #D9D9D9;
  background: #FFF3EA;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 282px;
`

const InfoValueContainer = styled.div`
  width: 816px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const InfoLabel = styled.div`
  font-weight: 700;
  padding-left: 60px;
`

const InfoValueTextArea = styled.div`
  width: 794.49px;
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

const InfoValueTextArea2 = styled.div`
  width: 794.49px;
  height: 99px;
  display: flex;
`
const InfoValueTextArea4 = styled.div`
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
const TextInfoValueTextArea = styled.div`
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

const SignInfoValueTextArea = styled.div`
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

const InfoValueTextArea3 = styled.div`
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
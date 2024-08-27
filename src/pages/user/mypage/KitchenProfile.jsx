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
              <CusText>주소</CusText>
            </Container4>
            <Container3>
              <CusText>상세주소</CusText>
            </Container3>
            <Container3>
              <CusText>화구 종료</CusText>
            </Container3>
            <Container3>
              <CusText>주방 사진</CusText>
            </Container3>
            <Container3>
              <CusText>조리 기구 및 도구</CusText>
            </Container3>
            <Container3>
              <CusText>주방 관련 요청사항</CusText>
            </Container3>
            <Container4>
              <CusText>주방 관련 특이사항</CusText>
            </Container4>
          </Container1>
          <Container2>
            <Container5>
              {/* <Box>최대 10글자까지 자유롭게 수정 가능.</Box> */}
            </Container5>
            <Container6>
              {/* <Box></Box> */}
            </Container6>
            <Container5>
              {/* <Box>000동 000호</Box> */}
            </Container5>
            <Container5>

            </Container5>
            <Container5>

            </Container5>
            <Container5>
              {/* <Box></Box> */}
            </Container5>
            <Container5>
              {/* <Box>주방에 관련된 요청사항을 작성해주세요.</Box> */}
            </Container5>
            <Container6>
              {/* <Box>예시{')'} 음식물 이송설비 시스템이 있습니다.</Box> */}
            </Container6>
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
`

const Container1 = styled.div`
  flex-basis: 282px;
  height: 948px;
  border-right: 1px solid #D9D9D9;
  display: flex;
  flex-direction: column;
`

const Container2 = styled.div`
  flex-basis: 816px;
  height: 948px;
  display: flex;
  flex-direction: column;
`

const Container3 = styled.div`
  flex-grow: 1;
  border-bottom: 1px solid #D9D9D9;
  background: #FFF3EA;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Container4 = styled.div`
  flex-grow: 1;
  background: #FFF3EA;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const CusText = styled.div`
  font-weight: 700;
  padding-left: 60px;
`
const Container5 = styled.div`
  border-bottom: 1px solid #D9D9D9;
  flex-grow: 1;
`

const Container6 = styled.div`
  flex-grow: 1;
`

const Box = styled.div``


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

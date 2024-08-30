import React from 'react'
import styled from 'styled-components'

export const HomeParty = () => {
  return (
    <>
      <Container>
        <Container1>
          <Container2>
            <Title>홈파티 일정을 올려보세요!</Title>
          </Container2>
          <Container3>
            <Container4>
              <Container5>
                <Inform>홈파티 한 줄 소개</Inform>
                <InputBox>
                  <Input>예시{')'} 4인 가족의 양식 코스</Input>
                </InputBox>
              </Container5>
              <Container5>
                <Inform>일시</Inform>
                <InputBox>
                  <Input>00월 00일 요일 오후 00시</Input>
                </InputBox>
              </Container5>
              <Container5>
                <Inform>인원 수</Inform>
                <InputBox>
                  <Input>어른과 어린이를 구분해서 작성해주세요.</Input>
                </InputBox>
              </Container5>
              <Container7>
                <Inform>요청 서비스 범위</Inform>
                <RangeBox>
                  <CheckBox></CheckBox>
                  <RangeText>코스 구성</RangeText>
                </RangeBox>
                <RangeBox>
                  <CheckBox></CheckBox>
                  <RangeText>재료 선정</RangeText>
                </RangeBox>
                <RangeBox>
                  <CheckBox></CheckBox>
                  <RangeText>재료 구입</RangeText>
                </RangeBox>
                <RangeBox>
                  <CheckBox></CheckBox>
                  <RangeText>뒷정리</RangeText>
                </RangeBox>
              </Container7>
              <Container8>
                <Inform>마이요리사에게 남길 말씀</Inform>
                <InputBox2>
                  <Input2>요청하고 싶은 음식, 알레르기 정보 등 자유롭게 남겨주세요!</Input2>
                </InputBox2>
              </Container8>
            </Container4>
            <Container6>
              <SaveButton>
                <SaveText>수정 정보 저장</SaveText>
              </SaveButton>
            </Container6>
          </Container3>
        </Container1>
      </Container>
    </>
  )
}

const Container = styled.div`
  height: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container1 = styled.div`
  width: 437px;
  height: 770px;
  border-radius: 10px;
  border: 1px solid #D9D9D9;
`

const Container2 = styled.div`
  width: 437px;
  height: 55px;
  border-radius: 10px 10px 0px 0px;
  border-bottom: 1px solid #D9D9D9;
  background-color: #FFF3EA;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Title = styled.div`
  font-family: var(--sds-typography-body-font-family);
  font-size: 18px;
  font-weight: 600;
`

const Container3 = styled.div`
  height: 708px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Container4 = styled.div`
  width: 363px;
  height: 581px;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Container5 = styled.div`
  height: 70px;
  display: flex;
  flex-direction: column;
`

const Inform = styled.div`
  font-weight: 600;
  padding-bottom: 8px;
  font-size: 14px;
`

const InputBox = styled.div`
  border-radius: 8px;
  border: 1.5px solid #D9D9D9;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Input = styled.div`
  padding-left: 16px;
  font-weight: 400;
  color: #8E8E8E;
`

const Container7 = styled.div`
  height: 140px;
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
`
const RangeBox = styled.div`
  display: flex;
  font-weight: 500;
  padding-top: 3px;
`

const CheckBox = styled.div`
  width: 17px;
  height: 17px;
  border: 1.5px solid;
  border-radius: 6px;
`

const RangeText = styled.div`
  padding-left: 10px;
  padding-bottom: 10px;
`

const Container8 = styled.div``

const InputBox2 = styled.div`
  border-radius: 8px;
  border: 1.5px solid #D9D9D9;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Input2 = styled.div`
  padding-top: 10px;
  padding-left: 16px;
  padding-right: 16px;
  color: #8E8E8E;
  font-weight: 400;
`

const Container6 = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
`

const SaveButton = styled.div`
  width: 208px;
  height: 40px;
  border-radius: 8px;
  background: #FA7C15;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SaveText = styled.div`
  color: white;
`
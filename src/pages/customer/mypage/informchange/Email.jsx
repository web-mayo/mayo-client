import React from 'react'
import styled from 'styled-components'

export const Email = () => {
  return (
    <>
      <Container>
        <Container1>
          <Container2>
            <Title>회원정보 수정</Title>
          </Container2>
          <Container3>
            <Container4>
              <Container5>
                <Inform>이름</Inform>
                <InputBox>
                  <Input>이름 입력</Input>
                </InputBox>
              </Container5>
              <Container5>
                <Inform>생년월일</Inform>
                <InputBox>
                  <Input>YYYYMMDD</Input>
                </InputBox>
              </Container5>
              <Container5>
                <Inform>이메일 주소</Inform>
                <Box>
                  <InputBox2>
                    <Input2>example@123.com</Input2>
                  </InputBox2>
                  <ButtonBox2>
                    <Button>인증번호 발송</Button>
                  </ButtonBox2>
                </Box>
              </Container5>
              <Container5>
                <Inform>인증번호</Inform>
                <InputBox></InputBox>
              </Container5>
              <Container5>
                <Inform>휴대폰 번호</Inform>
                <Box>
                  <InputBox2>
                    <Input>'-'없이 입력</Input>
                  </InputBox2>
                  <ButtonBox>
                    <Button>인증번호 발송</Button>
                  </ButtonBox>
                </Box>
              </Container5>
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
  height: 690px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container1 = styled.div`
  width: 536px;
  height: 605px;
  border-radius: 10px;
  border: 1px solid #D9D9D9;
`

const Container2 = styled.div`
  width: 536px;
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
  font-weight: 500;
`

const Container3 = styled.div`
  height: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Container4 = styled.div`
  width: 450px;
  height: 420px;
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
  padding-bottom: 6px;
`

const InputBox = styled.div`
  border-radius: 6px;
  border: 1px solid #D9D9D9;
  height: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Input = styled.div`
  padding-left: 16px;
  font-weight: 400;
  color: #8E8E8E;
`

const Input2 = styled.div`
  padding-left: 16px;
  font-weight: 400;
`

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  width: 450px;
`

const InputBox2 = styled.div`
  border-radius: 6px;
  border: 1px solid #D9D9D9;
  height: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 315px;
`

const ButtonBox = styled.div`
  width: 120px;
  height: 35px;
  border-radius: 6px;
  background-color: #D9D9D9;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Button = styled.div`
  font-weight: 500;
`

const Container6 = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
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

const ButtonBox2 = styled.div`
  width: 120px;
  height: 35px;
  border-radius: 6px;
  background-color: #999999;
  display: flex;
  justify-content: center;
  align-items: center;
`
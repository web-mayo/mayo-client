import React from 'react'
import styled from 'styled-components'

export const RequestDone = () => {
  return (
    <>
      <Container>
        <Container1>
          <Title>요청이 완료되었습니다!</Title>
          <SubTitle>게시판 페이지로 돌아가기</SubTitle>
        </Container1>
        <RequestButton>
          <ButtonText>요청 내역</ButtonText>
        </RequestButton>
      </Container>
    </>
  )
}

const Container = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Container1 = styled.div`
  width: 400px;
  height: 124px;
  padding-top: 63px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.div`
  font-family: Roboto;
  font-size: 25px;
  font-weight: 900;
  padding-bottom: 10px;
`

const SubTitle = styled.div`
  text-decoration: underline;
  text-decoration-thickness: 1px;
  `

const RequestButton = styled.div`
  width: 200px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #FFF3EA;
  background: #B65C134D;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ButtonText = styled.div`
  font-weight: 600;
`
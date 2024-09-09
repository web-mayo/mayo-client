import React from 'react'
import styled from 'styled-components'

export const RegistDone = () => {
  return (
    <>
      <Container>
        <Container1>
          <Text1>등록이 완료되었습니다!</Text1>
          <Text2>게시판 페이지로 돌아가기</Text2>
        </Container1>
      </Container>
    </>
  )
}

const Container = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container1 = styled.div`
  width: 400px;
  height: 124px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Text1 = styled.div`
  font-family: Roboto;
  font-size: 25px;
  font-weight: 900;
  padding-bottom: 10px;
`

const Text2 = styled.div`
  text-decoration: underline;
  text-decoration-thickness: 1px;
  `
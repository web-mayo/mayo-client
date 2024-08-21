import React from 'react'
import styled from 'styled-components'

export const Home = () => {
  return (
    <Container>
        <Title>홈페이지입니다</Title>
        <SubTitle>홈화면입니다.</SubTitle>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const Title = styled.div`
    font-size: 50px;
`
const SubTitle = styled.div`
    font-size: 30px;
`
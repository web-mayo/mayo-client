import React from 'react'
import styled from 'styled-components'

export const Home = () => {
  return (
    <Container>
        <HomeBanner src="images/homebanner.png"></HomeBanner>
        <Section>
          <SectionDesc>
            <SectionTitle>"
              <SectionTitleOrange>마요</SectionTitleOrange>"는 <br/> 요리사와 고객을 연결합니다. 
            </SectionTitle>
            <SectionSubTitle>설거지부터 .... 힘든 ... 마요가 직접 방문하여 ... 합니다.....</SectionSubTitle>
            <SectionDescBtn>더 알아보기</SectionDescBtn>
          </SectionDesc>   
          <SectionImg src="images/homebanner.png"></SectionImg>
        </Section>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    width: 100%;
`
const HomeBanner = styled.img`
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
    display: block;
    object-fit: cover;
`

const Section = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10%;
`
const SectionDesc = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`
const SectionTitle = styled.div`
    font-size: 38px;
    font-weight: 700;

`
const SectionTitleOrange = styled.span`
  color: ${(props)=> props.theme.main};
`

const SectionSubTitle = styled.div`
    font-size: 16px;
    font-weight: 400;
`
const SectionDescBtn = styled.div`
  color: white;
  border-radius: 34px;
  background-color: ${(props)=> props.theme.main};
  padding: 10px 10px 10px 10px;
  cursor: pointer;
  width: 240px;
  text-align: center;

`
const SectionImg = styled.img`
  width: 500px;
  height: 380px;
`
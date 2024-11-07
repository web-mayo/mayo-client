import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

export const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/customerBoard");
  }

  return (
    <Container>
        <BannerSection>
        <HomeBannerText>
          <HomeBannerTitle>고객과 요리사를 잇다</HomeBannerTitle>
          <HomeBannerSubtitle>외식, 배달이 아닌 새로운 선택지 <span style={{ fontWeight: 700 }}>“마요”</span></HomeBannerSubtitle>
        </HomeBannerText>
        </BannerSection>
        <MiddleSection>
          <MiddleSecTitleContainer>
            <MiddleSecTitle>특별한 맞춤형 미식의 경험,</MiddleSecTitle>
            <MiddleSecTitle>원하는 공간에서 즐겨보세요.</MiddleSecTitle>
          </MiddleSecTitleContainer>
          <MiddleSecImgContainer>
            <MiddleSecImg id="left" src="images/middleSecImg1.png"></MiddleSecImg>
            <MiddleSecImg id="right" src="images/middleSecImg2.png"></MiddleSecImg>
          </MiddleSecImgContainer>
        </MiddleSection>
        <EndSection>
          <EndSecImg src="images/endSectionImg.png"></EndSecImg>
          <EndSecTextContainer>
            <EndSecTitle>맞춤형 개인 셰프 서비스 <span style={{ color: "#FA7C15" }}>[ mayo ]</span></EndSecTitle>
            <EndSecSubTitle id="main">메뉴 선정부터 디저트, 뒷정리까지.</EndSecSubTitle>
            <EndSecSubTitle>집에서 즐기는 미식을 위한 무엇이든</EndSecSubTitle>
            <EndSecBtn onClick={()=>{handleClick()}}>더 알아보기</EndSecBtn>
          </EndSecTextContainer>
        </EndSection>
        <DescSection>
          <DescCircleContainer>
            <DescCircle>고객</DescCircle>
            <DescCircleText>홈파티 등록 또는 <br/> 요리사에게 홈파티 의뢰</DescCircleText>
          </DescCircleContainer>
          <Arrow src='images/Arrow.png'/>
          <DescCircleContainer>
            <DescCircle>요리사</DescCircle>
            <DescCircleText>홈파티 세부내용 및 고객 <br/>요구사항 확인 후 의뢰수락</DescCircleText>
          </DescCircleContainer>
          <Arrow src='images/Arrow.png'/>
          <DescCircleContainer>
            <DescCircle>매칭</DescCircle>
            <DescCircleText>고객이 원하는 공간으로 <br/>요리사가 방문</DescCircleText>
          </DescCircleContainer>
          <Arrow src='images/Arrow.png'/>
          <DescCircleContainer>
            <DescCircle>개인 셰프 <br/> 요리 서비스</DescCircle>
            <DescCircleText>프라이빗하게 즐기는 미식의 <br/>즐거움과 특별한 경험을 제공</DescCircleText>
          </DescCircleContainer>
        </DescSection>
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
const BannerSection = styled.div`
    //background-image: url("images/homePageBanner.png");
    width: 100%;
    height: 70vh;
    margin: 0;
    padding: 0;
    display: block;
    background-size: cover; /* 이미지가 잘림 없이 꽉 차게 조정 */
    background-position: center; /* 중앙에 정렬 */ 
    position: relative;
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url("images/homePageBanner.png");
        background-size: cover;
        background-position: center;
        opacity: 0.64;
        z-index: 0;
    }
`

const HomeBannerText = styled.div`
  position: absolute;
  z-index: 1; 
  display: flex;
  flex-direction: column;
  gap: 2px;
  left: 22vh;
  top: 25vh;

`
const HomeBannerTitle = styled.div`
  font-weight: 700;
  font-size: 38px;
  color:rgba(0, 0, 0, 1);
`
const HomeBannerSubtitle = styled.div`
  font-weight: 400;
  font-size: 22px;
  color:rgba(0, 0, 0, 1);
  opacity: 1;
`

const MiddleSection = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5vh;
`
const MiddleSecTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
`
const MiddleSecTitle = styled.div`
  font-size: 23px;
  font-weight: 600;
`
const MiddleSecImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`
const MiddleSecImg = styled.img`
  width: 540px;
  object-fit: cover;
  &[id="left"]{
    padding-bottom: 80px;
  }
  &[id="right"]{
    padding-top: 80px;
  }
`
const EndSection = styled.div`
  padding-top: 8vh;
  padding-bottom: 15vh;
  display: flex;
  flex-direction: row;
  gap: 40px;
  justify-content: center;
  align-items: center;
`
const EndSecImg = styled.img`
  width: 780px;
  object-fit: cover;
  
`
const EndSecTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-self: flex-end;
`
const EndSecTitle = styled.div`
  font-weight: 600;
  font-size: 22px;
  margin-bottom: 40px;
`
const EndSecSubTitle = styled.div`
  font-size: 22px;
  font-weight: 600;
  &[id="main"]{
    font-size: 25px;
    font-weight: 700;
    color: ${(props)=>props.theme.main};
    background-color: ${(props)=>props.theme.sub};
  }
`
const EndSecBtn = styled.div`
    margin-top: 40px;
    border-radius: 35px;
    background-color: ${(props)=>props.theme.main};
    padding: 10px 50px 10px 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    font-weight: 600;
    color: white;
    cursor: pointer;
`
const DescSection = styled.div`
  display: flex;
  flex-direction: row;
  height: 40vh;
  padding-bottom: 18vh;
  justify-content: center;
  align-items: center;
  gap: 25px;
`
const DescCircleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 42px;
  font-weight: 500;
`
const DescCircle = styled.div`
  background-color: ${(props)=>props.theme.main};
  border-radius: 108px;
  width: 138px;
  height: 138px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 21px;
  font-weight: 600;
  color: white;
  box-shadow: 0px 4px 6px 0px #FA7C1540;
  text-align: center;

`
const DescCircleText = styled.div`
  font-size: 20px;
  text-align: center;
  line-height: 25px;
  font-weight: 500;
`
const Arrow = styled.img`
  width: 70px;
  margin-bottom: 70px;
`

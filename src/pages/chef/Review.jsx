import React, { useState } from 'react'
import { Title } from '../../components/Title'
import styled from 'styled-components'
import { rgba } from '../../theme/theme';

export const Review = () => {

  const [seeMore, setSeeMore] = useState(false);

  const handleSeeMore = () => {
    setSeeMore(!seeMore);
  }

  return (
    <ReviewContainer>
      <Title title={'후기'} subTitle={'고객님들이 남긴 후기를 확인해보세요!'}></Title>
      <ReviewSummary>
        <ReviewSumContent type="service">
          <ReviewSumContentTitle type="service"><ReviewSumContentPoint>'서비스'</ReviewSumContentPoint> 관련해서 이런 후기가 많아요!</ReviewSumContentTitle>
          <ReviewSumKeys type="service">
            <ReviewSumKey>맛있어요</ReviewSumKey>
            </ReviewSumKeys>
        </ReviewSumContent>
        <ReviewSumContent type="food">
          <ReviewSumContentTitle type="food"><ReviewSumContentPoint>'음식'</ReviewSumContentPoint> 관련해서 이런 후기가 많아요!</ReviewSumContentTitle>
          <ReviewSumKeys type="food">
            <ReviewSumKey></ReviewSumKey>
          </ReviewSumKeys>
        </ReviewSumContent>
      </ReviewSummary>
      <ReviewSection>
        <ReviewSectionTitle>후기 전문</ReviewSectionTitle>
        <ReviewSectionContent>
          <ReviewCard>
            <ReviewProfile>
              <ReviewProfileImg></ReviewProfileImg>
              <ReviewProfileName>Customer</ReviewProfileName>
              <ReviewProfileDate>2024/08/31</ReviewProfileDate>
            </ReviewProfile>
            <ReviewText>맛있게 잘 먹었어요! 코스 구성도 완벽했습니다! 덕분에 특별한 하루가 되었습니다.</ReviewText>
            <ReviewKeys>
              <ReviewKey></ReviewKey>
            </ReviewKeys>
          </ReviewCard> 
          <ReviewCard>
            <ReviewProfile>
              <ReviewProfileImg></ReviewProfileImg>
              <ReviewProfileName>Customer</ReviewProfileName>
              <ReviewProfileDate>2024/08/31</ReviewProfileDate>
            </ReviewProfile>
            <ReviewText>맛있게 잘 먹었어요! 코스 구성도 완벽했습니다! 덕분에 특별한 하루가 되었습니다.</ReviewText>
            <ReviewKeys>
              <ReviewKey></ReviewKey>
            </ReviewKeys>
          </ReviewCard> 
          <ReviewCard>
            <ReviewProfile>
              <ReviewProfileImg></ReviewProfileImg>
              <ReviewProfileName>Customer</ReviewProfileName>
              <ReviewProfileDate>2024/08/31</ReviewProfileDate>
            </ReviewProfile>
            <ReviewText>맛있게 잘 먹었어요! 코스 구성도 완벽했습니다! 덕분에 특별한 하루가 되었습니다.</ReviewText>
            <ReviewKeys>
              <ReviewKey></ReviewKey>
            </ReviewKeys>
          </ReviewCard> 
        </ReviewSectionContent>
        <ReviewSeeMoreBtn onClick={handleSeeMore}>더보기</ReviewSeeMoreBtn>
      </ReviewSection>
    </ReviewContainer>
  )
}

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8%;
`
const ReviewSummary = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80vh;
`
const ReviewSumContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  //justify-content: center;
  width: 100%;
  height: 40vh;
   background-image: ${props => props.type === 'service' ? `url('/images/message1.png')` : `url('/images/message2.png')`};
   align-self: ${props => props.type === 'service' ? 'flex-start' : 'flex-end'};
   background-position: ${props => props.type === 'service' ? 'left' : 'right'};
   background-size: 1000px 500px;
   background-repeat: no-repeat;
`
const ReviewSumContentPoint = styled.div`
  display: inline-block;
  font-size: 20px;
  color: ${(props)=>props.theme.main};
  font-weight: 600;
`
const ReviewSumContentTitle = styled.div`
  position: absolute;
  top: 15%;
  left: ${props => props.type === 'service' ? '12%' : '71%'};
  font-size: 17px;
  font-weight: 400;

`
const ReviewSumKeys = styled.div`
  position: absolute;
  top: 28%;
  left: ${props => props.type === 'service' ? '12%' : '42%'};
`
const ReviewSumKey = styled.div`
  background-color: ${props => rgba(props.theme.main, 0.7)};
  //border: dashed 1px ${(props)=>props.theme.main};
  border-radius: 5px;
  padding: 8px 15px;
  
`


const ReviewSection = styled.div`
  width: 100%;
  height: 50vh;
  background-color: ${(props)=>props.theme.sub};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4vh;
`

const ReviewSectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  font-weight: 600;
`
const ReviewSectionContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
`

const ReviewCard = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 300px;
  height: 150px;
  box-shadow: 0px 1px 6px 0px #00000040;
  padding: 25px 30px;
`

const ReviewProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`
const ReviewProfileImg = styled.div`
  width: 45px;
  height: 45px;
  background-color: #B65C134D;
  border-radius: 100px;
`
const ReviewProfileName = styled.div`
  font-size: 18px;
  font-weight: 500;
`
const ReviewProfileDate = styled.div`
  justify-self: flex-end;
  font-size: 14px;
  font-weight: 400;
`
const ReviewText = styled.div`
  
`
const ReviewKeys = styled.div`
  
`
const ReviewKey = styled.div`
  
`
const ReviewSeeMoreBtn = styled.div`
  color: ${(props)=>props.theme.main};
  cursor: pointer;
  border-bottom: solid 1px ${(props)=>props.theme.main};
`

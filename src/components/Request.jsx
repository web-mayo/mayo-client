import React from 'react'
import styled from 'styled-components'
import { allowScroll } from '../modal/modal';

// 요청사항에 대한 컴포넌트
export const Request = ({status, title, setModal, prevScrollY}) => {
    const handleClose = () => {
        setModal(false);
        allowScroll(prevScrollY);
    }

if(status == 'request'){
  return (
    <RequestContainer>
        <Title>
            <TitleText>{title}</TitleText>
            <TitleDate>2024/08/31 접수</TitleDate>
        </Title>
        <Content>
            <ContentDesc>
                <ContentTitle>&#91;한 줄 소개&#93;</ContentTitle>
                    <ContentText>지인 10명을 초대해서 열 예정인 홈파티입니다!</ContentText>
                    </ContentDesc>
                    <ContentDesc>
                        <ContentTitle>&#91;일시&#93;</ContentTitle>
                            <ContentText>2024년 10월 01일 화요일 오후 2시</ContentText>
                    </ContentDesc>
                    <ContentDesc>
                        <ContentTitle>&#91;인원수&#93;</ContentTitle>
                            <ContentText>00명</ContentText>
                    </ContentDesc>
                    <ContentDesc>
                        <ContentTitle>&#91;주방 위치 주소&#93;</ContentTitle>
                            <ContentText>서울특별시 서대문구</ContentText>
                    </ContentDesc>
                    <ContentDesc>
                        <ContentTitle>&#91;요청 서비스 범위&#93;</ContentTitle>
                        <CheckList>
                            <CheckBox></CheckBox> <CheckText>코스 구성</CheckText>
                            <CheckBox></CheckBox> <CheckText>재료 선정</CheckText>
                            <CheckBox></CheckBox> <CheckText>재료 구입</CheckText>                            
                            <CheckBox></CheckBox> <CheckText>뒷정리</CheckText>
                            </CheckList>
                        </ContentDesc>
                    <ContentDesc>
                        <ContentTitle>&#91;고객 요청사항&#93;</ContentTitle>
                        <ContentTextArea className='textarea'>맛나게 해주세요</ContentTextArea>
                    </ContentDesc>
                    <RequestBtns>
                        <AcceptBtn>요청 수락</AcceptBtn>
                        <RejectBtn>요청 거절</RejectBtn>
                    </RequestBtns>
                    <CloseBtn onClick={handleClose}>닫기</CloseBtn>
                </Content>    
            </RequestContainer>    
  )}
  else{
    return (
        <RequestContainer>
            <Title>
                <TitleText>{title}</TitleText>
            </Title>
            <Content>
                <ContentWrapper>
                <ContentInfo>
                    <ContentImgWrapper>
                        <ContentImgStatus>방문 예정</ContentImgStatus>
                        <ContentImg src='images/reserveDefault.jpeg'></ContentImg>
                    </ContentImgWrapper>

                    <ContentDesc>
                        <ContentTitle>&#91; 날짜 &#93;</ContentTitle>
                        <ContentText>2024년 10월 01일 화요일 오후 2시</ContentText>
                    </ContentDesc>
                    <ContentDesc>
                        <ContentTitle>&#91; 인원 수 &#93;</ContentTitle>
                        <ContentText>00명</ContentText>
                    </ContentDesc>
                </ContentInfo>
                <ContentDescSec>
                <ContentDesc>
                        <ContentTitle>&#91;홈 파티 줄 소개&#93;</ContentTitle>
                        <ContentText>지인 10명을 초대해서 열 예정인 홈파티입니다!</ContentText>
                     </ContentDesc>
                    <ContentDesc>
                            <ContentTitle>&#91;일시&#93;</ContentTitle>
                                <ContentText>2024년 10월 01일 화요일 오후 2시</ContentText>
                    </ContentDesc>
                    <ContentDesc>
                            <ContentTitle>&#91;인원수&#93;</ContentTitle>
                                <ContentText>00명</ContentText>
                        </ContentDesc>
                        <ContentDesc>
                            <ContentTitle>&#91;주방 위치 주소&#93;</ContentTitle>
                                <ContentText>서울특별시 서대문구</ContentText>
                        </ContentDesc>
                        <ContentDesc>
                            <ContentTitle>&#91;요청 서비스 범위&#93;</ContentTitle>
                            <CheckList>
                                <CheckBox></CheckBox> <CheckText>코스 구성</CheckText>
                                <CheckBox></CheckBox> <CheckText>재료 선정</CheckText>
                                <CheckBox></CheckBox> <CheckText>재료 구입</CheckText>                            
                                <CheckBox></CheckBox> <CheckText>뒷정리</CheckText>
                                </CheckList>
                            </ContentDesc>
                        <ContentDesc>
                            <ContentTitle>&#91;고객 요청사항&#93;</ContentTitle>
                            <ContentTextArea className='textarea'>맛나게 해주세요</ContentTextArea>
                        </ContentDesc>
                        </ContentDescSec>

                        </ContentWrapper>
                        <CloseBtn onClick={handleClose}>닫기</CloseBtn>
                    </Content>    
                </RequestContainer>    
      )
  }
}

const RequestContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Title = styled.div`
    background-color: ${(props)=>props.theme.sub};
    height: 55px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    margin-bottom: 3vh;
`
const TitleText = styled.div`
    font-size: 16px;
    font-weight: 600;
`
const TitleDate = styled.div`
    color: #8E8E8E;
    font-size: 14px;
    font-weight: 600;
    font-size: 14px;
`
const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap : 2.3vh;
    width: 80%;
`
const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 7%;
`

const ContentInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const ContentImgWrapper = styled.div`
    width: 250px;
    height: 285px;
`

const ContentImgStatus = styled.div`
    display: flex;
    align-items: center;
    padding-left: 14px;
    color: white;
    font-size: 14px;
    background-color: ${(props)=>props.theme.main};
    border-radius: 8px 8px 0px 0px;
    height: 30px;
`

const ContentImg = styled.img`
    width: 250px;
    height: 250px;
    object-fit: cover;
    border-radius: 0px 0px 8px 8px;
`
const ContentDescSec = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

const ContentDesc = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    
`
const ContentTitle = styled.div`
    color: #8E8E8E;
    font-size: 13px;
    font-weight: 400;
`
const ContentText = styled.div`
    font-size: 15px;
    font-weight: 500;
`
const CheckList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`
const CheckBox = styled.div`
    
`
const CheckText = styled.div`
    
`
const ContentTextArea= styled.div`
   
`

const RequestBtns = styled.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    width: 100%;
    gap: 2%;
`
const AcceptBtn = styled.button`
    color: white;
    width: 64%;
    height: 4vh;
    background-color: ${(props)=>props.theme.main};
    border-radius: 8px;
    border: none;
    cursor: pointer;
`
const RejectBtn = styled.button`
    color: white;
    width: 34%;
    background-color: #EE1101;
    border-radius: 8px;
    border: none;
    cursor: pointer;
`
const CloseBtn = styled.button`
    font-size: 13px;
    width: 17%;
    align-self: center;
    height: 3vh;
    margin-top: 8px;
    background-color: solid 1px ${(props)=>props.theme.sub};
    border: none;
    cursor: pointer;
    border-radius: 8px;
`

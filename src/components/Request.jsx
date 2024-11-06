import React from 'react';
import styled from 'styled-components';
import { allowScroll } from '../modal/modal';
import { RequestRangeCheckBox } from './RequestRangeCheckBox';

export const Request = ({ status, title, setModal, prevScrollY }) => {
    const handleClose = () => {
        setModal(false);
        allowScroll(prevScrollY);
    };
    if(status == "request"){
        return(
            <RequestContainer>
            <Title>
                <TitleText>{title}</TitleText>
                <TitleDate>2024/08/31 접수</TitleDate>
            </Title>
            <Content>
                    <InfoItem>
                    <InfoTitle>&#91;한 줄 소개&#93;</InfoTitle>
                        <InfoText>지인 10명을 초대해서 열 예정인 홈파티입니다!</InfoText>
                        </InfoItem>
                        <InfoItem>
                            <InfoTitle>&#91;일시&#93;</InfoTitle>
                                <InfoText>2024년 10월 01일 화요일 오후 2시</InfoText>
                        </InfoItem>
                        <InfoItem>
                            <InfoTitle>&#91;인원수&#93;</InfoTitle>
                                <InfoText>00명</InfoText>
                        </InfoItem>
                        <InfoItem>
                            <InfoTitle>&#91;홈파티 예산&#93;</InfoTitle>
                                <InfoText>00원</InfoText>
                        </InfoItem>
    
                        <InfoItem>
                            <InfoTitle>&#91;요청 서비스 범위&#93;</InfoTitle>
                            <CheckList>
                                <RequestRangeCheckBox />
                            </CheckList>
                        </InfoItem>
                        <InfoItem>
                            <InfoTitle>&#91;상세 주소&#93;</InfoTitle>
                            <InfoText>OO아파트 000호</InfoText>
                        </InfoItem>
                        <InfoItem>
                            <InfoTitle>&#91;화구 종류&#93;</InfoTitle>
                                <InfoText>가스레인지</InfoText>
                        </InfoItem>
                        <InfoItem>
                            <InfoTitle>&#91;주방 사진&#93;</InfoTitle>
                            <ContentImage></ContentImage>
                        </InfoItem>
                        <InfoItem>
                            <InfoTitle>&#91;조리 기구 및 도구&#93;</InfoTitle>
                                <InfoText>오븐, 전자레인지, 믹서기</InfoText>
                        </InfoItem>
                        <InfoItem>
                            <InfoTitle>&#91;주방 관련 요청사항&#93;</InfoTitle>
                                <InfoText>없음</InfoText>
                        </InfoItem>
                        <InfoItem>
                            <InfoTitle>&#91;주방 관련 특이사항&#93;</InfoTitle>
                                <InfoText>음식물 이송설비 시스템이 있습니다.</InfoText>
                        </InfoItem>
                        <InfoItem>
                            <InfoTitle>&#91;고객 요청사항&#93;</InfoTitle>
                            <InfoTextArea className='textarea'>맛나게 해주세요</InfoTextArea>
                        </InfoItem>
                        <RequestBtns>
                            <AcceptBtn>요청 수락</AcceptBtn>
                            <RejectBtn>요청 거절</RejectBtn>
                        </RequestBtns>
                        <CloseBtn onClick={handleClose}>닫기</CloseBtn>
                    </Content>    
                </RequestContainer>    
        )
    }
    else if(status == "match"){
    return (
        <RequestContainer>
            <Title>
                <TitleText>{title}</TitleText>
                <TitleDate>2024/08/31 접수</TitleDate>
            </Title>
            <Content>
                <Section>
                    <ImageWrapper>
                        <StatusLabel>예약 확정</StatusLabel>
                        <ContentImage src="images/reserveDefault.jpeg" />
                    </ImageWrapper>
                    <InfoList>
                        <InfoItemContainer>
                            <InfoColumn>
                                <InfoItem>
                                    <InfoTitle>[ 일시 ]</InfoTitle>
                                    <InfoText>0000년 00월 00일 오후 00:00~</InfoText>
                                </InfoItem>
                                <InfoItem>
                                    <InfoTitle>[ 인원 수 ]</InfoTitle>
                                    <InfoText>어른 00명 / 어린이 00명</InfoText>
                                </InfoItem>
                                <InfoItem>
                                    <InfoTitle>[ 홈파티 예산 ]</InfoTitle>
                                    <InfoText>00,000원</InfoText>
                                </InfoItem>
                            </InfoColumn>
                            <InfoColumn>
                                <InfoItem>
                                    <InfoTitle>[ 주방 주소 ]</InfoTitle>
                                    <InfoText>집</InfoText>
                                </InfoItem>
                                <InfoItem>
                                    <InfoTitle>[ 요청 서비스 범위 ]</InfoTitle>
                                    <CheckList>
                                        <RequestRangeCheckBox />
                                    </CheckList>
                                </InfoItem>
                            </InfoColumn>
                        </InfoItemContainer>
                        <InfoItem>
                            <InfoTitle>[ 마이 요리사에게 남길 말씀 ]</InfoTitle>
                            <InfoTextArea>과일 알러지가 있습니다.</InfoTextArea>
                        </InfoItem>
                    </InfoList>
                </Section>
                <Divider />
                <Section>
                    <ImageWrapper>
                        <ContentImage src="images/kitchenProfile.jpeg" />
                    </ImageWrapper>
                    <InfoList>
                        <InfoTitleMain>[ 주방 프로필 ]</InfoTitleMain>
                        <InfoItemContainer>
                            <InfoColumn>
                                <InfoItem>
                                    <InfoTitle>[ 주소 ]</InfoTitle>
                                    <InfoText>서울특별시 서대문구</InfoText>
                                </InfoItem>
                                <InfoItem>
                                    <InfoTitle>[ 상세 주소 ]</InfoTitle>
                                    <InfoText>OO아파트 000호</InfoText>
                                </InfoItem>
                                <InfoItem>
                                    <InfoTitle>[ 화구 종류 ]</InfoTitle>
                                    <InfoText>가스레인지</InfoText>
                                </InfoItem>
                            </InfoColumn>
                            <InfoColumn>
                                <InfoItem>
                                    <InfoTitle>[ 조리 기구 및 도구 ]</InfoTitle>
                                    <InfoText>오븐, 전자레인지, 믹서기</InfoText>
                                </InfoItem>
                                <InfoItem>
                                    <InfoTitle>[ 주방 관련 요청사항 ]</InfoTitle>
                                    <InfoText>없음.</InfoText>
                                </InfoItem>
                                <InfoItem>
                                    <InfoTitle>[ 주방 관련 특이사항 ]</InfoTitle>
                                    <InfoText>음식물 이송설비 시스템이 있습니다.</InfoText>
                                </InfoItem>
                            </InfoColumn>
                        </InfoItemContainer>
                    </InfoList>
                </Section>
                <CloseBtn onClick={handleClose}>닫기</CloseBtn>
            </Content>
        </RequestContainer>
    );
};}

const RequestContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    padding-bottom: 30px;
`;

const Title = styled.div`
    background-color: ${(props) => props.theme.sub};
    padding: 10px;
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
`;

const TitleText = styled.div`
    font-size: 16px;
    font-weight: 600;
`;

const TitleDate = styled.div`
    color: #8e8e8e;
    font-size: 14px;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    gap: 16px;
`;


const Section = styled.div`
    display: flex;
    gap: 18px;
    align-items: flex-start;
`;

const ImageWrapper = styled.div`
    width: 250px;
    position: relative;
`;

const StatusLabel = styled.div`
   display: flex;
    align-items: center;
    padding-left: 14px;
    color: white;
    font-size: 14px;
    background-color: ${(props)=>props.theme.main};
    border-radius: 8px 8px 0px 0px;
    height: 30px;
`;

const ContentImage = styled.img`
    width: 100%;
    height: 300px;
    border-radius: 0px 0px 8px 8px;
    object-fit: cover;
`;

const InfoList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding-top: 20px;
`;

const InfoItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 80px;
`;

const InfoColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const InfoItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const InfoTitle = styled.div`
    font-size: 13px;
    color: #8e8e8e;
    font-weight: 400;
`;

const InfoTitleMain = styled(InfoTitle)`
    font-weight: 700;
    color: black;
    margin-bottom: 10px;
`;

const InfoText = styled.div`
    font-size: 16px;
    font-weight: 500;
`;

const CheckList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`;

const InfoTextArea = styled.textarea`
    width: 400px;
    font-size: 15px;
`;

const Divider = styled.div`
    width: 100%;
    margin: 12px 0;
    border: solid 1.1px #B65C134D;
`;


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
    width: 100px;
    align-self: center;
    height: 3vh;
    background-color: ${(props) => props.theme.sub};
    border: none;
    cursor: pointer;
    border-radius: 8px;
    padding: 5px 10px;
`;

import React, { useState } from 'react'
import styled from 'styled-components'
import { RequestModal } from '../../modal/RequestModal';
import { preventScroll } from '../../modal/modal';
import { ChefMatchModal } from '../../modal/ChefMatchModal';
import { Title } from '../../components/Title';
import { HomePartyCard } from '../../components/HomePartyCard';

function Reserve() {
  const [modal, setModal] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(); // 현재 스크롤 위치, 모달창 열고 닫을 시 스크롤 정지/재개 위해 필요

  const handleModal = (modalStatus) => {
    setModal(modalStatus);
    const prevScroll = preventScroll();
    setPrevScrollY(prevScroll);
  }

  return (
    <>
            {modal === "request" &&
              <RequestModal setModal={setModal} prevScrollY={prevScrollY}/>}
            {modal === "match" &&
              <ChefMatchModal setModal={setModal} prevScrollY={prevScrollY}/>}
      <ReserveContainer>
        <Title title={'예약 관리'}></Title>
        <RequestContainer>
          <RequestTitle>답변을 기다리는 요청들</RequestTitle>
            
          <RequestList>
            <RequestCard onClick={()=>handleModal('request')}>
              <RequestCardHead>
                <RequestImg src="images/bell.png"></RequestImg>
                <RequestDesc>
                  <RequestDescTitle>지인 10명을 초대해서 열 예정인 홈파티입...</RequestDescTitle>
                  <RequestDescInfo>
                    <RequestDescInfoText>서대문구</RequestDescInfoText>|
                    <RequestDescInfoText>2024/10/01</RequestDescInfoText>
                  </RequestDescInfo>
                </RequestDesc>
                </RequestCardHead>
              <RequestData>
                <RequestDataLabel>&#91; 의뢰 접수 날짜 	&#93;</RequestDataLabel>
                <RequestDate>2024/08/31</RequestDate>
              </RequestData>
            </RequestCard>
            <RequestCard>
              <RequestCardHead>
                <RequestImg src="images/bell.png"></RequestImg>
                <RequestDesc>
                  <RequestDescTitle>지인 10명을 초대해서 열 예정인 홈파티입...</RequestDescTitle>
                  <RequestDescInfo>
                    <RequestDescInfoText>서대문구</RequestDescInfoText>|
                    <RequestDescInfoText>2024/10/01</RequestDescInfoText>
                  </RequestDescInfo>
                </RequestDesc>
                </RequestCardHead>
              <RequestData>
                <RequestDataLabel>&#91; 의뢰 접수 날짜 	&#93;</RequestDataLabel>
                <RequestDate>2024/08/31</RequestDate>
              </RequestData>
            </RequestCard>
            <RequestCard>
              <RequestCardHead>
                <RequestImg src="images/bell.png"></RequestImg>
                <RequestDesc>
                  <RequestDescTitle>지인 10명을 초대해서 열 예정인 홈파티입...</RequestDescTitle>
                  <RequestDescInfo>
                    <RequestDescInfoText>서대문구</RequestDescInfoText>|
                    <RequestDescInfoText>2024/10/01</RequestDescInfoText>
                  </RequestDescInfo>
                </RequestDesc>
                </RequestCardHead>
              <RequestData>
                <RequestDataLabel>&#91; 의뢰 접수 날짜 	&#93;</RequestDataLabel>
                <RequestDate>2024/08/31</RequestDate>
              </RequestData>
            </RequestCard>
            <RequestCard>
              <RequestCardHead>
                <RequestImg src="images/bell.png"></RequestImg>
                <RequestDesc>
                  <RequestDescTitle>지인 10명을 초대해서 열 예정인 홈파티입...</RequestDescTitle>
                  <RequestDescInfo>
                    <RequestDescInfoText>서대문구</RequestDescInfoText>|
                    <RequestDescInfoText>2024/10/01</RequestDescInfoText>
                  </RequestDescInfo>
                </RequestDesc>
                </RequestCardHead>
              <RequestData>
                <RequestDataLabel>&#91; 의뢰 접수 날짜 	&#93;</RequestDataLabel>
                <RequestDate>2024/08/31</RequestDate>
              </RequestData>
            </RequestCard>
            <RequestCard>
              <RequestCardHead>
                <RequestImg src="images/bell.png"></RequestImg>
                <RequestDesc>
                  <RequestDescTitle>지인 10명을 초대해서 열 예정인 홈파티입...</RequestDescTitle>
                  <RequestDescInfo>
                    <RequestDescInfoText>서대문구</RequestDescInfoText>|
                    <RequestDescInfoText>2024/10/01</RequestDescInfoText>
                  </RequestDescInfo>
                </RequestDesc>
                </RequestCardHead>
              <RequestData>
                <RequestDataLabel>&#91; 의뢰 접수 날짜 	&#93;</RequestDataLabel>
                <RequestDate>2024/08/31</RequestDate>
              </RequestData>
            </RequestCard>
            <RequestCard>
              <RequestCardHead>
                <RequestImg src="images/bell.png"></RequestImg>
                <RequestDesc>
                  <RequestDescTitle>지인 10명을 초대해서 열 예정인 홈파티입...</RequestDescTitle>
                  <RequestDescInfo>
                    <RequestDescInfoText>서대문구</RequestDescInfoText>|
                    <RequestDescInfoText>2024/10/01</RequestDescInfoText>
                  </RequestDescInfo>
                </RequestDesc>
                </RequestCardHead>
              <RequestData>
                <RequestDataLabel>&#91; 의뢰 접수 날짜 	&#93;</RequestDataLabel>
                <RequestDate>2024/08/31</RequestDate>
              </RequestData>
            </RequestCard>
            <RequestCard>
              <RequestCardHead>
                <RequestImg src="images/bell.png"></RequestImg>
                <RequestDesc>
                  <RequestDescTitle>지인 10명을 초대해서 열 예정인 홈파티입...</RequestDescTitle>
                  <RequestDescInfo>
                    <RequestDescInfoText>서대문구</RequestDescInfoText>|
                    <RequestDescInfoText>2024/10/01</RequestDescInfoText>
                  </RequestDescInfo>
                </RequestDesc>
                </RequestCardHead>
              <RequestData>
                <RequestDataLabel>&#91; 의뢰 접수 날짜 	&#93;</RequestDataLabel>
                <RequestDate>2024/08/31</RequestDate>
              </RequestData>
            </RequestCard>
        
          </RequestList>

        </RequestContainer>
        <MatchedContainer>
          <MatchedTitle>매칭된 홈파티&#40;방문 예정 및 방문 완료 내역&#41;</MatchedTitle>
          <MatchedList>

            <HomePartyCard onClick={()=>handleModal('match')}/>
            <HomePartyCard onClick={()=>handleModal('match')}/>
            <HomePartyCard onClick={()=>handleModal('match')}/>
            <HomePartyCard onClick={()=>handleModal('match')}/>
            <HomePartyCard onClick={()=>handleModal('match')}/>
            <HomePartyCard onClick={()=>handleModal('match')}/>

          </MatchedList>
        </MatchedContainer>
      </ReserveContainer>
    </>
  )
}

export default Reserve

const ReserveContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-bottom: 8%;
  gap: 50px;
` 
const RequestContainer = styled.div`
  height: 45vh;
  width: 85%;
  border: solid 1px #D9D9D9;
  display: flex;
  flex-direction: row;
`
const RequestTitle = styled.div`
  background-color: ${(props)=>props.theme.sub};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  height: 100%;
  width: 45%;
`
const RequestList = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  margin: 25px;
`
const RequestCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 7px 20px 7px;
  border-bottom: solid 1px #DDDDDD;
  cursor: pointer;
`
const RequestCardHead = styled.div`
  display: flex;
  flex-direction: row;
  gap: 7%;
`

const RequestImg = styled.img`
  width: 30px;
  height: 30px;
  background-color: #B65C134D;
  padding: 12px;
  border-radius: 100px;
  
`
const RequestDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  justify-content: center;
`
const RequestDescTitle = styled.div`
  font-size: 18px;
  font-weight: 400;
  white-space: nowrap;
`
const RequestDescInfo = styled.div`
   display: flex;
   flex-direction: row;
   gap: 5px;
   color : rgba(0, 0, 0, 0.5);
   align-items: center;
`
const RequestDescInfoText = styled.div`
  font-size: 16px;
`
const RequestData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`
const RequestDataLabel = styled.div`
 color : #8E8E8E;
`
const RequestDate = styled.div`
  
`

const MatchedContainer = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  gap: 10px;

`
const MatchedTitle = styled.div`
  height: 10vh;
  background-color: ${(props)=>props.theme.sub};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  
`
const MatchedList = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  overflow-x: scroll;
  gap: 1%;
`
const MatchedCard = styled.div`
  border-radius: 8px;
  border: solid 1px #D9D9D9;
  width: 280px;
  cursor: pointer;
`
const MatchedStatus = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: white;
  padding: 7px 16px 7px 16px;
  display: flex;
  align-items: center;
  border-radius: 6px 6px 0px 0px;
  background-color: ${(props)=>props.theme.main};
  overflow: hidden;
  height: 30px;
`
const MatchedImg = styled.img`
  height: 280px;
  width: 280px;
  object-fit: cover;
`

const MatchedDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 10px 16px 15px 16px;
`
const MatchedDescText = styled.div`
  overflow: hidden;
  font-size: 16px;
  font-weight: 500;
`

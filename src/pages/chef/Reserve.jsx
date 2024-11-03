import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { RequestModal } from '../../modal/RequestModal';
import { preventScroll } from '../../modal/modal';
import { ChefMatchModal } from '../../modal/ChefMatchModal';
import { Title } from '../../components/Title';
import { HomePartyCard, HomePartyCardEnd } from '../../components/HomePartyCard';
import { fetchChefPartyApply, fetchChefPartyMatched, fetchChefPartyMatchFinished, fetchChefPartyMatchWait } from '../../apis/chefPartyApply';

function Reserve() {
  const [modal, setModal] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(); // 현재 스크롤 위치, 모달창 열고 닫을 시 스크롤 정지/재개 위해 필요
  const [requestCardList, setRequestCardList] = useState([]);
  const [matchWaitList, setMatchWaitList] = useState([]);
  const [matchedList, setMatchedList] = useState([]);
  const [matchFinishedList, setMatchFinishedList] = useState([]);
  const [selected, setSelected] = useState([]);

  const handleModal = (modalStatus) => {
    setModal(modalStatus);
    const prevScroll = preventScroll();
    setPrevScrollY(prevScroll);
  }

  useEffect(()=>{
    const getPartyApply = async() => {
      const result = await fetchChefPartyApply();
      setRequestCardList(result);
    }
    const getPartyMatchWait = async() => {
      const result = await fetchChefPartyMatchWait();
      setMatchWaitList(result);
    }
    const getPartyMatched = async() => {
      const result = await fetchChefPartyMatched();
      setMatchedList(result);
    }
    const getPartyMatchFinished = async() => {
      const result = await fetchChefPartyMatchFinished();
      setMatchFinishedList(result);
    }
    getPartyApply();
    getPartyMatchWait();
    getPartyMatched();
    getPartyMatchFinished();
  },[]);

  return (
    <>
            {modal === "request" &&
              <RequestModal setModal={setModal} prevScrollY={prevScrollY}/>}
            {modal === "match" &&
              <ChefMatchModal setModal={setModal} prevScrollY={prevScrollY}/>}
      <ReserveContainer>
        <Title title={'매칭 관리'}></Title>
        <RequestContainer>
          <ContainerTitleContainer>
            <ContainerTitle>답변을 기다리는 요청들</ContainerTitle>
          </ContainerTitleContainer>
          <RequestListContainer>  
            <RequestList>
            <RequestCard onClick={()=>handleModal('request')}>
                <RequestCardHead>
                  <RequestImg src="images/bell.png"></RequestImg>
                  <RequestDesc>
                    <RequestDescTitle>지인 10명을 초대해서 열 예정인 홈파티입니다.</RequestDescTitle>
                    <RequestDescInfo>
                      <RequestDescBox>
                        <RequestDescInfoLabel>[주소]</RequestDescInfoLabel>
                        <RequestDescInfoText>서대문구</RequestDescInfoText>
                      </RequestDescBox>
                      |
                      <RequestDescBox>
                        <RequestDescInfoLabel>[일시]</RequestDescInfoLabel>
                        <RequestDescInfoText>2024/10/01</RequestDescInfoText>
                      </RequestDescBox>
                      |
                      <RequestDescBox>
                        <RequestDescInfoLabel>[인원 수]</RequestDescInfoLabel>
                        <RequestDescInfoText>어른 1명, 어린이 1명 </RequestDescInfoText>
                      </RequestDescBox>
                      |
                      <RequestDescBox>
                        <RequestDescInfoLabel>[홈파티 예산]</RequestDescInfoLabel>
                        <RequestDescInfoText>000,000원</RequestDescInfoText>
                      </RequestDescBox>
                    </RequestDescInfo>
                  </RequestDesc>
                  </RequestCardHead>
                <RequestData>
                  <RequestDataLabel>&#91; 의뢰 접수 날짜 	&#93;</RequestDataLabel>
                  <RequestDate>2024/08/31</RequestDate>
                </RequestData>
                  <RequestDescBtn>상세보기</RequestDescBtn>
                </RequestCard>

              {requestCardList.map((request)=>{
                <RequestCard id={request.id} onClick={()=>handleModal('request')}>
                <RequestCardHead>
                  <RequestImg src="images/bell.png"></RequestImg>
                  <RequestDesc>
                    <RequestDescTitle>{request.info}</RequestDescTitle>
                    <RequestDescInfo>
                      <RequestDescBox>
                        <RequestDescInfoLabel>[주소]</RequestDescInfoLabel>
                        <RequestDescInfoText>{request.address}</RequestDescInfoText>
                      </RequestDescBox>|
                      <RequestDescBox>
                        <RequestDescInfoLabel>[일시]</RequestDescInfoLabel>
                        <RequestDescInfoText>{request.scheduleAt}</RequestDescInfoText>
                      </RequestDescBox>|
                      <RequestDescBox>
                        <RequestDescInfoLabel>[인원 수]</RequestDescInfoLabel>
                        <RequestDescInfoText>{request.capacity}</RequestDescInfoText>
                      </RequestDescBox>|
                      <RequestDescBox>
                        <RequestDescInfoLabel>[홈파티 예산]</RequestDescInfoLabel>
                        <RequestDescInfoText>{request.budget}</RequestDescInfoText>
                      </RequestDescBox>
                    </RequestDescInfo>
                  </RequestDesc>
                  </RequestCardHead>
                <RequestData>
                  <RequestDataLabel>&#91; 의뢰 접수 날짜 	&#93;</RequestDataLabel>
                  <RequestDate>{request.createdAt}</RequestDate>
                </RequestData>
                  <RequestDescBtn>상세보기</RequestDescBtn>
                </RequestCard>
              })
              }        
            </RequestList>
          </RequestListContainer>
          </RequestContainer>  

        {/* 매칭 대기 중인 홈파티 */}
        <MatchContainer>
          <ContainerTitleContainer>
            <ContainerTitle>매칭 대기 중인 홈파티</ContainerTitle>
            <ContainerSubTitle>매칭되면 ‘매칭된 홈파티’ 리스트에 자동으로 추가됩니다.</ContainerSubTitle>
            <SeeMoreBtn>전체보기 &gt; </SeeMoreBtn>
          </ContainerTitleContainer>
          <MatchList state={"beforeMatch"}>
            <HomePartyCard text={"매칭 대기 중"} onClick={()=>handleModal('match')} bgColor={"#FFF3EA"}/>

          </MatchList>
        </MatchContainer>

        {/* 매칭된 홈파티 */}
        <MatchContainer>
          <ContainerTitleContainer>
            <ContainerTitle>매칭된 홈파티</ContainerTitle>
            <ContainerSubTitle>매칭되어 방문 예정인 홈파티 입니다.</ContainerSubTitle>
            <SeeMoreBtn>전체보기 &gt; </SeeMoreBtn>
          </ContainerTitleContainer>
          <MatchList state={"matched"}>
            <HomePartyCard text={"방문 예정"} onClick={()=>handleModal('match')} textColor={"#FFFFFF"}bgColor={"#FA7C15"}/>

          </MatchList>
        </MatchContainer>

        {/* 방문 완료된 홈파티 */}
        <MatchContainer>
          <ContainerTitleContainer>
            <ContainerTitle>방문 완료된 홈파티</ContainerTitle>
            <ContainerSubTitle>방문 완료된 홈파티 입니다.</ContainerSubTitle>
            <SeeMoreBtn>전체보기 &gt; </SeeMoreBtn>
          </ContainerTitleContainer>
          <MatchList state={"completed"}>
          <HomePartyCardEnd onClick={()=>handleModal('match')} textColor={"#FFFFFF"}bgColor={"#444444"}/>

          </MatchList>
        </MatchContainer>

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
  gap: 7vh;
  
` 
const RequestContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`
const ContainerTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2%;
`
const ContainerTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  align-self: flex-start;
  padding-left: 2%;
`
const ContainerSubTitle = styled.div`
  font-size: 14px;
  font-weight: 400;
`
const SeeMoreBtn = styled.button`
  justify-self: flex-end;
  border: none;
  background-color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
`

const RequestListContainer = styled.div`
  height: 45vh;
  width: 100%;
  border: solid 1px #D9D9D9;
  display: flex;
  flex-direction: column;
  background-color: ${(props)=>props.theme.sub};
  margin-top: 1.5%;
`

const RequestList = styled.div`
  display: grid;
  display: flex;
  flex-direction: column;
  gap: 2vh;
  overflow-y: scroll;
  margin: 25px;
  background-color: ${(props)=> props.theme.sub};
`
const RequestCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 30px 30px 20px 30px;
  border-bottom: solid 1px #DDDDDD;
  background-color: white;
  box-shadow: 0px 1px 6px 0px #0000000D;
`
const RequestCardHead = styled.div`
  display: flex;
  flex-direction: row;
  gap: 7%;
  width: 50%;
  margin-right: 20%;
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
const RequestDescBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`

const RequestDescTitle = styled.div`
  font-size: 18px;
  font-weight: 400;
  white-space: nowrap;
  font-weight: 600;
`
const RequestDescInfo = styled.div`
   display: flex;
   flex-direction: row;
   gap: 8px;
   color : rgba(0, 0, 0, 0.5);
   align-items: center;
`

const RequestDescInfoLabel = styled.div`
  white-space: nowrap;
`

const RequestDescInfoText = styled.div`
  color: black;
  font-size: 16px;
  white-space: nowrap;
`
const RequestData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

`
const RequestDataLabel = styled.div`
 color : #8E8E8E;
 white-space: nowrap;
`
const RequestDate = styled.div`
  
`
const RequestDescBtn = styled.button`
  background-color: #DBAE89;
  color: white;
  font-size: 14px;
  font-weight: 700;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 8px 31px 8px 31px;
  border-radius: 8px;
  cursor: pointer;
  white-space: nowrap;
`

const MatchContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 1.2vh;

`
const MatchTitle = styled.div`
  height: 10vh;
  background-color: ${(props)=>props.theme.sub};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  
`
const MatchList = styled.div`
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

import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { RequestModal } from '../../modal/RequestModal';
import { preventScroll } from '../../modal/modal';
import { ChefMatchModal } from '../../modal/ChefMatchModal';
import { Title } from '../../components/Title';
import { HomePartyCard, HomePartyCardMatchFinished } from '../../components/HomePartyCard';
import { fetchChefPartyApply, fetchChefPartyMatched, fetchChefPartyMatchFinished, fetchChefPartyMatchWait } from '../../apis/chefPartyApply';
import { fetchChefInfo } from '../../auth/userInfo';

function Reserve() {
  const [chefId, setChefId] = useState();
  const [modal, setModal] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(); // 현재 스크롤 위치, 모달창 열고 닫을 시 스크롤 정지/재개 위해 필요
  const [requestCardList, setRequestCardList] = useState([]);
  const [matchWaitList, setMatchWaitList] = useState([]);
  const [matchedList, setMatchedList] = useState([]);
  const [matchFinishedList, setMatchFinishedList] = useState([]);
  const [selectedId, setSelectedId] = useState();
  const [selectedCategory, setSelectedCategory] = useState();

  const handleModal = (modalStatus, id) => {
    setModal(modalStatus);
    const prevScroll = preventScroll();
    setPrevScrollY(prevScroll);
    setSelectedId(id); 
  }

  useEffect(() => {
    const fetchData = async () => {
      const [applyResult, waitResult, matchedResult, finishedResult, chefInfo] = await Promise.all([
        fetchChefPartyApply(),
        fetchChefPartyMatchWait(),
        fetchChefPartyMatched(),
        fetchChefPartyMatchFinished(),
        fetchChefInfo()
      ]);
      setRequestCardList(applyResult);
      setMatchWaitList(waitResult);
      setMatchedList(matchedResult);
      setMatchFinishedList(finishedResult);
      setChefId(chefInfo.id);
    };
  
    fetchData();
  }, []);


  return (
    <>
    <Title title={'매칭 관리'}></Title>
    <ReserveBox>
            {modal === "requestMatch" &&
              <RequestModal 
              chefId={chefId} 
              setModal={setModal} 
              selectedId={selectedId} 
              prevScrollY={prevScrollY}/>}

            {modal === "beforeMatch" | modal === "matched" | modal === "completed" &&
              <ChefMatchModal 
              matchStatus={modal} 
              chefId={chefId} 
              setModal={setModal} 
              selectedId={selectedId} 
              prevScrollY={prevScrollY}/>}
      <ReserveContainer>

        <RequestContainer>
          <ContainerTitleContainer>
            <ContainerTitle>답변을 기다리는 요청들</ContainerTitle>
            <ContainerSubTitle>고객님이 요리사님에게 홈파티 요청을 보내셨어요! ‘상세 보기’를 클릭하고 홈파티 정보를 확인 후 요청에 답변해주세요.</ContainerSubTitle>
            <SeeMoreBtn>전체보기 &gt; </SeeMoreBtn>
          </ContainerTitleContainer>
          <RequestListContainer>  
            <RequestList>

            {/* 답변을 기다리는 요청들 */}
              {requestCardList?.map((request)=>(
                <RequestCard id={request.id} onClick={()=>handleModal('requestMatch', request.id)}>
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
                        <RequestDescInfoText>{request.scheduleAt.substr(0,10)}</RequestDescInfoText>
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
                  <RequestDate>{request.createdAt.substr(0,10)}</RequestDate>
                </RequestData>
                  <RequestDescBtn>상세보기</RequestDescBtn>
                </RequestCard>
              ))
              }        
            </RequestList>
          </RequestListContainer>
          </RequestContainer>  
          
        {/* 매칭 대기 중인 홈파티 */}
        <MatchContainer>
          <ContainerTitleContainer>
            <ContainerTitle>매칭 대기 중인 홈파티</ContainerTitle>
            <ContainerSubTitle>‘홈파티 찾기’에서 신청하신 홈파티입니다. 고객님과 매칭되면 ‘매칭된 홈파티’ 리스트에 자동으로 추가됩니다. </ContainerSubTitle>
          </ContainerTitleContainer>
          <MatchList state={"beforeMatch"}>
            {matchWaitList?.map(card=>(
                <HomePartyCard id={card.id} info={card.info} scheduledAt={card.scheduleAt.substr(0,10)} text={"매칭 대기 중"} onClick={()=>handleModal('beforeMatch', card.id)} bgColor={"#FFF3EA"}/>))
                }
          </MatchList>
        </MatchContainer>

        {/* 매칭된 홈파티 */}
        <MatchContainer>
          <ContainerTitleContainer>
            <ContainerTitle>매칭된 홈파티</ContainerTitle>
            <ContainerSubTitle>매칭되어 방문 예정인 홈파티입니다.</ContainerSubTitle>
            <SeeMoreBtn>전체보기 &gt; </SeeMoreBtn>
          </ContainerTitleContainer>
          <MatchList state={"matched"}>
            {matchedList?.map(card=> (
              <HomePartyCard id={card.id} info={card.info} scheduledAt={card.scheduleAt.substr(0,10)} text={"방문 예정"} onClick={()=>handleModal('matched', card.id)} bgColor={"#FA7C15"} textColor={"white"}/>))
              }
          </MatchList>
        </MatchContainer>

        {/* 방문 완료된 홈파티 */}
        <MatchContainer>
          <ContainerTitleContainer>
            <ContainerTitle>방문 완료된 홈파티</ContainerTitle>
            <ContainerSubTitle>방문이 완료된 홈파티입니다.</ContainerSubTitle>
            <SeeMoreBtn>전체보기 &gt; </SeeMoreBtn>
          </ContainerTitleContainer>
          <MatchList state={"completed"}>
              {matchFinishedList?.map(card=> (
              <HomePartyCardMatchFinished id={card.id} info={card.info} scheduledAt={card.scheduleAt.substr(0,10)} text={"방문 완료"} onClick={()=>handleModal('completed', card.id)} bgColor={"#444444"} textColor={"white"}/>))
              }
          </MatchList>
        </MatchContainer>

      </ReserveContainer>
    </ReserveBox>
    </>
)
}

export default Reserve

const ReserveBox = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-top: 7vh;
`

const ReserveContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
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
  font-weight: 500;
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

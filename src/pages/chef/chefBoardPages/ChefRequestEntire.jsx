import React, { useEffect, useState } from 'react'
import { Title } from '../../../components/Title'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { fetchChefPartyApply } from '../../../apis/chefPartyApply'
import { RequestModal } from '../../../modal/RequestModal'
import { preventScroll } from '../../../modal/modal'
import { fetchChefInfo } from '../../../apis/chefMyPage'

export const ChefRequestEntire = () => {
    const [chefId, setChefId] = useState();
    const navigate = useNavigate();
    const [modal, setModal] = useState(false);
    const [requestCardList, setRequestCardList] = useState();
    const [prevScrollY, setPrevScrollY] = useState();
    const [selectedId, setSelectedId] = useState(); 

    useEffect(()=>{
        const getRequestData = async() => {
            const result = await fetchChefPartyApply();
            setRequestCardList(result);
        }
        const getChefInfo = async() => {
            const result = await fetchChefInfo();
            setChefId(result.id);
        }
        getRequestData();
        getChefInfo();
    },[]);

      const handleModal = (id) => {
        const prevScroll = preventScroll();
        setPrevScrollY(prevScroll);
        setSelectedId(id); 
      }

  return (
    <Container>
        {modal &&
             <RequestModal
             chefId={chefId} 
             setModal={setModal} 
             selectedId={selectedId} 
             prevScrollY={prevScrollY}/>}
        
        <RequestContainer>
        <Title title={'답변을 기다리는 요청들'} backgroundcolor={'white'}/>
        <RequestListContainer>  
        <RequestList>

        {requestCardList?.map((request)=>(
                <RequestCard id={request.id} onClick={()=>handleModal(request.id)}>
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
        <GoReservePage onClick={()=>navigate('/reserve')}>매칭 내역 메인으로</GoReservePage>
    </Container>
  )
}


const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 7%;
`

const RequestContainer = styled.div`
    width: 80%;
`

const RequestListContainer = styled.div`
  height: 95vh;
  width: 100%;
  border: solid 1px #D9D9D9;
  display: flex;
  flex-direction: column;
  background-color: #FFF3EA;
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
const GoReservePage = styled.button`
    margin-top: 5%;
    background-color: #FA7C15;
    border: none;
    color: white;
    width: 339px;
    height: 48px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
`
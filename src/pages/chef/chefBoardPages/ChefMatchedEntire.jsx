import React, { useEffect, useState } from 'react'
import { Title } from '../../../components/Title'
import styled from 'styled-components'
import { fetchChefPartyMatched } from '../../../apis/chefPartyApply';
import { HomePartyCard } from '../../../components/HomePartyCard';
import { preventScroll } from '../../../modal/modal';
import { fetchChefInfo } from '../../../apis/chefMyPage';
import { ChefMatchModal } from '../../../modal/ChefMatchModal';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChefProfileCard } from '../../../components/ChefProfileCard';
import { useNavigate } from 'react-router-dom';

export const ChefMatchedEntire = () => {
  const [matchedList, setMatchedList] = useState([]);
  const [selectedId, setSelectedId] = useState();
  const [prevScrollY, setPrevScrollY] = useState();
  const [modal, setModal] = useState(false);
  const [chefId, setChefId] = useState();
  const navigate = useNavigate();
  // const [dummyCards, setDummyCards] = useState([
  //   {
  //     "id": 0,
  //     "info": "string",
  //     "address": "string",
  //     "scheduleAt": "string",
  //     "createdAt": "string",
  //     "budget": 0,
  //     "capacity": "string"
  //   },{
  //     "id": 0,
  //     "info": "string",
  //     "address": "string",
  //     "scheduleAt": "string",
  //     "createdAt": "string",
  //     "budget": 0,
  //     "capacity": "string"
  //   },{
  //     "id": 0,
  //     "info": "string",
  //     "address": "string",
  //     "scheduleAt": "string",
  //     "createdAt": "string",
  //     "budget": 0,
  //     "capacity": "string"
  //   },{
  //     "id": 0,
  //     "info": "string",
  //     "address": "string",
  //     "scheduleAt": "string",
  //     "createdAt": "string",
  //     "budget": 0,
  //     "capacity": "string"
  //   },{
  //     "id": 0,
  //     "info": "string",
  //     "address": "string",
  //     "scheduleAt": "string",
  //     "createdAt": "string",
  //     "budget": 0,
  //     "capacity": "string"
  //   },{
  //     "id": 0,
  //     "info": "string",
  //     "address": "string",
  //     "scheduleAt": "string",
  //     "createdAt": "string",
  //     "budget": 0,
  //     "capacity": "string"
  //   }
  //   ,{
  //     "id": 0,
  //     "info": "string",
  //     "address": "string",
  //     "scheduleAt": "string",
  //     "createdAt": "string",
  //     "budget": 0,
  //     "capacity": "string"
  //   }
  //   ,{
  //     "id": 0,
  //     "info": "string",
  //     "address": "string",
  //     "scheduleAt": "string",
  //     "createdAt": "string",
  //     "budget": 0,
  //     "capacity": "string"
  //   }
  //   ,{
  //     "id": 0,
  //     "info": "string",
  //     "address": "string",
  //     "scheduleAt": "string",
  //     "createdAt": "string",
  //     "budget": 0,
  //     "capacity": "string"
  //   }
  //   ,{
  //     "id": 0,
  //     "info": "string",
  //     "address": "string",
  //     "scheduleAt": "string",
  //     "createdAt": "string",
  //     "budget": 0,
  //     "capacity": "string"
  //   }
  // ])
 
  const ScrollMove = (dir) => {
    const scrollEl = document.getElementById("ChefProfileBox");
    if (dir) {
      scrollEl.scrollBy({ left: 200 });
    } else {
      scrollEl.scrollBy({ left: -200 });
    }
  };

  const handleModal = (id) => {
    const prevScroll = preventScroll();
    //setPrevScrollY(prevScroll);
    setSelectedId(id);  
    //setModal(true);
  }

  useEffect(()=>{
    const getChefMatched = async() => {
      const result = await fetchChefPartyMatched();
      setMatchedList(result);
    }
    const getChefInfo = async() => {
      const result = await fetchChefInfo();
      setChefId(result.id);
    } 
    getChefMatched();
    getChefInfo();
  },[])


  return (
    <Container>
      {modal &&
        <ChefMatchModal
          matchStatus={'matched'} 
          chefId={chefId} 
          setModal={setModal} 
          selectedId={selectedId} 
          prevScrollY={prevScrollY}/>}
      <Title title={'매칭된 홈파티'} backgroundcolor={'white'} />
      <MatchContainer>
          <MatchList>
             {matchedList?.map(card=> (
               <HomePartyCard 
               id={card.id} 
               info={card.info} 
               scheduledAt={card.scheduleAt.substr(0,10)} 
               text={"방문 예정"} 
               onClick={()=>handleModal(card.id)} 
               bgColor={"#FA7C15"} textColor={"white"}/>))
              }

              {/* {dummyCards.map(card=>(
               <HomePartyCard 
               id={card.id} 
               info={card.info} 
               scheduledAt={card.scheduleAt.substr(0,10)} 
               text={"방문 예정"} 
               onClick={()=>handleModal(card.id)} 
               bgColor={"#FA7C15"} textColor={"white"}/>
              ))} */}

         </MatchList>
      </MatchContainer>
      <MonthTopContainer>
        <MonthTopTitle><span style={{ color: '#FA7C15' }}>이달의 마이요리사</span> TOP20</MonthTopTitle>
        <MonthTopList>
                <ArrowLeftIcon
                icon={faChevronLeft}
                onClick={() => {
                  ScrollMove(0);
                }}
              />
              <ChefMiddle id="ChefProfileBox">
                <ChefProfileCard />
                <ChefProfileCard />
                <ChefProfileCard />
                <ChefProfileCard />
                <ChefProfileCard />
                <ChefProfileCard />
              </ChefMiddle>
              <ArrowRightIcon
                icon={faChevronRight}
                onClick={() => {
                  ScrollMove(1);
                }}
              />

        </MonthTopList>
        <GoReservePage onClick={()=>navigate('/reserve')}>매칭 내역 메인으로</GoReservePage>
      </MonthTopContainer>
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 14%;
  flex-wrap: wrap;
`

const MatchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 78%;
  flex-wrap: wrap;

`
const MatchList = styled.div`
  display: grid;
  grid-template-columns:  1fr 1fr 1fr 1fr;
  row-gap: 30px;
  column-gap: 10px;

`
const MonthTopContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  justify-content: center;
  align-items: center;

`
const MonthTopTitle = styled.div`
  font-size: 22px;
  font-weight: 700;
`
const MonthTopList = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
`

export const ChefMiddle = styled.div`
  padding: 0 0 10px;
  overflow-x: scroll;
  scroll-behavior: smooth;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  width: calc(100% - 160px);
  width: 1040px;
`;

export const ArrowLeftIcon = styled(FontAwesomeIcon)`
  color: #fa7c15;
  position: absolute;
  top: 50%;
  left: -40px;
  font-size: 22px;
  cursor: pointer;
`;
export const ArrowRightIcon = styled(FontAwesomeIcon)`
  color: #fa7c15;
  position: absolute;
  top: 50%;
  right: -40px;
  font-size: 22px;
  cursor: pointer;
`;

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
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Title } from '../../../components/Title'
import { useForm } from "react-hook-form";
import moment from "moment";
import { preventScroll } from '../../../modal/modal';
import { HomePartyCardMatchFinished } from '../../../components/HomePartyCard';
import { useNavigate } from 'react-router-dom';
import { fetchChefPartyMatchFinisedWithDate } from '../../../apis/chefPartyApply';

export const ChefCompletedEntire = () => {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();
  const [selectedId, setSelectedId] = useState();
  const navigate = useNavigate();
  const [matchFinishedList, setMatchFinishedList] = useState([
    {
      "id": 0,
      "info": "string",
      "address": "string",
      "scheduleAt": "string",
      "createdAt": "string",
      "budget": 0,
      "capacity": "string"
    },{
      "id": 0,
      "info": "string",
      "address": "string",
      "scheduleAt": "string",
      "createdAt": "string",
      "budget": 0,
      "capacity": "string"
    },{
      "id": 0,
      "info": "string",
      "address": "string",
      "scheduleAt": "string",
      "createdAt": "string",
      "budget": 0,
      "capacity": "string"
    },{
      "id": 0,
      "info": "string",
      "address": "string",
      "scheduleAt": "string",
      "createdAt": "string",
      "budget": 0,
      "capacity": "string"
    },{
      "id": 0,
      "info": "string",
      "address": "string",
      "scheduleAt": "string",
      "createdAt": "string",
      "budget": 0,
      "capacity": "string"
    }
  ]);

   const handleModal = (id) => {
      const prevScroll = preventScroll();
      //setPrevScrollY(prevScroll);
      setSelectedId(id);  
      //setModal(true);
    }

    const onDateChange = (startDate, endDate) => {
      const getCompletedList = async(startDate, endDate) => {
        const result = await fetchChefPartyMatchFinisedWithDate(startDate, endDate);
        setMatchFinishedList(result);
      }
      getCompletedList(startDate, endDate);
    };

    // 초기 날짜 세팅
    useEffect(() => {
      setValue("startDate", moment("2024-06-30").format("YYYY-MM-DD"));
      setValue("endDate", moment().add(1, "M").format("YYYY-MM-DD"));
    }, [setValue]);

    useEffect(() => {
      const subscription = watch((values) => {
        const { startDate, endDate } = values;
        if (startDate && endDate) {
          onDateChange(startDate, endDate);
        }
      });
      return () => subscription.unsubscribe(); // 메모리 누수 방지
    }, [watch]);

  return (
    <Container>
      <CompletedContainer>
        <Title title={'방문 완료된 홈파티'} backgroundcolor={'white'}/>
        <DurationFilter>
              검색 기간 설정
              <StartInput>
                <input type="date" {...register("startDate", {})} />
              </StartInput>
              ~
              <EndInput>
                <input type="date" {...register("endDate", {})} />
              </EndInput>
          </DurationFilter>
          <CompletedList>
              {matchFinishedList?.map(card=> (
                <HomePartyCardMatchFinished 
                id={card.id} 
                info={card.info} 
                scheduledAt={card.scheduleAt.substr(0,10)} 
                text={"방문 완료"} 
                onClick={()=>handleModal('completed', card.id)} 
                bgColor={'#444444'} 
                textColor={"white"}/>))
              }
          </CompletedList>
        </CompletedContainer>
        <GoReservePage onClick={()=>navigate('/reserve')}>매칭 내역 메인으로</GoReservePage>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 7%;

`
const CompletedContainer = styled.div`
    width: 83%;
    display: flex;
    display: flex;
  flex-direction: column;
  justify-content: center;
`

const DurationFilter = styled.div`
  height: 58px;
  display: flex;
  padding-left: 8px;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
`;

const StartInput = styled.div`
  margin: 0 10px 0 30px;
`;
const EndInput = styled.div`
  margin: 0 0 0 10px;
`;

const CompletedList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 30px;
  column-gap: 20px;
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
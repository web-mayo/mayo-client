import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import styled from 'styled-components'

export const CalendarPart = ({setSearchDate}) => {
  const handleDateClick = (dateObj) => {
    //console.log(dateObj.dateStr);
    setSearchDate(dateObj.dateStr);
  }

  return (
    <CalendarContainer>
      <FullCalendar
        plugins={[ dayGridPlugin, interactionPlugin ]}
        initialView="dayGridMonth"
        dateClick={(dateObj)=>handleDateClick(dateObj)}
      />
    </CalendarContainer>
  )
}

const CalendarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 770px;

  //전체 컨테이너
  .fc{
    width: 100%;
    height: 70vh;
  }

  //달력부분 컨테이너
  .fc-theme-standard{
    background-color: white;
    padding: 25px;
    border-radius: 25px;
  }

  // 달력 table border 없앰
  .fc-scrollgrid{
    border: none;
  }

  //요일 부분 하나 컨테이너
  .fc-col-header th{
    border: none;
  }

  //날짜 하나 컨테이너
  .fc-daygrid-day{
    cursor: pointer;
    border: none;
    :hover{
      background-color: #D9D9D9;
    }

  }
`
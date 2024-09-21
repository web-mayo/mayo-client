import React, { useState, useEffect } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import styled from 'styled-components'

export const CalendarPart = ({ setSearchDate }) => {
  const [selectedDates, setSelectedDates] = useState([]); // 선택된 날짜 str

  const handleDateClick = (dateObj) => {
    const clickedDate = dateObj.dateStr;

    setSelectedDates(dateObj.dateStr);
    setSearchDate(dateObj.dateStr);

    //날짜가 이미 있으면 삭제, 없으면 추가
    if(selectedDates.includes(dateObj.dateStr)){
      setSelectedDates(selectedDates.filter(date => date != clickedDate))
    }
    else{
      setSelectedDates([...selectedDates], clickedDate);
    }

    if (dateObj.dayEl.classList.contains('selected-date')) {
      dateObj.dayEl.classList.remove('selected-date');
    } else {
      dateObj.dayEl.classList.add('selected-date');
    }
  };


  return (
    <CalendarContainer>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        dateClick={handleDateClick}
      />
    </CalendarContainer>
  );
};

const CalendarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 770px;

  // 전체 컨테이너
  .fc {
    width: 100%;
    height: 72vh;
  }

  // 달력 부분 컨테이너
  .fc-theme-standard {
    background-color: white;
    padding: 25px;
    border-radius: 25px;
  }

  // 달력 table border 없앰
  .fc-scrollgrid {
    border: none;
  }

  // 요일 부분 하나 컨테이너
  .fc-col-header th {
    border: none;
  }

  // 날짜 하나 컨테이너
  .fc-daygrid-day {
    cursor: pointer;
    border: none;
    padding: 5px;

    &:hover {
      background-color: #d9d9d9;
    }
  }

  // 선택된 날짜 스타일링
  .selected-date .fc-daygrid-day-number {
    background-color: #fa7c15;
    border-radius: 50%;
    color: white;
  }

  // 기본 날짜 스타일링
  .fc-daygrid-day-number {
    display: inline-block;
    padding: 4px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

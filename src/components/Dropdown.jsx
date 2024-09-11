import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';

export const Dropdown = () => {
  const tempData = 
  {'title': '화구 종류를 선택해주세요',
    'label':['가스레인지', '휴대용 가스레인지', '전기 인덕션', '전기 하이라이트']
  }
  const [active, setActive] = useState(false);
  const [tempSelected, setTempSelected] = useState(tempData.title); // 이건 상위에서 정의해서 props로 가져오기

  // useRef로 드롭다운을 감싸는 컨테이너 참조
  const dropdownRef = useRef(null);

  useEffect(()=>{
    const handleClickOutside = (event) => {
      // 마우스 
      if(dropdownRef.current && !dropdownRef.current.contains(event.target)){
        setActive(false);
      }
    }
    // 클릭 시 이를 감지
    document.addEventListener('click', handleClickOutside);

    return () => {
      // 마우스 다운 이벤트 리스너 해제
      document.removeEventListener('click', handleClickOutside);
    }

  },[dropdownRef]);

  return (
   <BoxContainer ref={dropdownRef}>
      <SelectedLabel>
        <SelectedLabelText
          onClick={()=>{
            setActive(!active);
          }}
        >{tempSelected}</SelectedLabelText>
        <SelectedIconContainer>
          <SelectedLabelIcon 
              $active={active}
              src="/icons/dropboxIcon.png"
              onClick={()=>{
              setActive(!active);
            }}></SelectedLabelIcon>
          </SelectedIconContainer>
      </SelectedLabel>

      <OptionList $active={active}>
        {tempData.label.map(element =>(          
          <OptionItem 
          key={element}
          onClick={()=>{
            setActive(false);
            setTempSelected(element);
          }}
          >{element}</OptionItem>))}
      </OptionList>

   </BoxContainer>
  )
}

const BoxContainer = styled.div`
  position: absolute;
  width: 100%;
`
const SelectedLabel = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  width: 235px;
  height: 45px;
  justify-content: center;
  align-items: center;
  border: 1px solid #000000;
  border-radius: 8px;
  background-color: white;
  font-size: 15px;
  
`
const SelectedLabelText = styled.div`
  width: 185px;

`
const SelectedIconContainer = styled.div`
    width: 50px;
    height: 45px;
    background-color: #DDDDDD;
    display: flex;
    justify-content: center;
    align-items: center;
`

const SelectedLabelIcon = styled.img`
  width: 16px;
  height: 14px;
  transform: ${(props)=>(props.$active ? 'rotate(0deg)' : 'rotate(180deg)')};
`

const OptionList = styled.ul`
  width: 100%;
  position: relative;
  list-style-type: none; 
  visibility: ${(props)=>(props.$active ? 'visible' : 'hidden')}; 
  overflow-y: scroll;
  right: 33px;
  bottom: 17px;
`
const OptionItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 185px;
  height: 25px;
  cursor: pointer;
  background-color: white;
  border: solid black 1px;
  padding: 15px 17px 15px 17px;
  font-size: 14px;
`


import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components'
import { userStateRecoil } from '../recoil/userState';

export const Nav = () => {
    const navigate = useNavigate();
    const [userState, setUserState] = useRecoilState(userStateRecoil);

    const handleClick = (router) => {
        console.log(router);
        navigate(router);
    }
    
    const handleSwitch = (state) => {
        setUserState(state);
    }

    if(userState == 'consumer') {
  return (
    <NavContainer>
        <Container>
            <HomeBtns onClick={()=>handleClick('/')}>
                <HomeBtnImg src="images/mainlogo.png"></HomeBtnImg>
                <HomeBtn>마요의이야기</HomeBtn>
            </HomeBtns>
            <NavBtn onClick={()=>handleSwitch('chef')}>요리사전환</NavBtn>
            <NavBtn onClick={()=>handleClick('/')}>게시판</NavBtn>
            <NavBtn onClick={()=>handleClick('/userpage')}>마이페이지</NavBtn>
            <NavBtn onClick={()=>handleClick('/')}>요리사 리스트</NavBtn>
            <NavBtn onClick={()=>handleClick('/')}>이용내역</NavBtn>
            <NavBtn onClick={()=>handleClick('/')}>매칭</NavBtn>
            <LogBtn onClick={()=>handleClick('/login')}>로그인</LogBtn>
            <LogBtn onClick={()=>handleClick('/signup')}>회원가입</LogBtn>
        </Container>
    </NavContainer>
  )
}

else{
    return(
        <NavContainer>
        <Container>
            <HomeBtns onClick={()=>handleClick('/')}>
                <HomeBtnImg src="images/mainlogo.png"></HomeBtnImg>
                <HomeBtn>마요의이야기</HomeBtn>
            </HomeBtns>
            <NavBtn onClick={()=>handleSwitch('consumer')}>고객전환</NavBtn>
            <NavBtn onClick={()=>handleClick('/chefboard')}>게시판</NavBtn>
            <NavBtn onClick={()=>handleClick('/chefpage')}>마이페이지</NavBtn>
            <NavBtn onClick={()=>handleClick('/reserve')}>예약관리</NavBtn>
            <NavBtn onClick={()=>handleClick('/review')}>후기</NavBtn>
            <LogBtn onClick={()=>handleClick('/login')}>로그인</LogBtn>
            <LogBtn onClick={()=>handleClick('/signup')}>회원가입</LogBtn>
        </Container>
    </NavContainer>
    )
}}

const NavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`

const Container = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 3.5%;
    padding-top: 0.9%;
    padding-bottom: 0.9%;
    border-bottom: 1.5px solid #f5bf96;
`
const HomeBtns = styled.div`
    display: flex;
    flex-direction: row;
    cursor: pointer;
    align-items: center;
    gap: 5%;
    margin-right: 35%;
`
const HomeBtn = styled.div`
    font-size: 18px;
    white-space: nowrap;
    font-weight: 600;
`

const HomeBtnImg = styled.img`
    width: 60px;
`

const NavBtn = styled.div`
    cursor: pointer;
    font-size: 18px;
    white-space: nowrap;
    font-weight: 600;
`

const LogBtn = styled.div`
    color: white;
    white-space: nowrap;
    font-size: 18px;
    cursor: pointer;
    border-radius: 43px;
    background-color: ${(props)=> props.theme.main};
    padding: 10px 19px 10px 19px;
`
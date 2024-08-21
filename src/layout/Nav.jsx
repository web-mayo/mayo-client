import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

export const Nav = () => {
    const navigate = useNavigate();

    const handleClick = (router) => {
        console.log(router);
        navigate(router);
    }


  return (
    <>
        <Container>
            <HomeBtns onClick={()=>handleClick('/')}>
                마요의이야기
            </HomeBtns>
            <NavBtns>
                <NavBtn onClick={()=>handleClick('/login')}>로그인</NavBtn>
                <NavBtn onClick={()=>handleClick('/signup')}>회원가입</NavBtn>
            </NavBtns>
        </Container>
    </>
  )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
`
const HomeBtns = styled.div`
    display: flex;
    flex-direction: row;
    cursor: pointer;
`
const NavBtns = styled.div`
    display: flex;
    flex-direction: row;
`
const NavBtn = styled.div`
    cursor: pointer;
`
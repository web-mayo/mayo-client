import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { userStateRecoil } from "../recoil/userState";
import { getToken, logOut } from "../token.jsx";
export const Nav = () => {
  // 로그인 여부
  const token = getToken();
  const isLoggined = Boolean(token);

  const navigate = useNavigate();

  const [userState, setUserState] = useRecoilState(userStateRecoil);
  console.log(userState);
  const handleClick = (router) => {
    navigate(router);
  };

  const handleSwitch = (state) => {
    setUserState(state);
  };

  // userState는 임시로 해놓음
  // 나중에 role recoil로 교체하면 됨
  if (userState == "customer") {
    return (
      <NavContainer>
        <CustomerContainer>
          <CustomerHomeBtns onClick={() => handleClick("/")}>
            <HomeBtnImg src="images/mainlogo.png"></HomeBtnImg>
            <HomeBtn>마요의 이야기</HomeBtn>
          </CustomerHomeBtns>
          <TempBtn onClick={() => handleSwitch("chef")}>전환</TempBtn>
          <NavBtn onClick={() => handleClick("/customerBoard")}>게시판</NavBtn>
          <NavBtn onClick={() => handleClick("/customerPage")}>
            마이페이지
          </NavBtn>
          <NavBtn onClick={() => handleClick("/chefList")}>
            요리사 리스트
          </NavBtn>
          <NavBtn onClick={() => handleClick("/customerMatch")}>
            매칭내역
          </NavBtn>
          <NavBtn onClick={() => handleClick("/customerHistory")}>
            이용내역
          </NavBtn>
          <LogBtnContainer>
              <LogBtn onClick={() => logOut()}>로그아웃</LogBtn>
          </LogBtnContainer>
        </CustomerContainer>
      </NavContainer>
    );
  } else if(userState == "chef"){
    return (
      <NavContainer>
        <ChefContainer>
          <ChefHomeBtns onClick={() => handleClick("/")}>
            <HomeBtnImg src="images/mainlogo.png"></HomeBtnImg>
            <HomeBtn>마요의 이야기</HomeBtn>
          </ChefHomeBtns>
          <TempBtn onClick={() => handleSwitch("customer")}>전환</TempBtn>
          <NavBtn onClick={() => handleClick("/chefBoard")}>게시판</NavBtn>
          <NavBtn onClick={() => handleClick("/chefPage")}>마이페이지</NavBtn>
          <NavBtn onClick={() => handleClick("/reserve")}>예약관리</NavBtn>
          <NavBtn onClick={() => handleClick("/review")}>후기</NavBtn>
          <LogBtnContainer>
              <LogBtn onClick={() => logOut()}>로그아웃</LogBtn>
          </LogBtnContainer>
        </ChefContainer>
      </NavContainer>
    );
  }
  else{
    return(
      <>
      <NavContainer>
        <LogoutContainer>
          <LogoutHomeBtns onClick={() => handleClick("/")}>
              <HomeBtnImg src="images/mainlogo.png"></HomeBtnImg>
              <HomeBtn>마요의 이야기</HomeBtn>
            </LogoutHomeBtns>
            <NavBtn onClick={() => handleClick("/chefList")}>
                요리사 리스트
              </NavBtn>
              <LogBtnContainer>
                <LogBtn onClick={() => handleClick("/login")}>로그인</LogBtn>
                <LogBtn onClick={() => handleClick("/SelectSignUp")}>회원가입</LogBtn>
              </LogBtnContainer>
            </LogoutContainer>
        </NavContainer>
    </>
  )}
};

// 고객 <-> 요리사 전환 위한 임시 버튼
const TempBtn = styled.div`
  font-size: 12px;
  cursor: pointer;
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const CustomerContainer = styled.div`
  height: 7vh;
  width: 70%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3%;
  padding-top: 0.9%;
  padding-bottom: 0.9%;
  border-bottom: 1.5px solid #f5bf96;
  padding-left: 7%;
  padding-right: 7%;
`;
const ChefContainer = styled.div`
  height: 7vh;
  width: 70%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3%;
  padding-top: 0.9%;
  padding-bottom: 0.9%;
  border-bottom: 1.5px solid #f5bf96;
  padding-left: 7%;
  padding-right: 7%;
`;

const LogoutContainer = styled.div`
  height: 7vh;
  width: 70%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5%;
  padding-top: 0.9%;
  padding-bottom: 0.9%;
  border-bottom: 1.5px solid #f5bf96;
  padding-left: 7%;
  padding-right: 7%;
`

const CustomerHomeBtns = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  align-items: center;
  gap: 7%;
  margin-right: 35%;
  padding-left: 5px;
`;

const ChefHomeBtns = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  align-items: center;
  gap: 7%;
  margin-right: 49%;
  padding-left: 5px;
`;

const LogoutHomeBtns = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  align-items: center;
  gap: 10%;
  margin-right: 66%;
  padding-left: 5px;
`

const HomeBtn = styled.div`
  font-size: 14px;
  white-space: nowrap;
  font-weight: 600;
`;

const HomeBtnImg = styled.img`
  width: 60px;
`;


const NavBtn = styled.div`
  cursor: pointer;
  font-size: 16px;
  white-space: nowrap;
  font-weight: 600;
`;
const LogBtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const LogBtn = styled.div`
  color: white;
  white-space: nowrap;
  font-size: 14px;
  cursor: pointer;
  border-radius: 43px;
  background-color: ${(props) => props.theme.main};
  padding: 7px 16px 7px 16px;
`;

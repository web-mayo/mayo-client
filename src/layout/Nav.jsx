import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getToken, logOut, setToken } from "../token.jsx";
import moment from "moment";
import { CustomerRefreshToken } from "../apis/CustomerAuth.jsx";
export const Nav = () => {
  // 중복방지
  var rePostban = false;
  // 메뉴 색
  const [thisPage, setThisPage] = useState("/");
  // 로그인 여부
  const token = getToken();
  const isLoggined = Boolean(token);
  const navigate = useNavigate();
  const params = useLocation();

  const userState = localStorage.getItem("role");
  const tokenTime = localStorage.getItem("Token-time");
  const handleClick = (router) => {
    navigate(router);
  };

  const refreshToken = async () => {
    const reFreshCustomer = await CustomerRefreshToken();
    localStorage.setItem("mayo-Token", reFreshCustomer.back.accessToken);
    localStorage.setItem("mayo-Refresh", reFreshCustomer.back.refreshToken);
    localStorage.setItem("Token-time", moment());
    rePostban = false;
  };

  // 고객 토큰 만료 체크
  useEffect(() => {
    if (tokenTime && userState == "Customer") {
      console.log("reToken");
      if (rePostban == true) {
        return;
      }
      rePostban = true;
      const expiredDuration = moment
        .duration(moment().diff(tokenTime))
        .asHours();
      if (expiredDuration >= 0.9) {
        refreshToken();
      }
    }
  }, []);

  useEffect(() => {
    setThisPage(params.pathname.split("/")[1]);
  }, [params]);
  if (userState == "Customer") {
    return (
      <NavContainer>
        <CustomerContainer>
          <CustomerHomeBtns
            onClick={() => handleClick(`${process.env.PUBLIC_URL}`)}
          >
            <HomeBtnImg src="/images/mainlogo.png"></HomeBtnImg>
            <HomeBtn>마요의 이야기</HomeBtn>
          </CustomerHomeBtns>
          {/* <TempBtn onClick={() => handleSwitch("chef")}>전환</TempBtn> */}
          <NavBtn
            page={thisPage}
            active={"customerBoard"}
            onClick={() => handleClick("/customerBoard")}
          >
            요리사 찾기
          </NavBtn>
          <NavBtn
            page={thisPage}
            active={"customerMatch"}
            onClick={() => handleClick("/customerMatch")}
          >
            매칭내역
          </NavBtn>
          <NavBtn
            page={thisPage}
            active={"chefList"}
            onClick={() => handleClick("/chefList")}
          >
            추천 요리사
          </NavBtn>
          <NavBtn
            page={thisPage}
            active={"customerPage"}
            onClick={() => handleClick("/customerPage")}
          >
            마이페이지
          </NavBtn>
          {/* <NavBtn
            page={thisPage}
            active={"customerHistory"}
            onClick={() => handleClick("/customerHistory")}
          >
            이용내역
          </NavBtn> */}
          <LogBtnContainer>
            <LogOutBtn onClick={() => logOut()}>로그아웃</LogOutBtn>
          </LogBtnContainer>
        </CustomerContainer>
      </NavContainer>
    );
  } else if (userState == "Chef") {
    return (
      <NavContainer>
        <ChefContainer>
          <ChefHomeBtns
            onClick={() => handleClick(`${process.env.PUBLIC_URL}`)}
          >
            <HomeBtnImg src="images/mainlogo.png"></HomeBtnImg>
            <HomeBtn>마요의 이야기</HomeBtn>
          </ChefHomeBtns>
          {/* <TempBtn onClick={() => handleSwitch("customer")}>전환</TempBtn> */}
          <NavBtn onClick={() => handleClick("/chefBoard")}>홈파티 찾기</NavBtn>
          <NavBtn onClick={() => handleClick("/reserve")}>매칭/예약관리</NavBtn>
          <NavBtn onClick={() => handleClick("/chefPage")}>마이페이지</NavBtn>
          <NavBtn onClick={() => handleClick("/review")}>후기</NavBtn>
          <LogBtnContainer>
            <LogOutBtn onClick={() => logOut()}>로그아웃</LogOutBtn>
          </LogBtnContainer>
        </ChefContainer>
      </NavContainer>
    );
  } else {
    // 로그아웃 상태
    return (
      <>
        <NavContainer>
          <LogoutContainer>
            <LogoutHomeBtns
              onClick={() => handleClick(`${process.env.PUBLIC_URL}`)}
            >
              <HomeBtnImg src="images/mainlogo.png"></HomeBtnImg>
              <HomeBtn>마요의 이야기</HomeBtn>
            </LogoutHomeBtns>
            <NavBtn onClick={() => handleClick("/chefList")}>
              추천 요리사
            </NavBtn>
            <NavBtn onClick={() => handleClick("/login")}>로그인</NavBtn>
            <LogBtnContainer>
              <LogBtn onClick={() => handleClick("/SelectSignUp")}>
                회원가입
              </LogBtn>
            </LogBtnContainer>
          </LogoutContainer>
        </NavContainer>
      </>
    );
  }
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
`;

const LogOutBtn = styled.div`
  color: #b3b3b3;
  font-weight: 700;
  white-space: nowrap;
  font-size: 14px;
  cursor: pointer;
  border-radius: 43px;
  padding: 7px 16px 7px 16px;
`;

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
`;

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
  color: ${({ page, active }) =>
    active && page === active ? "rgb(250, 124, 21)" : "black"};
  &:hover {
    color: rgb(250, 124, 21);
  }
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

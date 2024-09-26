import React, { useEffect } from 'react'
import { getAccessToken, logOut } from '../token.jsx'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { isLoginRecoil, userRoleRecoil } from '../recoil/userState.js'
import { fetchCustomerRefreshToken } from '../apis/authCheck.js'
import { useNavigate } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout.js'

export const AuthCheck = ({children}) => {
  const userRole = useRecoilValue(userRoleRecoil);
  const [isLogin, setIsLogin] = useRecoilState(isLoginRecoil);
  const accessToken = getAccessToken();
  const navigate = useNavigate();
  const logout = useLogout();

  const isTokenValid = (token) => {
    if(!token){
      return false;
    }
    // 액세스 토큰 만료 기간 체크
    const payload = JSON.parse(atob(token.split('.')[1]));
    const expTime = payload.exp * 1000; // 만료 시간 (밀리초)
    return expTime > Date.now();
  }
  
// 리프레시 토큰으로 액세스 토큰 재요청
  const refreshAccessToken = async() => {
    // 고객 경우
    if(userRole == 'customer'){
      fetchCustomerRefreshToken();
    }
    // 요리사 경우
    else if(userRole == 'chef'){
      // api 완성되면..
    }
  }

  useEffect(()=>{
    const checkAuth = async() => {
      console.log('로그인 상태', isLogin);
      if(accessToken && isTokenValid(accessToken)){
        console.log('토큰 존재');
        // 토큰 존재 시 로그인 여부 o로
        if(!isLogin) {setIsLogin(true)};
        /*
            api로 role 뭔지 확인해서 role recoil 설정
        */
        return;
        // 리프레시 토큰으로 액세스 토큰 발급 성공
      } else if(await refreshAccessToken()){
        if(!isLogin) {setIsLogin(true)};
        /*
            api로 role 뭔지 확인해서 role recoil 설정
        */
        return;
      } else {
        // 토큰 없거나, 리프레시 토큰으로 액세스 토큰 발급 실패 시
        // 리프레시 토큰으로 액세스 토큰 발급 가능 여부 테스트 필요
        // 로그아웃
        logout();
      }
    }
    checkAuth();
  },[navigate])

  return (
    <>
        {children}
    </>
  )
}

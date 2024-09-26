import React from 'react'
import { useSetRecoilState } from 'recoil';
import { isLoginRecoil, userRoleRecoil, userStateRecoil } from '../recoil/userState';

export const useSetUserState = () => {
    const setRole = useSetRecoilState(userRoleRecoil);
    const tempSetRole = useSetRecoilState(userStateRecoil);
    const setIsLogin = useSetRecoilState(isLoginRecoil);

    // 사용자 역할 설정하는 hook
    const setUserRole = (role) => {
        setRole(role);
        tempSetRole(role);
    }
    // 로그인 여부 설정하는 hook
    const setUserIsLogin = (isLogin) => {
        setIsLogin(isLogin);
    }
    
  return (
    {setUserRole, setUserIsLogin}
  )
}

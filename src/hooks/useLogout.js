import { useSetRecoilState } from 'recoil'
import { isLoginRecoil, userRoleRecoil, userStateRecoil } from '../recoil/userState'

export const useLogout = () => {
    const setIsLogin = useSetRecoilState(isLoginRecoil);
    const setTempIsLogin = useSetRecoilState(userStateRecoil); //임시값
    const setRole = useSetRecoilState(userRoleRecoil)
    const logout = () => {
        setIsLogin(false);
        setTempIsLogin('false'); //임시
        setRole('false');
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
    }

  return logout;
}

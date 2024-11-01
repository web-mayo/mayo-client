import { useSetRecoilState } from "recoil";
import {
  isLoginRecoil,
  userRoleRecoil,
  userStateRecoil,
} from "../recoil/userState";
import { LOCALSTORAGE_TOKEN } from "../token.jsx";
export const useLogout = () => {
  const setIsLogin = useSetRecoilState(isLoginRecoil);
  const setTempIsLogin = useSetRecoilState(userStateRecoil);
  const setRole = useSetRecoilState(userRoleRecoil);
  const logout = () => {
    setIsLogin(false);
    setTempIsLogin("false"); //임시
    setRole("false");
    localStorage.removeItem("mayo-Refresh");
    localStorage.removeItem(LOCALSTORAGE_TOKEN);
  };

  return logout;
};

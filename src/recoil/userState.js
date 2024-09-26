import { atom } from "recoil";

// 임시로
export const userStateRecoil = atom({
  key: "userState",
  default: "custome",
});

export const isLoginRecoil = atom({
  key: "isLogin",
  default: false,
})

// customer / chef
export const userRoleRecoil = atom({
  key: "userRole",
  default: "false",
})
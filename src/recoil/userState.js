import { atom } from "recoil";

export const userStateRecoil = atom({
  key: "userState",
  default: "customer",
});

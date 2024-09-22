import React from "react";
import axios from "axios";
const url = process.env.REACT_APP_SERVER_URL;

// 요리사 프로필 업데이트
export const ChefProfileUpdate = async (ChefProfileData) => {
  await axios
    .patch(url + "/chef/mypage", ChefProfileData)
    .then((res) => {
      console.log(res);
      return { ok: true, data: res.data };
    })
    .catch((err) => {
      console.log(err);
      return { ok: false, data: err };
    });
};

// id가 들어간 프로필 및 활동프로필은 무엇을 의미 하는지 모르겠음

// 요리사 활동 프로필 업데이트
export const ChefActiveProfileUpdate = async (ChefActiveProfileData) => {
  await axios
    .patch(url + "/chef/mypage/profile", ChefActiveProfileData)
    .then((res) => {
      console.log(res.data);
      return { ok: true, data: res.data };
    })
    .catch((err) => {
      console.log(err);
      return { ok: false, data: err };
    });
};

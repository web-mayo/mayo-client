import axios from "axios";
import { getToken } from "../token.jsx";

const url = process.env.REACT_APP_SERVER_URL;

// 결제 임시 저장
export const registPayImp = async (imp_pay) => {
  try {
    const res = await axios.post(url + `/pay/draft`, imp_pay, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    console.log(res);
    return { call: 1, back: res.data.result };
  } catch (err) {
    console.log(err);
    return { call: 0, back: err };
  }
};

// 체크섬 검증
export const checkSumPost = async (checkInput) => {
  try {
    const res = await axios.post(url + `/pay/check`, checkInput, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return { call: 1, back: res.data.result };
  } catch (err) {
    console.log(err);
    return { call: 0, back: err };
  }
};

// 최종 승인
export const finalPayConfirm = async (payInput) => {
  try {
    const res = await axios.post(url + `/pay`, payInput, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });

    return { call: 1, back: res.data.result };
  } catch (err) {
    console.log(err);
    return { call: 0, back: err };
  }
};

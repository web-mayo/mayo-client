import axios from "axios";
import { getToken } from "../token.jsx";

const url = process.env.REACT_APP_SERVER_URL;

export const getCustomerInfo = async () => {
  try {
    console.log(getToken());
    const res = await axios.post(
      url + `/auth/customer/info`,
      {},
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }
    );
    return { call: 1, back: res.data.result };
  } catch (err) {
    console.log(err);
    return { call: 0, back: err };
  }
};

export const getCustomerProfile = async (id) => {
  try {
    const res = await axios.get(url + `/customer/mypage/` + id, {}, {});
    console.log(res);
    return { call: 1, back: res.data };
  } catch (err) {
    console.log(err);
    return { call: 0, back: err };
  }
};

export const registKitchen = async (inputData) => {
  try {
    const res = await axios.post(url + `/customer/mypage/kitchen`, inputData, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    console.log(res);
    return { call: 1, back: res.data };
  } catch (err) {
    console.log(err);
    return { call: 0, back: err };
  }
};

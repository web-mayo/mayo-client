import axios from "axios";
import { getToken } from "../token.jsx";

const url = process.env.REACT_APP_SERVER_URL;

export const getCustomerInfo = async () => {
  try {
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
    const res = await axios.get(url + `/customer/mypage/` + id, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return { call: 1, back: res.data };
  } catch (err) {
    console.log(err);
    return { call: 0, back: err };
  }
};

export const UpdateCustomerProfile = async (inputData) => {
  try {
    const res = await axios.patch(url + `/customer/mypage`, inputData, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return { call: 1, back: res.data };
  } catch (err) {
    console.log(err);
    return { call: 0, back: err };
  }
};

// 주방 프로필 등록
export const registKitchen = async (inputData) => {
  try {
    const res = await axios.post(url + `/customer/mypage/kitchen`, inputData, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return { call: 1, back: res.data };
  } catch (err) {
    console.log(err);
    return { call: 0, back: err };
  }
};

// 주방 프로필 수정
export const editKitchen = async (inputData, id) => {
  try {
    const res = await axios.patch(
      url + `/customer/mypage/kitchen/` + id,
      inputData,
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }
    );
    console.log(res);
    return { call: 1, back: res.data };
  } catch (err) {
    console.log(err);
    return { call: 0, back: err };
  }
};

// call my data
export const getCustomerInfoOnce = async () => {
  try {
    const res = await axios.post(
      url + `/auth/customer/info`,
      {},
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }
    );
    const profile = await getCustomerProfile(res.data.result.id);
    return { call: 1, back: profile.back.result };
  } catch (err) {
    console.log(err);
    return { call: 0, back: err };
  }
};

// call my main Kitchen
export const getMyMainKitchen = async () => {
  try {
    const res = await axios.get(url + `/customer/mypage/kitchen/main`, {
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

// call my kitchen list
export const getCustomerKitchenList = async () => {
  try {
    const res = await axios.get(url + `/customer/mypage/kitchen/list`, {
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

// set  kitchen main
export const setKitchenMain = async (id) => {
  try {
    const res = await axios.patch(
      url + `/customer/mypage/kitchen/main/` + id,
      {},
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }
    );
    console.log(res);
    return { call: 1, back: res.data.result };
  } catch (err) {
    console.log(err);
    return { call: 0, back: err };
  }
};

// set  kitchen main
export const getMyKitchen = async (id) => {
  console.log(id);
  try {
    const res = await axios.get(url + `/customer/mypage/kitchen/` + id, {
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

// get customer account
export const getMyAccount = async () => {
  try {
    const res = await axios.get(url + `/customer/account`, {
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

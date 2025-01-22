import axios from "axios";
import { getToken } from "../token.jsx";

const url = process.env.REACT_APP_SERVER_URL;

export const EnrollCustomerAccount = async (inputData) => {
  try {
    const res = await axios.post(url + `/customer/account`, inputData, {
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

export const getCustomerAccount = async () => {
  try {
    const res = await axios.get(url + `/customer/account`, {
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

export const delCustomerAccount = async () => {
  try {
    const res = await axios.delete(url + `/customer/account`, {
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

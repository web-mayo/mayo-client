import axios from "axios";
import { getToken } from "../token.jsx";

const url = process.env.REACT_APP_SERVER_URL;

export const getCustomerProfile = async () => {
  try {
    const res = await axios.post(
      `http://13.125.84.49:8080/auth/customer/info`,
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }
    );
    console.log(res.data);
    return { call: 1, back: res.data };
  } catch (err) {
    console.log(err);
    return { call: 0, back: err };
  }
};

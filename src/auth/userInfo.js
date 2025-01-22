import axios from "axios";
import { getAccessToken } from "../token";

const baseURL = "https://server.mayokorea.com/auth";

export const fetchCustomerInfo = async () => {
  const accessToken = getAccessToken();
  try {
    const response = await axios.post(`${baseURL}/customer/info`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data.result;
  } catch (e) {
    console.log(e);
  }
};
export const fetchChefInfo = async () => {
  const accessToken = getAccessToken();
  try {
    const response = await axios.get(`${baseURL}/chef/info`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log("사용자 정보", response.data.result);
    return response.data.result;
  } catch (e) {
    console.log(e);
  }
};

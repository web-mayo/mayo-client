import axios from "axios";
import { getToken } from "../token";
const url = process.env.REACT_APP_SERVER_URL;

export const GetPartyReviewList = async () => {
  try {
    const res = await axios.get(url + "/party/review/list", {
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

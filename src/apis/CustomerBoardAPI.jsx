import axios from "axios";
const url = process.env.REACT_APP_SERVER_URL;

export const GetMyChefLists = async (keyword) => {
  try {
    const res = await axios.get(url + "/customer/board/search?keyword=''");

    console.log(res);
    return { call: 1, back: res.data };
  } catch (err) {
    console.log(err);
    return { call: 0, back: err };
  }
};

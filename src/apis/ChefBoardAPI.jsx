import axios from "axios";
import { getToken } from "../token";
const url = process.env.REACT_APP_SERVER_URL;

// 홈파티 리스트
export const GetListHomeParty = async (input) => {
  try {
    const res = await axios.post(
      url +
        `/party/chef/board/party/list?page=${input.page}&pageSize=${input.pageSize}&sort=createdAt`,
      {},
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }
    );
    console.log(res.data);
    return { call: 1, back: res.data }; // 성공
  } catch (err) {
    console.log(err);
    return { call: 0, back: err }; // 실패
  }
};

// 홈파티 상세
export const GetHomePartyDesc = async (id) => {
  try {
    const res = await axios.get(
      url + "/party/chef/board/party/" + id,
      {},
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }
    );
    console.log(res.data);
    return { call: 1, back: res.data }; // 성공
  } catch (err) {
    console.log(err);
    return { call: 0, back: err }; // 실패
  }
};

// 홈파티 신청
export const ApplyParty = async (input) => {
  try {
    const res = await axios.post(
      url + "/party/chef/board/" + input.partyId,
      {
        partyId: input.partyId,
      },
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }
    );
    console.log(res.data);
    return { call: 1, back: res.data }; // 성공
  } catch (err) {
    console.log(err);
    return { call: 0, back: err }; // 실패
  }
};

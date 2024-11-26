import axios from "axios";
import { getToken } from "../token.jsx";

const url = process.env.REACT_APP_SERVER_URL;

// 홈파티 등록
export const registHomeParty = async (registInput) => {
  try {
    const res = await axios.post(url + `/customer/party`, registInput, {
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

//  홈파티 매칭 내역
export const getMatchedParty = async () => {
  try {
    const res = await axios.get(url + `/customer/party`, {
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

// 상세보기
export const getMatchedPartyDetail = async (partyId) => {
  try {
    const res = await axios.get(url + `/customer/party/` + partyId, {
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

// 신청한 요리사 리스트
export const getChefList = async (partyId) => {
  try {
    const res = await axios.get(url + `/customer/party/chef/list/` + partyId, {
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

// 마이요리사 선정
export const setMyChef = async (partyScheduledId) => {
  try {
    const res = await axios.post(
      url + `/customer/party/chef/assign/` + partyScheduledId,
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

export const getFinishedPartyList = async (start, end, page) => {
  try {
    const res = await axios.get(
      url +
        `/customer/party/finish/list?startDate=${start}?endDate=${end}?page=${page}`,
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

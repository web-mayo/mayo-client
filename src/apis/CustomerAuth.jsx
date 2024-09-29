import axios from "axios";

const url = process.env.REACT_APP_SERVER_URL;

// 고객 토큰 재발행
export const CusotmerRefreshToken = async (customerToken) => {
  const data = {
    refreshToken: customerToken,
  };
  await axios
    .post(url + "/customer/auth/reissue-access-token", data)
    .then((res) => {
      return { call: 1, back: res.data };
    })
    .catch((err) => {
      return { call: 0, back: err };
    });
};

// 고객 회원가입 폰
export const RegistCustomerPhone = async (registData, otherUrl) => {
  try {
    const res = await axios.post(
      otherUrl ? otherUrl : url + "/customer/auth/register/phone",
      registData
    );
    console.log(res.data);
    return { call: 1, back: res.data };
  } catch (err) {
    console.log(err);
    return { call: 0, back: err };
  }
};

// 고객 회원가입 메일
export const RegistCustomerEmail = async (registData, otherUrl) => {
  try {
    const res = await axios.post(
      otherUrl ? otherUrl : url + "/customer/auth/register/email",
      registData
    );
    console.log(res.data);
    return { call: 1, back: res.data };
  } catch (err) {
    console.log(err);
    return { call: 0, back: err };
  }
};

// 고객 로그아웃 -- 필요 없을 듯
// export const logoutCustomer = async (id) => {
//   console.log(id);
//   await axios
//     .post(url + "/customer/auth/logout", id)
//     .then((res) => {
//       console.log(res.data);
//       return { call: 1, back: res.data };
//     })
//     .catch((err) => {
//       console.log(err);
//       return { call: 0, back: err };
//     });
// };

// 고객 비밀번호 변경
export const CustomerPwdUpdate = async (customerData) => {
  await axios
    .patch(url + "/customer/auth/pwd", customerData)
    .then((res) => {
      console.log(res.data);
      return { call: 1, back: res.data };
    })
    .catch((err) => {
      console.log(err);
      return { call: 0, back: err };
    });
};
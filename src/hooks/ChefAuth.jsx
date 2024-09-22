import axios from "axios";

const url = process.env.REACT_APP_SERVER_URL;

// 요리사 회원가입 폰
export const RegistChefPhone = async (registData) => {
  await axios
    .post(url + "/chef/auth/register/phone", registData)
    .then((res) => {
      console.log(res.data);
      return { call: 1, back: res.data };
    })
    .catch((err) => {
      console.log(err);
      return { call: 0, back: err };
    });
};

// 요리사 회원가입 메일
export const RegistChefEmail = async (registData) => {
  await axios
    .post(url + "/chef/auth/register/email", registData)
    .then((res) => {
      console.log(res.data);
      return { call: 1, back: res.data };
    })
    .catch((err) => {
      console.log(err);
      return { call: 0, back: err };
    });
};

// 요리사 회원가입
export const LoginChef = async (chefLoginData) => {
  await axios
    .post(url + "/chef/auth/login", chefLoginData)
    .then((res) => {
      console.log(res.data);
      return { call: 1, back: res.data };
    })
    .catch((err) => {
      console.log(err);
      return { call: 0, back: err };
    });
};

// 요리사 비밀번호 변경

export const ChefPwdUpdate = async (chefData) => {
  await axios
    .patch(url + "/chef/auth/pwd", chefData)
    .then((res) => {
      console.log(res.data);
      return { call: 1, back: res.data };
    })
    .catch((err) => {
      console.log(err);
      return { call: 0, back: err };
    });
};
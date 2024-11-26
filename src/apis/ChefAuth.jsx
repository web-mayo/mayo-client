import axios from "axios";

const url = process.env.REACT_APP_SERVER_URL;

// 요리사 회원가입 폰
export const RegistChefPhone = async (registData) => {
  try {
    const res = await axios.post(url + "/chef/auth/register/phone", registData);
    console.log(res.data);
    return { call: 1, back: res.data }; // 성공
  } catch (err) {
    console.log(err);
    return { call: 0, back: err }; // 실패
  }
};

// 요리사 회원가입 메일
export const RegistChefEmail = async (registData) => {
  await axios
    .post(url + "/chef/auth/register/email", registData, {})
    .then((res) => {
      console.log(res.data);
      return { call: 1, back: res.data };
    })
    .catch((err) => {
      console.log(err);
      return { call: 0, back: err };
    });
};

// 요리사 로그인
export const loginChef = async (chefLoginData) => {
  try {
    const res = await axios.post(url + "/chef/auth/login", chefLoginData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    // 로그인 후 token들 localStorage 저장
    console.log(res.data);
    console.log("header", res.headers);

    const accessToken = res.headers.authorization.split(" ")[1];
    const refreshToken = res.headers.refreshtoken.split(" ")[1];
    localStorage.setItem("mayo-Token", accessToken);
    localStorage.setItem("mayo-Refresh", refreshToken);

    return { call: 1, back: res.data };
  } catch (err) {
    console.log(err);
    return { call: 0, back: err };
  }
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

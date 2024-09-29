import axios from "axios";

const url = process.env.REACT_APP_SERVER_URL;

//// 요리사 회원가입
//이메일
export const VerifyChefEmailRegist = (email) => {
  const data = {
    email: email,
  };
  axios
    .post(url + "/chef/verify/email/register", data)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

//전화번호
export const VerifyChefPhoneRegist = (phone) => {
  const data = {
    phone: phone,
  };
  axios
    .post(url + "/chef/verify/phone/register", data)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

//// 요리사 아이디찾기
//이메일 인증번호 발송
export const VerifyChefEmailUsernameSend = (email) => {
  const data = {
    email: email,
  };
  axios
    .post(url + "/chef/verify/email/username", data)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

// 이메일 인증번호 확인
export const VerifyChefEmailUsernameCheck = (email) => {
  const data = {
    email: email,
  };
  axios
    .patch(url + "/chef/verify/email/username", data)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

//전화번호 인증번호 발송
export const VerifyChefPhoneUsername = (phone) => {
  const data = {
    phone: phone,
  };
  axios
    .post(url + "/chef/verify/phone/username", data)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

//전화번호 인증번호 확인
export const VerifyChefPhoneUsernameCheck = (phone) => {
  const data = {
    phone: phone,
  };
  axios
    .patch(url + "/chef/verify/phone/username", data)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

//// 요리사 비밀번호 찾기
//이메일 인증번호 발송
export const VerifyChefEmailPwdSend = (email) => {
  const data = {
    email: email,
  };
  axios
    .post(url + "/chef/verify/email/pwd", data)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

// 이메일 인증번호 확인
export const VerifyChefEmailPwdCheck = (email) => {
  const data = {
    email: email,
  };
  axios
    .patch(url + "/chef/verify/email/pwd", data)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

//전화번호 인증번호 발송
export const VerifyChefPhonePwd = (phone) => {
  const data = {
    phone: phone,
  };
  axios
    .post(url + "/chef/verify/phone/pwd", data)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

//전화번호 인증번호 확인
export const VerifyChefPhonePwdCheck = (phone) => {
  const data = {
    phone: phone,
  };
  axios
    .patch(url + "/chef/verify/phone/pwd", data)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

//// 요리사 마이페이지 인증번호
//이메일 인증번호 발송
export const VerifyChefEmailMypageSend = (email) => {
  const data = {
    email: email,
  };
  axios
    .post(url + "/chef/verify/email/my-page", data)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

// 이메일 인증번호 확인
export const VerifyChefEmailMypageCheck = (email) => {
  const data = {
    email: email,
  };
  axios
    .patch(url + "/chef/verify/email/my-page", data)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};
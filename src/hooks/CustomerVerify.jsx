import axios from "axios";

const url = process.env.REACT_APP_SERVER_URL;

//// 고객 회원가입
//이메일
export const VerifyCustomerEmailRegist = (email) => {
  const data = {
    email: email,
  };
  axios
    .post(url + "/customer/verify/email/register", data)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

//전화번호
export const VerifyCustomerPhoneRegist = (phone) => {
  const data = {
    phone: phone,
  };
  axios
    .post(url + "/customer/verify/phone/register", data)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

//// 고객 아이디찾기
//이메일 인증번호 발송
export const VerifyCustomerEmailUsernameSend = (email) => {
  const data = {
    email: email,
  };
  axios
    .post(url + "/customer/verify/email/username", data)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

// 이메일 인증번호 확인
export const VerifyCustomerEmailUsernameCheck = (email) => {
  const data = {
    email: email,
  };
  axios
    .post(url + "/customer/verify/email/username/check", data)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

//전화번호 인증번호 발송
export const VerifyCustomerPhoneUsername = (phone) => {
  const data = {
    phone: phone,
  };
  axios
    .post(url + "/customer/verify/phone/username", data)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

//전화번호 인증번호 확인
export const VerifyCustomerPhoneUsernameCheck = (phone) => {
  const data = {
    phone: phone,
  };
  axios
    .post(url + "/customer/verify/phone/username/check", data)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

//// 고객 비밀번호 찾기
//이메일 인증번호 발송
export const VerifyCustomerEmailPwdSend = (email) => {
  const data = {
    email: email,
  };
  axios
    .post(url + "/customer/verify/email/password", data)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

// 이메일 인증번호 확인
export const VerifyCustomerEmailPwdCheck = (email) => {
  const data = {
    email: email,
  };
  axios
    .post(url + "/customer/verify/email/password/check", data)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

//전화번호 인증번호 발송
export const VerifyCustomerPhonePwd = (phone) => {
  const data = {
    phone: phone,
  };
  axios
    .post(url + "/customer/verify/phone/password", data)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

//전화번호 인증번호 확인
export const VerifyCustomerPhonePwdCheck = (phone) => {
  const data = {
    phone: phone,
  };
  axios
    .post(url + "/customer/verify/phone/password/check", data)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

//// 고객 이메일-비밀번호 찾기 인증번호 ??? 모르겟음

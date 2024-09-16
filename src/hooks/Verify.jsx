import axios from "axios";

const url = process.env.REACT_APP_SERVER_URL;

export const VerifyChefEmail = (email) => {
  const data = {
    email: email,
  };
  axios
    .post(url + "/chef/verify/email/register", data)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

export const VerifyChefPhone = (phone) => {
  const data = {
    phone: phone,
  };
  axios
    .post(url + "/chef/verify/phone/register", data)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

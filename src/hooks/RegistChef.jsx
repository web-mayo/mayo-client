import axios from "axios";

const url = process.env.REACT_APP_SERVER_URL;

export const RegistChefEmail = (registData) => {
  axios
    .post(url + "/chef/register/email", registData)
    .then((res) => {
      console.log(res);
      return { call: 1, back: res.data };
    })
    .catch((err) => {
      console.log(err);
      return { call: 0, back: err };
    });
};

export const RegistChefPhone = (registData) => {
  axios
    .post(url + "/chef/register/phone", registData)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
export const ApiTest = () => {
  const springUrl = "http://13.125.84.49:8080/chef/auth/login";

  const chefLoginData = {
    username: "testAccount1",
    password: "whatthehell1234",
  };
  const chefLogin = () => {
    axios
      .post(springUrl, chefLoginData)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    console.log(process.env.REACT_APP_SERVER_URL);
  }, []);
  return (
    <Container>
      <button onClick={() => chefLogin()}>포스트 테스트</button>
      <br />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  width: 100%;
`;

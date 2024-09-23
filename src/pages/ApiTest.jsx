import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useState } from "react";

// jest.mock("axios");
export const ApiTest = () => {
  const url = process.env.REACT_APP_SERVER_URL;
  const mockRes = {
    data: {
      results: [{ ok: "ok" }],
    },
  };
  const chefLoginData = {
    username: "testAccount1",
    password: "whatthehell1234",
  };

  // axios.post = jest.fn().mockReturnValue(mockRes);
  useEffect(() => {
    const login = async () => {
      const response = await axios.post(url + "/chef/auth/login", chefLoginData);
      return response;
    };
    const res = login();
    console.log(res);
  }, []);

  return (
    <Container>
      <button>포스트 테스트</button>
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

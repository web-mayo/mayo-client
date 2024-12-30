import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";
export const ApiTest = () => {
  const params = useLocation();
  const [imgUrl, setimgUrl] = useState(null);
  const [imgFile, setImgFile] = useState(null);
  const url =
    "https://d1tor5uc9ee4w4.cloudfront.net/CUSTOMER/627397355741001193/0_주방1_customer1.png";
  const axiosImgPutHandler = async () => {
    let formData = new FormData();
    formData.append("image", imgFile);
    const res = await postImgAPI(formData);
    console.log(res);
  };
  const uploadS3 = async (url, image) => {
    await axios
      .put(url, image, {
        headers: {
          "Content-Type": "image/jpg",
        },
      })
      .catch((e) => {
        console.log("ERROR:", e);
      })
      .then((response) => {
        console.log(response);
      });
  };

  const postImgAPI = (formData) => {
    try {
      const res = axios.post(url, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res;
    } catch (err) {
      return err;
    }
  };
  // axios.post = jest.fn().mockReturnValue(mockRes);
  useEffect(() => {}, []);

  return (
    <Container>
      <input
        type="file"
        multiple
        onChange={(e) => {
          var file = e.target.files?.[0];
          const imgUrl = URL.createObjectURL(file);
          uploadS3(url, file);
        }}
      />
      <br />

      <button
        onClick={() => {
          axiosImgPutHandler();
        }}
      >
        포스트 테스트
      </button>
      <br />
      <img src={imgUrl} alt="" />
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

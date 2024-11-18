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
    "https://mayo-ap-northeast-2-s3.s3.ap-northeast-2.amazonaws.com/CUSTOMER/631358126377005799/0_%E1%84%8C%E1%85%AE%E1%84%87%E1%85%A1%E1%86%BC1_customer1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241114T005305Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=AKIASFUIRL3OGHOTAEJN%2F20241114%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Signature=e5e9f645354a7d5d10ad387e64062b996e0808a0aa8e8ad85fcd6b49d4d35788";
  const axiosImgPutHandler = async () => {
    let formData = new FormData();
    formData.append("image", imgFile);
    const res = await postImgAPI(formData);
    console.log(res);
  };
  const uploadS3 = async (url, image) => {
    await axios
      .put(`${url}`, image, {
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

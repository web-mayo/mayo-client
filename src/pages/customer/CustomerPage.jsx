import React from "react";
import { MyPageForm } from "../../components/MyPageForm";
import axios from "axios";

export const CustomerPage = () => {
  const url = process.env.REACT_APP_SERVER_URL;
  console.log(localStorage.getItem("mayo-Token"));
  // axios
  //   .get(url + "/customer/mypage/625982911034864375", {
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem("mayo-Token")}`,
  //     },
  //   })
  //   .then((res) => {
  //     console.log(res.data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  const formFields = [
    { label: "[주방 닉네임]", name: "kitchen_nickname", type: "text" },
    { label: "[주소]", name: "address", type: "text" },
    { label: "[상세 주소]", name: "address_detail", type: "text" },
    { label: "[화구 종류]", name: "burner", type: "text" },
    { label: "[주방 사진]", name: "kitchen_image", type: "image" },
    { label: "[조리 기구 및 도구]", name: "tools", type: "text" },
    { label: "[주방 관련 요청사항]", name: "request", type: "button" },
    { label: "[주방 관련 특이사항]", name: "others", type: "button" },
  ];

  return (
    <>
      <MyPageForm formFields={formFields} type={"customer"} />
    </>
  );
};

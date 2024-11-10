import React, { useEffect, useState } from "react";
import { MyPageForm } from "../../components/MyPageForm";
import { getCustomerInfo, getCustomerProfile } from "../../apis/CustomerMyPage";
import { getToken } from "../../token";

export const CustomerPage = () => {
  const [profile, setProfile] = useState();
  const [authInfo, setAuthInfo] = useState();
  const completed = (feedback) => {
    if (feedback && feedback.call) {
      setAuthInfo(feedback.back);
    } else if (feedback && feedback.call == 0) {
      alert(feedback.back.response.data.message);
    } else {
      alert("정보를 불러오는데 문제가 생겼습니다.");
    }
  };
  const getCustomerAuth = async () => {
    const getData = await getCustomerInfo();
    completed(getData);
  };

  const getMypage = async (id) => {
    const getProfile = await getCustomerProfile(id);
    setProfile(getProfile.back.result);
  };

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
  useEffect(() => {
    getCustomerAuth();
  }, []);
  useEffect(() => {
    if (authInfo && authInfo.id) {
      getMypage(authInfo.id);
      getMyKitchen(auth);
    }
  }, [authInfo]);
  return (
    <>
      <MyPageForm formFields={formFields} type={"customer"} profile={profile} />
    </>
  );
};

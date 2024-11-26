import React, { useEffect, useState } from "react";
import { MyPageForm } from "../../components/MyPageForm";
import { getCustomerInfo, getCustomerProfile } from "../../apis/CustomerMyPage";
import { getToken } from "../../token";
import { getMyMainKitchen, getMyAccount } from "../../apis/CustomerMyPage";
import { getCustomerAccount } from "../../apis/CustomerAccountCtrlr";
export const CustomerPage = () => {
  const [profile, setProfile] = useState();
  const [kitchen, setKitchen] = useState();
  const [authInfo, setAuthInfo] = useState();
  const [accountRes, setAccountRes] = useState({});

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

  const getMyKitchen = async () => {
    const getKitchen = await getMyMainKitchen();
    setKitchen(getKitchen.back);
  };
  const getAccount = async () => {
    const getAccount = await getCustomerAccount();
    setAccountRes(getAccount);
  };
  var formFields = [
    {
      label: "[주방 닉네임]",
      name: "kitchen_nickname",
      type: "text",
      value: kitchen?.nickName,
    },
    {
      label: "[주소]",
      name: "address",
      type: "text",
      value: kitchen?.address,
    },
    {
      label: "[상세 주소]",
      name: "address_detail",
      type: "text",
      value: kitchen?.addressSub,
    },
    {
      label: "[화구 종류]",
      name: "burner",
      type: "text",
      value: kitchen?.burnerType + " " + kitchen?.burnerQuantity + "구",
    },
    {
      label: "[주방 사진]",
      name: "kitchen_image",
      type: "image",
      value: kitchen?.imageName,
    },
    {
      label: "[조리 기구 및 도구]",
      name: "tools",
      type: "text",
      value: kitchen?.kitchenToolsRegisterList,
    },
    {
      label: "[주방 관련 요청사항]",
      name: "request",
      type: "button",
      value: kitchen?.requirements,
    },
    {
      label: "[주방 관련 특이사항]",
      name: "others",
      type: "button",
      value: kitchen?.considerations,
    },
  ];

  useEffect(() => {
    getCustomerAuth();
  }, []);
  useEffect(() => {
    if (authInfo && authInfo.id) {
      getMypage(authInfo.id);
      getMyKitchen();
      getAccount();
    }
  }, [authInfo]);
  return (
    <>
      <MyPageForm
        formFields={formFields}
        type={"customer"}
        profile={profile}
        account={accountRes}
      />
    </>
  );
};

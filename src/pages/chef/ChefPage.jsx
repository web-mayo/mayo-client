import React, { useEffect, useState } from "react";
import { MyPageForm } from "../../components/MyPageForm";
import {
  fetchChefActiveProfile,
  fetchChefProfile,
} from "../../apis/chefMyPage";
import { listToString, listToTags } from "../../extraNeeds/listToString";
import { useGetChefId } from "../../hooks/useUserId";
import { set } from "react-hook-form";

export const ChefPage = () => {
  const chefId = useGetChefId();
  const [profile, setProfile] = useState({});
  const [activeProfile, setActiveProfile] = useState({});
  const tempTags = ["가성비", "맛남", "고급"];

  useEffect(() => {
    if (!chefId) {
      return;
    }

    const getChefProfile = async () => {
      const result = await fetchChefProfile(String(chefId));
      //setProfile(result.result);
      console.log("chef profile", result.result);
    };

    // const getChefActiveProfile = async () => {
    //   const result = await fetchChefActiveProfile(chefId);
    //   console.log("activeprofile", result);
    //   setActiveProfile(result);
    //   // 원래 주석
    //   //result.result.portfolio = listToString(result.result.portfolio);
    //   // tags를 # 포함한 한줄로 바꿈
    //   // result.result.tags = listToTags(tempTags);
    //   // setActiveProfile(result.result);
    //   // console.log("chef active profile", result.result);
    // };

    getChefProfile();
    //getChefActiveProfile();
  }, [chefId]);

  const formFields = [
    {
      label: "[대표경력]",
      name: "career",
      type: "text",
      value: activeProfile.experience,
    },
    {
      label: "[한 줄 소개]",
      name: "introduction",
      type: "text",
      value: activeProfile.introduce,
    },
    {
      label: "[활동 태그]",
      name: "tag",
      type: "text",
      value: activeProfile.tags,
    },
    {
      label: "[활동 가능 지역]",
      name: "area",
      type: "text",
      value: activeProfile.activeRegion,
    },
    {
      label: "[시그니처 코스 및 메뉴 설명]",
      name: "menu_desc",
      type: "text",
      value: activeProfile.description,
    },
    {
      label: "[서비스 범위 및 희망 시급]",
      name: "about_service",
      type: "text",
      value: listToString(activeProfile.additionalInfo),
    },
    {
      label: "[포트폴리오]",
      name: "potfolio",
      type: "button",
      value: "데이터가공필요",
    },
    {
      label: "[증명서]",
      name: "certification",
      type: "button",
      value: `데이터가공필요`,
    },
  ];

  return (
    <>
      <MyPageForm
        formFields={formFields}
        type={"chef"}
        profile={profile}
        activeProfile={activeProfile}
      />
    </>
  );
};

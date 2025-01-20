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
  const [regions, setRegions] = useState({});

  const groupRegions = (rawRegionList) => {
    const acc = rawRegionList.reduce((acc, item) => {
      // region을 키로 사용
      const { region, subRegion } = item;
      if (!acc[region]) {
        acc[region] = []; 
      }
      acc[region].push(subRegion); 
      return acc;
    },{});
    return acc;
  }

  useEffect(() => {
    if (!chefId) {
      return;
    }

    const getChefProfile = async () => {
      
      const result = await fetchChefProfile(String(chefId));
      console.log('chef profile', result);
      //setProfile(result.result);
      console.log("chef profile", result.result);
    };

    const getChefActiveProfile = async () => {
      const result = await fetchChefActiveProfile(chefId);
      console.log("activeprofile", result);
      setActiveProfile(result);
      setRegions(groupRegions(activeProfile.regions));
      // 원래 주석
      //result.result.portfolio = listToString(result.result.portfolio);
      // tags를 # 포함한 한줄로 바꿈
      // result.result.tags = listToTags(tempTags);
      // setActiveProfile(result.result);
      // console.log("chef active profile", result.result);

    };

    getChefProfile();
    getChefActiveProfile();
  }, [chefId]);

  const formFields = {
    'personalHistory' : {
      label: "[대표경력]",
      name: "personalHistory",
      type: "text",
      value: activeProfile.personalHistory,
    },
    'experience' : {
      label: "[경력]",
      name: "experience",
      type: "text",
      value: activeProfile.experience,
    },
    'introduce' : {
      label: "[한 줄 소개]",
      name: "introduction",
      type: "text",
      value: activeProfile.introduce,
    },
    'tags' : {
      label: "[활동 태그]",
      name: "tag",
      type: "text",
      value: activeProfile.tags,
    },
    'regions' : {
      label: "[활동 가능 지역]",
      name: "area",
      type: "text",
      value: regions,
    },
    'description' : {
      label: "[시그니처 코스 및 메뉴 설명]",
      name: "menu_desc",
      type: "text",
      value: activeProfile.description,
    },
    'serviceListAndHopePay' : {
      label: "[서비스 범위 및 희망 시급]",
      name: "about_service",
      type: "text",
      value: {"serviceList" : activeProfile.serviceList,
              "hopePay" : activeProfile.hopePay}
    },
    'minServiceTime': {
      label: "[최소 서비스 시간]",
      name: "min_service_time",
      type: "text",
      value: listToString(activeProfile.minServiceTime),
    },
    'portfolio' : {
      label: "[포트폴리오]",
      name: "potfolio",
      type: "button",
      value: activeProfile.portfolio,
    },
    'license' :{
      label: "[증명서]",
      name: "certification",
      type: "button",
      value: activeProfile.license,
    },
  };

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

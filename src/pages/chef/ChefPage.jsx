import React, { useEffect, useState } from 'react'
import { MyPageForm } from '../../components/MyPageForm'
import { fetchChefActiveProfile, fetchChefProfile } from '../../apis/chefMyPage'


export const ChefPage = () => {
  const [profile, setProfile] = useState({});
  const [activeProfile, setActiveProfile] = useState({});

  useEffect(()=>{
    const getChefProfile = async() => {
      const result = await fetchChefProfile();
      setProfile(result.result);
      console.log('chef profile', result.result);
    }

    const getChefActiveProfile = async() => {
      const result = await fetchChefActiveProfile();
      setActiveProfile(result.result);
      console.log('chef active profile', result.result);
    }

    getChefProfile();
    getChefActiveProfile();
  },[])


  const formFields = [
    {label: '[대표경력]', name: 'career', type: 'text'},
    {label: '[한 줄 소개]', name: 'introduction', type: 'text'},
    {label: '[활동 태그]', name: 'tag', type: 'text'},
    {label: '[활동 가능 지역]', name: 'area', type: 'text'},
    {label: '[시그니처 코스 및 메뉴 설명]', name: 'menu_desc', type: 'text'},
    {label: '[서비스 범위 및 희망 시급]', name: 'about_service', type: 'text'},
    {label: '[포트폴리오]', name: 'potfolio', type: 'button'},
    {label: '[증명서]', name: 'certification', type: 'button'},
  ]

  return (
    <>
      <MyPageForm formFields={formFields} type={'chef'} profile={profile} activeProfile={activeProfile}/>
    </>
  )
}



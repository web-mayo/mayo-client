import axios from "axios";
import { getAccessToken } from "../token";

const baseURL = "https://server.mayokorea.com/chef/mypage";

const tempID = "623026889893135130";

export const fetchChefInfo = async () => {
  const accessToken = getAccessToken();
  try {
    const response = await axios.get(
      `https://server.mayokorea.com/chef/auth/info`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    console.log("fetch chef info", response);
    return response;
  } catch (e) {
    console.log(e);
  }
};

export const fetchChefProfile = async(chefId) => {
    try{
        console.log(`chef profile 에서의 chef id ${typeof(chefId)}`);
        console.log(`chef id!!!!${chefId}`);
        const accessToken = getAccessToken();
        const response = await axios.get(`${baseURL}/${chefId.toString()}/profile`,
            {headers:{
                'Authorization': `Bearer ${accessToken}`,
            }}
        );
        return response.data;
    }
    catch(e){
        console.log(e);
    }
}

export const fetchPatchChefProfile = async(body) => {
    try{
        const accessToken = getAccessToken();
        const response = await axios.patch(
            `${baseURL}`,
            body,
            {
                headers: {
                  'Authorization': `Bearer ${accessToken}`,
                },
              } 
        )
        return { call: 1, back: response.data };
    }catch(e){
        console.log(e);
    }
}

export const fetchChefActiveProfile = async (chefId) => {
  try {
    console.log(typeof chefId);
    const accessToken = getAccessToken();
    const response = await axios.get(`${baseURL}/${chefId}/active-profile`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data.result;
  } catch (e) {
    console.log(e);
  }
};

export const fetchPatchChefActiveProfile = async (body) => {
    try {
      console.log(typeof chefId); // chefId의 타입 확인
      const accessToken = getAccessToken();
      const response = await axios.patch(
        `${baseURL}/active-profile`,
        body, 
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        } 
      );
      console.log('수정 후 응답', response.data);
      return response.data;
    } catch (e) {
      console.error(e);
    }
  };


// 주민번호
export const fetchChefIdentification = async() => {
    try{
        const accessToken = getAccessToken();
        const response = await axios.get(`${baseURL}/identification`,
            {
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                },
            } 
        )
        return { call: 1, back: response.data.result };
    } catch (e){
        return e;
    }
}

export const fetchPatchChefIdentification = async(body) => {
    try{
        const accessToken = getAccessToken();
        const response = await axios.patch(
            `${baseURL}/identification`,
            {
                "identificationNumber": `${body.first}${body.last}`
            },
            {
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                },
            } 
        )
        return { call: 1, back: response.data.result };
    } catch (e){
        return e;
    }
}


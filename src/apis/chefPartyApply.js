import axios from "axios";
import { getAccessToken } from "../token.jsx"

const url = process.env.REACT_APP_SERVER_URL;

export const fetchChefPartyApply = async() => {
    const accessToken = getAccessToken();
    try{
        const response = await axios.get(`${url}/party/chef/apply/wait`,{
            headers:{
                'Authorization': `Bearer ${accessToken}`,
            }
        });
        console.log('답변을 기다리는 요청들', response.data.result);
        return response.data.result;
    }
    catch(e){
        console.log(e);
    }
}

export const fetchChefPartyMatchWait = async() => {
    const accessToken = getAccessToken();
    try{
        const response = await axios.get(`${url}/party/chef/apply/match/wait`,{
            headers:{
                'Authorization': `Bearer ${accessToken}`,
            }
        });
        console.log('매칭 대기 중 홈파티', response.data.result);
        return response.data.result;
    }
    catch(e){
        console.log(e);
    }
}

export const fetchChefPartyMatched = async() => {
    const accessToken = getAccessToken();
    try{
        const response = await axios.get(`${url}/party/chef/apply/match/matched`,{
            headers:{
                'Authorization': `Bearer ${accessToken}`,
            }
        });
        console.log('매칭된 홈파티', response.data.result);
        return response.data.result;
    }
    catch(e){
        console.log(e);
    }
}

export const fetchChefPartyMatchFinished = async() => {
    const accessToken = getAccessToken();
    try{
        const response = await axios.get(`${url}/party/chef/apply/match/finished`,{
            headers:{
                'Authorization': `Bearer ${accessToken}`,
            }
        });
        console.log('방문 완료된 홈파티', response.data.result);
        return response.data.result;
    }
    catch(e){
        console.log(e);
    }
}
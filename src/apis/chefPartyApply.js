import axios from "axios";
import { getAccessToken } from "../token.jsx"

const url = process.env.REACT_APP_SERVER_URL + '/party/chef/apply';

export const fetchChefPartyApply = async() => {
    const accessToken = getAccessToken();
    try{
        const response = await axios.get(`${url}/wait`,{
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

export const fetchChefPartyApplyDetail = async(chefId, partyId)=>{
    const accessToken = getAccessToken();
    try{
        const response = await axios.get(`${url}/match/wait/${chefId}/list/party/${partyId}`,{
            headers:{
                'Authorization': `Bearer ${accessToken}`,
            }
        });
        console.log('답변을 기다리는 요청들 상세', response.data.result);
        return response.data.result;
    }
    catch(e){
        console.log(e);
    }
}

export const fetchChefPartyApplyAccept = async(partyId)=>{
    const accessToken = getAccessToken();
    try{
        const response = await axios.post(`${url}/party/${partyId}`,
            {
                'accept': true,
            },{
            headers:{
                'Authorization': `Bearer ${accessToken}`,
            },
        });
        console.log('요청 수락', response.data.result);
        return response.data.result;
    }
    catch(e){
        console.log(e);
    }
}

export const fetchChefPartyApplyReject = async(partyId)=>{
    const accessToken = getAccessToken();
    try{
        const response = await axios.post(`${url}/party/${partyId}`,
            {
                'accept': false,
            },{
            headers:{
                'Authorization': `Bearer ${accessToken}`,
            },
        });
        console.log('요청 수락', response.data.result);
        return response.data.result;
    }
    catch(e){
        console.log(e);
    }
}


export const fetchChefPartyMatchWait = async() => {
    const accessToken = getAccessToken();
    try{
        const response = await axios.get(`${url}/match/wait`,{
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

export const fecthChefPartyMatchWaitDetail = async(partyId) =>{
    const accessToken = getAccessToken();
    try{
        const response = await axios.get(`${url}/match/wait/party/${partyId}`,{
            headers:{
                'Authorization': `Bearer ${accessToken}`,
            }
        });
        console.log('매칭 대기 중 홈파티 상세', response.data.result);
        return response.data.result;
    }catch(e){
        console.log(e);
    }
}

export const fetchChefPartyMatched = async() => {
    const accessToken = getAccessToken();
    try{
        const response = await axios.get(`${url}/match/matched`,{
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

export const fetchChefPartyMatchedDetail = async(chefId, partyId) => {
    const accessToken = getAccessToken();
    try{
        const response = await axios.get(`${url}/match/matched/${chefId}/list/party/${partyId}`,{
            headers:{
                'Authorization': `Bearer ${accessToken}`,
            }
        });
        console.log('매칭된 홈파티 상세', response.data.result);
        return response.data.result;
    }
    catch(e){
        console.log(e);
    }
}

export const fetchChefPartyMatchFinished = async() => {
    const accessToken = getAccessToken();
    try{
        const response = await axios.get(`${url}/match/finished`,{
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

export const fetchChefPartyMatchFinishedDetail = async(partyId) => {
    const accessToken = getAccessToken();
    try{
        const response = await axios.get(`${url}/match/finished/party/${partyId}`,{
            headers:{
                'Authorization': `Bearer ${accessToken}`,
            }
        });
        console.log('방문 완료된 홈파티 상세', response.data.result);
        return response.data.result;
    }
    catch(e){
        console.log(e);
    }
}

export const fetchChefPartyMatchFinisedWithDate = async(startAt, endAt) => {
    const accessToken = getAccessToken();
    try{
        const response = await axios.get(`${url}/match/finished?startAt=${startAt}&endAt=${endAt}`,{
            headers:{
                'Authorization': `Bearer ${accessToken}`,
            }
        });
        console.log('방문 완료된 홈파티 with date', response.data.result);
        return response.data.result;
    }
    catch(e){
        console.log(e);
    }
}

export const fetchChefPartyReview = async (chefId, partyId) => {
    const accessToken = getAccessToken();

    try {
        const response = await axios.get(
            `${url}/match/finished/${chefId}/list/review`,
            {
                params: {
                    customerHomePartyId: partyId, // 쿼리 파라미터 추가
                },
                headers: {
                    'Authorization': `Bearer ${accessToken}`, // 헤더 추가
                },
            }
        );

        console.log('방문 완료된 홈파티 후기', response.data.result);
        return response.data.result;
    } catch (e) {
        console.error('에러 발생:', e); // 에러 로깅 추가
        throw new Error('작성된 후기가 없습니다.');
    }
};

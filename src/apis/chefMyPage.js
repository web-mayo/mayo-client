import axios from "axios";

const baseURL = "http://13.125.84.49:8080/chef/mypage";

const tempID = '623026889893135130';

export const fetchChefInfo = async() => {
    const accessToken = localStorage.getItem("access");
    try{
        const response = await axios.get(`http://13.125.84.49:8080/chef/auth/info`,
            {headers:{
                'Authorization': `Bearer ${accessToken}`,
            }}
        )
        console.log('fetch chef info', response);
        return response;
    }
    catch(e){
        console.log(e);
    }
}

export const fetchChefProfile = async() => {
    try{
        const accessToken = localStorage.getItem("access");
        const chefInfo = await fetchChefInfo();
        const response = await axios.get(`${baseURL}/${tempID}/profile`,
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

export const fetchChefActiveProfile = async() => {
    try{
        const accessToken = localStorage.getItem("access");
        const response = await axios.get(`${baseURL}/${tempID}/active-profile`,
            {headers:{
                'Authorization': `bearer ${accessToken}`,
            }}
        );
        return response.data;
    }
    catch(e){
        console.log(e);
    }
}


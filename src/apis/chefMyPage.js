import axios from "axios";

const baseURL = "http://13.125.84.49:8080/chef/mypage";

const tempID = '623026889893135130';

export const fetchChefProfile = async() => {
    try{
        const response = await axios.get(`${baseURL}/${tempID}/profile`);
        return response.data;
    }
    catch(e){
        console.log(e);
    }
}

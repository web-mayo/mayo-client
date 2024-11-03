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
        console.log('applyhomeparty', response.data.result);
        return response.data.result;
    }
    catch(e){
        console.log(e);
    }
}
import axios from "axios";
import { getRefreshToken } from "../token.jsx"

const url = process.env.REACT_APP_SERVER_URL;

// 고객 액세스 토큰 재발급
export const fetchCustomerRefreshToken = async() => {
    const refreshToken = getRefreshToken();
    try{
        const response = await axios.post(`${url}//customer/auth/reissue-access-token`,
            {"refreshToken" : refreshToken}
        )
        console.log(response.headers);
        // 액세스 토큰 다시 set하는 함수 추가 필요
    }
    catch(e){
        console.log(e);
    }
}
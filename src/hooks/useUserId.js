import { useEffect, useState } from "react"
import { fetchChefInfo } from "../auth/userInfo";

export const useGetChefId = () => {
    const [chefId, setChefId] = useState();
    
    useEffect(()=>{
        const fetchChefId = async () => {
            try{
                const response = await fetchChefInfo();
                setChefId((response.request.response).match(/"id":(\d+)/)[1]);
            }catch(e){
                console.log(e);
            }
        };
        fetchChefId();
    },[])
    console.log('chef/info API에서 가져온 chef Id', chefId);
    return chefId;
}
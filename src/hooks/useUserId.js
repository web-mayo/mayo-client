import { useEffect, useState } from "react"
import { fetchChefInfo } from "../auth/userInfo";

export const useGetChefId = () => {
    const [chefId, setChefId] = useState();
    
    useEffect(()=>{
        const fetchChefId = async () => {
            try{
                const result = await fetchChefInfo();
                setChefId(result.id);
            }catch(e){
                console.log(e);
            }
        };
        fetchChefId();
    },[])
    return chefId;
}
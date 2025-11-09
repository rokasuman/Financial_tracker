import { getUser } from "../../helper/axiosHelper";

export const autoLogin = async () =>{
    const accessJWT = localStorage.getItem("accessJWT");
        if(accessJWT){
            //call the api
            const {status,user} = await getUser();
            
            return status === "success" ? user : {}

            // mount the user in the state
        }
    
}
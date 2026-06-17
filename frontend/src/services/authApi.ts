import axios from "axios";



export const loginUser = async (mobile:any) =>{
    const response = await fetch(
        "http://localhost:5000/auth/login",
        {
            method:"POST",
            headers:{
                "Content-Type": "application/json",

            },
            body:JSON.stringify({mobile}),
        }
    );
    return response.json();
};



const API_URL ="http://localhost:5000/auth/verify-otp";

export const verifyOtp = async(mobile:string,otp:string)=>{
    const response =await axios.post(
        `${API_URL}`,
        {
            mobile,
            otp,
        }
    );
    return response.data;
};

// / IMPORTANT (sends cookie automatically)
export const api =axios.create({
  
       baseURL: "http://localhost:5000",
       withCredentials:true,  

})



const BASE_URL = "http://localhost:5000/user";
// 👤 PROFILE API (Axios version)

export const getProfileApi = async () => {
  const response = await axios.get("http://localhost:5000/user/profile",
  {
    withCredentials:true,
  }
);

  return response.data;
};
import axios from 'axios'

const rootApiEP = "http://localhost:8000/api/v1"

//creating function for accessing the jwt token
const getAccessJWT = () =>{
  return localStorage.getItem("accessJWT")
}

const apiProcessor = async ({ method, url, data, headers }) => {
  try {
    const response = await axios({
      method,
      url,
      data,
      headers
    });

    return response.data;
  } catch (error) {
    return {
      status: 'error',
      message: error?.response?.data?.error || error.message,
    };
  }
};

//  POST new user 
export const postNewUser = (data) => {
  const obj = {
    method: "post",
    url: rootApiEP + "/users",   
    data,
  };
  return apiProcessor(obj);
};

// login user 
//  POST new user 
export const loginUser = (data) => {
  const obj = {
    method: "post",
    url: rootApiEP +"/users/login",    
    data,
  };
  return apiProcessor(obj);
};

 

//   get userProfile 
export const getUser = () => {
  const obj = {
    method: "get",
    url: rootApiEP +"/users",    
   headers:{
    Authorization : getAccessJWT(),
   },
  };
  return apiProcessor(obj);
};



// transtion 
export const postNewTransaction= (data) => {
  const obj = {
    method: "post",
    url: rootApiEP + "/transactions",   
    data,
    headers:{
    Authorization : getAccessJWT(),
   },
  };
  return apiProcessor(obj);

}
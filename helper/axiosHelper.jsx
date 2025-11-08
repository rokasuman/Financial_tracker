import axios from 'axios'

const rootApiEP = "http://localhost:8000/api/v1/users"

const apiProcessor = async ({ method, url, data }) => {
  try {
    const response = await axios({
      method,
      url,
      data,
    });

    return response.data;
  } catch (error) {
    return {
      status: 'error',
      message: error.message,
    };
  }
};

//  POST new user 
export const postNewUser = (data) => {
  const obj = {
    method: "post",
    url: rootApiEP,   // 
    data,
  };
  return apiProcessor(obj);
};

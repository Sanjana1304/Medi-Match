import api from './api/axiosConfig';

export const register = async (email,name, password) => {
  try {
    const res = await api.post('/api/users/register', { email,name, password },{
        headers:{
            'Content-Type':'application/json',
        },
        withCredentials: true,
    });
    return "success";
  } catch (error) {
    return error.message;
  }
}

export const validateToken = async () => {
  try {
    const res = await api.get('/api/auth/validate-token',{
        headers:{
            'Content-Type':'application/json',
        },
        withCredentials: true,
    });
    console.log("Token validation response", res.data);
    return res.data;
  } 
  catch (error) {
    console.error("Token validation failed", error);
    return null;
  }
}

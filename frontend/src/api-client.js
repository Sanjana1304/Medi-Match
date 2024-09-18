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

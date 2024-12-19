import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";


const api = axios.create({
    baseURL: 'http://54.254.164.127/api/v1',
});

export const fetchUser = async () => {
  const token = await AsyncStorage.getItem('userToken')
  console.log({token})
    try {
        const response = await api.get('/users/me', {headers: { 
          Authorization: `Bearer ${token}` } //kalo gakebaca mungkin disini salahnya
        });
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch users: ' + error.message);
    }
}






 //Salah di tokennya, gak ke get as it should dari async storage
          //{"token": {"_h": 0, "_i": 0, "_j": null, "_k": null}}
          //Ternyata karena dia return promise jadi mesti di await in

export const createTransaction = async (type, from_to, amount, description) => {
  const token = await AsyncStorage.getItem('userToken')
  console.log({token})
    try {
      const response = await api.post('/transactions', {type, from_to, amount, description}, {headers: { 
        Authorization: 'Bearer ' + token }
      });
      return response.data;
    } catch (error) {
      throw new Error('Failed to create transaction: ' + error.message);
    }
  };
  
export const login = async (email, password) => {
  try {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Login failed');
  }
};

export const register = async (name, email, password, phone_number) => {
  try {
    const body = {
      full_name: name,
      email: email,
      password: password,
      phone_number: phone_number
    }
    const response = await api.post('/auth/register', body);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Registration failed');
  }
};

export const fetchTransactions = async () => {
  const token = await AsyncStorage.getItem('userToken')
  try {
      const response = await api.get('/transactions', {headers: { 
        Authorization: 'Bearer ' + token, }
      });
      return response.data.data;
  } catch (error) {
      throw new Error(error.response?.data?.error || 'Get transactions failed');
  }
}

export default api;
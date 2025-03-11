import { request } from "./requester";

const baseURL = "http://localhost:3000";


export const userLogin = async (userData) => {
  const { username, password } = userData;
  

  const result = request.post(`${baseURL}/auth/sgsLogin`, {username,password});
  return result
  };
  





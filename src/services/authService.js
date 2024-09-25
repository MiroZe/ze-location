import {request} from './requester'

const baseURL = "http://localhost:3000"

export const userLogin = async (userData) => {

    const result = request.post(`${baseURL}/login`,userData );
  
return result

}

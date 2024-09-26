import { request } from "./requester";

const baseURL = "http://localhost:3000";



export const getDeclarationById = async (declarationTsn) => {


const declarationData = await request.get(`${baseURL}/declarations/${declarationTsn}`);
console.log(declarationData);


}
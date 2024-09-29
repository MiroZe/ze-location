import { request } from "./requester";

const baseURL = "http://localhost:3000";



export const getDeclarationById = async (declarationTsn) => {
    try {
        
        const declarationData = await request.get(`${baseURL}/declarations/${declarationTsn}`, {
            credentials: 'include' 
        });

        console.log(declarationData);
        return declarationData;

    } catch (error) {
        console.error("Error fetching declaration data:", error);
        throw error;
    }
};


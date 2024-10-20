import { request } from "./requester";

const baseURL = "http://localhost:3000";

export const getDeclarationBarcodesById = async (declarationTsn) => {
    try {
        
        const declarationData = await request.get(`${baseURL}/declarations/${declarationTsn}/barcodes`, {
            
        });

        return declarationData;

    } catch (error) {
        console.error("Error fetching declaration data:", error);
        throw error;
    }
};
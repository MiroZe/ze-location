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

export const addItemToTruckList = async (truckData) => {
    try {
        
        const addedTruckItem = await request.post(`${baseURL}/trucks/add`, truckData);

        console.log(addedTruckItem);
        return addedTruckItem;

    } catch (error) {
        console.error("Error fetching declaration data:", error);
        throw error;
    }
};


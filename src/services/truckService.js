import { request } from "./requester";

const baseURL = "http://localhost:3000";



export const getDeclarationById = async (declarationTsn) => {
    try {
        
        const declarationData = await request.get(`${baseURL}/declarations/${declarationTsn}`, {
            credentials: 'include' 
        });

        return declarationData;

    } catch (error) {
        console.error("Error fetching declaration data:", error);
        throw error;
    }
};

export const addItemToTruckList = async (truckData) => {
    try {
        
        const addedTruckItem = await request.post(`${baseURL}/trucks/add`, truckData);
        return addedTruckItem;

    } catch (error) {
        console.error("Error fetching declaration data:", error);
        throw error;
    }
};

export const getTodayTruckList = async() => {

    try {
        const result = await request.get(`${baseURL}/trucks/getTodayTruckList`);
        console.log(result);
        
        
    } catch (error) {
        console.log(error)
    }
}


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

export const getDataFromTextFile = async (fileData) => {

try {
    const response = await fetch(`${baseURL}/declarations/createDeclaration/getExportData`,{
        method:'POST',
        body:fileData
    } )
    return await response.json()
    
} catch (error) {
    console.error("Error fetching declaration data:", error);
    throw error;
}

};

export const getExcelFile = async (declarationsData) => {

    try {

        const excelFile = await request.post(`${baseURL}/declarations/createDeclaration/getExcelFile`,declarationsData);
        return excelFile;
        
    } catch (error) {
        console.error("Error fetching declaration data:", error);
        throw error;
    }


}
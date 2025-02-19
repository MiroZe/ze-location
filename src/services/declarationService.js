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
        const response = await fetch(`${baseURL}/declarations/createDeclaration/getExcelFile`, {
            method: 'POST', // Use POST to send data
            headers: {
                'Content-Type': 'application/json', // Specify the content type
            },
            body: JSON.stringify(declarationsData), // Send the data as JSON
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch Excel file: ${response.statusText}`);
        }

        // Return the response (e.g., a Blob for file download)
        return response.blob();
    } catch (error) {
        console.error("Error fetching Excel file:", error);
        throw error;
    }
};
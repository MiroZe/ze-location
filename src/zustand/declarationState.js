import { create } from "zustand";

const useDeclarationStateStore = create((set, get) => ({
  declarationData: {
    totalPacks: 0,
    exportMRNNumber: '',
    totalGross: '',
    invoiceNumber: '',
    cmrNumber: '',
    invoiceValue: 0,
    currencyCode: '',
    consignorCountryCode: '',
    consignorID: '',
    consignorName: '',
    consignorAddres: '',
    consignorCity: '',
    consignorPostCode: '',
    consigneeCountryCode: '',
    consigneeID: '',
    consigneeName: '',
    consigneeAddres: '',
    consigneeCity: '',
    consigneePostCode: '',
    goodItems: []
  },

 
  addDeclarationData: (data) => {
    set((state) => ({
        declarationData: {
        ...state.declarationData,  
        ...data               
      },
    }));
  },
  getDeclarationData : () => get().declarationData
}));

export default useDeclarationStateStore;

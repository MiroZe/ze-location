import { create } from "zustand";


const useDeclarationStateStore = create((set) => ({
  declarations: [], // Array to hold multiple declarations
 
  // Add a new declaration to the array
  addDeclaration: (newDeclaration) => {
    set((state) => ({
      declarations: [newDeclaration, ...state.declarations]
    }));
  },
 
  // Update a specific declaration by index
  updateDeclaration: (index, updatedData) => {
    set((state) => ({
      declarations: state.declarations.map((declaration, i) =>
        i === index ? { ...declaration, ...updatedData } : declaration
      )
    }));
  },
 
  // Add good items to a specific declaration by index
  addGoodItemsToDeclaration: (index, newGoodItems) => {
    set((state) => ({
      declarations: state.declarations.map((declaration, i) =>
        i === index
          ? {
              ...declaration,
              goodItems: [...(declaration.goodItems || []), ...newGoodItems]
            }
          : declaration
      )
    }));
  },
  clearAllDeclarations : () => set({declarations:[]})
}));
  
  export default useDeclarationStateStore;



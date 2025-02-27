import { create } from "zustand";


const useDeclarationStateStore = create((set) => ({
    declarations: [], // Array to hold multiple declarations

    // Add a new declaration to the array
    addDeclaration: (newDeclaration) => {
        set((state) => {
            
            const exists = state.declarations.some(declaration => declaration.mrnNumber === newDeclaration.mrnNumber);
            
            
            if (!exists) {
                return {
                    declarations: [newDeclaration, ...state.declarations]
                };
            }
            
          
            return state;
        });
    },


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
    clearAllDeclarations: () => set({ declarations: [] }),

    updateGoodItemsByMRN: (exportMRNNumber, newGoodItems) => {
        set((state) => ({
            declarations: state.declarations.map((declaration) =>
                declaration.mrnNumber === exportMRNNumber
                    ? { ...declaration, goodItems: newGoodItems }  // Update goodItems for matching exportMRNNumber
                    : declaration
            )
        }));
    }
}));

export default useDeclarationStateStore;



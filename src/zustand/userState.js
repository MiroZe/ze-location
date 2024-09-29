import {create} from 'zustand';

const useUserStore = create((set) => ({
    user: null,
  
    addUser: (userData) => {
   
  
      set(() => {
       
        localStorage.setItem('user', JSON.stringify(userData)); // Save to localStorage
        return { user: userData }
      });
    },
  
    clearUser(state) {
      localStorage.removeItem('user');
      state.user = null; 
  }
    
  
  
  }));
  
  export default useUserStore;
  


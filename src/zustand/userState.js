import {create} from 'zustand';

const storedUser = localStorage.getItem('user');



const useUserStore = create((set) => ({
    user: storedUser ? JSON.parse(storedUser) : null,
  
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
  


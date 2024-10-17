import {create} from 'zustand';

const storedUser = localStorage.getItem('user');



const useUserStore = create((set) => ({
    user: storedUser ? JSON.parse(storedUser) : null,
  
    addUser: (userData) => {
   
  
      set(() => {
       
        localStorage.setItem('user', JSON.stringify(userData)); 
        return { user: userData }
      });
    },
  
    clearUser: () => {
      set(() => {
        localStorage.removeItem('user');
        return { user: null }; 
      });
    }

  }));
  
  export default useUserStore;
  


import {create} from 'zustand';

const storedUser = localStorage.getItem('user');



const useUserStore = create((set) => ({
    user: storedUser ? JSON.parse(storedUser) : null,
  
    addUser: (userData) => {
   
  
      set(() => {
       
        localStorage.setItem('location-user', JSON.stringify(userData)); 
        return { user: userData }
      });
    },
  
    clearUser: () => {
      set(() => {
        localStorage.removeItem('location-user');
        return { user: null }; 
      });
    }

  }));
  
  export default useUserStore;
  


import {create} from 'zustand';

const useTruckStore = create((set) => ({
    trucks: [],
  
    addTruck: (truck) => {
      const expiryTimestamp = new Date();
      expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + truck.duration);
  
      const newTruck = {
        ...truck,
        expiryTimestamp: expiryTimestamp.toISOString(),
        id: Date.now(),
      };
  
      set((state) => {
        const updatedTrucks = [...state.trucks, newTruck];
        localStorage.setItem('trucks', JSON.stringify(updatedTrucks)); // Save to localStorage
        return { trucks: updatedTrucks };
      });
    },
  
    updateTruck: (truckId, newExpiryTimestamp) => {
      set((state) => {
        const updatedTrucks = state.trucks.map((truck) =>
          truck.id === truckId ? { ...truck, expiryTimestamp: newExpiryTimestamp } : truck
        );
        localStorage.setItem('trucks', JSON.stringify(updatedTrucks)); // Save to localStorage
        return { trucks: updatedTrucks };
      });
    },
  
    loadTrucksFromLocalStorage: () => {
      const savedTrucks = localStorage.getItem('trucks');
      return savedTrucks ? JSON.parse(savedTrucks) : [];
    },
  }));
  
  export default useTruckStore;
  


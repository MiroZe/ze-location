import { create } from "zustand";

const useTimeStateStore = create((set, get) => ({
  initialTimes: {
    elapsedTime: null,
    acceptanceTime: null,
  },

  addElapsedTime: (elapsedTime) => {
    set((state) => ({
      initialTimes: {
        ...state.initialTimes,
        elapsedTime: elapsedTime,
      },
    }));
  },
  getElapsedTime: () => {
    return get().initialTimes.elapsedTime;
  },
  setAcceptanceTime: (acceptanceTime) => {
    set((state) => ({
      initialTimes: {
        ...state.initialTimes,
        acceptanceTime: acceptanceTime,
      },
    }));
  },
  getAcceptanceTime: () => {
    return get().initialTimes.acceptanceTime;
  },
}));

export default useTimeStateStore;

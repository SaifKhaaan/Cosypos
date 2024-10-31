import { create } from 'zustand';

const useUserStore = create((set) => ({
  user: { 
    name: '', 
    email: '', 
    password: '', 
    // loggedIn: false, Initial logged-in status
        loggedIn: true, // for developmet purpose

  },
  setUser: (newUser) => set((state) => ({ user: { ...state.user, ...newUser, loggedIn: true } })), // Setter function to update user state and set loggedIn to true
}));

export default useUserStore;
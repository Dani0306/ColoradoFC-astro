import { create } from "zustand";

export const useAppStore = create((set) => ({
    showNavbar: false, 
    setShowNavbar: (showNavbar) => set({ showNavbar })
}))
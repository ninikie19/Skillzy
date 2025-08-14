import { create } from "zustand";

interface UserState {
  skillCoins: number;
  notifications: string[];
  savedTeachers: number[];
  addCoins: (amount: number) => void;
  addNotification: (msg: string) => void;
  saveTeacher: (id: number) => void;
}

export const useUserStore = create<UserState>((set) => ({
  skillCoins: 10,
  notifications: [],
  savedTeachers: [],
  addCoins: (amount) => set((state) => ({ skillCoins: state.skillCoins + amount })),
  addNotification: (msg) => set((state) => ({ notifications: [...state.notifications, msg] })),
  saveTeacher: (id) => set((state) => ({ savedTeachers: [...state.savedTeachers, id] })),
}));

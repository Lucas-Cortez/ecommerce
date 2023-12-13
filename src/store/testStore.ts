import { create } from "zustand";

export const useTestStore = create((set) => ({
  count: 0,
  increment: () => set((state: { count: number }) => ({ count: state.count + 1 })),
}));

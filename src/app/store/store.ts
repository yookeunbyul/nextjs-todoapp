import { create } from "zustand";

interface Store {
  Todos: Array<any>;
}

//store 생성
export const useStore = create<Store>((set) => ({
  Todos: [],
  addTodo: (todo) => set((state) => ({ Todos: [todo, ...state.Todos] })),
}));

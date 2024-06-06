import { create } from "zustand";

interface TodosType {
  id: number;
  text: string;
}

interface Store {
  Todos: TodosType[];
  addTodo: (todo: string) => void;
  remove: (index: number) => void;
}

//store 생성
export const useStore = create<Store>((set) => ({
  Todos: [{ id: 0, text: "공부하기" }],
  addTodo: (todo) =>
    set((state) => {
      const lastId = state.Todos.length > 0 ? state.Todos[0].id : 0;
      const newId = lastId + 1;
      const newTodo = { id: newId, text: todo };
      return { Todos: [newTodo, ...state.Todos] };
    }),
  remove: (index) =>
    set((state) => ({ Todos: state.Todos.filter((v, i) => v.id !== index) })),
}));

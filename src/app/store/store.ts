import { create } from "zustand";

interface TodosType {
  id: number;
  text: string;
  isDisabled: boolean;
}

interface Store {
  Todos: TodosType[];
  addTodo: (todo: string) => void;
  remove: (id: number) => void;
  updateDisabled: (id: number, disabled: boolean) => void;
  update: (id: number, newText: string) => void;
}

//store 생성
export const useStore = create<Store>((set) => ({
  Todos: [{ id: 0, text: "공부하기", isDisabled: true }],
  addTodo: (todo: string) =>
    set((state) => {
      const lastId = state.Todos.length > 0 ? state.Todos[0].id : 0;
      const newId = lastId + 1;
      const newTodo = { id: newId, text: todo, isDisabled: true };
      return { Todos: [newTodo, ...state.Todos] };
    }),
  remove: (id: number) =>
    set((state) => ({ Todos: state.Todos.filter((v, i) => v.id !== id) })),
  updateDisabled: (id: number, disabled: boolean) =>
    set((state) => ({
      Todos: state.Todos.map((todo) =>
        todo.id === id ? { ...todo, isDisabled: disabled } : todo
      ),
    })),
  update: (id: number, newText: string) =>
    set((state) => ({
      Todos: state.Todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      ),
    })),
}));

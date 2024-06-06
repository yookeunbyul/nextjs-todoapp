"use client";

import { useStore } from "./store/store";
import { useState } from "react";

export default function Home() {
  const [todo, setTodo] = useState("");
  const { Todos, addTodo, remove, updateDisabled, update } = useStore();

  const handleAdd = () => {
    if (!todo) return alert("Please enter a todo");
    addTodo(todo);
    setTodo("");
  };

  return (
    <main>
      <div className="w-full bg-indigo-50 text-center min-h-screen">
        <h1 className="text-5xl font-bold pt-10 pb-5">Hello Todo App!</h1>
        <div className="p-10">
          <input
            className="w-5/6 placeholder:text-gray-400 border-0 p-5 rounded-l-lg focus:outline-none"
            placeholder="your todo here"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button
            className="w-1/6 bg-indigo-200 rounded-r-lg p-5"
            onClick={handleAdd}
          >
            Submit!
          </button>
        </div>

        <div className="px-10">
          {Todos.map((todo, index) => (
            <div className="flex pt-5" key={todo.id}>
              <input
                className="flex-1 placeholder:text-gray-400 border-0 p-5 rounded-lg focus:outline-none"
                disabled={todo.isDisabled}
                value={todo.text}
                onChange={(e) => update(todo.id, e.target.value)}
              />
              {todo.isDisabled ? (
                <button
                  className="flex-none mx-4 bg-indigo-200 p-5 rounded-lg"
                  onClick={() => updateDisabled(todo.id, false)}
                >
                  edit
                </button>
              ) : (
                <button
                  className="flex-none mx-4 bg-indigo-200 p-5 rounded-lg"
                  onClick={() => updateDisabled(todo.id, true)}
                >
                  done
                </button>
              )}
              <button
                className="flex-none bg-indigo-200 p-5 rounded-lg"
                onClick={() => remove(todo.id)}
              >
                delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

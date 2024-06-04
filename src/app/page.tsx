"use client";

import { useStore } from "./store/store";
import { useState } from "react";

export default function Home() {
  const [todo, setTodo] = useState("");
  const { Todos, addTodo } = useStore();

  const handelAdd = () => {
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
            onClick={handelAdd}
          >
            Submit!
          </button>
        </div>

        <div className="px-10">
          {Todos.map((todo, index) => (
            <div className="flex pt-5" key={todo}>
              <input
                className="flex-1 placeholder:text-gray-400 border-0 p-5 rounded-lg focus:outline-none"
                value={todo}
              />
              <button className="flex-none mx-4 bg-indigo-200 p-5 rounded-lg">
                edit
              </button>
              <button className="flex-none bg-indigo-200 p-5 rounded-lg">
                delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

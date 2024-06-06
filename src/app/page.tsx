"use client";

import { useStore } from "./store/store";
import { useState } from "react";
import {
  MdOutlineCheckBoxOutlineBlank,
  MdOutlineCheckBox,
  MdRocketLaunch,
  MdCheck,
  MdDelete,
  MdEdit,
} from "react-icons/md";

export default function Home() {
  const [todo, setTodo] = useState("");
  const { Todos, addTodo, remove, updateDisabled, update, updateChecked } =
    useStore();

  const handleAdd = () => {
    if (!todo) return alert("Please enter a todo");
    addTodo(todo);
    setTodo("");
  };

  return (
    <main>
      <div className="w-full bg-indigo-50 text-center min-h-screen">
        <h1 className="text-5xl font-bold pt-10 pb-5">Hello Todo App!</h1>
        <div className="p-10 flex items-center">
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
            <div className="flex items-center justify-center">
              <MdRocketLaunch size="24" />
            </div>
          </button>
        </div>

        <div className="px-10">
          {Todos.map((todo, index) => (
            <div className="flex pt-5" key={todo.id}>
              <div className="flex-none mr-2 content-center">
                {todo.isChecked ? (
                  <button onClick={() => updateChecked(todo.id, false)}>
                    <MdOutlineCheckBox size="30" />
                  </button>
                ) : (
                  <button onClick={() => updateChecked(todo.id, true)}>
                    <MdOutlineCheckBoxOutlineBlank size="30" />
                  </button>
                )}
              </div>
              <input
                className="flex-1 placeholder:text-gray-400 border-0 p-5 rounded-lg focus:outline-none w-16 md:w-32 lg:w-48"
                disabled={todo.isDisabled}
                value={todo.text}
                onChange={(e) => update(todo.id, e.target.value)}
              />
              {todo.isDisabled ? (
                <button
                  className="flex-none mx-4 bg-indigo-200 p-5 rounded-lg"
                  onClick={() => updateDisabled(todo.id, false)}
                >
                  <div className="flex items-center justify-center">
                    <MdEdit size="30" />
                  </div>
                </button>
              ) : (
                <button
                  className="flex-none mx-4 bg-indigo-200 p-5 rounded-lg"
                  onClick={() => updateDisabled(todo.id, true)}
                >
                  <div className="flex items-center justify-center">
                    <MdCheck size="30" />
                  </div>
                </button>
              )}
              <button
                className="flex-none bg-indigo-200 p-5 rounded-lg"
                onClick={() => remove(todo.id)}
              >
                <div className="flex items-center justify-center">
                  <MdDelete size="30" />
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

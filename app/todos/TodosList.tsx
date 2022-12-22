import Link from "next/link";
import React from "react";
import { Todo } from "../../typings";

const fetchTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const todos: Todo[] = await res.json();
  return todos;
};

async function TodosList() {
  const todos = await fetchTodos();

  return (
    <div className="my-16 px-4 sm:px-8 max-w-3xl m-auto">
      <div className="border border-gray-200 rounded overflow-hidden shadow-md">
        {todos.map((todo) => (
          <Link href={`/todos/${todo.id}`} className="border-b">
          <p key={todo.id} className="px-4 py-2 bg-white hover:bg-pink-200 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out" >
            Todo: {todo.id}
          </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TodosList;


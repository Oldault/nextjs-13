import React from "react";
import { Todo } from "../../../typings";
import Link from "next/link";

type PageProps = {
  params: {
    todoId: string;
  };
};

const fetchTodo = async (todoId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    { next: { revalidate: 60 } }
  );

  const todo: Todo = await res.json();
  return todo;
};

async function TodoPage({ params: { todoId } }: PageProps) {
  const todo = await fetchTodo(todoId);

  return (
    <div className="grid my-16 px-4 sm:px-8 max-w-3xl m-auto">
      <div className="p-16 bg-pink-300 border-2 m-2 shadow-lg">
        <p>
          #{todo.id}: {todo.title}
        </p>
        <p>Completed: {todo.completed ? "Yes" : "No"}</p>
        <p className="border-t border-black mt-5 text-right">
          By User: {todo.userId}
        </p>
      </div>
      <Link
        className="justify-self-center get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-pink-500 active:bg-pink-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
        href="/todos"
      >
        Go back
      </Link>
    </div>
  );
}

export default TodoPage;

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const todos: Todo[] = await res.json();

  const trimmedTodos = todos.splice(0, 10);

  return todos.map((todo) => ({
    todoId: todo.id.toString(),
  }));
}

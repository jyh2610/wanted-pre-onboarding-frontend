import React, { useEffect, useState } from "react";
import { Todo } from "../../API/todoApi";

function TodoList() {
  interface TodoList {
    id: number;
    todo: string;
  }
  const [list, setList] = useState<TodoList[]>([]);
  const token: string = localStorage.getItem("token")!;
  const todo = new Todo(token);

  useEffect(() => {
    const token: string = localStorage.getItem("token")!;
    const todo = new Todo(token);
    todo.getTodo().then((res) => setList(res.data));
  }, []);
  const deleteTodo = (id: number) => {
    todo.deleteTodo(id);
  };
  return (
    <ul>
      {list.map((item) => {
        return (
          <li key={item.id}>
            <label>
              <input type="checkbox" />
              <span>{item.todo}</span>
            </label>
            <button data-testid="modify-button">수정</button>
            <button
              onClick={() => deleteTodo(item.id)}
              data-testid="delete-button"
            >
              삭제
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;

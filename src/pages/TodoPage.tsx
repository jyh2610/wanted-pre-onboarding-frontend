import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import TodoForm from "../components/todos/TodoForm";
import TodoList from "../components/todos/TodoList";
import { Todo } from "../API/todoApi";
export interface TodoInfo {
  id: number;
  todo: string;
  isCompleted: boolean;
}
function TodoPage() {
  const [list, setList] = useState<TodoInfo[]>([]);
  const navigate = useNavigate();
  const location = useLocation();
  const endpoint = location.pathname;
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      const todo = new Todo(token!);
      todo
        .getTodo()
        .then((res) => setList(res.data))
        .catch((err) => console.error(err));
    } else {
      endpoint === "/todo" && navigate("/signin");
    }
  }, [endpoint, navigate, token]);

  return (
    <div className="frame">
      <TodoForm setList={setList} />
      <TodoList list={list} setList={setList} />
    </div>
  );
}

export default TodoPage;

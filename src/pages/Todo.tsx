import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import TodoForm from "../components/todos/TodoForm";
import TodoList from "../components/todos/TodoList";

function Todo() {
  const navigate = useNavigate();
  const location = useLocation();
  const endpoint = location.pathname;
  const token = localStorage.getItem("token");
  useEffect(() => {
    !token && endpoint === "/todo" && navigate("/signin");
  }, [endpoint, navigate, token]);
  return (
    <div className="frame">
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default Todo;

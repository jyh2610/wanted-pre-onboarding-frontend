import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Todo() {
  const navigate = useNavigate();
  const location = useLocation();
  const endpoint = location.pathname;
  const token = localStorage.getItem("token");
  useEffect(() => {
    !token && endpoint === "/todo" && navigate("/signin");
  }, [endpoint, navigate, token]);
  return <div className="frame">todo</div>;
}

export default Todo;

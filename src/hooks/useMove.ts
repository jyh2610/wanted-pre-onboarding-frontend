import { useNavigate } from "react-router-dom";

function useMove() {
  const navigate = useNavigate();
  return (page: string) => navigate(`/${page}`);
}

export default useMove;

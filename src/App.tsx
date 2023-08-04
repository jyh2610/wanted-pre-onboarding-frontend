import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SingIn from "./pages/SingIn";
import Todo from "./pages/Todo";
import { todoContext } from "./context/todoContext";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "/signin",
    element: <SingIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/todo",
    element: <Todo />,
  },
]);

export default function App() {
  return (
    <todoContext.Provider
      value={{
        todo: [],
      }}
    >
      <RouterProvider router={router} />
    </todoContext.Provider>
  );
}

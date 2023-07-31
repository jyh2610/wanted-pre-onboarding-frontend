import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SingIn from "./pages/SingIn";
import Todo from "./pages/Todo";

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
  return <RouterProvider router={router} />;
}

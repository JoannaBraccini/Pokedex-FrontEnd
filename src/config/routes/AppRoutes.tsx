import { createBrowserRouter, RouterProvider } from "react-router";
import { Home } from "../../pages/Home";
import { Error } from "../../pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}

import { createBrowserRouter, RouterProvider } from "react-router";
import { Home } from "../../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <h1>Not found</h1>,
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}

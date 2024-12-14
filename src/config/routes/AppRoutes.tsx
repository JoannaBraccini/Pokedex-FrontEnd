import { createBrowserRouter, RouterProvider } from "react-router";
import { Home } from "../../pages/Home";
import { Error } from "../../pages/Error";
import { Details } from "../../pages/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/details",
    element: <Details />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}

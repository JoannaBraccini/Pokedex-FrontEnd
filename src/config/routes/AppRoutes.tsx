import { createBrowserRouter, RouterProvider } from "react-router";
import { Home } from "../../pages/Home";
import { Error } from "../../pages/Error";
import { Details } from "../../pages/Details";
import { Pokedex } from "../../pages/pokedex";

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
    path: "/pokedex",
    element: <Pokedex />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}

import { createBrowserRouter, RouterProvider } from "react-router";
import { Home } from "../../pages/Home";
import { Error } from "../../pages/Error";
import { Details } from "../../pages/Details";
import { PokedexPage } from "../../pages/PokedexPage";

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
    element: <PokedexPage />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}

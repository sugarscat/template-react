import { Home } from "@/router/lazy.ts";
import { createBrowserRouter } from "react-router-dom";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
];

export default createBrowserRouter(routes);

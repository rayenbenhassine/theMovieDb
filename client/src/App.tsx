import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MovieLibrary from "./pages/MovieLibrary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MovieLibrary />,
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}

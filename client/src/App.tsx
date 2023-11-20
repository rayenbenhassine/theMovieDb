import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MovieLibrary from "./pages/MovieLibrary";
import Movie from "./pages/Movie";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MovieLibrary />,
  },
  {
    path: "/movie/:movieId",
    element: <Movie />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Directors from "./pages/Directors";
import Actors from "./pages/Actors";
import ErrorPage from "./pages/ErrorPage";

const routes = [
  {
    path: "/", // Home route
    element: <Home />, // Home component
    errorElement: <ErrorPage />, // Error handling component
  },
  {
    path: "/directors", // Directors route
    element: <Directors />, // Directors component
  },
  {
    path: "/actors", // Actors route
    element: <Actors />, // Actors component
  },
  {
    path: "/movie/:id", // Movie route with dynamic id
    element: <Movie />, // Movie component
  },
];

export default routes; 

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Movie} from "./pages/Movie";
import {Contact, contactData} from "./pages/Contact";
import {AppLayout} from "./components/layout/AppLayout";
import "./App.css";
import {ErrorPage} from "./pages/ErrorPage";
import {getMoviesData} from "./api/GetAPIData"
import { MovieDetails } from "./components/UI/MovieDetails";
import {getMoviesDetails} from "./api/GetMoviesDetails";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/movie",
          element: <Movie />,
          loader: getMoviesData,
        },
        {
          path: "/movie/:movieID",
          element: <MovieDetails />,
          loader: getMoviesDetails,
        },
        {
          path: "/contact",
          element: <Contact />,
          action: contactData,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
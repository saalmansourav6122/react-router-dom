import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Sitting from "./sup-page/Sitting";
import Rule from "./sup-page/Rule";
import Nav from "./components/Nav";
import Param from "./components/Param";
import Error from "./pages/Error";
import { Children } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Nav />
        <Home />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <Nav />
        <About />
      </div>
    ),
  },
  {
    path: "/product",
    element: <Product />,
    children: [
      {
        path: "sitting",
        element: <Sitting />,
      },
      {
        path: "rule",
        element: <Rule />,
      },
    ],
  },
  {
    path: "/job/:id",
    element: (
      <div>
        <Nav />
        <Param />
      </div>
    ),
  },
  {
    path: "*",
    element: <Error />,
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

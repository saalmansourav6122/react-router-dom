import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Nav from "./components/Nav";
import Param from "./components/Param";

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
    element: (
      <div>
        <Nav />
        <Product />
      </div>
    ),
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
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

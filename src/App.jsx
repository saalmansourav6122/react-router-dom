import "./App.css";
import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/product",
    element: <Product />,
  },
]);
function App() {
  return <></>;
}

export default App;

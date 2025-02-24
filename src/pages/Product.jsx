import React from "react";
import { Outlet } from "react-router";
import Nav from "../components/Nav";

function Product() {
  return (
    <>
      <Nav />
      <div>Product</div>
      <Outlet />
    </>
  );
}

export default Product;

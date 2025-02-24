import React from "react";
import { useNavigate } from "react-router";

function Error() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  return (
    <>
      <div>Error</div>
      <button onClick={handleClick}>Go to home page</button>
    </>
  );
}

export default Error;

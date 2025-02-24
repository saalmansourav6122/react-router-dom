import React from "react";
import { useNavigate, useParams } from "react-router";

function Param() {
  const { id } = useParams();
  const navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  return (
    <div>
      <p> Job:{id}</p>
      <button onClick={handleClick}>Move to Home Page</button>
    </div>
  );
}

export default Param;

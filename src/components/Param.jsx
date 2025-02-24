import React from "react";
import { useParams } from "react-router";

function Param() {
  const { id } = useParams();
  return <div>Job:{id}</div>;
}

export default Param;

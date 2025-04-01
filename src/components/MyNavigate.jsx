import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MyNavigate = () => {
  let navigate = useNavigate();
  let naviGate = () => {
    navigate('/about')
  }

  return (
    <>
      <br />
      <br />
      <button onClick={naviGate}>Home page</button>
    </>
  );
};

export default MyNavigate;

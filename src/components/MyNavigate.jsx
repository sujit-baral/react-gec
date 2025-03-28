import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MyNavigate = () => {
  let navigate = useNavigate();
  let isLoggedIn = true;
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/about");
    }
  });

  return <></>;
};

export default MyNavigate;

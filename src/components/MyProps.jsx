import React from "react";

const MyProps = (props) => {
  console.log(props.name);

  return (
    <>
      <h1>Name: {props.name}</h1>
    </>
  );
};

export default MyProps;

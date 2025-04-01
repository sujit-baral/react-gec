import React, { memo } from "react";

function Button({ handleClick, text }) {

    console.log('button called');

  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  );
}

export default  (Button);

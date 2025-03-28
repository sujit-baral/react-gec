import React, { useEffect, useState } from "react";

const UseState = () => {
  const [click, setClick] = useState(0);
  useEffect(() => {
    document.title = `You clicked for ${click} times`;
    // alert(`${click}`)
  });

  return (
    <>
      <h1>You clicked for {click} times</h1>
      <button onClick={() => setClick(click + 1)}>Click Me</button>
    </>
  );
};

export default UseState;

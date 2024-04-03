import React, { useCallback, useState } from "react";
import UseState from "../useState/UseState";

const Home = () => {
  let [a, setA] = useState(0);
  let [b, setB] = useState(0);
  console.count("home");
  function handleA() {
    setA((prev) => prev + 1);
  }
  function handleB() {
    setB((prev) => prev + 1);
  }

  let memoA = useCallback(handleA, [a]);
  return (
    <div>
      <h1>Home</h1>
      <h3>A Clicks: {a} </h3>
      <h3>B Clicks: {b} </h3>
      <button onClick={() => handleB()}>++</button>
      <UseState a={a} updateA={memoA} />
    </div>
  );
};

export default Home;

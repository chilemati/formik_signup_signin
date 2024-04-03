import React, { useEffect, useState } from "react";
import "./usestate.scss";
import { useRef } from "react";

//  js environment
const UseState = ({ a, updateA }) => {
  //  js environment
  let [Nig, setNig] = useState(0);
  let [Gha, setGha] = useState(0);
  let [name, setName] = useState("Chile");
  let [fruits, setFruits] = useState([
    "Apple",
    "Orange",
    "Banana",
    "peneapple",
    "udara",
    "Grape",
    "Carrot",
  ]);
  let c = useRef(0);
  console.count("useState");
  useEffect(() => {
    console.log("Useeffect loaded");
  }, [c.current]);

  return (
    <div align="center">
      {/* jsx environment */}
      <h3>Clicks: {a} </h3>
      <button onClick={() => updateA()}>update A</button>

      <h2>
        NIG {Nig} : {Gha} GHA
      </h2>
      <div>
        <button
          className={Nig % 2 === 0 ? "btn" : ""}
          onClick={() => setNig((Nig += 1))}
        >
          ++ NIG
        </button>
        <button onClick={() => setGha((Gha += 1))}>++ GHA</button>
      </div>
      <div>
        <button onClick={() => setNig((Nig -= 1))}>-- NIG</button>
        <button onClick={() => setGha((Gha -= 1))}>-- GHA</button>
      </div>
      {/*  */}
      <h3 style={{ color: Nig % 2 === 0 ? "green" : "red" }}>
        My Name is {name}{" "}
      </h3>
      <button onClick={() => setName("Ben")}>change Name</button>
      {/* //! using use state to show list */}
      <h4>My Favourite Fruits</h4>
      <ol>
        {fruits.map((each, i) => {
          return (
            <li key={i}>
              {" "}
              {each} {i}{" "}
            </li>
          );
        })}
      </ol>
      <h3>c = {c.current} </h3>
      <button onClick={() => (c.current += 1)}>c++</button>
    </div>
  );
  //  js environment
};

// export default UseState;
export default React.memo(UseState);

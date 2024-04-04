import React from "react";

const Props = ({ name, country }) => {
  return (
    <div>
      <h3>
        My Name is {name ? name : "Amadi Chile"}. &nbsp;
        {country ? `I am from ${country}` : ""}{" "}
      </h3>
    </div>
  );
};

export default Props;
// arrow function
// let greeting = (name) => {
//   console.log(`My name is ${name ? name : "Amadi chile"}`);
// };

// console.log(greeting());
// console.log(greeting("Ben"));
// console.log(greeting("Precious"));

// // function by keyword
// function myGreeting() {}

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  let [hidePassword, setHidepassword] = useState("password");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const [terms, setTerms] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    console.log({ email, password, terms });
  }
  return (
    <div>
      <h3>Signup It's Free</h3>

      <form onSubmit={(e) => handleSubmit(e)}>
        <fieldset>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </fieldset>
        <fieldset>
          <label htmlFor="password">
            Password{" "}
            {hidePassword === "password" ? (
              <span onClick={() => setHidepassword("text")}>show password</span>
            ) : (
              <span onClick={() => setHidepassword("password")}>
                hide password
              </span>
            )}
          </label>
          <input
            type={hidePassword}
            name="password"
            id="password"
            placeholder="strong password please"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </fieldset>
        <fieldset>
          <input
            type="checkbox"
            name="terms"
            id="terms"
            value={terms}
            onChange={(e) => setTerms(e.target.checked)}
            required
          />
          <label htmlFor="terms">
            {" "}
            By signing up, you accept our <Link to="#">
              Terms & Conditions
            </Link>{" "}
          </label>
        </fieldset>
        <div className="btns">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;

import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userInfo } from "../atoms/user";

const Navbar = () => {
  let user = useRecoilValue(userInfo);
  return (
    <div id="NavBar">
      {/* //! routing step: 3 */}
      <ul>
        <li>
          <Link to="/">Blogs</Link>
        </li>
        {user.data.role === "Admin" && (
          <li>
            <Link to="/create">Create Blog</Link>
          </li>
        )}
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/signin">Signin</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

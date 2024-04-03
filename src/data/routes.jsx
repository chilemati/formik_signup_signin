import { Link } from "react-router-dom";
import About from "../components/about/About";
import Home from "../components/home/Home";
import Signup from "../components/signup/Signup";
import Signin from "../components/signin/Signin";

let id = 1;
export const NavRoutes = [
  {
    id: id++,
    path: "/",
    element: <Home />,
  },
  {
    id: id++,
    path: "/about",
    element: <About />,
  },
  {
    id: id++,
    path: "/signup",
    element: <Signup />,
  },
  {
    id: id++,
    path: "/signin",
    element: <Signin />,
  },
  {
    id: id++,
    path: "*",
    element: (
      <div align="center">
        Sorry page not found. <br /> <Link to="/">Go to homepage</Link>{" "}
      </div>
    ),
  },
];

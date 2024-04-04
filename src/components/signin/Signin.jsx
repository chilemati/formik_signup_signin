import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useRecoilState } from "recoil";
import { userInfo } from "../atoms/user";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  let [user, setUser] = useRecoilState(userInfo);
  const redirect = useNavigate();
  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(8, "Must Contain 8 Characters")
        .required()
        .matches(/^(?=.*[a-z])/, " Must Contain One Lowercase Character")
        .matches(/^(?=.*[A-Z])/, "  Must Contain One Uppercase Character")
        .matches(/^(?=.*[0-9])/, "  Must Contain One Number Character")
        .matches(
          /^(?=.*[!@#\$%\^&\*])/,
          "  Must Contain  One Special Case Character"
        ),

      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      /* 
      step to login a user
      > use the email to check if user exist on db
      > if true, check if the password match
      > if password match, login
      > else, show wrong email or password
     */
      axios
        .get(`http://localhost:8000/users/${values.email}`)
        .then((resp) => {
          // console.log(resp.data);
          if (resp.data.password === values.password) {
            setUser({ isLoggedIn: true, data: resp.data });
            redirect("/");
          } else {
            alert("wrong email or password");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <h3>Signin Please</h3>
      <fieldset>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
      </fieldset>
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}

      <fieldset>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
      </fieldset>
      {formik.touched.password && formik.errors.password ? (
        <div>{formik.errors.password}</div>
      ) : null}

      <button type="submit">Submit</button>
    </form>
  );
};

export default Signin;

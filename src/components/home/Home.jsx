import React, { useEffect, useState } from "react";
import Props from "../props/Props";
import { useRecoilValue } from "recoil";
import { userInfo } from "../atoms/user";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  let user = useRecoilValue(userInfo);
  const redirect = useNavigate();

  useEffect(() => {
    !user.isLoggedIn && redirect("/signin");
  }, [user.isLoggedIn]);
  return (
    <div>
      <h1>All Blogs</h1>
      <Props />
      <Props name={name} />
      <Props name={"Precious"} country="Nigeria" />
    </div>
  );
};

export default Blogs;

import React from "react";
import { Outlet } from "react-router-dom";
import TopNav from "../pages/TopNav";


export default function MoviesLayout () {
  return (
    <div>
      <TopNav />
      <Outlet />
    </div>
  );
}
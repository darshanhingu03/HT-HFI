import React from "react";
import style from "./blue_banner.module.css";

function Blue_banner(props) {
  return (
    <>
      <h1 className={`${style.blue_header_heading}`}>{props.title}</h1>
    </>
  );
}

export default Blue_banner;

import React from "react";
import gif from "../assets/img/476.gif";
function Loader() {
  return (
    <div className="loader">
      <img src={gif} alt="" className="loader__gif" />
      <h1>Loading....</h1>
    </div>
  );
}

export default Loader;

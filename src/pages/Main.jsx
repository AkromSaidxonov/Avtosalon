import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { Link } from "react-router-dom";
import Category from "../components/Category";
import PersonIcon from "@mui/icons-material/Person";

const Main = () => {
  return (
    <div className="main container">
      <header className="main__header">
        <Link to="/" className="main__title">
          Bosh sahifa{" "}
          <span>
            <ArrowForwardIosIcon className="main__title-icon" />{" "}
          </span>
          Modellar
        </Link>
        <Link to="/login" className="admin-button">
          <PersonIcon /> Adminga o`tish
        </Link>
      </header>
      <h1>Modellari</h1>
      <Category />
    </div>
  );
};

export default Main;

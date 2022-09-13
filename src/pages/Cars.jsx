import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import CarsComponetnt from "../components/CarsComponent";
import { useParams } from "react-router-dom";

function Cars() {
  const {Name} = useParams()

  return (
    <div className="container cars ">
      <header className="cars__header">
        <Link to="/" className="cars__title">
          Bosh sahifa{" "}
          <span>
            <ArrowForwardIosIcon className="cars__title-icon" />{" "}
          </span>
          Modellar
          <span>
            <ArrowForwardIosIcon className="cars__title-icon" />{" "}
          </span>
          {Name} turlari
        </Link>
        <Link to="/login" className="admin-button">
          <PersonIcon /> Adminga o`tish
        </Link>
      </header>
      <h1>Model turlari</h1>

      <CarsComponetnt />
    </div>
  );
}

export default Cars;

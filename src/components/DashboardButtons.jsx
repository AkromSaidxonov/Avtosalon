import React, { useState } from "react";


import AddIcon from "@mui/icons-material/Add";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import AddCategory from "./AddCategory";
import AddCars from "./AddCars";
import { useGetAllCategoryIdQuery } from "../redux/queries/category";

function DashboardButtons({ setState, state }) {
  const [category, setCategory] = useState(false);
  const { data } = useGetAllCategoryIdQuery();
  const [cars, setCars] = useState(false);
  const handlecategory = () => {
    setCategory(true);
  };
  const handlecars = () => {
    setCars(true);
  };
  const handleClose = () => {
    setCategory(false);
  };
  const handleCloseCars = () => {
    setCars(false);
  };


  return (
    <div className="dashboard-buttons">
      <div className="left">
        <button></button>
        <h1>{state !=="mash" ? "Kategoriyalar" : "Mashinalar"}</h1>
        <FormControl sx={{marginLeft:'50px'}} className="cars-detail__right-check">
          <RadioGroup
            row
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            defaultValue={"mash"}
            value={state}
            onChange={(e) => setState(e.target.value)}
          >
            <div>
              <FormControlLabel
                value={'mash'}
                control={<Radio />}
                label="Mashinalar"
              />
            </div>
            <div>
              <FormControlLabel
                value={'category'}
                control={<Radio />}
                label="Kategoriyalar"
              />
            </div>
          </RadioGroup>
        </FormControl>
      </div>
      <div className="right">
        <button onClick={handlecategory} className="admin-button">
          <AddIcon /> Kategoriya qo`shish
        </button>
        <button onClick={handlecars} className="admin-button butleft">
          <AddIcon /> Mashina qo`shish
        </button>
      </div>
      <AddCategory category={category} handleClose={handleClose} />
      <AddCars cars={cars} handleCloseCars={handleCloseCars} marka={data} />
    </div>
  );
}

export default DashboardButtons;

import React, { useState } from "react";
import { useGetCarsDetailQuery } from "../redux/queries/cars";
import ParkIcon from "@mui/icons-material/Park";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Pannellum } from "pannellum-react";
import img360 from "../assets/img/Group.png";
import { useParams } from "react-router-dom";

function CarsDetailComponent() {
  const [value, setValue] = useState("Tashqi");

  const { id } = useParams();


  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const { data = [], isLoading } = useGetCarsDetailQuery(id);
  const item = data.data;

  return (
    <div className="category">
      {isLoading === false ? (
        <div key={item._id} className="cars-detail">
          <div className="cars-detail__left">
            <h1 className="cars-detail__left-title">{item.marka.name}</h1>
            <p className="cars-detail__left-price">{item.price} so`mdan</p>
            <img
              src={`https://cartestwebapp.herokuapp.com/${item.imgUrl}`}
              alt="car"
              className="cars-detail__left-img"
            ></img>
            <ul>
              <li>
                Marka: <span>{item.marka.name}</span>
              </li>
              <li>
                Tanirofkasi: <span>{item.tonirovka}</span>
              </li>
              <li>
                Motor: <span>{item.motor}</span>
              </li>
              <li>
                Ishlab chiqarilgan yili: <span>{item.year}</span>
              </li>
              <li>
                Rangi: <span>{item.color}</span>
              </li>
              <li>
                Uzunligi: <span>{item.distance}</span>
              </li>
              <li>
                Gearbook: <span>{item.gearbok}</span>
              </li>
              <li>
                Description: <span>{item.description}</span>
              </li>
            </ul>
            <hr />
            <h2>
              Umumiy xarajat: <span>{item.price}</span>{" "}
            </h2>
          </div>
          <div className="cars-detail__right">
            <header>
              <h1>{item.marka.name}</h1>
              <div>
                <ParkIcon />
                <BookmarkIcon />
              </div>
            </header>
            <div className="cars-detail__right-img">
              <Pannellum
                image={
                  value === "Tashqi"
                    ? `https://cartestwebapp.herokuapp.com/${item.imgUrlAutside}`
                    : `https://cartestwebapp.herokuapp.com/${item.imgUrlInside}`
                }
                pitch={10}
                yaw={180}
                hfov={110}
                autoLoad
                showZoomCtrl={false}
                onLoad={() => {
                  console.log("panorama loaded");
                }}
              >
                <Pannellum.Hotspot
                  type="custom"
                  pitch={31}
                  yaw={150}
                  handleClick={(evt, name) => console.log(name)}
                  name="hs1"
                />
              </Pannellum>
              <img src={img360} alt="360" />
            </div>
            <p>
              Tasvir tanlangan konfiguratsiyaga mos kelmasligi mumkin.
              Mashinaning rangi ushbu saytda taqdim etilganidan farq qilishi
              mumkin.
            </p>
            <FormControl className="cars-detail__right-check">
              <RadioGroup
                row
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                defaultValue={"Tashqi"}
                value={value}
                onChange={handleChange}
              >
                <div>
                  <FormControlLabel
                    value="Tashqi"
                    control={<Radio />}
                    label="Tashqi"
                  />
                </div>
                <div>
                  <FormControlLabel
                    value="Ichki"
                    control={<Radio />}
                    label="Ichki makon"
                  />
                </div>
              </RadioGroup>
            </FormControl>
          </div>
        </div>
      ) : (
        <h1>Loading.....</h1>
      )}
    </div>
  );
}

export default CarsDetailComponent;

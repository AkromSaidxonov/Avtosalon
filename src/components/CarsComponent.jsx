import React from "react";
import { useNavigate } from "react-router";
import { useGetCarsQuery } from "../redux/queries/cars";
import { useParams } from "react-router";

function CarsComponent() {
  const navigate = useNavigate();

  const getCarId = (carid) => {
    navigate(`/cars/${carid}`);
  };
  const { id } = useParams();
  const { data = [], isLoading } = useGetCarsQuery(id);

  return (
    <div className="cars-component">
      {isLoading === false ? (
        data?.data?.data?.map((item) => (
          <div
            key={item._id}
            onClick={getCarId.bind(null, item._id)}
            className="cars-component__card-main"
          >
            <div className="cars-component__card">
              <div className="cars-component__img-parent">
                <img
                  component="img"
                  src={`https://cartestwebapp.herokuapp.com/${item.imgUrl}`}
                  alt="carModuls"
                  className="cars-component__img"
                />
              </div>
              <div className="cars-component__title">
                <p>{item.marka.name}</p>
                <h5>Narxi: {item.price}</h5>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h1>Loading.....</h1>
      )}
    </div>
  );
}

export default CarsComponent;

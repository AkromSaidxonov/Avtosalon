import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import { useNavigate } from "react-router";
import { useGetAllCategoryQuery } from "../redux/queries/category";

function Category() {
  const [pag, setPag] = useState(1);
  const { data = [], isLoading } = useGetAllCategoryQuery({ id: pag });

  const navigate = useNavigate();

  const getCategoryID = (id, Name) => {
    navigate(`cars/${Name}/${id}`);
  };

  const total = parseInt(Math.ceil(data?.data?.total / 4));

  return (
    <div>
      <div className="category">
        {isLoading === false ? (
          data?.data?.data?.map((item) => (
            <div
              key={item._id}
              onClick={getCategoryID.bind(null, item._id, item.name)}
              className="category__card-main"
            >
              <div className="category__card">
                <div className="category__img-parent">
                  <img
                    component="img"
                    src={`https://cartestwebapp.herokuapp.com/${item.imgUrl}`}
                    alt="carModuls"
                    className="category__img"
                  />
                </div>
                <p className="category__title">{item.name}</p>
              </div>
            </div>
          ))
        ) : (
          <h1>Loading.....</h1>
        )}
      </div>
        <div className="pagination">
          <Stack
            spacing={2}
            sx={{ marginTop: "50px", marginLeft: "40%", width: "400px" }}
          >
            <Pagination
              onChange={(e, page) => setPag(page)}
              count={total}
              siblingCount={0}
              variant="outlined"
              color="primary"
            />
          </Stack>
        </div>
    </div>
  );
}

export default Category;

import React, { useState, useEffect } from "react";
import DashboardButtons from "./DashboardButtons";
import DashboardTable from "./DashboardTable";
import CategoryTable from "./CategoryTable";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import {
  useGetAllCarsQuery,
  useDeleteCarMutation,
} from "../redux/queries/cars";



function DashboardComponent() {
  const [pag, setPag] = useState(1);
  const [state, setState] = useState("mash");
  const [ord, setOrd] = useState(0);
  const [catCount, setCatCount] = useState(8);
  const { data = [], isLoading } = useGetAllCarsQuery(pag);
  const total = parseInt(Math.ceil(data?.data?.total / 8));
  const [deleteCar] = useDeleteCarMutation();
  const [deleteCategory] = useDeleteCarMutation();

  useEffect(() => {}, [data, state]);
  const onChange = (e) => {
    setPag(e);
    setOrd(ord + 8)
  };
  return (
    <div className="dashboard__component">
      <DashboardButtons setState={setState} state={state} />
      {state !== "mash" ? (
        <CategoryTable
          deleteCategory={deleteCategory}
          setCatCount={setCatCount}
          pag={pag}
          ord={ord}
        />
      ) : (
        <DashboardTable
          deleteCar={deleteCar}
          data={data}
          isLoading={isLoading}
          ord={ord}
        />
      )}

      <Stack spacing={2} sx={{ marginTop: "20px", marginLeft: "40%" }}>
        <Pagination
          onChange={(e, page) => onChange(page)}
          count={parseInt(state !== "mash" ? catCount : total)}
          siblingCount={0}
          variant="outlined"
          color="primary"
        />
      </Stack>
    </div>
  );
}

export default DashboardComponent;

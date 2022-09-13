import React, { useState } from "react";

import { useNavigate } from "react-router";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { toast } from "react-toastify";
import UptodateCar from "./UptodateCar";

function DashboardTable({ deleteCar, data, isLoading,  ord }) {
  const [open, setOpen] = useState(false);
  const [carID, setCarID] = useState("");
  const navigate = useNavigate();
  const handleDelete = async (id) => {
    await deleteCar(id).unwrap();
    toast.error("O`chirildi");
  };
  const handleView = (carid) => {
    navigate(`/cars/${carid}`);
  };
  const handleUpdate = (id) => {
    setCarID(id);
    setOpen(true);
  };
  return (
    <div className="table">
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650, height: "" }}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="right">Markasi</TableCell>
              <TableCell align="right">Gearbook</TableCell>
              <TableCell align="right">Tanirovkasi</TableCell>
              <TableCell align="right">Motor</TableCell>
              <TableCell align="right">Year</TableCell>
              <TableCell align="right">Color</TableCell>
              <TableCell align="right">Distance</TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading === false ? (
              data?.data?.data?.map((item, index) => (
                <TableRow
                  key={item._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  hover
                >
                  <TableCell component="th" scope="row">
                    {++ord}
                  </TableCell>
                  <TableCell align="right">{item.marka.name}</TableCell>
                  <TableCell align="right">{item.gearbok}</TableCell>
                  <TableCell align="right">{item.tonirovka}</TableCell>
                  <TableCell align="right">{item.motor}</TableCell>
                  <TableCell align="right">{item.year}</TableCell>
                  <TableCell align="right">{item.color}</TableCell>
                  <TableCell align="right">{item.distance} km</TableCell>
                  <TableCell
                    align="right"
                    sx={{ color: "blue", cursor: "pointer" }}
                    onClick={handleView.bind(null, item._id)}
                  >
                    <RemoveRedEyeIcon />
                  </TableCell>
                  <TableCell
                    sx={{ color: "blue", cursor: "pointer" }}
                    align="right"
                    onClick={handleUpdate.bind(null, item._id)}
                  >
                    <EditIcon />
                  </TableCell>
                  <TableCell
                    sx={{ color: "red", cursor: "pointer" }}
                    align="right"
                    onClick={handleDelete.bind(null, item._id)}
                  >
                    <DeleteIcon />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell sx={{ cursor: "pointer" }} align="right">
                  Loading.....
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <UptodateCar open={open} setOpen={setOpen} carID={carID} />
    </div>
  );
}

export default DashboardTable;

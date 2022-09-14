import React, { useState } from "react";
import UptodateCategory from "./UptodateCategory";

import { useGetAllCategoryQuery } from "../redux/queries/category";

import CancelIcon from "@mui/icons-material/Cancel";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { toast } from "react-toastify";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
function CategoryTable({ deleteCategory, pag, setCatCount }) {
  const limit = "8"
  const { data = [], isLoading } = useGetAllCategoryQuery({
    id: pag,
    limit: limit,
  });
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState(false);
  const [uptodate, setUptodate] = useState(false);
  const [catID, setCatID] = useState("");


  setCatCount(parseInt(Math.ceil((data?.data?.total / 8) * 1)));


  const handleDelete = async (id) => {
    await deleteCategory(id).unwrap();
    toast.error("O`chirildi");
  };

  const handleView = (url) => {
    setUrl(url);
    setOpen(true);
  };
  const update = (url) => {
    setCatID(url);
    setUptodate(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="table">
      <TableContainer
        sx={{ minWidth: 650, width: 300, height: "" }}
        component={Paper}
      >
        <Table
          sx={{ minWidth: 650, height: "" }}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="right">Kategoriya</TableCell>
              <TableCell align="right">Rasmi</TableCell>
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
                    {++index}
                  </TableCell>
                  <TableCell align="right">{item.name}</TableCell>
                  <TableCell
                    sx={{ color: "blue", cursor: "pointer" }}
                    align="right"
                    onClick={handleView.bind(null, item.imgUrl)}
                  >
                    Ko'rish
                  </TableCell>
                  <TableCell
                    sx={{ color: "blue", cursor: "pointer" }}
                    align="right"
                    onClick={update.bind(null, item._id)}
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
      <UptodateCategory
        uptodate={uptodate}
        catID={catID}
        setUptodate={setUptodate}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <div style={{ float: "right" }} onClick={handleClose}>
            <CancelIcon className="right" />
          </div>
          <img
            src={`https://cartestwebapp.herokuapp.com/${url}`}
            alt="catimg"
          />
        </Box>
      </Modal>
    </div>
  );
}

export default CategoryTable;

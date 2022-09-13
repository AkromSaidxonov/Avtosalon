import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CancelIcon from "@mui/icons-material/Cancel";

import { ImgUpload } from "../FetchImg/fetch";
import { toast } from "react-toastify";

import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { useUpDateCategoryMutation } from "../redux/queries/category";

function UptodateCategory({ uptodate, catID, setUptodate }) {
  const [marka, setMarka] = useState("");

  const [upDateCategory, { isError }] = useUpDateCategoryMutation();
  const [data, upload] = ImgUpload();

const uploadImg = (e) => {
  const formData = new FormData();
  formData.append("file", e.target.files[0]);
  upload(formData);
};
  const categoryData = {
    _id: catID,
    name: marka,
    imgUrl: data?.data,
  };
  const handleAddCategory = async (e) => {
    e.preventDefault();
    await upDateCategory(categoryData);
    toast.success("Kategoriya yangilandi");
    setUptodate(false);
    e.target.reset();
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
const handleClose = ()=>{
    setUptodate(false)
}
  return (
    <Modal
      hideBackdrop
      open={uptodate}
      onClose={handleClose}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"
    >
      <Box sx={{ ...style, width: 1164 }}>
        <div className="addcategory-buttons">
          <div className="left">
            <button></button>
            <h1>Mashinalar</h1>
          </div>
          <div onClick={handleClose}>
            <CancelIcon className="right" />
          </div>
        </div>
        <Box sx={{ marginTop: "28px" }}>
          {isError ? toast.error("Ma`lumot kiritishda xatolik yuz berdi") : ""}
          <form onSubmit={handleAddCategory}>
            <div className="form">
              <div className="name">
                <label htmlFor="name">Markasi</label>
                <div>
                  <input
                    type="text"
                    id="name"
                    placeholder="kiriting"
                    value={marka}
                    onChange={(e) => setMarka(e.target.value)}
                  />
                </div>
              </div>

              <div className="file">
                <label htmlFor="file">Rasm 360 ichki makon</label>
                <div className="input">
                  <AddAPhotoIcon />{" "}
                  <input
                    
                    type="file"
                    id="file"
                    placeholder="kiriting"
                    onChange={uploadImg}
                  />
                </div>
              </div>
            </div>

            <div className="add">
              <button type="submit" className="admin-button">
                Saqlash
              </button>
            </div>
          </form>
        </Box>
      </Box>
    </Modal>
  );
}

export default UptodateCategory;

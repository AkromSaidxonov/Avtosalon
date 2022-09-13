import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CancelIcon from "@mui/icons-material/Cancel";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { ImgUpload } from "../FetchImg/fetch";
import { toast } from "react-toastify";
import { useUptodateCarsMutation } from "../redux/queries/cars";
import { useGetAllCategoryIdQuery } from "../redux/queries/category";


function UptodateCar({ open, setOpen, carID }) {
  const [uptodateCars, { isError }] = useUptodateCarsMutation();
  const { data } = useGetAllCategoryIdQuery();

  const [imgIch, setImgIch] = ImgUpload();
  const [imgMod, setImgMod] = ImgUpload();
  const [imgTash, setImgTash] = ImgUpload();

  const [motor, setMotor] = useState("");
  const [color, setColor] = useState("");
  const [description, setDescription] = useState("");
  const [tanirofka, setTanirofka] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");
  const [distance, setDistance] = useState("");
  const [gearbook, setGearbook] = useState("");
  const [categoryId, setCategoryId] = useState("");

  const uploadIch = (e) => {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    setImgIch(formData);
  };

  const uploadTash = (e) => {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    setImgTash(formData);
  };
  const uploadMod = (e) => {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    setImgMod(formData);
  };

  const carData = {
    _id: carID,
    imgUrl: imgMod.data,
    imgUrlInside: imgIch.data,
    imgUrlAutside: imgTash.data,
    price: Number(price),
    year: Number(year),
    description: description,
    tonirovka: tanirofka,
    motor: motor,
    color: color,
    distance: distance,
    gearbok: gearbook,
    categoryId: categoryId,
  };
  const handleCloseCars = () => {
    setOpen(false);
  };
  const handleAddCar = async (e) => {
    e.preventDefault();
    await uptodateCars(carData);
    console.log(carData);
    toast.success("Mashina yangilandi");
    handleCloseCars()
    e.target.reset();

  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 1164,

    bgcolor: "background.paper",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  return (
    <Modal
      hideBackdrop
      open={open}
      onClose={handleCloseCars}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"
    >
      <Box sx={{ ...style, overflowY: "scroll" }}>
        <div className="addcategory-buttons">
          <div className="left">
            <button></button>
            <h1>Mashinalar</h1>
          </div>
          <div onClick={handleCloseCars}>
            <CancelIcon className="right" />
          </div>
        </div>
        <Box>
          {isError ? toast.error("Ma`lumot kiritishda xatolik yuz berdi") : ""}
          <form onSubmit={handleAddCar}>
            <div className="form_car">
              <div className="left">
                <div className="name">
                  <label htmlFor="name">Markasi</label>
                  <div>
                    <select
                       
                      value={categoryId}
                      onChange={(e) => setCategoryId(e.target.value)}
                    >
                      <option value={"chevrolet"}>Marka</option>
                      {data?.data?.data?.map((item) => (
                        <option key={item._id} value={item._id}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>{" "}
                <div className="name">
                  <label htmlFor="name">Motor</label>
                  <div>
                    <input
                       
                      type="text"
                      placeholder="kiriting"
                      value={motor}
                      onChange={(e) => setMotor(e.target.value)}
                    />
                  </div>
                </div>
                <div className="name">
                  <label htmlFor="name">Color</label>
                  <div>
                    <input
                       
                      type="text"
                      placeholder="kiriting"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                    />
                  </div>
                </div>
                <div className="name">
                  <label htmlFor="name">Gearbook</label>
                  <div>
                    <input
                       
                      type="text"
                      placeholder="kiriting"
                      value={gearbook}
                      onChange={(e) => setGearbook(e.target.value)}
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
                      onChange={uploadIch}
                    />
                  </div>
                </div>
                <div className="name">
                  <label htmlFor="textarea">Deseription</label>
                  <div>
                    <textarea
                       
                      id="textarea"
                      name="textarea"
                      rows="4"
                      cols="50"
                      placeholder="Mazmuni kiriting"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="name">
                  <label htmlFor="name">Tanirovkasi</label>
                  <div>
                    <select
                       
                      value={tanirofka}
                      onChange={(e) => setTanirofka(e.target.value)}
                    >
                      <option value="Yoq">Yoq</option>
                      <option value="Bor">Bor</option>
                    </select>
                  </div>
                </div>{" "}
                <div className="name">
                  <label htmlFor="name">Year</label>
                  <div>
                    <input
                       
                      type="number"
                      placeholder="kiriting"
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                    />
                  </div>
                </div>{" "}
                <div className="name">
                  <label htmlFor="name">Distance</label>
                  <div>
                    <input
                       
                      type="number"
                      placeholder="kiriting"
                      value={distance}
                      onChange={(e) => setDistance(e.target.value)}
                    />
                  </div>
                </div>{" "}
                <div className="name">
                  <label htmlFor="name">Narxi</label>
                  <div>
                    <input
                       
                      type="number"
                      placeholder="kiriting"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>
                </div>
                <div className="file">
                  <label htmlFor="file">Rasm 360 tashqi makon</label>
                  <div className="input">
                    <AddAPhotoIcon />{" "}
                    <input
                       
                      type="file"
                      id="file"
                      placeholder="kiriting"
                      onChange={uploadTash}
                    />
                  </div>
                </div>{" "}
                <div className="file">
                  <label htmlFor="file">Modeli turi uchun rasm </label>
                  <div className="input">
                    <AddAPhotoIcon />{" "}
                    <input
                       
                      type="file"
                      id="file"
                      placeholder="kiriting"
                      onChange={uploadMod}
                    />
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="addcar">
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

export default UptodateCar;

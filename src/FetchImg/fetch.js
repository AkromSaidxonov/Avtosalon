import axios from "axios";
import { useSelector } from "react-redux";
import { useState } from "react";

const ImgUpload = () => {
  const [image, setState] = useState("");
  const token = useSelector((state) => state.authSlise.token);
  const uploadImg = (data) => {
    axios
      .post("https://cartestwebapp.herokuapp.com/upload", data, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setState(res.data);
      });
  };
  return [image, uploadImg];
};


export { ImgUpload };

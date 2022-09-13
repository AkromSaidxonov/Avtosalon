import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

//Pages
import Main from "../pages/Main";
import Login from "../pages/admin/Login";
import Cars from "./../pages/Cars";
import CarsDetail from "../pages/CarsDetail";
import Loader from "./../components/Loader";

export const PrivateRoutes = () => {
  const [state, setState] = useState(false);
  useEffect(() => {
    setState(true);
    setTimeout(() => {
      setState(false);
    }, 400);
  }, []);
  return state ? (
    <Loader />
  ) : (
    <Routes>
      <Route index element={<Main />} />
      <Route path="/cars/:Name/:id" element={<Cars />} />
      <Route path="/cars/:id" element={<CarsDetail />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

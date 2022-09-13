import { Route, Navigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

// Pages
import Login from "../pages/admin/Login";
import Dasboard from "../pages/admin/Dasboard";
import Cars from "./../pages/Cars";
import CarsDetail from "../pages/CarsDetail";
import Loader from "./../components/Loader";

import { Routes } from "react-router-dom";

export const PublicRoutes = () => {
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
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Dasboard />} />
      <Route path="/cars/:Name/:id" element={<Cars />} />
      <Route path="/cars/:id" element={<CarsDetail />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

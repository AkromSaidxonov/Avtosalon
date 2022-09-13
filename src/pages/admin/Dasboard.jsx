import { Box } from "@mui/system";
import React from "react";
import DashboardComponent from "../../components/DashboardComponent";
import Header from "../../components/Header";
import Sidebar from "./../../components/Sidebar";

function Dasboard() {
  return (
    <div  >
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <div>
          <Header />
          <div className="dashboard">
            <DashboardComponent/>
          </div>
        </div>
      </Box>
    </div>
  );
}

export default Dasboard;

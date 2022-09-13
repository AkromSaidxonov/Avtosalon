import React from "react";
import { useNavigate } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import Cookies from "universal-cookie";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

function Header() {
  const navigate = useNavigate();
  const cookies = new Cookies();

  const handleLogOut = () => {
    cookies.remove("token");
    navigate("/");
  };
  return (
    <div className="header">
      <button onClick={handleLogOut} className="admin-button">
        <PersonIcon /> Asosiyga o`tish
      </button>
      <div>
        <Stack
          direction="row"
          spacing={3}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <NotificationsIcon />
          <Avatar
            alt="A"
            src="https://res.cloudinary.com/dh2t0zrxd/image/upload/v1662837130/Avatar_jkvyea.png"
          />
        </Stack>
      </div>
    </div>
  );
}

export default Header;

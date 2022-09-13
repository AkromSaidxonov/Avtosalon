import Box from "@mui/material/Box";
import List from "@mui/material/List/List";
import ListItem from "@mui/material/ListItem/ListItem";
import ListItemButton from "@mui/material/ListItemButton/ListItemButton";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: "340px",
        height: "100vh",
        position: "relative",
        padding: "158px 0 0 38px",
        backgroundColor: "#FCFCFC",
      }}
    >
      <Box>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <HomeIcon />
              <ListItemText sx={{ marginLeft: "14px" }} primary="Asosiy" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <CreditCardIcon />
              <ListItemText sx={{ marginLeft: "14px" }} primary="E`lonlar" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <QuestionAnswerIcon />
              <ListItemText sx={{ marginLeft: "14px" }} primary="Savollar" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;

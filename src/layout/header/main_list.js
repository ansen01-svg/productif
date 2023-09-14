import { useState } from "react";
import { useDispatch } from "react-redux";
import List from "@mui/material/List";
import { ListItemButton, ListItemText, Collapse } from "@mui/material";
import ExpandMoreSharpIcon from "@mui/icons-material/ExpandMoreSharp";
import ExpandLessSharpIcon from "@mui/icons-material/ExpandLessSharp";
import { setMode } from "../../store_provider/app_slice";
import SubList from "./sub_list";
import { clearFromStorages } from "../.././utils/utils_functions";
import { app } from "../../firebase/firebase_config";
import { getAuth, signOut } from "firebase/auth";

const MainList = () => {
  const auth = getAuth(app);
  const dispatch = useDispatch();

  const mode = localStorage.getItem("mode");

  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(mode === "dark" ? 1 : 0);

  const handleClick = () => {
    setOpen(!open);
  };

  // select appearance of the app
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);

    if (index === 0) {
      dispatch(setMode("light"));
      localStorage.setItem("mode", "light");
    } else {
      dispatch(setMode("dark"));
      localStorage.setItem("mode", "dark");
    }
  };

  // logout of the app
  const logOut = () => {
    signOut(auth);
    clearFromStorages();
    window.location.reload();
  };

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="Appearance" />
        {open ? (
          <ExpandLessSharpIcon fontSize="medium" />
        ) : (
          <ExpandMoreSharpIcon fontSize="medium" />
        )}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <SubList
          selectedIndex={selectedIndex}
          handleListItemClick={handleListItemClick}
        />
      </Collapse>
      <ListItemButton onClick={logOut}>
        <ListItemText primary="Sign out" />
      </ListItemButton>
    </List>
  );
};

export default MainList;

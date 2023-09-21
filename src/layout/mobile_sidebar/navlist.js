import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { navigationItems } from "../../utils/arrays";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import {
  storeInSessionStorage,
  getFromSessionStorage,
  getPageIndex,
} from "../../utils/utils_functions";

const NavList = () => {
  const currentPage = getFromSessionStorage("currentPage");

  const [selectedIndex, setSelectedIndex] = useState(getPageIndex(currentPage));

  const navigate = useNavigate();

  const handleClick = (linkTo, index) => {
    setSelectedIndex(index);

    const currentPage = navigationItems.find((item) => item.id === index);
    navigate(linkTo);
    storeInSessionStorage("currentPage", currentPage.title);
  };

  return (
    <List sx={{ padding: "0" }}>
      {navigationItems.map((navigationItem) => {
        return (
          <ListItem key={navigationItem.id} disablePadding>
            <ListItemButton
              selected={selectedIndex === navigationItem.id}
              onClick={() =>
                handleClick(navigationItem.link, navigationItem.id)
              }
            >
              <ListItemIcon>{navigationItem.icon}</ListItemIcon>
              <ListItemText primary={navigationItem.title} />
              <ListItemText
                primary="2"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default NavList;

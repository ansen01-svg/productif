import { List } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { bottomNavigation } from "../../utils/arrays";
import ListItem from "./list_item";
import {
  storeInSessionStorage,
  getFromSessionStorage,
  getPageIndex,
} from "../../utils/utils_functions";

const SidebarContent = () => {
  const currentPage = getFromSessionStorage("currentPage");

  const [selectedIndex, setSelectedIndex] = useState(getPageIndex(currentPage));

  const navigate = useNavigate();

  const handleClick = (linkTo, index) => {
    setSelectedIndex(index);
    navigate(linkTo);

    const currentPage = bottomNavigation.find((item) => item.id === index);
    storeInSessionStorage("currentPage", currentPage.title);
  };

  return (
    <List
      sx={{
        width: "100%",
        padding: "0",
        "& .MuiButtonBase-root": {
          borderRadius: "5px",
        },
        "& .MuiSvgIcon-root": {
          fontSize: "25px",
        },
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {bottomNavigation.map((navigationItem) => {
        return (
          <ListItem
            key={navigationItem.id}
            id={navigationItem.id}
            selectedIndex={selectedIndex}
            icon={navigationItem.icon}
            navigationTitle={navigationItem.title}
            navigationLink={navigationItem.link}
            handleClick={handleClick}
          />
        );
      })}
    </List>
  );
};

export default SidebarContent;

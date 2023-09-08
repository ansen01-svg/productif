import { List } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { navigationItems } from "../../utils/arrays";
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

    const currentPage = navigationItems.find((item) => item.id === index);
    navigate(linkTo);
    storeInSessionStorage("currentPage", currentPage.title);
  };

  return (
    <List
      sx={{
        width: "100%",
        padding: "0",
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {navigationItems.map((navigationItem) => {
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

import { List } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetNavigationItems } from "../../hooks";
import ListItem from "./list_item";
import {
  storeInSessionStorage,
  getFromSessionStorage,
  getPageIndex,
} from "../../utils/utils_functions";

const SidebarContent = () => {
  const currentPage = getFromSessionStorage("currentPage");
  const navigationItems = useGetNavigationItems();

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
            totalTasks={navigationItem.totalTasks}
            handleClick={handleClick}
          />
        );
      })}
    </List>
  );
};

export default SidebarContent;

import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "./list_item";
import { sortOptions } from "../../utils/arrays";

const MainList = ({ handleClose }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClick = (index) => {
    setSelectedIndex(index);
    handleClose();
  };

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 290,
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {sortOptions.map((option) => {
        return (
          <ListItem
            key={option.id}
            selectedIndex={selectedIndex}
            index={option.id}
            handleClick={handleClick}
            title={option.title}
            icon={option.icon}
          />
        );
      })}
    </List>
  );
};

export default MainList;

import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "./list_item";
import { sortOptions } from "../../utils/arrays";
import { useDispatch } from "react-redux";
import { sortTasksBy } from "../../store_provider/firestore_slice";

const MainList = ({ handleClose }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const dispatch = useDispatch();

  const handleClick = (index, sortBy) => {
    setSelectedIndex(index);
    dispatch(sortTasksBy(sortBy.toLowerCase()));
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

import { Box } from "@mui/material";
import { useState } from "react";
import DateHolder from "./date_holder";
import SortHolder from "./sort_holder";
import PopOver from "./popover";

const Content = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Box
      sx={{
        flexGrow: 1,
        height: "48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <DateHolder />
      <SortHolder handleClick={handleClick} />
      <PopOver
        handleClose={handleClose}
        id={id}
        open={open}
        anchorEl={anchorEl}
      />
    </Box>
  );
};

export default Content;

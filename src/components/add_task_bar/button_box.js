import { useState } from "react";
import { Box } from "@mui/material";
import Button from "../button";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import PopOver from "./popover";

const ButtonBox = () => {
  return (
    <Box
      flexGrow={1}
      sx={{
        height: "45px",
        padding: "0 10px",
        display: "flex",
        backgroundColor: "buttonBox.main",
        color: "buttonBox.contrastText",
        // transition: "height 500ms cubic-bezier(0.25, 0.1, 0.25, 1) 0s",
      }}
    >
      <Content />
    </Box>
  );
};

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
      flexGrow={1}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Button
          bgColor="inherit"
          size="small"
          borderRadius="0"
          boxShadow="none"
          minWidth="40px"
          hoverColor="searchInputColor.buttonHover"
          hoverShadow="none"
          onClick={handleClick}
        >
          <ScheduleOutlinedIcon fontSize="small" />
        </Button>
      </Box>
      <Box>
        <Button
          variant="outlined"
          size="medium"
          textTransform="capitalize"
          borderRadius={0}
        >
          Add
        </Button>
      </Box>
      <PopOver
        handleClose={handleClose}
        id={id}
        open={open}
        anchorEl={anchorEl}
      />
    </Box>
  );
};

export default ButtonBox;

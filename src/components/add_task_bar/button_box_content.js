import { useState } from "react";
import { Box } from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import { useGetLocation } from "../../hooks";
import PopOver from "./popover";
import Button from "../button";

const Content = ({
  task,
  handleFromHrsChange,
  handleFromMinChange,
  handleToHrsChange,
  handleToMinsChange,
  fromHrsValue,
  fromMinsValue,
  toHrsValue,
  toMinsValue,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const { pageLocation } = useGetLocation();

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
      {pageLocation === "My Week" && (
        <DueButtonHolder handleClick={handleClick}>
          <CalendarTodayOutlinedIcon fontSize="small" />
        </DueButtonHolder>
      )}
      {pageLocation === "My Day" && (
        <DueButtonHolder handleClick={handleClick}>
          <ScheduleOutlinedIcon fontSize="small" />
        </DueButtonHolder>
      )}
      <AddButtonHolder task={task} />
      {pageLocation === "My Week" && (
        <PopOver
          name="week"
          popoverTitle="Due date"
          handleClose={handleClose}
          id={id}
          open={open}
          anchorEl={anchorEl}
          fromHrsValue={fromHrsValue}
          fromMinsValue={fromMinsValue}
          toHrsValue={toHrsValue}
          toMinsValue={toMinsValue}
          handleFromHrsChange={handleFromHrsChange}
          handleFromMinChange={handleFromMinChange}
          handleToHrsChange={handleToHrsChange}
          handleToMinsChange={handleToMinsChange}
        />
      )}
      {pageLocation === "My Day" && (
        <PopOver
          name="day"
          popoverTitle="Due time"
          handleClose={handleClose}
          id={id}
          open={open}
          anchorEl={anchorEl}
          fromHrsValue={fromHrsValue}
          fromMinsValue={fromMinsValue}
          toHrsValue={toHrsValue}
          toMinsValue={toMinsValue}
          handleFromHrsChange={handleFromHrsChange}
          handleFromMinChange={handleFromMinChange}
          handleToHrsChange={handleToHrsChange}
          handleToMinsChange={handleToMinsChange}
        />
      )}
    </Box>
  );
};

const DueButtonHolder = ({ children, handleClick }) => {
  return (
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
        {children}
      </Button>
    </Box>
  );
};

const AddButtonHolder = ({ task }) => {
  return (
    <Box>
      <Button
        variant="outlined"
        size="medium"
        textTransform="capitalize"
        borderRadius={0}
        disabled={!task}
      >
        Add
      </Button>
    </Box>
  );
};

export default Content;

import { useState } from "react";
import { Box } from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import { useGetLocation } from "../../hooks";
import PopOver from "./popover";
import Button from "../button";
import TextHolder from "../text_holder";

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
  startDate,
  endDate,
  setStartDate,
  setEndDate,
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

  const startTime =
    fromHrsValue && fromMinsValue ? `${fromHrsValue} : ${fromMinsValue}` : "";
  const endTime =
    toHrsValue && toMinsValue ? `${toHrsValue} : ${toMinsValue}` : "";

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
        <DueButtonHolder
          handleClick={handleClick}
          value1={startDate}
          value2={endDate}
        >
          <CalendarTodayOutlinedIcon fontSize="small" />
        </DueButtonHolder>
      )}
      {pageLocation === "My Day" && (
        <DueButtonHolder
          handleClick={handleClick}
          value1={startTime}
          value2={endTime}
        >
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
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
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

const DueButtonHolder = ({ children, handleClick, value1, value2 }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignitems: "center",
        justifyContent: "center",
        gap: "10px",
      }}
    >
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
      {value1 && value2 && (
        <Box component="span">
          <TextHolder variant="p" fontSize="0.75rem">
            {value1} - {value2}
          </TextHolder>
        </Box>
      )}
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
        type="submit"
      >
        Add
      </Button>
    </Box>
  );
};

export default Content;

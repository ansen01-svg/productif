import { useState } from "react";
import { Box } from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import Button from "../button";
import TextHolder from "../text_holder";
import Content from "./button_box_content";

const ButtonBox = ({
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

  const startTime =
    fromHrsValue && fromMinsValue
      ? `${fromHrsValue} : ${fromMinsValue} ${
          fromHrsValue < 12 ? "A.M" : "P.M"
        }`
      : "";
  const endTime =
    toHrsValue && toMinsValue
      ? `${toHrsValue} : ${toMinsValue} ${toHrsValue < 12 ? "A.M" : "P.M"}`
      : "";

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      flexGrow={1}
      sx={{
        height: "45px",
        padding: "0 10px",
        display: "flex",
        backgroundColor: "buttonBox.main",
        color: "buttonBox.contrastText",
      }}
    >
      <Content
        task={task}
        fromHrsValue={fromHrsValue}
        fromMinsValue={fromMinsValue}
        toHrsValue={toHrsValue}
        toMinsValue={toMinsValue}
        handleFromHrsChange={handleFromHrsChange}
        handleFromMinChange={handleFromMinChange}
        handleToHrsChange={handleToHrsChange}
        handleToMinsChange={handleToMinsChange}
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        anchorEl={anchorEl}
        id={id}
        open={open}
        handleClose={handleClose}
        component1={
          <DueButtonHolder
            handleClick={handleClick}
            value1={startDate}
            value2={endDate}
          >
            <CalendarTodayOutlinedIcon fontSize="small" />
          </DueButtonHolder>
        }
        component2={
          <DueButtonHolder
            handleClick={handleClick}
            value1={startTime}
            value2={endTime}
          >
            <ScheduleOutlinedIcon fontSize="small" />
          </DueButtonHolder>
        }
        component3={<AddButtonHolder task={task} />}
      />
    </Box>
  );
};

export const DueButtonHolder = ({
  children,
  handleClick,
  value1,
  value2,
  textColor,
}) => {
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
        textColor={textColor && textColor}
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

export default ButtonBox;

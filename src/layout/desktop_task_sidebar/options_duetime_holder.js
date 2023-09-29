import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Box } from "@mui/material";
import Content from "../../components/add_task_bar/button_box_content";
import { DueButtonHolder } from "../../components/add_task_bar/button_box";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import { editTaskDetails } from "../../firebase/editTask";

const DueTimeHolder = ({ task }) => {
  const [fromHrsValue, setFromHrsValue] = useState("");
  const [fromMinsValue, setFromMinsValue] = useState("");
  const [toHrsValue, setToHrsValue] = useState("");
  const [toMinsValue, setToMinsValue] = useState("");

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [anchorEl, setAnchorEl] = useState(null);

  const dispatch = useDispatch();

  const handleFromHrsChange = (event) => {
    setFromHrsValue(event.target.value);
  };

  const handleFromMinChange = (event) => {
    setFromMinsValue(event.target.value);
  };

  const handleToHrsChange = (event) => {
    setToHrsValue(event.target.value);
  };

  const handleToMinsChange = (event) => {
    setToMinsValue(event.target.value);
  };

  // popover
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
  //popover

  // submit task changes when all values are provided
  useEffect(() => {
    if (!task) {
      return;
    } else if (task && task.data.start.includes("AM")) {
      //update daily task
      if (!startTime || !endTime) return;
      console.log(startTime, endTime);
      //   dispatch(editTaskDetails("dailyTasks", task.id, []));
    } else {
      //update weekly task
      if (!startDate || !endDate) return;
      console.log(startDate, endDate);
      //   dispatch(editTaskDetails("weekyTasks", task.id, []));
    }
  }, [dispatch, task, startTime, endTime, startDate, endDate]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "58px",
        display: "flex",
      }}
    >
      <Content
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
            value1={task && (startDate ? startDate : task.data.start)}
            value2={task && (endDate ? endDate : task.data.end)}
            textColor="rgba(0,0,0,0.6)"
          >
            <CalendarTodayOutlinedIcon fontSize="small" />
          </DueButtonHolder>
        }
        component2={
          <DueButtonHolder
            handleClick={handleClick}
            value1={task && (startTime ? startTime : task.data.start)}
            value2={task && (endTime ? endTime : task.data.start)}
            textColor="rgba(0,0,0,0.6)"
          >
            <ScheduleOutlinedIcon fontSize="small" />
          </DueButtonHolder>
        }
      />
    </Box>
  );
};

export default DueTimeHolder;

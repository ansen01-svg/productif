import { useState } from "react";
import { Box, Divider } from "@mui/material";
import moment from "moment";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useGetLocation } from "../../hooks";
import InputBox from "./input_box";
import ButtonBox from "./button_box";
import { addDailyTasks, addWeeklyTasks } from "../../firebase/addTasks";
import {
  fetchDailyTasks,
  fetchWeeklyTasks,
} from "../../store_provider/firestore_slice";

const InputAndButtonBoxHolder = ({ setShowInputBox }) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        boxShadow:
          "0px 0.3px 0.9px rgba(0,0,0,0.1),0px 1.6px 3.6px rgba(0,0,0,0.1)",
      }}
    >
      <TaskForm setShowInputBox={setShowInputBox} />
    </Box>
  );
};

const TaskForm = ({ setShowInputBox }) => {
  const [task, setTask] = useState("");
  const [fromHrsValue, setFromHrsValue] = useState("");
  const [fromMinsValue, setFromMinsValue] = useState("");
  const [toHrsValue, setToHrsValue] = useState("");
  const [toMinsValue, setToMinsValue] = useState("");

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const dispatch = useDispatch();

  const { pageLocation } = useGetLocation();

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

  //submit add task
  const handleTaskFormSubmit = async (e) => {
    e.preventDefault();

    // submit my day tasks if location is my day otherwise
    // submit my week tasks
    if (pageLocation === "My Day") {
      // if any value is empty it will set default time
      // otherwise it will set the provided time
      const currentTime = moment().format("H:mm");
      const hrs = currentTime.split(":")[0];
      const mins = currentTime.split(":")[1];

      const isEmptyValues =
        !fromHrsValue && !fromMinsValue && !toHrsValue && !toMinsValue;

      const isInvalidTime =
        Number(`${toHrsValue}.${toMinsValue}`) -
          Number(`${fromHrsValue}.${fromMinsValue}`) <
        0;

      const isMissingValues =
        !fromHrsValue || !fromMinsValue || !toHrsValue || !toMinsValue;

      const isPastTime =
        Number(`${fromHrsValue}.${fromMinsValue}`) < Number(`${hrs}.${mins}`);

      if (isEmptyValues) {
        addDailyTasks("dailyTasks", task, "00", "00", "00", "00", "AM", "AM");
        dispatch(fetchDailyTasks());
        setTask("");
        setFromHrsValue("");
        setFromMinsValue("");
        setToHrsValue("");
        setToMinsValue("");
      } else if (isInvalidTime || isMissingValues) {
        toast("Invalid time, set a proper time");
      } else if (isPastTime) {
        toast("Invalid time, set a proper time");
      } else {
        const startMeridiem = +fromHrsValue < 12 ? "AM" : "PM";
        const endMeridiem = +toHrsValue < 12 ? "AM" : "PM";

        addDailyTasks(
          "dailyTasks",
          task,
          fromHrsValue,
          fromMinsValue,
          toHrsValue,
          toMinsValue,
          startMeridiem,
          endMeridiem
        );
        dispatch(fetchDailyTasks());
        setTask("");
        setFromHrsValue("");
        setFromMinsValue("");
        setToHrsValue("");
        setToMinsValue("");
      }
    } else {
      const isEmptyValues = !startDate || !endDate;

      const isInvalidDate =
        Number(endDate.split(" ")[0]) - Number(startDate.split(" ")[0]) < 0;

      if (isEmptyValues) {
        addWeeklyTasks("weeklyTasks", "0", "0", task);
        dispatch(fetchWeeklyTasks());
        setTask("");
        setStartDate("");
        setEndDate("");
      } else if (isInvalidDate) {
        toast("Invalid date, set a proper date");
      } else {
        addWeeklyTasks("weeklyTasks", startDate, endDate, task);
        dispatch(fetchWeeklyTasks());
        setTask("");
        setStartDate("");
        setEndDate("");
      }
    }
    setShowInputBox(false);
  };

  return (
    <Box
      component="form"
      sx={{
        flexGrow: 1,
      }}
      onSubmit={handleTaskFormSubmit}
    >
      <InputBox task={task} setTask={setTask} />
      <Divider />
      <ButtonBox
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
      />
    </Box>
  );
};

export default InputAndButtonBoxHolder;

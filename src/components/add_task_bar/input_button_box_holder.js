import { useState } from "react";
import { Box, Divider } from "@mui/material";
import { db } from "../../firebase/firebase_config";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useGetLocation } from "../../hooks";
import InputBox from "./input_box";
import ButtonBox from "./button_box";

const InputAndButtonBoxHolder = ({ showInputBox }) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        boxShadow:
          "0px 0.3px 0.9px rgba(0,0,0,0.1),0px 1.6px 3.6px rgba(0,0,0,0.1)",
      }}
    >
      <TaskForm showInputBox={showInputBox} />
    </Box>
  );
};

const TaskForm = ({ showInputBox }) => {
  const [task, setTask] = useState("");
  const [fromHrsValue, setFromHrsValue] = useState("");
  const [fromMinsValue, setFromMinsValue] = useState("");
  const [toHrsValue, setToHrsValue] = useState("");
  const [toMinsValue, setToMinsValue] = useState("");

  const { location } = useGetLocation();
  console.log(task, fromHrsValue, fromMinsValue, toHrsValue, toMinsValue);

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

    if (location === "My day") {
      try {
        await addDoc(collection(db, "dailyTasks"), {
          task: task,
          start: `${fromHrsValue} : ${fromMinsValue}`,
          end: `${toHrsValue} : ${toMinsValue}`,
          completed: false,
          important: false,
          created: Timestamp.now(),
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await addDoc(collection(db, "weeklyTasks"), {
          task: task,
          completed: false,
          important: false,
          created: Timestamp.now(),
        });
      } catch (error) {
        console.log(error);
      }
    }
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
      />
    </Box>
  );
};

export default InputAndButtonBoxHolder;

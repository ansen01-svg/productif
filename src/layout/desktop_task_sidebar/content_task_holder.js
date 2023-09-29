import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { editTaskDetails } from "../../firebase/editTask";
import { useDispatch } from "react-redux";
import {
  fetchDailyTasks,
  fetchWeeklyTasks,
} from "../../store_provider/firestore_slice";
import CheckboxHolder from "../../components/checkbox";
import ImportantCheckbox from "../../components/important_checkbox";

const TaskSidebarContentTaskHolder = ({ task }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "58px",
        padding: "0 10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        background: "white",
      }}
    >
      <CheckboxHolder
        id={task && task.id}
        completed={task && task.data.completed}
        collectionName={
          task &&
          task &&
          (task.data.start.includes("M") ? "dailyTasks" : "weeklyTasks")
        }
      />
      <TextAreaHolder task={task} />
      <ImportantCheckbox
        id={task && task.id}
        important={task && task.data.important}
        collectionName={
          task && (task.data.start.includes("M") ? "dailyTasks" : "weeklyTasks")
        }
      />
    </Box>
  );
};

const TextAreaHolder = ({ task }) => {
  const dispatch = useDispatch();

  const [textAreaValue, setTextAreaValue] = useState("");

  useEffect(() => {
    if (!task) return;
    setTextAreaValue(task.data.task);
  }, [task]);

  // submit value to edit task
  const handleTextAreaBlur = () => {
    const isDailyTaskCollection = task && task.data.start.includes("M");
    const collectionName = isDailyTaskCollection ? "dailyTasks" : "weeklyTasks";
    const taskId = task && task.id;

    editTaskDetails(collectionName, taskId, [textAreaValue]);
    if (isDailyTaskCollection) {
      dispatch(fetchDailyTasks());
    } else {
      dispatch(fetchWeeklyTasks());
    }
  };

  return (
    <Box component="span" sx={{ flexGrow: 1 }}>
      <textarea
        maxLength={65}
        value={textAreaValue}
        onChange={(e) => setTextAreaValue(e.target.value)}
        onBlur={handleTextAreaBlur}
        style={{
          width: "100%",
          maxHeight: "36.56px",
          outline: "none",
          border: "none",
          resize: "vertical",
          overflow: "hidden",
          fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
            "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
            sans-serif`,
          fontSize: "0.928rem",
        }}
      ></textarea>
    </Box>
  );
};

export default TaskSidebarContentTaskHolder;

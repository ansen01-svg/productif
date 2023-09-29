import { useState, useEffect } from "react";
import { Box, Checkbox } from "@mui/material";
import Brightness1OutlinedIcon from "@mui/icons-material/Brightness1Outlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { changeTaskStatus } from "../../firebase/editTask";
import { useDispatch } from "react-redux";
import {
  fetchDailyTasks,
  fetchWeeklyTasks,
} from "../../store_provider/firestore_slice";

const CheckboxHolder = (props) => {
  const { id, completed, collectionName } = props;

  const [isCompleted, setIsCompleted] = useState(false);
  console.log(isCompleted);
  const dispatch = useDispatch();
  const label = { inputProps: { "aria-label": "Complete-task" } };

  // change task completion status
  const handleChange = (id, task) => {
    setIsCompleted(!isCompleted);
    changeTaskStatus(id, task, isCompleted);

    if (task === "dailyTasks") {
      dispatch(fetchDailyTasks());
    } else {
      dispatch(fetchWeeklyTasks());
    }
  };

  useEffect(() => {
    if (completed) {
      setIsCompleted(completed);
    }
  }, [completed]);

  return (
    <Box component="span">
      <Checkbox
        {...label}
        icon={<Brightness1OutlinedIcon fontSize="small" />}
        checkedIcon={<CheckCircleIcon fontSize="small" />}
        sx={{
          color: "#1976d2",
        }}
        checked={isCompleted}
        onChange={() => handleChange(id, collectionName)}
      />
    </Box>
  );
};

export default CheckboxHolder;

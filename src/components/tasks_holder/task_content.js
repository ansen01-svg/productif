import { Box } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Brightness1OutlinedIcon from "@mui/icons-material/Brightness1Outlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import StarIcon from "@mui/icons-material/Star";
import {
  changeTaskStatus,
  changeTaskImportance,
} from "../../firebase/editTask";
import { useDispatch } from "react-redux";
import {
  fetchDailyTasks,
  fetchWeeklyTasks,
} from "../../store_provider/firestore_slice";

const TaskContent = ({ id, individualTask }) => {
  const { task, start, end, completed, important } = individualTask;

  return (
    <Box
      id={id}
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CheckboxHolder
        id={id}
        completed={completed}
        collectionName={
          start.includes("PM") || start.includes("AM")
            ? "dailyTasks"
            : "weeklyTasks"
        }
      />
      <ButtonHolder id={id} task={task} start={start} end={end} />
      <ImportantButtonHolder
        id={id}
        important={important}
        collectionName={
          start.includes("PM") || start.includes("AM")
            ? "dailyTasks"
            : "weeklyTasks"
        }
      />
    </Box>
  );
};

const CheckboxHolder = ({ id, completed, collectionName }) => {
  const dispatch = useDispatch();
  const label = { inputProps: { "aria-label": "Complete-task" } };

  // change task completion status
  const handleChange = (id, task, isCompleted) => {
    changeTaskStatus(id, task, isCompleted);

    if (task === "dailyTasks") {
      dispatch(fetchDailyTasks());
    } else {
      dispatch(fetchWeeklyTasks());
    }
  };

  return (
    <Box component="span">
      <Checkbox
        {...label}
        icon={<Brightness1OutlinedIcon fontSize="small" />}
        checkedIcon={<CheckCircleIcon fontSize="small" />}
        sx={{
          color: "#1976d2",
        }}
        checked={completed}
        onChange={() => handleChange(id, collectionName, completed)}
      />
    </Box>
  );
};

const ButtonHolder = ({ id, task, start, end }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <button
        style={{
          width: "100%",
          padding: "0 10px",
          fontSize: "15px",
          fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
            "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
            sans-serif`,
          border: "none",
          outline: "none",
          background: "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: "5px",
          cursor: "pointer",
        }}
      >
        <span>{task}</span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
          }}
        >
          <span style={{ color: "gray", fontSize: "0.75rem" }}>{start}</span>
          <span style={{ color: "gray", fontSize: "0.75rem" }}>to</span>
          <span style={{ color: "gray", fontSize: "0.75rem" }}>{end}</span>
        </div>
      </button>
    </Box>
  );
};

const ImportantButtonHolder = ({ id, collectionName, important }) => {
  const dispatch = useDispatch();
  const label = { inputProps: { "aria-label": "Complete-task" } };

  const handleChange = (id, task, isImportant) => {
    changeTaskImportance(id, task, isImportant);

    if (task === "dailyTasks") {
      dispatch(fetchDailyTasks());
    } else {
      dispatch(fetchWeeklyTasks());
    }
  };

  return (
    <Box>
      <Checkbox
        {...label}
        icon={<StarBorderOutlinedIcon fontSize="small" />}
        checkedIcon={<StarIcon fontSize="small" />}
        checked={important}
        onChange={() => handleChange(id, collectionName, important)}
      />
    </Box>
  );
};

export default TaskContent;

import { Box, ListItem, Checkbox } from "@mui/material";
import { useRef, useEffect } from "react";
import Brightness1OutlinedIcon from "@mui/icons-material/Brightness1Outlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import StarIcon from "@mui/icons-material/Star";
// import moment from "moment";
import {
  changeTaskStatus,
  changeTaskImportance,
} from "../../firebase/editTask";
import { useDispatch } from "react-redux";
import {
  fetchDailyTasks,
  fetchWeeklyTasks,
} from "../../store_provider/firestore_slice";
import { useWindowWidth } from "../../hooks";

const TaskListItem = (props) => {
  const {
    id,
    individualTask,
    showTaskNameInTaskHolder,
    openDesktopTaskSidebar,
    toggleMobileTaskSidebar,
  } = props;

  const { task, start, end, completed, important } = individualTask;

  return (
    <ListItem
      sx={{
        width: "100%",
        minHeight: "52px",
        padding: "0 10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "taskHolder.main",
        color: "taskHolder.contrastText",
        zIndex: props.zIndex,
        boxShadow:
          "0px 0.3px 0.9px rgba(0,0,0,0.1),0px 1.6px 3.6px rgba(0,0,0,0.1)",
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
      <ButtonHolder
        id={id}
        task={task}
        start={start}
        end={end}
        completed={completed}
        showTaskNameInTaskHolder={showTaskNameInTaskHolder}
        openDesktopTaskSidebar={openDesktopTaskSidebar}
        toggleMobileTaskSidebar={toggleMobileTaskSidebar}
      />
      <ImportantButtonHolder
        id={id}
        important={important}
        collectionName={
          start.includes("PM") || start.includes("AM")
            ? "dailyTasks"
            : "weeklyTasks"
        }
      />
    </ListItem>
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

const ButtonHolder = (props) => {
  const {
    id,
    task,
    start,
    end,
    completed,
    showTaskNameInTaskHolder,
    openDesktopTaskSidebar,
    toggleMobileTaskSidebar,
  } = props;

  const { desktopScreen } = useWindowWidth();

  let handleClick = useRef(null);

  useEffect(() => {
    if (!desktopScreen) {
      handleClick.current = toggleMobileTaskSidebar(id);
    } else {
      handleClick.current = function (id) {
        openDesktopTaskSidebar(id);
      };
    }
  }, [desktopScreen, id, toggleMobileTaskSidebar, openDesktopTaskSidebar]);

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: "5px",
      }}
    >
      <button
        onClick={() => handleClick.current(id)}
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
        <span
          style={{
            textDecoration: `${completed ? "line-through" : "none"}`,
            color: `${completed ? "gray" : "#000"}`,
          }}
        >
          {task}
        </span>
        <TaskDetailsHolder
          start={start}
          end={end}
          showTaskNameInTaskHolder={showTaskNameInTaskHolder}
        />
      </button>
    </Box>
  );
};

const TaskDetailsHolder = (props) => {
  const { start, end, showTaskNameInTaskHolder } = props;

  const isNotValidStartDateOrTime =
    (start.includes("M") && Number(`${start.split(":")[0]}`) === 0) ||
    Number(start) === 0;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "5px",
      }}
    >
      {showTaskNameInTaskHolder &&
        (start.includes("M") ? (
          <span style={{ color: "gray", fontSize: "0.75rem" }}>My Day,</span>
        ) : (
          <span style={{ color: "gray", fontSize: "0.75rem" }}>My Week,</span>
        ))}
      {!isNotValidStartDateOrTime && (
        <TimeHolderSpan
          start={start}
          end={end}
          showTaskNameInTaskHolder={showTaskNameInTaskHolder}
        />
      )}
    </div>
  );
};

const TimeHolderSpan = (props) => {
  const { start, end } = props;

  // calculate if the tasks are past due time or date
  // const knowOverdue = () => {
  //   const currentTime = moment().format("H:mm");
  //   const endTime = `${end.split(":")[0]}.${end.split(":")[1].split(" ")[0]}`;
  //   const presentTime = `${currentTime.split(":")[0]}.${
  //     currentTime.split(":")[1]
  //   }`;
  //   let overDue;

  //   if (end.includes("AM")) {
  //     if (end.includes("00:00")) {
  //       console.log(end);
  //       overDue = false;
  //     } else if (Number(endTime) - Number(presentTime) < 0) {
  //       console.log(endTime - presentTime);
  //       overDue = true;
  //     } else {
  //       console.log(endTime - presentTime);
  //       overDue = false;
  //     }
  //   } else {
  //     return;
  //   }
  //   return overDue;
  // };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "5px",
      }}
    >
      {/* {knowOverdue() && (
            <span style={{ color: "red", fontSize: "0.75rem" }}>Overdue</span>
          )} */}
      <span style={{ color: "gray", fontSize: "0.75rem" }}>{start}</span>
      <span style={{ color: "gray", fontSize: "0.75rem" }}>to</span>
      <span style={{ color: "gray", fontSize: "0.75rem" }}>{end}</span>
    </div>
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

export default TaskListItem;

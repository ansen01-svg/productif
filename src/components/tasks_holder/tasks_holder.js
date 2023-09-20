import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import UncompletedTasksHolder from "./uncompleted_tasks_holder";
import CompletedTasksHolder from "./completed_tasks_holder";
import TaskStatusTitleBar from "./task_status_titlebar";

const TasksHolder = ({ tasks }) => {
  const [uncompletedTasks, setUncompletedTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const [showCompletedTasksHolder, setShowCompletedTasksHolder] =
    useState(false);

  // set completed and uncompleted tasks
  useEffect(() => {
    if (tasks.length < 1) return;

    const uncompleted = tasks.filter((task) => !task.data.completed);
    const completed = tasks.filter((task) => task.data.completed);

    setUncompletedTasks(uncompleted);
    setCompletedTasks(completed);
  }, [tasks]);

  return (
    <Box
      sx={{
        flexGrow: 1,
        minHeight: "425px",
        maxHeight: "467px",
        // height: "467px",
        padding: "24px 16px 24px 24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "10px",
        overflowY: "scroll",
      }}
    >
      {uncompletedTasks.length > 0 && (
        <UncompletedTasksHolder tasks={uncompletedTasks} />
      )}
      {completedTasks.length > 0 && (
        <TaskStatusTitleBar
          title="Completed"
          totalTasks={completedTasks.length}
          setShowCompletedTasksHolder={setShowCompletedTasksHolder}
        />
      )}
      {completedTasks.length > 0 && showCompletedTasksHolder && (
        <CompletedTasksHolder tasks={completedTasks} />
      )}
    </Box>
  );
};

export default TasksHolder;

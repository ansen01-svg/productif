import { useState, useEffect } from "react";
import { Box, Collapse } from "@mui/material";
import UncompletedTasksHolder from "./uncompleted_tasks_holder";
import CompletedTasksHolder from "./completed_tasks_holder";
import TaskStatusTitleBar from "./task_status_titlebar";

const TasksHolder = ({ tasks }) => {
  const [uncompletedTasks, setUncompletedTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  // set completed and uncompleted tasks
  useEffect(() => {
    if (tasks.length < 1) return;

    const uncompleted = tasks.filter((task) => !task.data.completed);
    const completed = tasks.filter((task) => task.data.completed);

    setUncompletedTasks(uncompleted);
    setCompletedTasks(completed);
  }, [tasks]);

  const [open, setOpen] = useState(false);

  const showCompletedTasks = () => {
    setOpen(!open);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        minHeight: "425px",
        maxHeight: "467px",
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
          open={open}
          showCompletedTasks={showCompletedTasks}
        />
      )}
      {(completedTasks.length > 0 || open) && (
        <Collapse
          in={open}
          timeout="auto"
          unmountOnExit
          sx={{
            width: "100%",
            "& .MuiCollapse-wrapperInner": {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "10px",
            },
          }}
        >
          <CompletedTasksHolder tasks={completedTasks} />
        </Collapse>
      )}
    </Box>
  );
};

export default TasksHolder;

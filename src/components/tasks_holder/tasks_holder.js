import { useState, useEffect } from "react";
import { Box, Collapse } from "@mui/material";
import TasksHolderSection from "./task_holder_section";
import TaskStatusTitleBar from "./task_status_titlebar";

const TasksHolder = (props) => {
  const {
    tasks,
    taskHolderPadding,
    taskHolderHeight,
    taskHolderMinHeight,
    showTaskNameInTaskHolder,
    openDesktopTaskSidebar,
    toggleMobileTaskSidebar,
  } = props;

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

  // conditions check
  const showUncompletedTasksSection = uncompletedTasks.length > 0;
  const showTaskStatusBar = completedTasks.length > 0;
  const showCompletedTasksSection = completedTasks.length > 0 || open;

  return (
    <Box
      sx={{
        flexGrow: 1,
        height: taskHolderHeight,
        minHeight: taskHolderMinHeight,
        padding: taskHolderPadding,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "10px",
        overflowY: "scroll",
      }}
    >
      {showUncompletedTasksSection && (
        <TasksHolderSection
          tasks={uncompletedTasks}
          showTaskNameInTaskHolder={showTaskNameInTaskHolder}
          openDesktopTaskSidebar={openDesktopTaskSidebar}
          toggleMobileTaskSidebar={toggleMobileTaskSidebar}
        />
      )}
      {showTaskStatusBar && (
        <TaskStatusTitleBar
          title="Completed"
          totalTasks={completedTasks.length}
          open={open}
          showCompletedTasks={showCompletedTasks}
        />
      )}
      {showCompletedTasksSection && (
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
          <TasksHolderSection
            tasks={completedTasks}
            showTaskNameInTaskHolder={showTaskNameInTaskHolder}
            openDesktopTaskSidebar={openDesktopTaskSidebar}
            toggleMobileTaskSidebar={toggleMobileTaskSidebar}
          />
        </Collapse>
      )}
    </Box>
  );
};

export default TasksHolder;

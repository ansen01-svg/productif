import { useState, useEffect } from "react";
import { Box, Divider } from "@mui/material";
import { useSelector } from "react-redux";
import TaskSidebarContentHeader from "./content_header";
import TaskSidebarContentFooter from "./content_footer";
import TaskAndOptionsHolder from "./content_task_and_options_holder";

const TaskSidebarContent = (props) => {
  const { setIsDesktopTaskSidebarOpen, setIsMobileTaskSidebarOpen } = props;

  const { weeklyTasks, dailyTasks, placeholderTaskId } = useSelector(
    (state) => state.firestoreReducer
  );

  const [task, setTask] = useState(null);

  // get the placeholder task from the given task id
  useEffect(() => {
    if (!placeholderTaskId) return;
    const combinedTasks = [...dailyTasks, ...weeklyTasks];
    const particularTask = combinedTasks.find(
      (task) => task.id === placeholderTaskId
    );

    setTask(particularTask);

    return () => {
      setTask(null);
    };
  }, [placeholderTaskId, dailyTasks, weeklyTasks]);

  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: "0 24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        position: "relative",
      }}
    >
      <TaskSidebarContentHeader
        setIsDesktopTaskSidebarOpen={setIsDesktopTaskSidebarOpen}
        setIsMobileTaskSidebarOpen={setIsMobileTaskSidebarOpen}
      />
      <TaskAndOptionsHolder task={task} />
      <Divider
        sx={{
          width: "calc(100% - (24px + 24px))",
          marginLeft: "24px",
          marginRight: "24px",
          height: "1px",
          bgColor: "rgba(0,0,0,0.1)",
          position: "absolute",
          right: "0",
          bottom: "58px",
        }}
      />
      <TaskSidebarContentFooter task={task} />
    </Box>
  );
};

export default TaskSidebarContent;

import { Box } from "@mui/material";
import TasksHolder from "../tasks_holder";

const TaskDisplay = (props) => {
  const {
    tasks,
    taskHolderPadding,
    taskHolderHeight,
    taskHolderMinHeight,
    showTaskNameInTaskHolder,
    openDesktopTaskSidebar,
    toggleMobileTaskSidebar,
  } = props;

  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TasksHolder
        tasks={tasks}
        taskHolderPadding={taskHolderPadding}
        taskHolderHeight={taskHolderHeight}
        taskHolderMinHeight={taskHolderMinHeight}
        showTaskNameInTaskHolder={showTaskNameInTaskHolder}
        openDesktopTaskSidebar={openDesktopTaskSidebar}
        toggleMobileTaskSidebar={toggleMobileTaskSidebar}
      />
    </Box>
  );
};

export default TaskDisplay;

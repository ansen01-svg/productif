import { Box } from "@mui/material";
import TaskSidebarContentTaskHolder from "./content_task_holder";
import TaskSidebarContentOptionsHolder from "./content_options_holder";

const TaskAndOptionsHolder = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      <TaskSidebarContentTaskHolder />
      <TaskSidebarContentOptionsHolder />
    </Box>
  );
};

export default TaskAndOptionsHolder;

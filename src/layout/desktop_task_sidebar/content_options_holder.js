import { Box, Divider } from "@mui/material";
import RemindMeButtonHolder from "./options_reminder_holder";
import DueTimeHolder from "./options_duetime_holder";

const TaskSidebarOptionsHolder = ({ task }) => {
  return (
    <Box
      sx={{
        width: "100%",
        padding: "0 10px",
        background: "white",
      }}
    >
      <RemindMeButtonHolder />
      <Divider
        sx={{ width: "100%", height: "1px", bgColor: "rgba(0,0,0,0.8)" }}
      />
      <DueTimeHolder task={task} />
    </Box>
  );
};

export default TaskSidebarOptionsHolder;

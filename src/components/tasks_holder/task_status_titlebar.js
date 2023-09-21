import { Box } from "@mui/material";
import TextHolder from "../text_holder";

const TaskStatusTitleBar = (props) => {
  const { title, totalTasks } = props;

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "32px",
        padding: "0 10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "10px",
        // backgroundColor: "taskHolder.main",
      }}
    >
      <TextHolder fontWeight={500}>{title}</TextHolder>
      <TextHolder color="gray">{totalTasks}</TextHolder>
    </Box>
  );
};

export default TaskStatusTitleBar;

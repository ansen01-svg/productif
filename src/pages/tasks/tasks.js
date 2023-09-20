import { Box } from "@mui/material";
import TextHolder from "../.././components/text_holder";

const TasksPage = () => {
  return (
    <Box
      sx={{
        width: "100%",
        // height: "calc(100vh - 48px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TextHolder variant="h2">Tasks</TextHolder>
    </Box>
  );
};

export default TasksPage;

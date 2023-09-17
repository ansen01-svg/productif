import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import TasksHolder from "../../components/tasks_holder/tasks_holder";

const TaskDisplay = () => {
  const { dailyTasks } = useSelector((state) => state.firestoreReducer);

  return (
    <Box
      sx={{
        flex: 1,
        width: "100%",
      }}
    >
      <TasksHolder tasks={dailyTasks} />
    </Box>
  );
};

export default TaskDisplay;

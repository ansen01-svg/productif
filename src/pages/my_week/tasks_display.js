import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import TasksHolder from "../../components/tasks_holder/tasks_holder";

const TaskDisplay = () => {
  const { weeklyTasks } = useSelector((state) => state.firestoreReducer);

  return (
    <Box
      sx={{
        flex: 1,
        width: "100%",
      }}
    >
      <TasksHolder tasks={weeklyTasks} />
    </Box>
  );
};

export default TaskDisplay;

import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import TaskDisplay from "../../components/tasks_display_body";
import ErrorDisplayHolder from "../../components/task_fetching_error_display/error_holder";
import SortbyDisplayHolder from "../../components/sortby_display_holder";

const TasksPage = () => {
  const { sortedBy } = useSelector((state) => state.appReducer);
  const { error } = useSelector((state) => state.firestoreReducer);

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {sortedBy && <SortbyDisplayHolder />}
      {error ? <ErrorDisplayHolder /> : <TaskDisplay />}
    </Box>
  );
};

export default TasksPage;

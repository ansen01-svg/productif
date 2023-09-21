import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import AddTaskBar from "../../components/add_task_bar/add_task_bar";
import SortbyDisplayHolder from "../../components/sortby_display_holder";
import TaskDisplay from "./tasks_display";
import ErrorDisplayHolder from "../../components/task_fetching_error_display/error_holder";

const MyWeekPage = () => {
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
      <AddTaskBar />
      {error ? <ErrorDisplayHolder /> : <TaskDisplay />}
    </Box>
  );
};

export default MyWeekPage;

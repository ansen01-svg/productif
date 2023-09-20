import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import AddTaskBar from "../../components/add_task_bar/add_task_bar";
import SortbyDisplayHolder from "../../components/sortby_display_holder";
import TaskDisplay from "./tasks_display";

const MyDayPage = () => {
  const { sortedBy } = useSelector((state) => state.appReducer);
  const { dailyTasks, status } = useSelector((state) => state.firestoreReducer);
  console.log(dailyTasks, status);
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
      <TaskDisplay />
      {/* {dailyTasks.length < 1 ? <p>{status}</p> : <TaskDisplay />} */}
    </Box>
  );
};

export default MyDayPage;

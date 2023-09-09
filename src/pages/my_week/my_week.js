import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import AddTaskBar from "../../components/add_task_bar/add_task_bar";
import SortbyDisplayHolder from "../../components/sortby_display_holder";
import TaskDisplay from "./tasks_display";

const MyWeekPage = () => {
  const { sortedBy } = useSelector((state) => state.appReducer);

  return (
    <Box
      sx={{
        width: "100%",
        height: "calc(100vh - (48px + 96px))",
        padding: "0 24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {sortedBy && <SortbyDisplayHolder />}
      <AddTaskBar />
      <TaskDisplay />
    </Box>
  );
};

export default MyWeekPage;

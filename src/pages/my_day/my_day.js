import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import AddTaskBar from "../../components/add_task_bar/add_task_bar";
import SortbyDisplayHolder from "../../components/sortby_display_holder";
import TaskDisplay from "./tasks_display";

const MyDayPage = () => {
  const { sortedBy } = useSelector((state) => state.appReducer);

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // gap: "24px",
      }}
    >
      {sortedBy && <SortbyDisplayHolder />}
      <AddTaskBar />
      <TaskDisplay />
    </Box>
  );
};

export default MyDayPage;

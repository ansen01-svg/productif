import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";
import AddTaskBar from "../../components/add_task_bar/add_task_bar";
import SortbyDisplayHolder from "../../components/sortby_display_holder";
import TaskDisplay from "../../components/tasks_display_body";
import ErrorDisplayHolder from "../../components/task_fetching_error_display/error_holder";

const MyDayPage = () => {
  const { sortedBy } = useSelector((state) => state.firestoreReducer);
  const { error, dailyTasks } = useSelector((state) => state.firestoreReducer);

  const [openDesktopTaskSidebar, toggleMobileTaskSidebar] = useOutletContext();

  const todaysTasks = dailyTasks.filter(
    (task) =>
      Number(
        new Date(task.data.created.seconds * 1000)
          .toLocaleDateString()
          .split("/")[1]
      ) === new Date().getDate()
  );

  return (
    <Box
      sx={{
        flexGrow: 1,
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
      {error ? (
        <ErrorDisplayHolder />
      ) : (
        <TaskDisplay
          tasks={todaysTasks}
          taskHolderPadding="24px 16px 24px 24px"
          taskHolderHeight="463px"
          taskHolderMinHeight="377px"
          openDesktopTaskSidebar={openDesktopTaskSidebar}
          toggleMobileTaskSidebar={toggleMobileTaskSidebar}
        />
      )}
    </Box>
  );
};

export default MyDayPage;

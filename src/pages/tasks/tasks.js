import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";
import TaskDisplay from "../../components/tasks_display_body";
import ErrorDisplayHolder from "../../components/task_fetching_error_display/error_holder";
import SortbyDisplayHolder from "../../components/sortby_display_holder";

const TasksPage = () => {
  const { sortedBy } = useSelector((state) => state.firestoreReducer);

  const [openDesktopTaskSidebar, toggleMobileTaskSidebar] = useOutletContext();

  const { error, dailyTasks, weeklyTasks } = useSelector(
    (state) => state.firestoreReducer
  );

  const tasks = [...dailyTasks, ...weeklyTasks];

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
      {error ? (
        <ErrorDisplayHolder />
      ) : (
        <TaskDisplay
          tasks={tasks}
          taskHolderPadding="0px 16px 24px 24px"
          taskHolderHeight="515px"
          taskHolderMinHeight="475px"
          showTaskNameInTaskHolder={true}
          openDesktopTaskSidebar={openDesktopTaskSidebar}
          toggleMobileTaskSidebar={toggleMobileTaskSidebar}
        />
      )}
    </Box>
  );
};

export default TasksPage;

import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import TaskDisplay from "../../components/tasks_display_body";
import ErrorDisplayHolder from "../../components/task_fetching_error_display/error_holder";
import SortbyDisplayHolder from "../../components/sortby_display_holder";

const ImportantPage = () => {
  const { sortedBy } = useSelector((state) => state.firestoreReducer);
  const { error, dailyTasks, weeklyTasks } = useSelector(
    (state) => state.firestoreReducer
  );

  const getImportantTasks = () => {
    const dailyImportantTasks = dailyTasks.filter(
      (task) => task.data.important
    );
    const weeklyImportantTasks = weeklyTasks.filter(
      (task) => task.data.important
    );

    const tasks = [...dailyImportantTasks, ...weeklyImportantTasks];
    return tasks;
  };

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
          tasks={getImportantTasks()}
          taskHolderPadding="0px 16px 24px 24px"
          taskHolderHeight="515px"
          taskHolderMinHeight="475px"
          showTaskNameInTaskHolder={true}
        />
      )}
    </Box>
  );
};

export default ImportantPage;

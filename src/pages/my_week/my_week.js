import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";
import AddTaskBar from "../../components/add_task_bar/add_task_bar";
import SortbyDisplayHolder from "../../components/sortby_display_holder";
import TaskDisplay from "../../components/tasks_display_body";
import ErrorDisplayHolder from "../../components/task_fetching_error_display/error_holder";
// import moment from "moment";

const MyWeekPage = () => {
  const { sortedBy } = useSelector((state) => state.firestoreReducer);
  const { error, weeklyTasks } = useSelector((state) => state.firestoreReducer);

  const [openDesktopTaskSidebar, toggleMobileTaskSidebar] = useOutletContext();

  // const getTasksForOneWeek = () => {
  //   let tasks = weeklyTasks.filter((task) => {
  //     const { created } = task.data;

  //     let oldestCreatedTask = {};
  //     let dateDifference = 0;

  //     //task creation date
  //     let createdDate = new Date(created.seconds * 1000).toLocaleDateString();

  //     const getDateOneWeekFromNow = (date) => {
  //       const dateCreated = date.split("/");

  //       let month = parseInt(dateCreated[0]);
  //       let day = parseInt(dateCreated[1]);
  //       let year = parseInt(dateCreated[2]);

  //       let inputDate = new Date(year, month - 1, day);
  //       inputDate.setDate(inputDate.getDate() + 7);

  //       //one week from creation date
  //       let oneWeekFromCreatedDate =
  //         inputDate.getMonth() +
  //         1 +
  //         "/" +
  //         inputDate.getDate() +
  //         "/" +
  //         inputDate.getFullYear();
  //       let oneWeekFromCreatedDateObject = new Date(oneWeekFromCreatedDate);
  //       return { oneWeekFromCreatedDate, oneWeekFromCreatedDateObject };
  //     };

  //     let { oneWeekFromCreatedDate, oneWeekFromCreatedDateObject } =
  //       getDateOneWeekFromNow(createdDate);

  //     //current date
  //     let currentDate = moment().format("l");
  //     let currentDateObject = new Date(currentDate);

  //     if (currentDateObject <= oneWeekFromCreatedDateObject) {
  //       return task;
  //     } else {
  //       createdDate = oneWeekFromCreatedDate;
  //       oneWeekFromCreatedDate = getDateOneWeekFromNow(createdDate);
  //     }
  //   });

  //   return tasks;
  // };
  // getTasksForOneWeek();

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
          tasks={weeklyTasks}
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

export default MyWeekPage;

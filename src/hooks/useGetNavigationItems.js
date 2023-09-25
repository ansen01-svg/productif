import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import { useSelector } from "react-redux";

const useGetNavigationItems = () => {
  const { dailyTasks, weeklyTasks } = useSelector(
    (state) => state.firestoreReducer
  );

  const todaysTasks = dailyTasks.filter(
    (task) =>
      Number(
        new Date(task.data.created.seconds * 1000)
          .toLocaleDateString()
          .split("/")[1]
      ) === new Date().getDate()
  );

  const totalTasks = dailyTasks.length + weeklyTasks.length;

  const impDailyTasks = dailyTasks.filter(
    (task) => task.data.important === true
  );

  const impWeeklyTasks = weeklyTasks.filter(
    (task) => task.data.important === true
  );

  const totalImportantTasks = impDailyTasks.length + impWeeklyTasks.length;

  const navigationItems = [
    {
      id: 0,
      title: "My Day",
      link: "/",
      totalTasks: todaysTasks.length < 1 ? "" : String(todaysTasks.length),
      icon: <LightModeOutlinedIcon fontSize="medium" />,
    },
    {
      id: 1,
      title: "My Week",
      link: "/my-week",
      totalTasks: weeklyTasks.length < 1 ? "" : String(weeklyTasks.length),
      icon: <CalendarTodayOutlinedIcon fontSize="medium" />,
    },
    {
      id: 2,
      title: "Important",
      link: "/important",
      totalTasks: totalImportantTasks === 0 ? "" : String(totalImportantTasks),
      icon: <StarOutlineOutlinedIcon fontSize="medium" />,
    },
    {
      id: 3,
      title: "Tasks",
      link: "/tasks",
      totalTasks: totalTasks === 0 ? "" : totalTasks,
      icon: <AssignmentOutlinedIcon fontSize="medium" />,
    },
  ];

  return navigationItems;
};

export default useGetNavigationItems;

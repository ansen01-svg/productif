// import { useEffect, useState } from "react";
// import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
// import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
// import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
// import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
// import { useSelector } from "react-redux";

// const useGetNavigationItems = () => {
//   const { dailyTasks, weeklyTasks } = useSelector(
//     (state) => state.firestoreReducer
//   );

//   const [importantDailyTasks, setImportantDailyTasks] = useState("");
//   const [importantWeeklyTasks, setImportantWeeklyTasks] = useState("");

//   useEffect(() => {
//     if (dailyTasks && weeklyTasks) {
//       const impDailyTasks = dailyTasks.filter(
//         (task) => task.important === true
//       );

//       const impWeeklyTasks = weeklyTasks.filter(
//         (task) => task.important === true
//       );

//       const totalImportantTasks =
//         importantDailyTasks.length + importantWeeklyTasks.length;

//       const totalTasks = dailyTasks.length + weeklyTasks.length;
//     }
//   }, [dailyTasks, weeklyTasks]);

//   const navigationItems = [
//     {
//       id: 0,
//       title: "My Day",
//       link: "/",
//       totalTasks: dailyTasks.length < 1 ? "" : dailyTasks.length,
//       icon: <LightModeOutlinedIcon fontSize="medium" />,
//     },
//     {
//       id: 1,
//       title: "My Week",
//       link: "/my-week",
//       totalTasks: weeklyTasks.length < 1 ? "" : weeklyTasks.length,
//       icon: <CalendarTodayOutlinedIcon fontSize="medium" />,
//     },
//     {
//       id: 2,
//       title: "Important",
//       link: "/important",
//       totalTasks: totalImportantTasks === 0 ? "" : totalImportantTasks,
//       icon: <StarOutlineOutlinedIcon fontSize="medium" />,
//     },
//     {
//       id: 3,
//       title: "Tasks",
//       link: "/tasks",
//       totalTasks: totalTasks === 0 ? "" : totalTasks,
//       icon: <AssignmentOutlinedIcon fontSize="medium" />,
//     },
//   ];

//   return navigationItems;
// };

// export default useGetNavigationItems;

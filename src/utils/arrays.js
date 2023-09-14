import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import ImportExportOutlinedIcon from "@mui/icons-material/ImportExportOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

const navigationItems = [
  {
    id: 0,
    title: "My Day",
    link: "/",
    icon: <LightModeOutlinedIcon fontSize="medium" />,
  },
  {
    id: 1,
    title: "My Week",
    link: "/my-week",
    icon: <CalendarTodayOutlinedIcon fontSize="medium" />,
  },
  {
    id: 2,
    title: "Important",
    link: "/important",
    icon: <StarOutlineOutlinedIcon fontSize="medium" />,
  },
  {
    id: 3,
    title: "Tasks",
    link: "/tasks",
    icon: <AssignmentOutlinedIcon fontSize="medium" />,
  },
];

const sortOptions = [
  {
    id: 0,
    title: "Importance",
    icon: <LightModeOutlinedIcon fontSize="medium" />,
  },
  {
    id: 1,
    title: "Alphabetically",
    icon: <ImportExportOutlinedIcon fontSize="medium" />,
  },
  {
    id: 2,
    title: "Most recent",
    icon: <ScheduleOutlinedIcon fontSize="medium" />,
  },
];

const mockedDate = [
  {
    id: 1,
    date: 1,
  },
  {
    id: 2,
    date: 2,
  },
  {
    id: 3,
    date: 3,
  },
  {
    id: 4,
    date: 4,
  },
  {
    id: 5,
    date: 5,
  },
  {
    id: 6,
    date: 6,
  },
  {
    id: 7,
    date: 7,
  },
];

export { navigationItems, sortOptions, mockedDate };

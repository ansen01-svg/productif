import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import ImportExportOutlinedIcon from "@mui/icons-material/ImportExportOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";

const navigationItems = [
  {
    id: 0,
    title: "My Day",
    link: "/",
    icon: <LightModeOutlinedIcon fontSize="medium" />,
  },
  {
    id: 1,
    title: "Important",
    link: "/important",
    icon: <StarOutlineOutlinedIcon fontSize="medium" />,
  },
  {
    id: 2,
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

export { navigationItems, sortOptions };

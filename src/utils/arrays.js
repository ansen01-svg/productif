import NightlightIcon from "@mui/icons-material/Nightlight";
import LightModeIcon from "@mui/icons-material/LightMode";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

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
    title: "Task",
    link: "/tasks",
    icon: <AssignmentOutlinedIcon fontSize="medium" />,
  },
];

const mobileSidebarNavigation = [
  {
    id: 1,
    title: "Light mode",
    icon: <LightModeIcon />,
  },
  {
    id: 2,
    title: "Dark mode",
    icon: <NightlightIcon />,
  },
];

export { navigationItems, mobileSidebarNavigation };

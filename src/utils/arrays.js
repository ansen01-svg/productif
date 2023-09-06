import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FolderCopyOutlinedIcon from "@mui/icons-material/FolderCopyOutlined";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import NightlightIcon from "@mui/icons-material/Nightlight";
import LightModeIcon from "@mui/icons-material/LightMode";

const navigation = [
  {
    id: 1,
    navigationTitle: "Sign out",
  },
  {
    id: 2,
    navigationTitle: "Appearance",
  },
];

const bottomNavigation = [
  {
    id: 0,
    title: "Home",
    link: "/",
    icon: <HomeOutlinedIcon />,
  },
  {
    id: 1,
    title: "Projects",
    link: "/projects",
    icon: <FolderCopyOutlinedIcon />,
  },
  {
    id: 2,
    title: "Templates",
    link: "/templates",
    icon: <SpaceDashboardOutlinedIcon />,
  },
  {
    id: 3,
    title: "Pro",
    link: "/pro",
    icon: <PaidOutlinedIcon />,
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

export { navigation, bottomNavigation, mobileSidebarNavigation };

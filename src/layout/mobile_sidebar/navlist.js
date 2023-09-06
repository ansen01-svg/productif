import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { mobileSidebarNavigation } from "../../utils/arrays";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";

const NavList = ({ selectedIndex, handleListItemClick }) => {
  return (
    <List
      sx={{
        "& .MuiSvgIcon-root": {
          fontSize: 25,
        },
      }}
    >
      {mobileSidebarNavigation.map((navigationItem) => {
        return (
          <ListItem key={navigationItem.id} disablePadding>
            <ListItemButton
              selected={selectedIndex === navigationItem.id}
              onClick={() => handleListItemClick(navigationItem.id)}
            >
              <ListItemIcon>{navigationItem.icon}</ListItemIcon>
              <ListItemText primary={navigationItem.title} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default NavList;

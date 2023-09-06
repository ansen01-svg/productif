import List from "@mui/material/List";
import { ListItemIcon, ListItemButton, ListItemText } from "@mui/material";
import NightlightIcon from "@mui/icons-material/Nightlight";
import LightModeIcon from "@mui/icons-material/LightMode";

const SubList = ({ selectedIndex, handleListItemClick }) => {
  return (
    <List component="div" aria-label="main mailbox folders">
      <ListItemButton
        selected={selectedIndex === 0}
        onClick={(event) => handleListItemClick(event, 0)}
      >
        <ListItemIcon>
          <LightModeIcon />
        </ListItemIcon>
        <ListItemText primary="Light mode" />
      </ListItemButton>
      <ListItemButton
        selected={selectedIndex === 1}
        onClick={(event) => handleListItemClick(event, 1)}
      >
        <ListItemIcon>
          <NightlightIcon />
        </ListItemIcon>
        <ListItemText primary="Dark mode" />
      </ListItemButton>
    </List>
  );
};

export default SubList;

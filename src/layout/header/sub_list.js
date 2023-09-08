import List from "@mui/material/List";
import { ListItemIcon, ListItemButton, ListItemText } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined";

const SubList = ({ selectedIndex, handleListItemClick }) => {
  return (
    <List component="div" aria-label="main mailbox folders">
      <ListItemButton
        selected={selectedIndex === 0}
        onClick={(event) => handleListItemClick(event, 0)}
      >
        <ListItemIcon>
          <LightModeOutlinedIcon fontSize="medium" />
        </ListItemIcon>
        <ListItemText primary="Light mode" />
      </ListItemButton>
      <ListItemButton
        selected={selectedIndex === 1}
        onClick={(event) => handleListItemClick(event, 1)}
      >
        <ListItemIcon>
          <NightlightOutlinedIcon fontSize="medium" />
        </ListItemIcon>
        <ListItemText primary="Dark mode" />
      </ListItemButton>
    </List>
  );
};

export default SubList;

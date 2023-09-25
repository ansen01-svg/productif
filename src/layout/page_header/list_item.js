import { ListItemButton, ListItemText } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";

const ListItem = (props) => {
  const { selectedIndex, index, title, icon, handleClick } = props;

  return (
    <ListItemButton
      sx={{
        "& .MuiListItemIcon-root": {
          minWidth: "35px",
        },
      }}
      selected={selectedIndex === index}
      onClick={() => handleClick(0, title)}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={title} />
    </ListItemButton>
  );
};

export default ListItem;

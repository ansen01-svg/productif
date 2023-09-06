import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";

const ListItem = (props) => {
  const {
    id,
    selectedIndex,
    navigationLink,
    icon,
    navigationTitle,
    handleClick,
  } = props;

  return (
    <ListItemButton
      selected={selectedIndex === id}
      onClick={() => handleClick(navigationLink, id)}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={navigationTitle} />
    </ListItemButton>
  );
};

export default ListItem;

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
    totalTasks,
    handleClick,
  } = props;

  return (
    <ListItemButton
      selected={selectedIndex === id}
      onClick={() => handleClick(navigationLink, id)}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={navigationTitle} />
      <ListItemText
        primary={totalTasks}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      />
    </ListItemButton>
  );
};

export default ListItem;

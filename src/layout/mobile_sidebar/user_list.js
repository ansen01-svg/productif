import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useSelector } from "react-redux";

const UserList = () => {
  const { user } = useSelector((state) => state.appReducer);

  return (
    <List>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText primary={user && user.user} />
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default UserList;

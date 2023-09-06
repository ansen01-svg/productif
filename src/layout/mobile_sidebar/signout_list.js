import LogoutIcon from "@mui/icons-material/Logout";
import { signOutText } from "../.././utils/variables";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { List } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import { clearFromStorages, signOut } from "../.././utils/utils_functions";

const SignOutList = () => {
  const handleClick = () => {
    signOut();
    clearFromStorages();
    window.location.reload();
  };

  return (
    <List
      sx={{
        "& .MuiSvgIcon-root": {
          fontSize: 25,
        },
      }}
    >
      <ListItem disablePadding>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary={signOutText} />
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default SignOutList;

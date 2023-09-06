import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import NavList from "./navlist";
import UserList from "./user_list";
import SignOutList from "./signout_list";

const Content = (props) => {
  const { toggleMobileSidebar, selectedIndex, handleListItemClick } = props;

  return (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleMobileSidebar(false)}
      onKeyDown={toggleMobileSidebar(false)}
    >
      <UserList />
      <Divider />
      <NavList
        selectedIndex={selectedIndex}
        handleListItemClick={handleListItemClick}
      />
      <SignOutList />
    </Box>
  );
};

export default Content;

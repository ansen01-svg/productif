import { Toolbar } from "@mui/material";
import { useState } from "react";
import MenuAndLogoHolder from "./menu_and_logo_holder";
import SearchboxHolder from "./searchbox_holder";
import SearchAndUserHolder from "./search_and_user_holder";
import { useWindowWidth } from "../../hooks";
import PopOver from "./popover";

const Content = (props) => {
  const { toggleMobileSidebar, setIsDesktopSidebarOpen } = props;

  const [anchorEl, setAnchorEl] = useState(null);

  const { desktopScreen } = useWindowWidth();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Toolbar
      variant="dense"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <MenuAndLogoHolder
        toggleMobileSidebar={toggleMobileSidebar}
        setIsDesktopSidebarOpen={setIsDesktopSidebarOpen}
      />
      {desktopScreen && <SearchboxHolder />}
      <SearchAndUserHolder id={id} handleClick={handleClick} />
      <PopOver
        handleClose={handleClose}
        id={id}
        open={open}
        anchorEl={anchorEl}
      />
    </Toolbar>
  );
};

export default Content;

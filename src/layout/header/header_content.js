import { Toolbar, Popover } from "@mui/material";
import { useState } from "react";
import MenuAndLogoHolder from "./menu_and_logo_holder";
import PopoverContent from "./popover";
import SearchboxHolder from "./searchbox_holder";
import SearchAndUserHolder from "./search_and_user_holder";
import { useWindowWidth } from "../../hooks";

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
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        sx={{
          "& .MuiPaper-root": {
            width: "273px",
          },
        }}
      >
        <PopoverContent />
      </Popover>
    </Toolbar>
  );
};

export default Content;

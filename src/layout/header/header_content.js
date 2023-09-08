import { Toolbar, Popover } from "@mui/material";
import { useState, useEffect } from "react";
import MenuAndLogoHolder from "./menu_and_logo_holder";
import UserHolder from "./user_holder";
import PopoverContent from "./popover";
import SearchboxHolder from "./searchbox_holder";

const Content = (props) => {
  const { toggleMobileSidebar, setIsDesktopSidebarOpen } = props;

  const [anchorEl, setAnchorEl] = useState(null);

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
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <MenuAndLogoHolder
        toggleMobileSidebar={toggleMobileSidebar}
        setIsDesktopSidebarOpen={setIsDesktopSidebarOpen}
      />
      <SearchboxHolder />
      <UserHolder id={id} handleClick={handleClick} />
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

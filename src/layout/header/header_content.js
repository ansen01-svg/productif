import { Toolbar, Popover } from "@mui/material";
import useWindowWidth from "../../hooks/useWindowWidth";
import { useState, useEffect } from "react";
import MenuAndLogoHolder from "./menu_and_logo_holder";
import UserHolder from "./user_holder";
import PopoverContent from "./popover";

const Content = (props) => {
  const { toggleMobileSidebar, setIsDesktopSidebarOpen } = props;

  const mobileScreen = useWindowWidth();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  useEffect(() => {
    if (mobileScreen) {
      setAnchorEl(null);
    }
  }, [mobileScreen]);

  return (
    <Toolbar
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
      {!mobileScreen && <UserHolder id={id} handleClick={handleClick} />}
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
            width: "20vw",
          },
        }}
      >
        <PopoverContent />
      </Popover>
    </Toolbar>
  );
};

export default Content;

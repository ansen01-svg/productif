import { Box, IconButton } from "@mui/material";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import useWindowWidth from "../../hooks/useWindowWidth";
import { useEffect, useRef } from "react";
import TextHolder from "../../components/text_holder";
import { logo } from "../../utils/variables";

const MenuAndLogoHolder = (props) => {
  const { toggleMobileSidebar, setIsDesktopSidebarOpen } = props;

  const { desktopScreen } = useWindowWidth();

  let handleClick = useRef(null);

  useEffect(() => {
    if (!desktopScreen) {
      handleClick.current = toggleMobileSidebar((state) => !state);
    } else {
      handleClick.current = function () {
        setIsDesktopSidebarOpen((state) => !state);
      };
    }
  }, [desktopScreen, toggleMobileSidebar, setIsDesktopSidebarOpen]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={handleClick.current}
      >
        <MenuSharpIcon fontSize="medium" />
      </IconButton>
      <TextHolder variant="h3">{logo}</TextHolder>
    </Box>
  );
};

export default MenuAndLogoHolder;

import { Box, IconButton } from "@mui/material";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import logoImage from "../../assets/icon.png";
import ImageHolder from "../../components/image_holder";
import useWindowWidth from "../../hooks/useWindowWidth";
import { useEffect, useRef } from "react";
import TextHolder from "../../components/text_holder";
import { logo } from "../../utils/variables";

const MenuAndLogoHolder = (props) => {
  const { toggleMobileSidebar, setIsDesktopSidebarOpen } = props;

  const mobileScreen = useWindowWidth();

  let handleClick = useRef(null);

  useEffect(() => {
    if (mobileScreen) {
      handleClick.current = toggleMobileSidebar(true);
    } else {
      handleClick.current = function () {
        setIsDesktopSidebarOpen((state) => !state);
      };
    }
  }, [mobileScreen, toggleMobileSidebar, setIsDesktopSidebarOpen]);

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
      <Box
        component="span"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <ImageHolder src={logoImage} alt="logo" width="18px" height="18px" />
        <TextHolder variant="h3">{logo}</TextHolder>
      </Box>
    </Box>
  );
};

export default MenuAndLogoHolder;

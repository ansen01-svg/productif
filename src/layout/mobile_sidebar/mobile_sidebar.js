import Drawer from "@mui/material/Drawer";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setMode } from "../../store_provider/app_slice";
import Content from "./content";

const MobileSidebar = (props) => {
  const { isMobileSidebarOpen, toggleMobileSidebar } = props;

  const dispatch = useDispatch();

  const mode = localStorage.getItem("mode");

  const [selectedIndex, setSelectedIndex] = useState(mode === "dark" ? 2 : 1);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);

    if (index === 1) {
      dispatch(setMode("light"));
      localStorage.setItem("mode", "light");
    } else {
      dispatch(setMode("dark"));
      localStorage.setItem("mode", "dark");
    }
  };

  return (
    <Drawer
      anchor="left"
      open={isMobileSidebarOpen}
      onClose={toggleMobileSidebar()}
    >
      <Content
        selectedIndex={selectedIndex}
        handleListItemClick={handleListItemClick}
        toggleMobileSidebar={toggleMobileSidebar}
      />
    </Drawer>
  );
};

export default MobileSidebar;

import Drawer from "@mui/material/Drawer";
import Content from "./content";

const MobileSidebar = (props) => {
  const { isMobileSidebarOpen, toggleMobileSidebar } = props;

  return (
    <Drawer
      anchor="left"
      open={isMobileSidebarOpen}
      onClose={toggleMobileSidebar()}
      sx={{
        top: "48px",
        "& .MuiBackdrop-root, .MuiPaper-root": {
          top: "48px",
        },
      }}
    >
      <Content toggleMobileSidebar={toggleMobileSidebar} />
    </Drawer>
  );
};

export default MobileSidebar;

import Drawer from "@mui/material/Drawer";
import Content from "./content";

const MobileTaskSidebar = (props) => {
  const { isMobileTaskSidebarOpen, toggleMobileTaskSidebar } = props;

  return (
    <Drawer
      anchor="right"
      open={isMobileTaskSidebarOpen}
      onClose={toggleMobileTaskSidebar()}
      sx={{
        top: "48px",
        "& .MuiBackdrop-root, .MuiPaper-root": {
          top: "48px",
        },
      }}
    >
      <Content toggleMobileTaskSidebar={toggleMobileTaskSidebar} />
    </Drawer>
  );
};

export default MobileTaskSidebar;

import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { ToastContainer } from "react-toastify";
import PageHeader from "../page_header";

const Content = (props) => {
  const { openDesktopTaskSidebar, toggleMobileTaskSidebar } = props;

  return (
    <Box
      sx={{
        flexGrow: 1,
        height: "calc(100vh - 48px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        bgcolor: "effects.background",
      }}
    >
      <PageHeader />
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="light"
      />
      <Outlet context={[openDesktopTaskSidebar, toggleMobileTaskSidebar]} />
    </Box>
  );
};

export default Content;

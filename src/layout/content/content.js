import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { ToastContainer } from "react-toastify";
import PageHeader from "../page_header";

const Content = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
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
      <Outlet />
    </Box>
  );
};

export default Content;

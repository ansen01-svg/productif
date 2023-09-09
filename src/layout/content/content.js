import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
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
      <Outlet />
    </Box>
  );
};

export default Content;

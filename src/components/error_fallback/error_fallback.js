import { Box } from "@mui/material";
import Content from "./content";

const AppFallbackComponent = ({ error, resetErrorBoundary }) => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Content error={error} resetErrorBoundary={resetErrorBoundary} />
    </Box>
  );
};

export default AppFallbackComponent;

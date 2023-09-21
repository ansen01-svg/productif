import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import TextHolder from "../text_holder";

const Loading = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "150px",
        background: "effects.background",
      }}
    >
      <TextHolder variant="h1" color="primary.main">
        Productif
      </TextHolder>
      <Box sx={{ display: "flex" }}>
        <CircularProgress size={50} thickness={2} />
      </Box>
    </Box>
  );
};

export default Loading;

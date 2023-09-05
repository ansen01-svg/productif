import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const LoadingFallback = (props) => {
  const { color, value } = props;

  return (
    <Box
      sx={{
        flexGrow: 1,
        height: "calc(100vh - 64px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress color={color} value={value} />
    </Box>
  );
};

export default LoadingFallback;

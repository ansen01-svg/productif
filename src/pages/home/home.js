import { Box } from "@mui/material";
import TextHolder from "../.././components/text_holder";

const HomePage = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        height: "calc(100vh - 48px)",
        bgcolor: "effects.background",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: "-100",
      }}
    >
      <TextHolder variant="h2">This is home page</TextHolder>
    </Box>
  );
};

export default HomePage;

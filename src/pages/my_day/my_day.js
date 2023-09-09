import { Box } from "@mui/material";
import TextHolder from "../../components/text_holder";

const MyDayPage = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "calc(100vh - 48px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TextHolder variant="h2">My day</TextHolder>
    </Box>
  );
};

export default MyDayPage;

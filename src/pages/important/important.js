import { Box } from "@mui/material";
import TextHolder from "../.././components/text_holder";

const ImportantPage = () => {
  return (
    <Box
      sx={{
        width: "100%",
        // height: "calc(100vh - 48px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TextHolder variant="h2">Important</TextHolder>
    </Box>
  );
};

export default ImportantPage;

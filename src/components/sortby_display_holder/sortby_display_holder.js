import { Box } from "@mui/material";
import Content from "./content";

const SortbyDisplayHolder = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "40px",
        display: "flex",
      }}
    >
      <Content />
    </Box>
  );
};

export default SortbyDisplayHolder;

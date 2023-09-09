import { Box } from "@mui/material";
import DateHolder from "./date_holder";
import SortHolder from "./sort_holder";

const Content = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        height: "48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <DateHolder />
      <SortHolder />
    </Box>
  );
};

export default Content;

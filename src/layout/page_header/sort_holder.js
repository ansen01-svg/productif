import { Box } from "@mui/material";
import ImportExportOutlinedIcon from "@mui/icons-material/ImportExportOutlined";
import Button from "../../components/button";

const SortHolder = () => {
  return (
    <Box>
      <Button
        variant="contained"
        color="sortButtonColor"
        boxShadow="none"
        hoverShadow="none"
        textTransform="capitalize"
        fontWeight={400}
        startIcon={<ImportExportOutlinedIcon fontSize="medium" />}
      >
        Sort
      </Button>
    </Box>
  );
};

export default SortHolder;

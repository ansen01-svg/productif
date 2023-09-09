import { Box } from "@mui/material";
import TextHolder from "../../components/text_holder";
import Button from "../../components/button";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";

const Content = () => {
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: "5px",
      }}
    >
      <TextHolder variant="p" fontSize="0.75rem" fontWeight="bold">
        Sorted by none
      </TextHolder>
      <Button
        role="search"
        variant="contained"
        bgColor="searchInputColor.main"
        size="small"
        borderRadius="0"
        boxShadow="none"
        minWidth="40px"
        hoverColor="searchInputColor.buttonHover"
        hoverShadow="none"
        height="30.28px"
      >
        <CloseSharpIcon
          fontSize="small"
          sx={{ color: "searchInputColor.contrastText" }}
        />
      </Button>
    </Box>
  );
};

export default Content;

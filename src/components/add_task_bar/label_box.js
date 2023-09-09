import { Box } from "@mui/material";
import TextHolder from "../../components/text_holder";
import Button from "../../components/button";
import AddSharpIcon from "@mui/icons-material/AddSharp";

const LabelBox = ({ handlePlusButtonClick }) => {
  return (
    <Box
      flexGrow={1}
      sx={{
        height: "52px",
        padding: "0 10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "taskHolder.main",
        color: "taskHolder.contrastText",
        boxShadow:
          "0px 0.3px 0.9px rgba(0,0,0,0.1),0px 1.6px 3.6px rgba(0,0,0,0.1)",
      }}
    >
      <Content handlePlusButtonClick={handlePlusButtonClick} />
    </Box>
  );
};

const Content = ({ handlePlusButtonClick }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      <Button
        bgColor="searchInputColor.main"
        size="small"
        borderRadius="0"
        boxShadow="none"
        minWidth="40px"
        hoverColor="searchInputColor.buttonHover"
        hoverShadow="none"
        onClick={handlePlusButtonClick}
      >
        <AddSharpIcon fontSize="medium" />
      </Button>
      <TextHolder variant="p">Add a task</TextHolder>
    </Box>
  );
};

export default LabelBox;

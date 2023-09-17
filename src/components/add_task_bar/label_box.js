import { Box } from "@mui/material";
import TextHolder from "../../components/text_holder";
import Button from "../../components/button";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import Bar from "../bar";

const LabelBox = ({ handlePlusButtonClick }) => {
  return (
    <>
      <Bar>
        <Content handlePlusButtonClick={handlePlusButtonClick} />
      </Bar>
    </>
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

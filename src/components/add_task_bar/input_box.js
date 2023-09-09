import { Box } from "@mui/material";
import TextHolder from "../../components/text_holder";
import Button from "../../components/button";
import AddSharpIcon from "@mui/icons-material/AddSharp";

const InputBox = () => {
  return (
    <Box
      flexGrow={1}
      sx={{
        height: "52px",
        padding: "0 10px",
        display: "flex",
        backgroundColor: "taskHolder.main",
        color: "taskHolder.contrastText",
      }}
    >
      <Content />
    </Box>
  );
};

const Content = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      {/* <Button
        bgColor="searchInputColor.main"
        size="small"
        borderRadius="0"
        boxShadow="none"
        minWidth="40px"
        hoverColor="searchInputColor.buttonHover"
        hoverShadow="none"
      >
        <AddSharpIcon fontSize="medium" />
      </Button> */}
      <input
        type="text"
        placeholder="Add a task"
        style={{
          width: "100%",
          border: "none",
          outline: "none",
          background: "none",
        }}
      />
    </Box>
  );
};

export default InputBox;

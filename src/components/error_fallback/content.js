import { Paper } from "@mui/material";
import TextHolder from "../text_holder";
import Button from "../button";

const Content = ({ error, resetErrorBoundary }) => {
  return (
    <Paper
      sx={{
        width: "40vw",
        height: "25vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <TextHolder>
        oops something went wrong... &nbsp;
        {error.message}
      </TextHolder>
      <Button variant="contained" onClick={resetErrorBoundary}>
        Try again
      </Button>
    </Paper>
  );
};

export default Content;

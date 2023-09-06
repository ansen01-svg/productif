import Form from "../../components/form";
import { Box } from "@mui/material";

const FormHolder = ({ type }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "74%",
      }}
    >
      <Form type={type} />
    </Box>
  );
};

export default FormHolder;

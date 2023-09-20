import Form from "../../components/form";
import { Box } from "@mui/material";

const FormHolder = ({ type, autocomplete }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "310px",
      }}
    >
      <Form type={type} autocomplete={autocomplete} />
    </Box>
  );
};

export default FormHolder;

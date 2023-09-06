import Form from "../../components/form";
import { Box } from "@mui/material";
import { useMemo } from "react";

const FormHolder = (props) => {
  const { fields } = props;

  const { width, height, propFields } = useMemo(() => {
    const props = {
      width: "100%",
      height: "100%",
      propFields: fields,
    };
    return props;
  }, [fields]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "73%",
      }}
    >
      <Form width={width} height={height} fields={propFields} />
    </Box>
  );
};

export default FormHolder;

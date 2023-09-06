import { Box, TextField } from "@mui/material";

const FieldHolder = (props) => {
  const { id, name, type, label, variant, register } = props;

  return (
    <Box sx={{ width: "100%" }}>
      <TextField
        id={id}
        name={name}
        type={type}
        label={label}
        variant={variant}
        sx={{ width: "100%" }}
        {...register(name)}
      />
    </Box>
  );
};

export default FieldHolder;

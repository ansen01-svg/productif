import { Typography } from "@mui/material";

const TextHolder = (props) => {
  const {
    children,
    variant,
    fontSize,
    fontWeight,
    color,
    padding,
    component,
    flexGrow,
  } = props;

  return (
    <div>
      <Typography
        variant={variant}
        component={component}
        sx={{
          fontSize: fontSize,
          fontWeight: fontWeight,
          color: color,
          padding: padding,
          flexGrow: flexGrow,
        }}
      >
        {children}
      </Typography>
    </div>
  );
};

export default TextHolder;

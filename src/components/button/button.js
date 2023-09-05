import { Button as MuiButton } from "@mui/material";

const Button = (props) => {
  const {
    children,
    width,
    height,
    variant,
    onClick,
    type,
    disabled,
    color,
    startIcon,
    endIcon,
    textTransform,
  } = props;

  return (
    <MuiButton
      variant={variant}
      color={color}
      sx={{
        width: width,
        height: height,
        textTransform: textTransform || "uppercase",
      }}
      onClick={onClick}
      type={type}
      disabled={disabled}
      startIcon={startIcon}
      endIcon={endIcon}
    >
      {children}
    </MuiButton>
  );
};

export default Button;

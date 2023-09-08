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
    bgColor,
    padding,
    role,
    size,
    startIcon,
    endIcon,
    textTransform,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    boxShadow,
    minWidth,
    hoverColor,
    hoverShadow,
  } = props;

  return (
    <MuiButton
      role={role}
      variant={variant}
      color={color}
      size={size}
      sx={{
        width: width,
        minWidth: minWidth,
        height: height,
        bgcolor: bgColor,
        padding: padding,
        boxShadow: boxShadow,
        textTransform: textTransform || "uppercase",
        borderTopRightRadius: borderTopRightRadius,
        borderBottomRightRadius: borderBottomRightRadius,
        borderTopLeftRadius: borderTopLeftRadius,
        borderBottomLeftRadius: borderBottomLeftRadius,
        "&.MuiButtonBase-root:hover": {
          bgcolor: hoverColor,
          boxShadow: hoverShadow,
        },
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

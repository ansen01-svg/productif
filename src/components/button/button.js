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
    bgColor,
    padding,
    role,
    size,
    startIcon,
    endIcon,
    textTransform,
    borderRadius,
    boxShadow,
    minWidth,
    hoverColor,
    hoverShadow,
    color,
    fontWeight,
    flexGrow,
  } = props;

  const buttonStyles = {
    flexGrow: flexGrow,
    width: width,
    minWidth: minWidth,
    height: height,
    bgcolor: bgColor,
    padding: padding,
    boxShadow: boxShadow,
    fontWeight: fontWeight,
    textTransform: textTransform || "uppercase",
    borderRadius: borderRadius,
    "&.MuiButtonBase-root:hover": {
      bgcolor: hoverColor,
      boxShadow: hoverShadow,
    },
  };

  return (
    <MuiButton
      role={role}
      variant={variant}
      color={color}
      size={size}
      sx={buttonStyles}
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

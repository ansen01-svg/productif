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
  } = props;

  const buttonStyles = {
    width: width,
    minWidth: minWidth,
    height: height,
    bgcolor: bgColor,
    padding: padding,
    boxShadow: boxShadow,
    textTransform: textTransform || "uppercase",
    borderRadius: borderRadius,
    color: color,
    "&.MuiButtonBase-root:hover": {
      bgcolor: hoverColor,
      boxShadow: hoverShadow,
    },
  };

  return (
    <MuiButton
      role={role}
      variant={variant}
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

import { Popover } from "@mui/material";
import PopoverContent from "./popover_content";

const PopOver = (props) => {
  const { handleClose, anchorEl, id, open } = props;

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      sx={{
        "& .MuiPaper-root": {
          width: "273px",
        },
      }}
    >
      <PopoverContent />
    </Popover>
  );
};

export default PopOver;

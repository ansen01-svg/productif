import Button from "../../components/button";
import { Box } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const UserHolder = (props) => {
  const { id, handleClick } = props;

  return (
    <Box>
      <Button
        color="inherit"
        textTransform="capitalize"
        sx={{
          "&.MuiSvgIcon-root": {
            fontSize: "22px",
          },
        }}
        id={id}
        onClick={handleClick}
      >
        <AccountCircleOutlinedIcon fontSize="medium" />
      </Button>
    </Box>
  );
};

export default UserHolder;

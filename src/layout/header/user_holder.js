import Button from "../../components/button";
import { Box } from "@mui/material";
import ExpandMoreSharpIcon from "@mui/icons-material/ExpandMoreSharp";
import { useSelector } from "react-redux";

const UserHolder = (props) => {
  const { id, handleClick } = props;

  const { user } = useSelector((state) => state.appReducer);

  return (
    <Box>
      <Button
        color="inherit"
        endIcon={<ExpandMoreSharpIcon fontSize="medium" />}
        textTransform="capitalize"
        sx={{
          "&.MuiSvgIcon-root": {
            fontSize: "22px",
          },
        }}
        id={id}
        onClick={handleClick}
      >
        {user && user}
      </Button>
    </Box>
  );
};

export default UserHolder;

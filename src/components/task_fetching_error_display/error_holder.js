import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { fetchDailyTasks } from "../../store_provider/firestore_slice";
import TextHolder from "../text_holder";
import Button from "../button";

const ErrorDisplayHolder = () => {
  const dispatch = useDispatch();
  const auth = getAuth();

  const handleClick = () => {
    onAuthStateChanged(auth, (user) => {
      if (!user) return;
      dispatch(fetchDailyTasks());
    });
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "100%",
        padding: "24px 16px 24px 24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        marginTop: "100px",
      }}
    >
      <TextHolder variant="p" color="gray">
        There was a problem while loading your tasks.
      </TextHolder>
      <Button variant="outlined" size="small" onClick={handleClick}>
        Retry
      </Button>
    </Box>
  );
};

export default ErrorDisplayHolder;

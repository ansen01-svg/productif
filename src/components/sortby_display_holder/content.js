import { Box } from "@mui/material";
import TextHolder from "../../components/text_holder";
import Button from "../../components/button";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import { useDispatch, useSelector } from "react-redux";
import { sortTasksBy } from "../../store_provider/firestore_slice";

const Content = () => {
  const dispatch = useDispatch();
  const { sortedBy } = useSelector((state) => state.firestoreReducer);

  const closeSortedbyDisplay = () => {
    dispatch(sortTasksBy(null));
  };

  return (
    <Box
      sx={{
        flex: 1,
        padding: "0 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: "5px",
      }}
    >
      <TextHolder variant="p" fontSize="0.75rem" fontWeight="500">
        Sorted by {sortedBy}
      </TextHolder>
      <Button
        role="search"
        variant="contained"
        bgColor="inherit"
        size="small"
        borderRadius="0"
        boxShadow="none"
        minWidth="40px"
        hoverColor="inherit"
        hoverShadow="none"
        height="30.28px"
        onClick={closeSortedbyDisplay}
      >
        <CloseSharpIcon fontSize="small" sx={{ color: "gray" }} />
      </Button>
    </Box>
  );
};

export default Content;

import { Box } from "@mui/material";
import TimeInput from "./time_input";
import DateInput from "./date_input";

//till this both date and time props are passed
const DateTimeInputHolder = ({
  id,
  dateOptions,
  options1,
  options2,
  hrsValue,
  minsValue,
  handleHrsChange,
  handleMinsChange,
}) => {
  return (
    <Box
      component="span"
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {id === "time" ? (
        <TimeInputholder
          options1={options1}
          options2={options2}
          hrsValue={hrsValue}
          minsValue={minsValue}
          handleHrsChange={handleHrsChange}
          handleMinsChange={handleMinsChange}
        />
      ) : (
        <DateInputHolder options={dateOptions} />
      )}
    </Box>
  );
};

const TimeInputholder = (props) => {
  const {
    options1,
    options2,
    hrsValue,
    minsValue,
    handleHrsChange,
    handleMinsChange,
  } = props;

  return (
    <>
      <TimeInput
        labelTitle="hrs"
        options={options1}
        value={hrsValue}
        handleChange={handleHrsChange}
      />
      <TimeInput
        labelTitle="mins"
        options={options2}
        value={minsValue}
        handleChange={handleMinsChange}
      />
    </>
  );
};

const DateInputHolder = (props) => {
  const { options } = props;

  return (
    <>
      <DateInput options={options} />
    </>
  );
};

export default DateTimeInputHolder;

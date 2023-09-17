import { Box } from "@mui/material";
import TimeInput from "./time_input";
import DateInput from "./date_input";

const DateTimeInputHolder = ({
  id,
  dateOptions,
  options1,
  options2,
  hrsValue,
  minsValue,
  handleHrsChange,
  handleMinsChange,
  date,
  setDate,
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
        <DateInputHolder options={dateOptions} date={date} setDate={setDate} />
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
  const { options, date, setDate } = props;

  return (
    <>
      <DateInput
        labelTitle="dd / mm"
        options={options}
        value={date}
        handleChange={setDate}
      />
    </>
  );
};

export default DateTimeInputHolder;

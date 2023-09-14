import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const DateInput = (props) => {
  const { options, labelTitle } = props;

  return (
    <FormControl
      sx={{
        m: 1,
        flexGrow: 1,
      }}
      size="small"
    >
      <InputLabel id="demo-select-small-label">{labelTitle}</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        // value={value}
        label={labelTitle}
        // onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options.map((item) => {
          return (
            <MenuItem key={item.id} value={item.day}>
              {item.day}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default DateInput;

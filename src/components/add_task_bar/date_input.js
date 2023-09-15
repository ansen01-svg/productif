import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const DateInput = (props) => {
  const { options, labelTitle, value, handleChange } = props;

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
        placeholder="DD / MM"
        value={value}
        label={labelTitle}
        onChange={(e) => handleChange(e.target.value)}
      >
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

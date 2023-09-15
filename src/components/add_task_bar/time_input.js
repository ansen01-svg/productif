import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const TimeInput = (props) => {
  const { value, labelTitle, options, handleChange } = props;

  return (
    <FormControl
      sx={{
        m: 1,
        minWidth: 70,
      }}
      size="small"
    >
      <InputLabel id="demo-select-small-label">{labelTitle}</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={value}
        label={labelTitle}
        onChange={handleChange}
      >
        {options.map((item) => {
          return (
            <MenuItem key={item.id} value={item.count}>
              {item.count}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default TimeInput;

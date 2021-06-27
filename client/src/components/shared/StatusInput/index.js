import { Field} from "formik";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {statusArr } from "../../../helpers";
const StatusInput = () => {
  
  return (
    <>
   <InputLabel id="status">Status</InputLabel>
    <Field name="status" >
      {({ field }) => (
        <Select
          labelId="status"
          value={field.value.status}
          {...field}
        >
            {statusArr.map((status, index) => (
              <MenuItem key={index} value={status}>
                {status}
              </MenuItem>
            ))}
        </Select> 
      )}
    </Field>
    </>
  );
};
export default StatusInput;
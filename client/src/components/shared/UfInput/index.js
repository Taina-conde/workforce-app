import { Field} from "formik";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {ufs } from "../../../helpers";
const UfInput = () => {
  
  return (
    <>
   <InputLabel id="ufNasc">UF</InputLabel>
    <Field name="ufNasc" >
      {({ field }) => (
        <Select
          labelId="ufNasc"
          value={field.value.ufNasc}
          {...field}
        >
            {ufs.map((uf, index) => (
              <MenuItem key={index} value={uf}>
                {uf}
              </MenuItem>
            ))}
        </Select> 
      )}
    </Field>
    </>
  );
};
export default UfInput;
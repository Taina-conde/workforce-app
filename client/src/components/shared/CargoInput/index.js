import { Field} from "formik";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {cargos } from "../../../helpers";
const CargoInput = () => {
  
  return (
    <>
   <InputLabel id="cargo">Cargo</InputLabel>
    <Field name="cargo" >
      {({ field }) => (
        <Select
          labelId="cargo"
          value={field.value.cargo}
          {...field}
        >
            {cargos.map((cargo, index) => (
              <MenuItem key={index} value={cargo}>
                {cargo}
              </MenuItem>
            ))}
        </Select> 
      )}
    </Field>
    </>
  );
};
export default CargoInput;
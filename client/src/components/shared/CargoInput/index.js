import { Field} from "formik";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
const CargoInput = () => {
  
  return (
    <Field name="cargo" component = {Select}>
      {({ field }) => (
        <TextField
          id="cargo"
          label="Cargo"
          value={field.value.cargo}
          {...field}
        /> 
      )}
    </Field>
  );
};
export default CargoInput;
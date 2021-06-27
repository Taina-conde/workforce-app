import { Field} from "formik";
import TextField from "@material-ui/core/TextField";
import InputAdornment from '@material-ui/core/InputAdornment';
const SalarioInput = () => {
  
  return (
    <Field name="salario">
      {({ field, form: { touched, errors }, meta }) => (
        <TextField
          id="salario"
          label="Salário"
          value={field.value.salario}
          error={touched.salario && Boolean(errors.salario)}
          helperText={touched.salario && errors.salario}
          {...field}
          InputProps={{
            startAdornment: <InputAdornment position="start">R$</InputAdornment>,
          }}
        /> 
      )}
    </Field>
  );
};
export default SalarioInput;
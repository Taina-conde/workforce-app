import { Field} from "formik";
import TextField from "@material-ui/core/TextField";
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
        /> 
      )}
    </Field>
  );
};
export default SalarioInput;
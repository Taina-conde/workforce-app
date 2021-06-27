import { Field} from "formik";
import TextField from "@material-ui/core/TextField";
const CpfInput = () => {
  
  return (
    <Field name="cpf">
      {({ field, form: { touched, errors }, meta }) => (
        <TextField
          id="cpf"
          label="CPF"
          value={field.value.cpf}
          error={touched.cpf && Boolean(errors.cpf)}
          helperText={touched.cpf && errors.cpf}
          {...field}
        /> 
      )}
    </Field>
  );
};
export default CpfInput;
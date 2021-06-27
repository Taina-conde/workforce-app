import { Field, useFormikContext } from "formik";
import TextField from "@material-ui/core/TextField";
const CpfInput = () => {
  const { values, submitForm } = useFormikContext();
  return (
    <Field name="cpf">
      {({ field, form: { touched, errors }, meta }) => (
        <TextField
          id="cpf"
          label="CPF"
          value={values.cpf}
          
          {...field}
        />
      )}
    </Field>
  );
};
export default CpfInput;
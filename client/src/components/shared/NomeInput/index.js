import { Field, useFormikContext } from "formik";
import TextField from "@material-ui/core/TextField";
const NomeInput = () => {
  const { values, submitForm } = useFormikContext();
  return (
    <Field name="nome">
      {({ field, form: { touched, errors }, meta }) => (
        <TextField
          id="nome"
          label="Nome"
          value={values.nome}
          
          {...field}
        />
      )}
    </Field>
  );
};
export default NomeInput;

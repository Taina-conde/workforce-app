import { Field, useFormikContext } from "formik";
import TextField from "@material-ui/core/TextField";
const NomeInput = () => {

  return (
    <Field name="nome">
      {({ field, form: { touched, errors }, meta }) => (
        <TextField
          id="nome"
          label="Nome"
          value={field.value.nome}
          
          {...field}
        />
      )}
    </Field>
  );
};
export default NomeInput;

import { useFormik } from "formik";
import { setLocale } from "yup";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

setLocale({
  mixed: {
    default: "Inválido",
  },
  number: {
    min: "Deve conter 11 números",
  },
});
const validationSchema = yup.object({
  nome: yup.string(),
  cpf: yup.number().positive().integer().min(),
});

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
const EmployeeForm = () => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      nome: "",
      cpf: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {},
  });

  return (
    <div>
      <form className = {classes.root} onSubmit={formik.handleSubmit} autoComplete = "off">
        <TextField
          id="nome"
          name="nome"
          label="Nome"
          value={formik.values.nome}
          onChange={formik.handleChange}
          error={formik.touched.nome && Boolean(formik.errors.nome)}
          helperText={formik.touched.nome && formik.errors.nome}
        />
        <TextField
          id="cpf"
          name="cpf"
          label="CPF"
          type="cpf"
          value={formik.values.cpf}
          onChange={formik.handleChange}
          error={formik.touched.cpf && Boolean(formik.errors.cpf)}
          helperText={formik.touched.cpf && formik.errors.cpf}
        />
        <Button color="primary" variant="contained" type="submit">
          Pesquisar
        </Button>
      </form>
    </div>
  );
};
export default EmployeeForm;

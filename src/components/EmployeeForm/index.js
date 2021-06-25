import { useFormik } from "formik";
import { setLocale } from "yup";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));
const EmployeeForm = () => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      nome: "",
      cpf: "",
      cargo: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {},
  });

  return (
    <div>
      <form
        className={classes.root}
        onSubmit={formik.handleSubmit}
        autoComplete="off"
      >
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
        <FormControl className={classes.formControl}>
          <InputLabel id="cargo">Cargo</InputLabel>
          <Select
            labelId="cargo"
            id = "cargo"
            name = "cargo"
            value={formik.values.cargo}
            onChange={formik.handleChange}
          >
            <MenuItem  value={"devJr"}>Dev Jr</MenuItem>
            <MenuItem  value={"devPl"}>Dev Pl</MenuItem>
            <MenuItem value={"devSr"}>Dev Sr</MenuItem>
            <MenuItem  value={"POJr"}>PO Jr</MenuItem>
            <MenuItem  value={"POPl"}>PO Pl</MenuItem>
            <MenuItem  value={"POSr"}>PO Sr</MenuItem>
            <MenuItem  value={"ACJr"}>AC Jr</MenuItem>
            <MenuItem  value={"ACPl"}>AC Pl</MenuItem>
            <MenuItem  value={"ACSr"}>AC Sr</MenuItem>
            <MenuItem   value={"analistaJr"}>Analista Jr</MenuItem>
            <MenuItem   value={"analistaPl"}>Analista Pl</MenuItem>
            <MenuItem  value={"analistaSr"}>Analista Sr</MenuItem>
                
          </Select>
        </FormControl>
        <Button color="primary" variant="contained" type="submit">
          Pesquisar
        </Button>
      </form>
    </div>
  );
};
export default EmployeeForm;
import { useFormik, Field, FormikProvider } from "formik";
import { setLocale } from "yup";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { ufs, cargos } from "../../helpers/index";
import { DatePicker } from "formik-material-ui-pickers";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

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
      cadastro: Date.now(),
      uf: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {},
  });
  const dateNow = Date.now();
  console.log("date: ", dateNow);
  return (
    <FormikProvider value={formik}>
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
            id="cargo"
            name="cargo"
            value={formik.values.cargo}
            onChange={formik.handleChange}
          >
            {cargos.map((cargo, index) => (
              <MenuItem key={index} value={cargo}>
                {cargo}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Field
            component={DatePicker}
            label="Data de cadastro"
            name="cadastro"
          />
          ;
        </MuiPickersUtilsProvider>

        <FormControl className={classes.formControl}>
          <InputLabel id="uf">UF</InputLabel>
          <Select
            labelId="uf"
            id="uf"
            name="uf"
            value={formik.values.uf}
            onChange={formik.handleChange}
          >
            {ufs.map((uf, index) => (
              <MenuItem key={index} value={uf}>
                {uf}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button color="primary" variant="contained" type="submit">
          Pesquisar
        </Button>
      </form>
    </FormikProvider>
  );
};
export default EmployeeForm;

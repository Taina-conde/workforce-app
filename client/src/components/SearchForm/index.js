import { Formik } from "formik";
import { setLocale } from "yup";
import * as yup from "yup";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import { criteriosArr } from "../../helpers";
import NomeInput from "../shared/NomeInput";

setLocale({
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
      width: "50ch",
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
}));

const SearchForm = () => {
  const classes = useStyles();
  return (
    <Formik
      initialValues={{
        criterioBusca: "",
        nome: "",
        cpf: "",
        cargo: "",
        cadastro: Date.now(),
        uf: "",
        salario: [0, 10000],
        status: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {}}
    >
      {(props) => {
          
          return (
        <form onSubmit={props.handleSubmit} className = {classes.root}>
          <FormControl className={classes.formControl}>
            <InputLabel id="criterioBusca">Buscar funcionários por </InputLabel>
            <Select
              labelId="criterioBusca"
              id="criterioBusca"
              name="criterioBusca"
              value={props.values.criterioBusca}
              onChange={props.handleChange}
            >
              {criteriosArr.map((criterio, index) => (
                <MenuItem key={index} value={criterio}>
                  {criterio}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {props.values.criterioBusca === "nome" && <NomeInput/>}

        </form>
      )}}
    </Formik>
  );
};

export default SearchForm;

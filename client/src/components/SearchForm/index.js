import { Formik } from "formik";
import { setLocale } from "yup";
import * as yup from "yup";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";

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
      width: "25ch",
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
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
      {(props) => (
        <form onSubmit={props.handleSubmit}>
          <FormControl className={classes.formControl}>
            <InputLabel id="criterioBusca">criterioBusca</InputLabel>
            <Select
              labelId="criterioBusca"
              id="criterioBusca"
              name="criterioBusca"
              value={formik.values.criterioBusca}
              onChange={formik.handleChange}
            >
              {criterioBuscas.map((criterioBusca, index) => (
                <MenuItem key={index} value={criterioBusca}>
                  {cargo}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </form>
      )}
    </Formik>
  );
};

export default SearchForm;

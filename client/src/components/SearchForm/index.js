import { Formik } from "formik";
import { setLocale } from "yup";
import * as yup from "yup";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import { criteriosArr } from "../../helpers";
import NomeInput from "../shared/NomeInput";
import CpfInput from "../shared/CpfInput";
import CargoInput from "../shared/CargoInput";
import DateInput from "./DateInput";
import UfInput from "../shared/UfInput";
import SalarioFaixaInput from "./SalarioFaixaInput";
import StatusInput from "../shared/StatusInput";
import { formatDateToSend, formatName } from "../../helpers";
import { useContext } from "react";
import Context from "../../context";
import SearchIcon from "@material-ui/icons/Search";

setLocale({
  string: {
    min: "Deve conter 11 números",
  },
});
const validationSchema = yup.object({
  nome: yup.string(),
  cpf: yup.string().min(11),
});
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  formControl: {
    margin: theme.spacing(3),
    minWidth: 200,
  },
  btn: {
    margin: theme.spacing(2),
  },
  salario: {
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
    [theme.breakpoints.up("md")]: {
      width: "50%",
    },

    width: "70%",

    margin: theme.spacing(3),
  },
}));

const SearchForm = () => {
  const classes = useStyles();
  const ctx = useContext(Context);
  return (
    <Formik
      initialValues={{
        criterioBusca: "",
        nome: "",
        cpf: "",
        cargo: "",
        dataCad: new Date(),
        ufNasc: "",
        salario: [0, 10000],
        status: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, formikBag) => {
        const { criterioBusca } = values;
        let query = values[criterioBusca];
        if (criterioBusca === "dataCad") {
          query = formatDateToSend(values[criterioBusca]);
        }
        if (criterioBusca === "nome") {
          query = formatName(query);
        }
        formikBag.resetForm();
        ctx.onSearchEmployee(criterioBusca, query);
      }}
    >
      {(props) => {
    
        return (
          <form onSubmit={props.handleSubmit} className={classes.root}>
            <FormControl className={classes.formControl}>
              <InputLabel id="criterioBusca">
                Buscar funcionários por{" "}
              </InputLabel>
              <Select
                labelId="criterioBusca"
                id="criterioBusca"
                data-testid="search-dropdown"
                name="criterioBusca"
                value={props.values.criterioBusca}
                onChange={props.handleChange}
              >
                {criteriosArr.map((item, index) => (
                  <MenuItem key={index} value={item.id}>
                    {item.criterio}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {props.values.criterioBusca === "nome" && (
              <FormControl className={classes.formControl}>
                <NomeInput />
              </FormControl>
            )}
            {props.values.criterioBusca === "cpf" && (
              <FormControl className={classes.formControl}>
                <CpfInput />
              </FormControl>
            )}
            {props.values.criterioBusca === "cargo" && (
              <FormControl className={classes.formControl}>
                <CargoInput />
              </FormControl>
            )}
            {props.values.criterioBusca === "dataCad" && (
              <FormControl className={classes.formControl}>
                <DateInput />
              </FormControl>
            )}
            {props.values.criterioBusca === "ufNasc" && (
              <FormControl className={classes.formControl}>
                <UfInput />
              </FormControl>
            )}
            {props.values.criterioBusca === "salario" && (
              <FormControl className={classes.salario}>
                <SalarioFaixaInput />
              </FormControl>
            )}
            {props.values.criterioBusca === "status" && (
              <FormControl className={classes.formControl}>
                <StatusInput />
              </FormControl>
            )}
            {props.values.criterioBusca && (
              <Button
                className={classes.btn}
                color="primary"
                variant="contained"
                type="submit"
                endIcon={<SearchIcon />}
                disabled={!props.isValid || !props.dirty}
              >
                Pesquisar
              </Button>
            )}
          </form>
        );
      }}
    </Formik>
  );
};

export default SearchForm;

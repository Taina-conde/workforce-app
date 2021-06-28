import { Formik } from "formik";
import { setLocale } from "yup";
import * as yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import NomeInput from "../shared/NomeInput";
import CargoInput from "../shared/CargoInput";
import CpfInput from "../shared/CpfInput";
import StatusInput from "../shared/StatusInput";
import UfInput from "../shared/UfInput";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import SalarioInput from "./SalarioInput";


setLocale({
  number: {
    min: "Deve conter 11 números",
    max: "O salário deve ser menor que R$ 10mil",
  },
});
const validationSchema = yup.object({
  nome: yup.string().required(),
  cpf: yup.number().positive().integer().required(),
  salario: yup.number().positive().required().max(100000),
  cargo: yup.string().required(),
  cadastro: yup.date().default(function () {
    return new Date();
  }),
  uf: yup.string().required(),
  status: yup.string().required(),
});
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "50ch",
    },
  },
  inputItem: {
    margin: theme.spacing(1),
    minWidth: 40,
    textAlign: "center",
  },
  btn: {
    marginTop: theme.spacing(2),
  },
  salario: {
    width: "100%",
  },
}));
const NewEmployeeForm = () => {
  const classes = useStyles();
  return (
    <Formik
      initialValues={{
        nome: "",
        cpf: "",
        cargo: "",
        ufNasc: "",
        salario: "",
        status: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(" values em submit", values);
        
      }}
    >
      {(props) => (
        <form onSubmit={props.handleSubmit} className={classes.root}>
          <Grid container spacing={2} justify="center" alignItems="center">
            <Grid item xs={12}>
              <Typography variant="h5" gutterBottom>
                Novo funcionário
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <NomeInput />
            </Grid>
            <Grid item xs={12}>
              <CpfInput />
            </Grid>
            <Grid item xs= {12}>
              <SalarioInput />
            </Grid>
            <Grid item xs className={classes.inputItem}>
              <CargoInput />
            </Grid>
            <Grid item xs className={classes.inputItem}>
              <UfInput />
            </Grid>
            <Grid item xs className={classes.inputItem}>
              <StatusInput />
            </Grid>
            
            <Grid item xs={12} className={classes.btn}>
              <Button color="primary" variant="contained" type="submit">
                Salvar
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
};
export default NewEmployeeForm;

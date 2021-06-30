import { useContext } from "react";
import Context from "../../context";
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
import { formatEmployee, cargos, ufs, statusArr } from "../../helpers";
import SaveIcon from "@material-ui/icons/Save";

setLocale({
  string: {
    min: "Deve conter 11 números",
  },
  number: {
    max: "O salário deve ser menor que R$ 10mil",
  },
});
const validationSchema = yup.object({
  nome: yup.string().required("Campo obrigatório"),
  cpf: yup.string().min(11).required("Campo obrigatório"),
  salario: yup.number().positive().max(100000).required("Campo obrigatório"),
  cargo: yup
    .string()
    .oneOf(cargos, "Cargo inválido")
    .required("Campo obrigatório"),
  ufNasc: yup.string().oneOf(ufs, "UF inválida").required("Campo obrigatório"),
  status: yup
    .string()
    .oneOf(statusArr, "Status inválido")
    .required("Campo obrigatório"),
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

const NewEmployeeForm = (props) => {
  const classes = useStyles();
  const ctx = useContext(Context);
  const { employees, onEditEmployee, onSaveNewEmployee } = ctx;
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
      onSubmit={(values, formikBag) => {
        console.log(" values em submit new employee", values);
        const employee = formatEmployee(values);
        const employeeInDataBaseArr = employees.filter(
          (e) => e.cpf === employee.cpf
        );
        const employeeExists = employeeInDataBaseArr.length !== 0;

        console.log("employeeExists", employeeExists);
        if (employeeExists) {
          const employeeInDataBase = employeeInDataBaseArr[0];
          console.log("employeeindatbase", employeeInDataBase);
          console.log("form employee", employee);
          props.onClose();
          formikBag.resetForm();
          return onEditEmployee(employee.cpf, employee);
        }
        console.log(" employee in new form", employee);
        onSaveNewEmployee(employee);
        props.onClose();
        formikBag.resetForm();
      }}
    >
      {(props) => (
        <form onSubmit={props.handleSubmit} className={classes.root}>
          <Grid container spacing={2} justify="center" alignItems="center">
            <Grid item xs={12}>
              <Typography variant="subtitle1" gutterBottom>
                Novo funcionário
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <NomeInput />
            </Grid>
            <Grid item xs={12}>
              <CpfInput />
            </Grid>
            <Grid item xs={12}>
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
              <Button
                disabled={!props.isValid || !props.dirty}
                color="primary"
                variant="contained"
                type="submit"
                endIcon={<SaveIcon />}
              >
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

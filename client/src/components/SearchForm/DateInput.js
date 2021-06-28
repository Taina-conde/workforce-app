import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { Field } from "formik";
import { DatePicker } from "formik-material-ui-pickers";
import DateFnsUtils from "@date-io/date-fns";
const DateInput = () => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Field component={DatePicker} label="Data de cadastro" name="dataCad" />
    </MuiPickersUtilsProvider>
  );
};
export default DateInput;

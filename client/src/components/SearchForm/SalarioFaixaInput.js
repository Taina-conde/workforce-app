import { Field } from 'formik';
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
const SalarioFaixaInput = () => {
  return (
    <>
      <Typography id="range-slider" gutterBottom>
        Faixa salarial
      </Typography>
      <Field name="salario">
        {({
          field, // { name, value, onChange, onBlur }
          form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
          meta,
        }) => {
          console.log("field", field);
          return (
            <Slider
              value={field.value}
              step = {1000}
              max = {10000}
              onChange={(e, value) =>
                field.onChange({
                  ...e,
                  target: {
                    ...e.target,
                    name: field.name,
                    value,
                  },
                })
              }
              valueLabelDisplay="on"
              aria-labelledby="range-slider"
              getAriaValueText={() => (`R$${field.value}`)}
            />
          );
        }}
      </Field>
    </>
  );
};
export default SalarioFaixaInput;

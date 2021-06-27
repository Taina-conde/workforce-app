import { Field } from 'formik';
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
const SalarioFaixaInput = () => {
  return (
    <>
      <Typography id="range-slider" gutterBottom>
        Faixa salarial
      </Typography>
      <Field name="salario" value={formik.values.salario}>
        {({
          field, // { name, value, onChange, onBlur }
          form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
          meta,
        }) => {
          console.log("field", field);
          return (
            <Slider
              value={field.value}
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
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              getAriaValueText={(value) => `R$${value}`}
            />
          );
        }}
      </Field>
    </>
  );
};
export default SalarioFaixaInput;

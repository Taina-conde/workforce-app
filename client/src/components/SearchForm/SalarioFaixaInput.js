import { Field } from 'formik';
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import { sliderMarks } from "../../helpers/index";
const SalarioFaixaInput = () => {
  return (
    <>
      <Typography id="range-slider" gutterBottom>
        Faixa salarial
      </Typography>
      <Field name="salario" >
        {({
          field, 
          form: { touched, errors }, 
          meta,
        }) => {

          return (
            <Slider
              value={field.value}
              step = {500}
              max = {10000}
              marks = {sliderMarks}
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
              getAriaValueText={(value) => (`R$${value}`)}
            />
          );
        }}
      </Field>
    </>
  );
};
export default SalarioFaixaInput;

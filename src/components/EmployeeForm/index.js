import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const validationSchema = yup.object({
    nome: yup
      .string('Nome')
      .nome('Insira um nome válido'),
    cpf: yup
      .number('CPF')
      .min(11, 'O CPF deve conter 11 números'),
  });
  
const EmployeeForm = () => {
    const formik = useFormik({
        initialValues: {
          
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
         
        },
      });
    
      return (
        <div>
          <form onSubmit={formik.handleSubmit}>
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
            <Button color="primary" variant="contained" type="submit">
              Pesquisar
            </Button>
          </form>
        </div>
      );
}
export default EmployeeForm;
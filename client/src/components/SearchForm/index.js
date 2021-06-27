import { Formik } from "formik";
import { setLocale } from "yup";
import * as yup from "yup";

setLocale({
    number: {
      min: "Deve conter 11 números",
    },
  });
const validationSchema = yup.object({
    nome: yup.string(),
    cpf: yup.number().positive().integer().min(),
  });
  
const SearchForm = () => {
  return (
    <Formik
      initialValues={{
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
    ></Formik>
  );
};

export default SearchForm;

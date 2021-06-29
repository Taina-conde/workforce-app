import Typography from "@material-ui/core/Typography";
import { useContext } from "react";
import Context from "../../context";
u;
const ResultsSummary = () => {
  const ctx = useContext(Context);
  const {searchedEmployees} = ctx;
  const numEmployees = searchedEmployees.length;
  numEmployees === 0 
  ? (<Typography >

  </Typography>)
  : <Typography variant="caption" display="block" gutterBottom>
      {}
  </Typography>
  return (
    <Typography variant="caption" display="block" gutterBottom>
        {numEmployees === 1
        ? `${numEmployees} funcionário encontrado.`
        :`${numEmployees} funcionários encontrados.`}
    </Typography>
  );
};
export default ResultsSummary;

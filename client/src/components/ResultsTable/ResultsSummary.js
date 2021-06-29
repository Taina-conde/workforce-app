import Typography from "@material-ui/core/Typography";
import { useContext } from "react";
import Context from "../../context";

const ResultsSummary = () => {
  const ctx = useContext(Context);
  const { searchedEmployees } = ctx;
  const numEmployees = searchedEmployees.length;
  if (numEmployees === 0) {
    return (
      <Typography variant="overline" display="block" gutterBottom color = "textSecondary">
        Nenhum funcionário foi encontrado.
      </Typography>
    );
  }
  return (
    <Typography variant="caption" display="block" color = "textSecondary" gutterBottom>
      {numEmployees === 1
        ? `${numEmployees} funcionário encontrado.`
        : `${numEmployees} funcionários encontrados.`}
    </Typography>
  );
};
export default ResultsSummary;

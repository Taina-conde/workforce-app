import Typography from "@material-ui/core/Typography";
import { useContext } from "react";
import Context from "../../context";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  summary: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    textAlign: "center",
  },
}));

const ResultsSummary = () => {
  const ctx = useContext(Context);
  const { searchedEmployees } = ctx;
  const classes = useStyles();
  const numEmployees = searchedEmployees.length;
  if (numEmployees === 0) {
    return (
      <Typography
        component="h2"
        title="results"
        variant="overline"
        display="block"
        gutterBottom
        color="textSecondary"
        className={classes.summary}
      >
        Nenhum funcionário foi encontrado.
      </Typography>
    );
  }
  return (
    <Typography
      component="h2"
      title="results"
      variant="caption"
      display="block"
      color="textSecondary"
      gutterBottom
      className={classes.summary}
    >
      {numEmployees === 1
        ? `${numEmployees} funcionário encontrado.`
        : `${numEmployees} funcionários encontrados.`}
    </Typography>
  );
};
export default ResultsSummary;

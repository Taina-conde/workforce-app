import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: "5em",
    height: "70vh",
  },
  logoStart: {
    textTransform: "lowercase",
    color: theme.palette.text.secondary,
    fontFamily:
      "'Fillate', 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
  },
  logoEnd: {
    textTransform: "capitalize",
    color: theme.palette.primary.light,
    fontSize: "1.5em",
  },
}));

export default function InitalLogo() {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignItems="center"
    >
      <Grid item className={classes.logoStart}>
        My
      </Grid>
      <Grid item className={classes.logoEnd}>
        employees
      </Grid>
    </Grid>
  );
}

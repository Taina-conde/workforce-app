import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: "inherit",
    justifyContent: "inherit"
  },
  logoStart: {
    textTransform: "lowercase",
    color: theme.palette.primary.light,
    fontSize: "1.5em",
    fontFamily:
      "'Fillate', 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
  },
  logoEnd: {
    textTransform: "capitalize",
    color: theme.palette.text.secondary,
    fontFamily: "monospace",
  },
}));
export default function Logo() {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.root}
      alignItems="center"
    >
      <Grid item className={classes.logoStart}>
        Work
      </Grid>
      <Grid item className={classes.logoEnd}>
        force
      </Grid>
    </Grid>
  );
}

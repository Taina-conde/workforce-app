import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Logo from "../shared/Logo";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "70vh",
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
      <Grid item>
        <Logo />
      </Grid>
    </Grid>
  );
}

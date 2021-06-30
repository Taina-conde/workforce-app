import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Logo from "../shared/Logo";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "70vh",
    fontSize : "4em",
    [theme.breakpoints.up('sm')]: {
      fontSize: '6em',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '8em',
    },

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

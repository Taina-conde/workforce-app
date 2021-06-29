import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    fontSize: "5em",
    height: "70vh"
  },
  logoStart : {

  }
}));

export default function InitalLogo() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} justify = "center" alignItems = "center">
      <Grid item className = {classes.logoStart}>My</Grid>
      <Grid item className = {classes.logoEnd}>employees</Grid>
      <Grid item className = {classes.logoIcon}>
        <SearchIcon />
      </Grid>
    </Grid>
  );
}

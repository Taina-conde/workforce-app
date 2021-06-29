import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
  },
}));

export default function InitalLogo() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <span>My</span>
      <span>Employees</span>
      <span>
        <SearchIcon />
      </span>
    </div>
  );
}

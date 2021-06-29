import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Logo from "../shared/Logo";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontSize: "1.7em",
  },
  title: {
    flexGrow: 1,
    
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Logo/>
      
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navbar;

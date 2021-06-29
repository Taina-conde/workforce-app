import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Logo from "../shared/Logo";
import { useContext } from "react";
import Context from "../../context";

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
  const ctx = useContext(Context);
  const { searchStarted } = ctx;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {searchStarted && <Logo/>}
          
      
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navbar;

import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  box: {
    position: "fixed",
    bottom: 50,
    right: 50,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.background.paper,
    "&:hover": {
        backgroundColor: "#7986cb69",
        color: theme.palette.primary.light
    }
  },
}));

export default function AddEmployeeBtn() {
  const classes = useStyles();
  return (
    <Box component = {IconButton} className={classes.box} boxShadow = {3}>
        <AddIcon color = "inherit"/>
    </Box>
    
  );
}

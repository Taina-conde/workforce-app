import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: "center",
    }
  }));

export default function InitalLogo() {
    const classes = useStyles();
    return <div className = {classes.root}>

    </div>
}
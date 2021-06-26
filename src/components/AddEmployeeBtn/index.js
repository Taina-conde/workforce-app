import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  btn: {},
}));

export default function AddEmployeeBtn() {
  const classes = useStyles();
  return (
    <IconButton>
      <AddIcon />
    </IconButton>
  );
}

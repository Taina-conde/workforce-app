import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Modal from "@material-ui/core/Modal";
import NewEmployeeForm from "../NewEmployeeForm";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  btn: {
    position: "fixed",
    bottom: 50,
    right: 50,
  },
  modal: { display: "flex", alignItems: "center", justifyContent: "center" },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    borderRadius: 10,
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function AddEmployeeModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Fab
        className={classes.btn}
        color="primary"
        onClick={handleOpen}
        aria-label="add"
      >
        <AddIcon />
      </Fab>
      <Modal
        open={open}
        className={classes.modal}
        onClose={handleClose}
        aria-labelledby="new-employee-modal"
        aria-describedby="new-employee-form"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <NewEmployeeForm onClose={handleClose} />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

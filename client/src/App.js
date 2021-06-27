import React from "react";
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";
import ResultsTable from "./components/ResultsTable";
import Container from "@material-ui/core/Container";
import AddEmployeeBtn from "./components/AddEmployeeBtn";
import Modal from '@material-ui/core/Modal';
import NewEmployeeForm from "./components/NewEmployeeForm";

function App() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }
  return (
    <div>
      <Navbar />
      <Container>
        <SearchForm />
        <ResultsTable />
      </Container>
      <AddEmployeeBtn onHandleOpen = {handleOpen}/>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="new-employee-modal"
        aria-describedby="new-employee-form"
      >
        <NewEmployeeForm/>
      </Modal>

    </div>
  );
}

export default App;

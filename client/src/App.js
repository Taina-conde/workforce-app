import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";
import ResultsTable from "./components/ResultsTable";
import Container from "@material-ui/core/Container";
import AddEmployeeModal from "./components/AddEmployeeModal";
import { useContext } from "react";
import Context from "./context";
import InitalLogo from "./components/InitalLogo";

function App() {
  const ctx = useContext(Context);
  const { searchStarted } = ctx;

  return (
    <div>
      <Navbar />
      <Container>
        <SearchForm />
        {searchStarted ? <ResultsTable /> : <InitalLogo />}
      </Container>
      <AddEmployeeModal />
    </div>
  );
}

export default App;

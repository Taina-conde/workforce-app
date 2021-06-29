import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";
import ResultsTable from "./components/ResultsTable";
import Container from "@material-ui/core/Container";
import AddEmployeeModal from "./components/AddEmployeeModal";
import { useContext } from "react";
import Context from "./context";
import InitalContent from "./components/InitalContent";

function App() {
  const ctx = useContext(Context);
  const { searchStarted } = ctx;

  return (
    <div>
      <Navbar />
      <Container>
        <SearchForm />
        {searchStarted ? <ResultsTable /> : <InitalContent />}
      </Container>
      <AddEmployeeModal />
    </div>
  );
}

export default App;

import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";
import ResultsTable from "./components/ResultsTable";
import Container from "@material-ui/core/Container";
import AddEmployeeBtn from "./components/AddEmployeeBtn";
import { useContext } from "react";
import Context from "./context";

function App() {
  const ctx = useContext(Context);
  const { searchStarted } = ctx;

  return (
    <div>
      <Navbar />
      <Container>
        <SearchForm />
        {searchStarted && <ResultsTable />}
      </Container>
      <AddEmployeeBtn />
    </div>
  );
}

export default App;

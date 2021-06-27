import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";
import ResultsTable from "./components/ResultsTable";
import Container from "@material-ui/core/Container";
import AddEmployeeBtn from "./components/AddEmployeeBtn";


function App() {

  return (
    <div>
      <Navbar />
      <Container>
        <SearchForm />
        <ResultsTable />
      </Container>
      <AddEmployeeBtn/>
    </div>
  );
}

export default App;

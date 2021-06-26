import Navbar from "./components/Navbar";
import EmployeeForm from "./components/EmployeeForm";
import ResultsTable from "./components/ResultsTable";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <div>
      <Navbar />
      <Container>
        <EmployeeForm />
        <ResultsTable />
      </Container>
    </div>
  );
}

export default App;

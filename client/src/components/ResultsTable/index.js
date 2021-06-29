import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useContext } from "react";
import Context from "../../context";
import ResultRow from "./ResultRow";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function ResultsTable() {
  const classes = useStyles();
  const ctx = useContext(Context);
  const { searchedEmployees } = ctx;

  return (
    <TableContainer component={Paper}>
      
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell align="right"> CPF</TableCell>
            <TableCell align="right">Natural de</TableCell>
            <TableCell align="right">Data do cadastro</TableCell>
            <TableCell align="right">Cargo</TableCell>
            <TableCell align="right">Salário</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {searchedEmployees.map((employee, index) => (
            <ResultRow key = {index} employee = {employee}/>
          ))}
         
        </TableBody>
      </Table>
    </TableContainer>
  );
}

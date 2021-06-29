import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import IconButton from "@material-ui/core/IconButton";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const ResultRow = (props) => {
  const { employee } = props;
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {employee.nome}
      </TableCell>
      <TableCell align="right">{employee.cpf}</TableCell>
      <TableCell align="right">{employee.ufNasc}</TableCell>
      <TableCell align="right">{employee.dataCad}</TableCell>
      <TableCell align="right">{employee.cargo}</TableCell>
      <TableCell align="right">{employee.salario}</TableCell>
      <TableCell align="right">{employee.status}</TableCell>
      <TableCell align="right">
        <IconButton aria-label="delete" color = "secondary">
            <HighlightOffIcon/>
        </IconButton>
      </TableCell>
    </TableRow>
  );
};
export default ResultRow;

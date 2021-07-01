import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import IconButton from "@material-ui/core/IconButton";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import {useContext} from "react";
import Context from "../../context";

const ResultRow = (props) => {
  const {employee } = props;
  const ctx = useContext(Context);
  const { onDeleteEmployee } = ctx;

  const clickDeleteHandler = () => {
      onDeleteEmployee(employee.cpf);
  }
  
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
        <IconButton aria-label="delete" color = "secondary" onClick = {clickDeleteHandler}>
            <HighlightOffIcon/>
        </IconButton>
      </TableCell>
    </TableRow>
  );
};
export default ResultRow;

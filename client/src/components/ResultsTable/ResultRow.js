import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
const ResultRow = (props) => {
    const {employee} = props;
    return <TableRow>
        <TableCell component = "th" scope = "row">
            {employee.nome}
        </TableCell>
        <TableCell align = "right">{employee.cpf}</TableCell>
        <TableCell align = "right">{employee.ufNasc}</TableCell>
        <TableCell align = "right">{employee.dataCad}</TableCell>
        <TableCell align = "right">{employee.cargo}</TableCell>
        <TableCell align = "right">{employee.salario}</TableCell>
        <TableCell align = "right">{employee.status}</TableCell>
        <TableCell align = "right">DELETE BTN</TableCell>

    </TableRow>
}
export default ResultRow;
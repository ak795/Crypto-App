import React from 'react';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


interface TableProps {
    header: Array<string>,
    rows: Array<any>,
}

const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
    }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
    createStyles({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }),
)(TableRow);

function createData(data: Array<any>) {
    
}

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function CustomTable(props: TableProps) {
    const classes = useStyles();
    
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        { 
                            props.header.map((h, i) =>(
                                <StyledTableCell>{ h }</StyledTableCell>
                            ))
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props && props.rows && props.rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.symbol}</StyledTableCell>
                            <StyledTableCell align="right">{row.quote['USD'].price}</StyledTableCell>
                            <StyledTableCell align="right">{row.quote['USD'].volume_24h}</StyledTableCell>
                            <StyledTableCell align="right">{row.quote['USD'].percent_change_24h}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}


// (props.header.map((h, i) => {
//     (i === 0 ? <StyledTableCell>{ h }</StyledTableCell>
//             : <StyledTableCell align="right">{ h }</StyledTableCell>
//     )
// }
// ))
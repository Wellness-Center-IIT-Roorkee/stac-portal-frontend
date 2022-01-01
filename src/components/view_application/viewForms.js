import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AppModal from './approveModal';
function createData(name, enr_no, email, application, stats) {
  return { name, enr_no, email, application, stats };
}



const ViewForm=()=> {

    const rows = [
        createData('Adarsh Priyadarshi', 20411002, 'adarsh_p@ce.iitr.ac.in', '','Pending'),
        createData('Adarsh Priyadarshi', 20411002, 'adarsh_p@ce.iitr.ac.in', '','Pending'),
        createData('Adarsh Priyadarshi', 20411002, 'adarsh_p@ce.iitr.ac.in', '','Pending'),
        createData('Adarsh Priyadarshi', 20411002, 'adarsh_p@ce.iitr.ac.in', '','Pending'),
        createData('Adarsh Priyadarshi', 20411002, 'adarsh_p@ce.iitr.ac.in', '','Pending'),
        createData('Adarsh Priyadarshi', 20411002, 'adarsh_p@ce.iitr.ac.in', '','Pending'),
        createData('Adarsh Priyadarshi', 20411002, 'adarsh_p@ce.iitr.ac.in', '','Pending'),
        createData('Adarsh Priyadarshi', 20411002, 'adarsh_p@ce.iitr.ac.in', '','Pending'),
        createData('Adarsh Priyadarshi', 20411002, 'adarsh_p@ce.iitr.ac.in', '','Pending'),
        createData('Adarsh Priyadarshi', 20411002, 'adarsh_p@ce.iitr.ac.in', '','Pending'),
        createData('Adarsh Priyadarshi', 20411002, 'adarsh_p@ce.iitr.ac.in', '','Pending'),
        createData('Adarsh Priyadarshi', 20411002, 'adarsh_p@ce.iitr.ac.in', '','Pending'),
        createData('Adarsh Priyadarshi', 20411002, 'adarsh_p@ce.iitr.ac.in', '','Pending'),
        createData('Adarsh Priyadarshi', 20411002, 'adarsh_p@ce.iitr.ac.in', '','Pending'),
        createData('Adarsh Priyadarshi', 20411002, 'adarsh_p@ce.iitr.ac.in', '','Pending'),
        createData('Adarsh Priyadarshi', 20411002, 'adarsh_p@ce.iitr.ac.in', '','Pending'),
      ];
  return (
    <TableContainer component={Paper} sx={{align:'center'}}>
      <Table sx={{ minWidth: 600 }} aria-label="simple table">
        <TableHead sx={{background: '#F1F1F1', borderRadius:8 }}>
          <TableRow>
            <TableCell align='left'>Name</TableCell>
            <TableCell align='left'>Enrollment Number</TableCell>
            <TableCell align='left'>Email Id</TableCell>
            <TableCell align='left'>Application</TableCell>
            <TableCell align='left'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.enr_no}
            >
              <TableCell align='left' scope="row">
                {row.name}
              </TableCell>
              <TableCell align='left'>{row.enr_no}</TableCell>
              <TableCell align='left'>{row.email}</TableCell>
              <TableCell align='left'>{<AppModal/>}</TableCell>
              <TableCell align='left'>{row.stats}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default ViewForm
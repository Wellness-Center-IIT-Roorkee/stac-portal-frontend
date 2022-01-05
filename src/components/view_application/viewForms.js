import React from 'react'
import { useSelector } from 'react-redux'
import { DataGrid } from '@mui/x-data-grid'
import { Button } from '@mui/material'
import { FACULTY } from '../../constants/roles'

const commonColumns = [
  {
    field: 'student.name',
    headerName: 'Name',
    valueGetter: params => params.row.student.name,
    minWidth: 200,
    flex: 1
  },
  {
    field: 'student.enrollment_number',
    headerName: 'Enrollment Number',
    valueGetter: params => params.row.student.enrollment_number,
    minWidth: 200,
    flex: 1
  },
  {
    field: 'student.email',
    headerName: 'Email',
    valueGetter: params => params.row.student.email,
    minWidth: 200,
    flex: 1
  },
  {
    field: 'action',
    headerName: 'Application',
    renderCell: params => (
      <Button style={{ textTransform: 'none' }}>View Application</Button>
    ),
    minWidth: 100,
    flex: 1
  }
]

const facultyColumns = [
  ...commonColumns,
  {
    field: 'status',
    headerName: 'Status',
    minWidth: 100,
    flex: 0.5
  }
]

const adminColumns = [
  ...commonColumns,
  {
    field: 'supervisor_approval_status',
    headerName: "Professor's Status",
    minWidth: 100,
    flex: 0.5
  },
  {
    field: 'hod_approval_status',
    headerName: "HOD's Status",
    minWidth: 100,
    flex: 0.5
  },
  {
    field: 'admin_approval_status',
    headerName: 'Status',
    minWidth: 100,
    flex: 0.5
  }
]

const ViewForm = ({ data }) => {
  const role = useSelector(state => state.user.userData?.role)

  return (
    <>
      <DataGrid
        style={{ height: '70vh' }}
        disableSelectionOnClick
        rows={data}
        columns={role === FACULTY ? facultyColumns : adminColumns}
        sx={{
          '& .MuiDataGrid-row:hover': {
            backgroundColor: 'transparent'
          },
          '& .MuiDataGrid-columnSeparator': {
            display: 'none'
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: '#f1f1f1'
          }
        }}
      />
    </>
  )
}
export default ViewForm

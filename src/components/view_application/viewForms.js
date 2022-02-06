import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { DataGrid } from '@mui/x-data-grid'
import AppModal from './approveModal'
import { FACULTY } from '../../constants/roles'
import { STATUS_CHOICES } from '../../constants/application'
import { isInclude } from '../../helpers/helperFunctions'

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
    renderCell: params => <AppModal applicationID={params.row.id} />,
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
    flex: 0.5,
    valueGetter: params =>
      STATUS_CHOICES.find(choice => choice.value === params.value)?.displayName
  }
]

const adminColumns = [
  ...commonColumns,
  {
    field: 'supervisor_approval_status',
    headerName: "Professor's Status",
    minWidth: 100,
    flex: 0.5,
    valueGetter: params =>
      STATUS_CHOICES.find(choice => choice.value === params.value)?.displayName
  },
  {
    field: 'hod_approval_status',
    headerName: "HOD's Status",
    minWidth: 100,
    flex: 0.5,
    valueGetter: params =>
      STATUS_CHOICES.find(choice => choice.value === params.value)?.displayName
  },
  {
    field: 'admin_approval_status',
    headerName: 'Status',
    minWidth: 100,
    flex: 0.5,
    valueGetter: params =>
      STATUS_CHOICES.find(choice => choice.value === params.value)?.displayName
  }
]

const ViewForm = ({ data, filterDegree, setData, search ,filterData, setFilterData }) => {
  const role = useSelector(state => state.user.userData?.role)

  React.useEffect(() => {
    const tempData=data.filter((x)=>{
      const isPhD = isInclude(x?.student.branch,'phd');
      if(filterDegree==='PhD'&&isPhD){
        return x;
      }
      else if(filterDegree==='UG_PG'&&!isPhD){
        return x;
      }
    })
    setFilterData(tempData);
  }, [filterDegree,search]);
  
  return (
    <>
      <DataGrid
        style={{ height: '70vh' }}
        disableSelectionOnClick
        rows={filterDegree==='All'?data:filterData}
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

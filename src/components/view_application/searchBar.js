import React, { useState } from 'react'
import { Button, Stack, Input } from '@mui/material'
import '../../assets/css/forms/form.css'

const SearchBar = ({ applicationData, setData }) => {
  const [search, setSearch] = useState('')

  const filterData = () => {
    setData(
      applicationData.filter(rowData => {
        const student = rowData.student
        return (
          student.name.toLowerCase().includes(search.toLowerCase()) ||
          student.email.toLowerCase().includes(search.toLowerCase()) ||
          student.enrollment_number.includes(search)
        )
      })
    )
  }

  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      spacing={{ xs: 1, sm: 5, md: 5 }}
      sx={{ margin: '2rem' }}
    >
      <Input
        sx={{ width: 420 }}
        placeholder='Search name, enrollment number, email id'
        variant='outlined'
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <Button
        sx={{ bgcolor: 'black' }}
        variant='contained'
        onClick={() => filterData()}
      >
        Search
      </Button>
    </Stack>
  )
}
export default SearchBar

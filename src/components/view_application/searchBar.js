import React, { useState } from 'react'
import { Button, Stack, Input } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import '../../assets/css/forms/form.css'

const SearchBar = ({ applicationData, setData, setFilterDegree, filterDegree }) => {
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
      <FormControl
        style={{width:"10rem"}}
      >
        <InputLabel id="demo-simple-select-label">Filter</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filterDegree}
          label="Filter"
          onChange={(e)=>{setFilterDegree(e.target.value)}}
        >
          <MenuItem value={'All'} >All</MenuItem>
          <MenuItem value={'UG_PG'} >UG and PG</MenuItem>
          <MenuItem value={'PhD'} >PhD</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  )
}
export default SearchBar

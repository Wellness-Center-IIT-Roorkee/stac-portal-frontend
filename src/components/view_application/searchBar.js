import React,{useState} from 'react';
import { Button,Stack,Input, Select, MenuItem,InputLabel,FormControl } from '@mui/material';
import { makeStyles } from '@mui/styles';
import '../../layouts/forms/form.css'
import { useDispatch, useSelector } from 'react-redux';

const SearchBar = ()=>{
    const [sort, setSort] = useState('');

    const handleChange = (event) => {
      setSort(event.target.value);
    };
    return(
        <Stack direction={{ xs: 'column', sm: 'row' }}
                        spacing={{ xs: 1, sm: 5, md: 5}}
                    sx={{margin:'2rem'}}
            >
            <Input sx={{ width: 420 }} placeholder="Search name, enrollment number, email id" variant="outlined" />
            <Button sx={{ bgcolor: 'black' }} variant="contained" >Search</Button>
            <FormControl variant="standard" >
                <InputLabel id="demo-simple-select-standard-label">Sort By</InputLabel>
                    <Select 
                            value={sort}
                            onChange={handleChange}
                            sx={{ width: 100, height:40 }}
                            >
                            <MenuItem value='Date'>Date</MenuItem>
                            <MenuItem value="Name">Name</MenuItem>
                    </Select>
            </FormControl>
        </Stack>  
    )
}
export default SearchBar



import React,{ useState } from 'react';
import { NavLink } from "react-router-dom";
import FormBtn from '../../components/forms/formBtn';
import {FormBox, FormDisabled} from '../../components/forms/formComponent';
import './form.css'
import { Stack,Select, MenuItem} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

const ApplicationForm = () => {
    const userData = useSelector(state => state.users.userData);
    const [inputs, setInputs] = useState({
        number: userData?.phone_number,
        supervisorEmail:"",
        hodEmail:"",
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }

    
    return (
            <div>
            <form className='wl-st-form'>
                <div>
                    <FormDisabled title='Name' value={userData?.name} ph='Enter your name' />
                    <FormDisabled title='Enrollment Number' value={userData?.student.enrollment_number} ph='Enter your enrollment number' />
                    <FormDisabled title='Email Id' value={userData?.email} ph='Enter your email' />
                    <FormDisabled title='Department/Centre' value={userData?.student.department} ph='Enter your department or centre' />
                    <FormDisabled title='Branch' value={userData?.student.branch} ph='Enter your branch' />
                    <div className='wl-st-form-box'>
                        <label className='info-name'>Semester applying for </label><br></br>
                        <br></br>
                        <Select className='info-val' >
                            <MenuItem value='Autumn'>Autumn</MenuItem>
                            <MenuItem value='Spring'>Spring</MenuItem>
                        </Select>
                    </div>
                    <FormBox value={inputs?.number} title='Mobile Number' type='number' ph='Enter your number' name='number'/>
                    <FormBox title="Supervisor's Email Id" type='email' ph='Enter email' name='supervisorEmail' value={inputs.supervisorEmail || ""} onChange={handleChange}/>
                    <FormBox title='Head of Dept. Email Id' type='email' ph='Enter email' name='hodEmail' value={inputs.hodEmail || ""} onChange={handleChange}/>

                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={{ xs: 1, sm: 70, md: 120 }}
                    >
                        <FormBtn name='Save Changes' type='outlined' onClick={handleSubmit}/>
                        <FormBtn name='Next' type='contained' />
                    </Stack>
                   
                </div>
            </form>
                
            </div>
    )
}

export default ApplicationForm

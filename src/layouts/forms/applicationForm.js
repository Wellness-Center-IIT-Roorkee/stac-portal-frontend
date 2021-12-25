import React from 'react';
import { NavLink } from "react-router-dom";
import FormBtn from '../../components/forms/formBtn';
import FormBox from '../../components/forms/formComponent';
import './form.css'
import { Stack } from '@mui/material';

const ApplicationForm = () => {
    const isAuth = true;
    return (
            <div>
            <form className='wl-st-form'>
                <div>
                    <FormBox name='Name' type='text' ph='Enter your name' />
                    <FormBox name='Enrollment Number' type='number' ph='Enter your enrollment number' />
                    <FormBox name='Email Id' type='email' ph='Enter your email' />
                    <FormBox name='Mobile Number' type='number' ph='Enter your number' />
                    <FormBox name='Department/Centre' type='text' ph='Enter your department or centre' />
                    <FormBox name='Branch' type='text' ph='Enter your branch' />
                    <FormBox name='Semester applied for' type='text' ph='Enter your semester' />
                    <FormBox name="Supervisor's Email Id" type='email' ph='Enter email' />
                    <FormBox name='Head of Dept. Email Id' type='email' ph='Enter email' />
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={{ xs: 1, sm: 70, md: 120 }}
                    >
                        <FormBtn name='Save Changes' type='outlined' />
                        <FormBtn name='Next' type='contained' />
                    </Stack>
                   
                </div>
            </form>
                
            </div>
    )
}

export default ApplicationForm

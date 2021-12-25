import React from 'react';
import { NavLink } from "react-router-dom";
import './form.css'
import FormBox from '../../components/forms/formComponent';
import FormBtn from '../../components/forms/formBtn';
import { Stack } from '@mui/material';

const DocUpload = () => {
    const isAuth = true;
    return (
            <div>
            <form className='wl-st-form'>
                <div>
                    <FormBox name='Application Form' type='file' />
                    <FormBox name='Extension Letter' type='file' />
                    <FormBox name='Academic Summary' type='file' />
                </div>
                <div>
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

export default DocUpload

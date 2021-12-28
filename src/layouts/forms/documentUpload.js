import React from 'react';
import { NavLink } from "react-router-dom";
import './form.css'
import {FormBox} from '../../components/forms/formComponent';
import FormBtn from '../../components/forms/formBtn';
import { Stack } from '@mui/material';

const DocUpload = () => {
    return (
            <div>
            <form className='wl-st-form'>
                <div>
                    <FormBox title='Application Form' type='file' />
                    <FormBox title='Extension Letter' type='file' />
                    <FormBox title='Academic Summary' type='file' />
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

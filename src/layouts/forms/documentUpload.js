import React from 'react';
import { NavLink } from "react-router-dom";
import './form.css'
import FormBox from '../../components/forms/formComponent';
import FormBtn from '../../components/forms/formBtn';

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
                    <FormBtn nameLft='Save Changes' nameRgt='Next' />
                </div>
            </form>
                
            </div>
    )
}

export default DocUpload

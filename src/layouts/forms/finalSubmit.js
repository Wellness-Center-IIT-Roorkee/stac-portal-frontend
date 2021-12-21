import React from 'react';
import { NavLink } from "react-router-dom";
import './form.css'
import FormBtn from '../../components/forms/formBtn';

const FinalSubmit = () => {
    const isAuth = true;
    return (
            <div>
            <form className='wl-st-form'>
                <div>
                    <div className='wl-st-form-box'>
                        <h1 className='head'>Submit</h1><br></br>
                        <p className='wl-st-desc'>Your details are completed.<br></br>
                Return to home page for further information and other updates about your application</p><br></br>
                    </div>
                </div>
                <div>
                    <FormBtn nameLft='Save Changes' nameRgt='Next' />
                </div>
            </form>
                
            </div>
    )
}

export default FinalSubmit

import React from 'react';
import { NavLink } from "react-router-dom";
import FormBtn from '../../components/forms/formBtn';
import FormBox from '../../components/forms/formComponent';
import './form.css'

const ApplicationForm = () => {
    const isAuth = true;
    return (
            <div>
            <form className='wl-st-form'>
                <div>
                    <h1 className='wl-st-form-head'>Personal Information</h1>
                    <FormBox name='Name' type='text' ph='Enter your name' />
                    <FormBox name='Enrollment Number' type='number' ph='Enter your enrollment number' />
                    <FormBox name='Email Id' type='email' ph='Enter your email' />
                    <FormBox name='Mobile Number' type='number' ph='Enter your number' />
                    <div className='wl-st-form-box'>
                        <label className='info-name'>Select your course</label><br></br>
                        <br></br>
                        <label className='container'>UG
                        <input type="radio" value="UG"></input>
                        <span className='check'></span>
                        </label><br></br>
                        <label className='container'>PG
                        <input type="radio" value="PG"></input>
                        <span className='check'></span>
                        </label><br></br>
                        <label className='container'>PhD
                        <input type="radio" value="PhD"></input>
                        <span className='check'></span>
                        </label><br></br>
                    </div>
                    <FormBox name='Department/Centre' type='text' ph='Enter your department or centre' />
                    <FormBox name='Branch' type='text' ph='Enter your branch' />
                    <FormBox name='Semester applied for' type='text' ph='Enter your semester' />
                </div>
                <div>
                    <h1 className='wl-st-form-head'>Supervisor Information</h1>
                    <FormBox name='Name' type='text' ph='Enter name' />
                    <FormBox name='Email Id' type='email' ph='Enter email' />
                    <FormBox name='Mobile Number' type='number' ph='Enter number' />
                </div>
                <div>
                    <h1 className='wl-st-form-head'>Head of Department (HOD) Information</h1>
                    <FormBox name='Name' type='text' ph='Enter name' />
                    <FormBox name='Email Id' type='email' ph='Enter email' />
                    <FormBox name='Mobile Number' type='number' ph='Enter number' />
                </div>
                <div>
                    <FormBtn nameLft='Save Changes' nameRgt='Next' />
                </div>
            </form>
                
            </div>
    )
}

export default ApplicationForm

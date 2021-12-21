import React from 'react';
import { NavLink } from "react-router-dom";
import './form.css'

const ApplicationForm = () => {
    const isAuth = true;
    return (
            <div>
            <form className='wl-st-form'>
                <div>
                    <h1 className='wl-st-form-head'>Personal Information</h1>
                    <div className='wl-st-form-box'>
                        <label className='info-name'>Name</label><br></br>
                        <input type="text" value="Enter your name" className='info-val'></input><br></br>
                    </div>
                    <div className='wl-st-form-box'>
                        <label className='info-name'>Enrollment Number</label><br></br>
                        <input type="number" value="Enter your enrollment name" className='info-val'></input><br></br>
                    </div>
                    <div className='wl-st-form-box'>
                        <label className='info-name'>Email</label><br></br>
                        <input type="email" value="Enter your email" className='info-val'></input><br></br>
                    </div>
                    <div className='wl-st-form-box'>
                        <label className='info-name'>Mobile Number</label><br></br>
                        <input type="number" value="Enter your number" className='info-val'></input><br></br>
                    </div>
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
                        <div className='wl-st-form-box'>
                        <label className='info-name'>Department/Centre</label><br></br>
                    <input type="text" value="Enter your department or centre" className='info-val'></input><br></br>
                    </div>
                        <div className='wl-st-form-box'>
                        <label className='info-name'>Branch</label><br></br>
                    <input type="text" value="Enter your branch" className='info-val'></input><br></br>
                    </div>
                    <div className='wl-st-form-box'>
                        <label className='info-name'>Semester applied for</label><br></br>
                        <input type="text" value="Enter your semester" className='info-val'></input><br></br>
                    </div>
                </div>
                <div>
                    <h1 className='wl-st-form-head'>Supervisor Information</h1>
                    <div className='wl-st-form-box'>
                        <label className='info-name'>Name</label><br></br>
                        <input type="text" value="Enter name" className='info-val'></input><br></br>
                    </div>
                    <div className='wl-st-form-box'>
                        <label className='info-name'>Mobile Number</label><br></br>
                        <input type="number" value="Enter number" className='info-val'></input><br></br>
                    </div>
                    <div className='wl-st-form-box'>
                        <label className='info-name'>Email Id</label><br></br>
                        <input type="email" value="Enter email" className='info-val'></input><br></br>  
                    </div>
                </div>
                <div>
                    <h1 className='wl-st-form-head'>Head of Department (HOD) Information</h1>
                    <div className='wl-st-form-box'>
                        <label className='info-name'>Name</label><br></br>
                        <input type="text" value="Enter name" className='info-val'></input><br></br>
                    </div>
                    <div className='wl-st-form-box'>
                        <label className='info-name'>Mobile Number</label><br></br>
                        <input type="number" value="Enter number" className='info-val'></input><br></br> 
                    </div>
                    <div className='wl-st-form-box'>
                        <label className='info-name'>Email Id</label><br></br>
                        <input type="email" value="Enter email" className='info-val'></input><br></br>
                    </div>
                </div>
                <div>
                    <button className='btn-save'>Save Changes</button>
                    <button className='btn-next'>Next</button>
                </div>
            </form>
                
            </div>
    )
}

export default ApplicationForm

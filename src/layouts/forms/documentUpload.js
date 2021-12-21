import React from 'react';
import { NavLink } from "react-router-dom";
import './form.css'

const DocUpload = () => {
    const isAuth = true;
    return (
            <div>
            <form className='wl-st-form'>
                <div>
                    <div className='wl-st-form-box'>
                        <label className='info-name'>Application Form</label><br></br>
                        <input type="file" className='info-val'></input><br></br>
                    </div>
                    <div className='wl-st-form-box'>
                        <label className='info-name'>Extension Letter</label><br></br>
                        <input type="file" className='info-val'></input><br></br>
                    </div>
                    <div className='wl-st-form-box'>
                        <label className='info-name'>Academic Summary</label><br></br>
                        <input type="file" className='info-val'></input><br></br>
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

export default DocUpload

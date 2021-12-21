import React from 'react';
import { NavLink } from "react-router-dom";
import './form.css'

const FinalSubmit = () => {
    const isAuth = true;
    return (
            <div>
            <form>
                <div>
                    <div className='box'>
                        <h1 className='head'>Submit</h1><br></br>
                        <p>Your details are completed.<br></br>
                Return to home page for further information and other updates about your application</p><br></br>
                    </div>
                </div>
                <div>
                    <button className='btn-save'>Go Back</button>
                    <button className='btn-next'>Submit</button>
                </div>
            </form>
                
            </div>
    )
}

export default FinalSubmit

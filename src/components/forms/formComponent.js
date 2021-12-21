import React from 'react';
import '../../layouts/forms/form.css'
const FormBox = (props)=>{
    return(
        <div className='wl-st-form-box'>
            <label className='info-name'>{props.name}</label><br></br>
            <input type={props.type} placeholder={props.ph} className='info-val'></input><br></br>
        </div>
    );
}
export default FormBox
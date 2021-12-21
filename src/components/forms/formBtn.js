import React from 'react';
import '../../layouts/forms/form.css'
const FormBtn = (props)=>{
    return(
        <div>
            <button className='btn-save'>{props.nameLft}</button>
            <button className='btn-next'>{props.nameRgt}</button>
        </div>
    );
}
export default FormBtn
import React from 'react';
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import '../../layouts/forms/form.css'

const FormBtn = (props)=>{
    return(
            <Button color='primary' variant={props.variant} type={props.type} onClick={props.func}>{props.name}</Button>
    );
}
export default FormBtn

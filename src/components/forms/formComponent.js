import React from 'react'
import '../../assets/css/forms/form.css'
import { Input } from '@mui/material'
const FormDisabled = props => {
  return (
    <div style={props.style} className='wl-st-form-box'>
      <label className='info-name'>{props.title}</label>
      <br />
      <br />
      <Input
        value={props.value}
        disabled
        className='info-val'
        placeholder={props.ph}
      />
    </div>
  )
}
const FormBox = props => {
  return (
    <div style={props.style} className='wl-st-form-box'>
      <label className='info-name'>{props.title}</label>
      <br />
      <br />
      <Input
        onChange={props.onChange}
        defaultValue={props.value}
        name={props.name}
        type={props.type}
        inputProps={{accept:"application/pdf, image/*"}}
        className='info-val'
        placeholder={props.ph}
      />
      {props.helperElement ? props.helperElement : ''}
    </div>
  )
}
export { FormDisabled, FormBox }

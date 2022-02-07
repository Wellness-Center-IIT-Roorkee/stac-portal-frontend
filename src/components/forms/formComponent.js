import React from 'react'
import '../../assets/css/forms/form.css'
import { Input, Link, } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
const FormDisabled = props => {
  return (
    <div style={props.style} className='wl-st-form-box'>
      <label className='info-name'>{props.title} <span style={{color:'gray'}}>*</span></label>
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
      <label title={props.required?'Mandatory Field':""} className='info-name'>{props.title} <span>{props.required?'*':""}</span></label>
      <br />
      <br />
      <Input
        onChange={props.onChange}
        defaultValue={props.value}
        name={props.name}
        type={props.type}
        inputProps={{accept:"application/pdf, image/*"}}
        className='info-val'
        multiple
        placeholder={props.ph}
      />
      {props.helperElement ? props.helperElement : ''}
    </div>
  )
}
const MultipleFileUpload = props => {
  const [openMultiple, setOpenMultiple] = React.useState(false);
  return (
    <div style={props.style} className='wl-st-form-box'>
      <label title={props.required?'Mandatory Field':""} className='info-name'>{props.title} <span>{props.required?'*':""}</span></label>
      <br />
      <br />
      <input
        onChange={props.onChange}
        name={props.name}
        type={props.type}
        accept={"application/pdf, image/*"}
        className='info-val-mul'
        multiple='multiple'
        placeholder={props.ph}
      />
      {
      <Link style={{cursor:'pointer'}} onClick={()=>setOpenMultiple(!openMultiple)}>
      View Other Documents
      {
        openMultiple &&
        <div className='multipleModal'>
          <div className='multipleModalChild'>
            <CloseIcon onClick={()=>setOpenMultiple(false)} className='multipleModalClose' />
            {
              props?.helperElement ?
              props?.helperElement?.map((item,i)=>{
                return(
                  <Link className='multipleModalLink' href={item} target='_blank' rel='noreferer'>
                    View document {i+1}
                  </Link>
                )
              }):<div>No Relevent Document</div>
            }
          </div>
        </div>
      }
    </Link> }
    </div>
  )
}
export { FormDisabled, FormBox,MultipleFileUpload }

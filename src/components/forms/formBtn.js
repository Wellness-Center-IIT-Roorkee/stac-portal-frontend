import React from 'react'
import { Button } from '@mui/material'
import '../../assets/css/forms/form.css'

const FormBtn = props => {
  return (
    <Button
      color='primary'
      variant={props.variant}
      type={props.type}
      onClick={props.func}
    >
      {props.name}
    </Button>
  )
}
export default FormBtn

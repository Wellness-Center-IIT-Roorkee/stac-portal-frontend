import React from 'react'
import { Button } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import '../../assets/css/forms/form.css'


const FormBtn = props => {
  return (
    <Button
      color='primary'
      variant={props.variant}
      type={props.type}
      onClick={props.func}
      endIcon={<CheckCircleIcon/>}
    >
      {props.name}
    </Button>
  )
}
const BackBtn = props => {
  return (
    <Button
      color='primary'
      variant={props.variant}
      type={props.type}
      onClick={props.func}
      startIcon={<ArrowBackIosNewIcon />}
    >
      {props.name}
    </Button>
  )
}
const NextBtn = props => {
  return (
    <Button
      color='primary'
      variant={props.variant}
      type={props.type}
      onClick={props.func}
      endIcon={<ArrowForwardIosIcon />}
    >
      {props.name}
    </Button>
  )
}
export  {FormBtn,BackBtn,NextBtn}

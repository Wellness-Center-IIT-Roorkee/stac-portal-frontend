import React from 'react'
import '../../assets/css/forms/form.css'
import {FormBtn,BackBtn} from '../../components/forms/formBtn'
import { Stack } from '@mui/material'
import { createApplication } from '../../actions/applicationActions'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const FinalSubmit = ({ setTab, inputs }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSubmit = e => {
    const formData = new FormData()
    e.preventDefault()
    Object.keys(inputs).forEach(input => formData.append(input, inputs[input]))
    const call =()=>{
      navigate('/')
    }
    dispatch(createApplication(formData, call))
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className='wl-st-form'>
        <div>
          <Stack
              direction={{ xs: 'column', sm: 'row' }}
            >
              <BackBtn name='Go Back' variant='contained' func={() => setTab(1)} />
          </Stack>
          <div className='wl-st-form-box'>
            <h1 className='wl-st-form-head'>Summary</h1>
            <p className='wl-st-desc'>
              Your details are completed.<br></br>
              Return to home page for further information and other updates
              about your application
            </p>
            <br></br>
          </div>
        </div>
        <Stack
              direction={{ xs: 'column', sm: 'row-reverse' }}
            >
              <FormBtn name='Submit' type='submit' variant='contained' />
          </Stack>
      </form>
    </div>
  )
}

export default FinalSubmit

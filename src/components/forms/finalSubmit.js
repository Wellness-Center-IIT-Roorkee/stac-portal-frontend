import React from 'react'
import '../../assets/css/forms/form.css'
import FormBtn from '../../components/forms/formBtn'
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
    <div className='wl-st-form-parent'>
      <form onSubmit={handleSubmit} className='wl-st-form wl-st-form-max-width-fix'>
        <div>
          <div className='wl-st-form-box'>
            <h1 className='wl-st-form-head'>Submit</h1>
            <br></br>
            <p className='wl-st-desc'>
              Your details are completed.<br></br>
              Return to home page for further information and other updates
              about your application
            </p>
            <br></br>
          </div>
        </div>
        <div>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 70, md: 120 }}
            justifyContent='center'
          >
            <FormBtn name='Go Back' variant='outlined' func={() => setTab(1)} />
            <FormBtn name='Submit' type='submit' variant='contained' />
          </Stack>
        </div>
      </form>
    </div>
  )
}

export default FinalSubmit

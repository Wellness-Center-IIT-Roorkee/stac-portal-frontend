import React from 'react'
import '../../assets/css/forms/form.css'
import {FormBtn,BackBtn} from '../../components/forms/formBtn'
import { Stack, CircularProgress } from '@mui/material'
import { createApplication } from '../../actions/applicationActions'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const FinalSubmit = ({ setTab, inputs }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const createApplicationPending = useSelector(state => state?.application?.createApplicationPending)
  const handleSubmit = e => {
    const formData = new FormData()
    e.preventDefault()
    const {miscellaneous_documents,...inputsWithOutMisc}=inputs
    Object.keys(inputsWithOutMisc).forEach(input => formData.append(input, inputs[input]?inputs[input]:''))
    miscellaneous_documents?.forEach(file => formData.append('miscellaneous_documents', file))
    const call =()=>{
      navigate('/')
    }
    dispatch(createApplication(formData, call))
  }
  return (
    <div className='wl-st-form-parent'>
      <form onSubmit={handleSubmit} className='wl-st-form wl-st-form-max-width-fix'>
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
              {
                createApplicationPending ?
                <div style={{
                  backgroundColor: "#1976d2",
                  boxShadow: "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
                  color:"#fff",
                  padding:"0 2rem",
                  height:"33px",
                  display:"flex",
                  alignItems:"center",
                  justifyContent:"center",
                }}>
                  <CircularProgress className="btnLoader" style={{color:"#fff"}} />
                </div>:(
                  <FormBtn name='Submit' type='submit' variant='contained' />
                )
              }
          </Stack>
      </form>
    </div>
  )
}

export default FinalSubmit

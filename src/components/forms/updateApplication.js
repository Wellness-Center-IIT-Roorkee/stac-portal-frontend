import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FormBox, FormDisabled } from './formComponent'
import '../../assets/css/forms/form.css'
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Link,
  Button,
  Stack
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { updateApplication } from '../../actions/applicationActions'

const UpdateApplication = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const navigate = useNavigate()
  const applicationData = useSelector(
    state => state.application.applicationDetail
  )
  const [data, setData] = useState({
    applied_semester: applicationData?.applied_semester,
    phone_number: applicationData?.phone_number,
    supervisor_email: applicationData?.supervisor_email,
    hod_email: applicationData?.hod_email,
    application_form: null,
    extension_letter: null,
    academic_summary: null
  })
  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }
  const handleFileChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.files[0]
    })
  }
  const sendUpdateRequest = () => {
    const formData = new FormData()
    Object.keys(data).forEach(dataItem => {
      if (data[dataItem]) {
        formData.append(dataItem, data[dataItem])
      }
    })
    const call =()=>{
      navigate('/')
    }
    dispatch(updateApplication({ id, formData, call }))
  }

  return (
    <div className='wl-st-form-parent'>
      <form className='wl-st-form wl-st-form-max-width-fix'>
        <div>
          <FormDisabled
            title='Name'
            value={applicationData?.student?.name}
            ph='Enter your name'
          />
          <FormDisabled
            title='Enrollment Number'
            value={applicationData?.student?.enrollment_number}
            ph='Enter your enrollment number'
          />
          <FormDisabled
            title='Email Id'
            value={applicationData?.student?.email}
            ph='Enter your email'
          />
          <FormDisabled
            title='Department/Centre'
            value={applicationData?.student?.department}
            ph='Enter your department or centre'
          />
          <FormDisabled
            title='Branch'
            value={applicationData?.student?.branch}
            ph='Enter your branch'
          />
          <div className='wl-st-form-box'>
            <FormControl variant='standard'>
              <InputLabel
                id='demo-simple-select-standard-label'
                className='info-name'
              >
                Semester applying for
              </InputLabel>
              <Select
                name='applied_semester'
                value={data.applied_semester}
                onChange={handleChange}
                sx={{ width: 200, height: 40 }}
              >
                <MenuItem value='aut'>Autumn</MenuItem>
                <MenuItem value='spr'>Spring</MenuItem>
              </Select>
            </FormControl>
          </div>
          <FormBox
            value={data.phone_number}
            onChange={handleChange}
            title='Mobile Number'
            type='number'
            ph='Enter your number'
            name='phone_number'
          />
          <FormBox
            title="Supervisor's Email Id"
            type='email'
            ph='Enter email'
            name='supervisor_email'
            value={data.supervisor_email}
            onChange={handleChange}
          />
          <FormBox
            title='Head of Dept. Email Id'
            type='email'
            ph='Enter email'
            name='hod_email'
            value={data.hod_email}
            onChange={handleChange}
          />
          <FormBox
            title='Application Form'
            name='application_form'
            type='file'
            onChange={handleFileChange}
            helperElement={
              <Link
                href={applicationData?.application_form}
                target='_blank'
                rel='noreferer'
              >
                View Current File
              </Link>
            }
          />
          <FormBox
            title='Extension Letter'
            name='extension_letter'
            type='file'
            onChange={handleFileChange}
            helperElement={
              <Link
                href={applicationData?.extension_letter}
                target='_blank'
                rel='noreferer'
              >
                View Current File
              </Link>
            }
          />
          <FormBox
            title='Academic Summary'
            name='academic_summary'
            type='file'
            onChange={handleFileChange}
            helperElement={
              <Link
                href={applicationData?.academic_summary}
                target='_blank'
                rel='noreferer'
              >
                View Current File
              </Link>
            }
          />
          <Stack direction='row-reverse'>
            <Button variant='contained' onClick={sendUpdateRequest}>
              Update
            </Button>
          </Stack>
        </div>
      </form>
    </div>
  )
}

export default UpdateApplication

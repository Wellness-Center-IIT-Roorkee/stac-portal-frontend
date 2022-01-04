import React from 'react'
import { useNavigate } from 'react-router-dom'
import FormBtn from './formBtn'
import { FormBox, FormDisabled } from './formComponent'
import '../../assets/css/forms/form.css'
import { Stack, Select, MenuItem, InputLabel, FormControl } from '@mui/material'
import { useSelector } from 'react-redux'

const ApplicationForm = ({ setTab, inputs, setInputs }) => {
  const userData = useSelector(state => state.users.userData)
  const navigate = useNavigate()
  const handleChange = e => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <form className='wl-st-form'>
        <div>
          <FormDisabled
            title='Name'
            value={userData?.name}
            ph='Enter your name'
          />
          <FormDisabled
            title='Enrollment Number'
            value={userData?.student.enrollment_number}
            ph='Enter your enrollment number'
          />
          <FormDisabled
            title='Email Id'
            value={userData?.email}
            ph='Enter your email'
          />
          <FormDisabled
            title='Department/Centre'
            value={userData?.student.department}
            ph='Enter your department or centre'
          />
          <FormDisabled
            title='Branch'
            value={userData?.student.branch}
            ph='Enter your branch'
          />
          <div className='wl-st-form-box'>
            <FormControl variant='standard'>
              <InputLabel
                id='demo-simple-select-standard-label'
                className='info-name'
              >
                Semester applying for{' '}
              </InputLabel>
              <Select
                name='applied_semester'
                onChange={handleChange}
                sx={{ width: 200, height: 40 }}
              >
                <MenuItem value='aut'>Autumn</MenuItem>
                <MenuItem value='spr'>Spring</MenuItem>
              </Select>
            </FormControl>
          </div>
          <FormBox
            value={inputs?.phone_number}
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
            value={inputs.supervisor_email}
            onChange={handleChange}
          />
          <FormBox
            title='Head of Dept. Email Id'
            type='email'
            ph='Enter email'
            name='hod_email'
            value={inputs.hod_email}
            onChange={handleChange}
          />

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 70, md: 120 }}
            justifyContent='center'
          >
            <FormBtn
              name='Home'
              variant='outlined'
              func={() => navigate('/')}
            />
            <FormBtn name='Next' variant='contained' func={() => setTab(1)} />
          </Stack>
        </div>
      </form>
    </div>
  )
}

export default ApplicationForm

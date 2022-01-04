import React from 'react'
import '../../assets/css/forms/form.css'
import { FormBox } from './formComponent'
import FormBtn from './formBtn'
import { Stack } from '@mui/material'

const DocUpload = ({ setTab, inputs, setInputs }) => {
  const handleChange = e => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.files[0]
    })
  }
  return (
    <div>
      <form className='wl-st-form'>
        <div>
          <FormBox
            title='Application Form'
            name='application_form'
            type='file'
            onChange={handleChange}
          />
          <FormBox
            title='Extension Letter'
            name='extension_letter'
            type='file'
            onChange={handleChange}
          />
          <FormBox
            title='Academic Summary'
            name='academic_summary'
            type='file'
            onChange={handleChange}
          />
        </div>
        <div>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 70, md: 120 }}
            justifyContent='center'
          >
            <FormBtn name='Go Back' variant='outlined' func={() => setTab(0)} />
            <FormBtn name='Next' variant='contained' func={() => setTab(2)} />
          </Stack>
        </div>
      </form>
    </div>
  )
}

export default DocUpload

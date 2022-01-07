import React from 'react'
import '../../assets/css/forms/form.css'
import { FormBox } from './formComponent'
import {NextBtn,BackBtn} from './formBtn'
import { Stack } from '@mui/material'
import { useDispatch } from 'react-redux'
import { toastWarningMessage } from '../../actions/toastActions'


const DocUpload = ({ setTab, inputs, setInputs }) => {
  const dispatch = useDispatch()
  const handleChange = e => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.files[0]
    })
  }
  const nextFunc=()=>{
    if(inputs?.application_form !== null && inputs?.extension_letter !== null && inputs?.academic_summary !== null){
      setTab(2);
    }else{
      dispatch(toastWarningMessage('Please upload mandatory documents'));
    }
  }
  return (
    <div>
      <form className='wl-st-form'>
        <div>
          <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 1, sm: 70, md: 120 }}
              justifyContent='center'
            >
              <BackBtn name='Go Back' variant='contained' func={() => setTab(0)} />
              <NextBtn name='Next' variant='contained' func={() => nextFunc()} />
          </Stack>
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
          
        </div>
      </form>
    </div>
  )
}

export default DocUpload

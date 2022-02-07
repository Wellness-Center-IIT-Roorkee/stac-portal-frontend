import React from 'react'
import '../../assets/css/forms/form.css'
import { FormBox,MultipleFileUpload } from './formComponent'
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
  const handleMultipleFilesChange = e => {
    const files = e.target.files;
    setInputs({
      ...inputs,
      [e.target.name]: files
    })
  }
  const nextFunc=()=>{
    if(inputs?.application_form !== null){
      setTab(2);
    }else{
      dispatch(toastWarningMessage('Please upload mandatory documents'));
    }
  }
  return (
    <div className='wl-st-form-parent'>
      <form className='wl-st-form wl-st-form-max-width-fix'>
        <div>
          <Stack
              direction={{ xs: 'column', sm: 'row' }}
            >
              <BackBtn name='Go Back' variant='contained' func={() => setTab(0)} />
          </Stack>
          <FormBox
            title='Application Form'
            name='application_form'
            type='file'
            onChange={handleChange}
            required={true}
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
          <FormBox
            title='ITR Family'
            name='itr_form'
            type='file'
            onChange={handleChange}
          />
          <FormBox
            title="Guardian's Bank Statement"
            name='bank_statement'
            type='file'
            onChange={handleChange}
          />
          <MultipleFileUpload
            title="Other Relevent documents"
            name='miscellaneous_documents'
            type='file'
            onChange={handleMultipleFilesChange}
          />
        </div>
        <div>
        <Stack
              direction={{ xs: 'column', sm: 'row-reverse' }}
            >

              <NextBtn name='Next' variant='contained' func={() => nextFunc()} />
          </Stack>
        </div>
      </form>
    </div>
  )
}

export default DocUpload

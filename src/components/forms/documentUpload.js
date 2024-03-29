import React from 'react'
import '../../assets/css/forms/form.css'
import { FormBox,MultipleFileUpload } from './formComponent'
import {NextBtn,BackBtn} from './formBtn'
import { Stack } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { toastWarningMessage } from '../../actions/toastActions'
import { isInclude } from '../../helpers/helperFunctions'


const DocUpload = ({ setTab, inputs, setInputs }) => {
  const dispatch = useDispatch()
  const userData = useSelector(state => state.user.userData)
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
      [e.target.name]: [...files]
    })
  }
  const nextFunc=()=>{
    if(inputs?.application_form !== null && (isPhD?true:inputs?.itr_form !== null)){
      setTab(2);
    }else{
      dispatch(toastWarningMessage('Please upload mandatory documents'));
    }
  }
  const isPhD=isInclude(userData?.student?.branch,'phd');
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
            title='Application Letter'
            name='application_form'
            type='file'
            onChange={handleChange}
            required={true}
          />
          {
            isPhD ?
            <>
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
            </>:""
          }
          <FormBox
            title='Family Income Tax Return'
            name='itr_form'
            type='file'
            onChange={handleChange}
            required={!isPhD}
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
            isNewApplicationForm={true}
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

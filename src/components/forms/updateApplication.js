import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FormBox, FormDisabled, MultipleFileUpload } from './formComponent'
import '../../assets/css/forms/form.css'
import { FormBtn, BackBtn } from './formBtn'
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
import { STATUS_CHOICES } from '../../constants/application'
import { isInclude } from '../../helpers/helperFunctions'
import { CircularProgress } from '@mui/material'

const UpdateApplication = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()
  const applicationData = useSelector(
    state => state.application.applicationDetail
  )
  const updateApplicationPending = useSelector(state => state?.application?.updateApplicationPending)
  const [data, setData] = useState({
    applied_semester: applicationData?.applied_semester,
    phone_number: applicationData?.phone_number,
    supervisor_email: applicationData?.supervisor_email,
    hod_email: applicationData?.hod_email,
    application_form: null,
    extension_letter: null,
    academic_summary: null,
    itr_form: null,
    bank_statement: null,
    miscellaneous_documents: []
  })
  const isPhD = isInclude(applicationData?.student?.branch, 'phd')
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
  const handleMultipleFilesChange = e => {
    const files = e.target.files
    setData({
      ...data,
      [e.target.name]: [...files]
    })
  }
  const sendUpdateRequest = () => {
    const formData = new FormData()
    const { miscellaneous_documents, ...dataWithOutMisc } = data
    Object.keys(dataWithOutMisc).forEach(dataItem => {
      if (data[dataItem]) {
        formData.append(dataItem, data[dataItem] ? data[dataItem] : '')
      }
    })
    miscellaneous_documents?.forEach(file =>
      formData.append('miscellaneous_documents', file)
    )
    const call = () => {
      navigate('/')
    }
    dispatch(updateApplication({ id, formData, call }))
  }

  return (
    <div className='wl-st-form-parent'>
      <form className='wl-st-form wl-st-form-max-width-fix'>
        <div>
          <div>
            <h3 className='wl-st-status'>
              STATUS:{' '}
              {
                STATUS_CHOICES.find(x => x.value === applicationData?.status)
                  ?.displayName
              }
            </h3>
            {(applicationData?.status === 'rej' ||
              applicationData?.status === 'inc') && (
              <h3 className='wl-st-remarks'>{applicationData?.remarks}</h3>
            )}
          </div>
          <Stack direction={{ xs: 'column', sm: 'row' }}>
            <BackBtn
              name='Go Back'
              variant='contained'
              func={() => navigate('/')}
            />
          </Stack>
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
            required={true}
          />
          {isPhD ? (
            <>
              <FormBox
                title="Supervisor's Email Id"
                type='email'
                ph='Enter email'
                name='supervisor_email'
                value={data.supervisor_email}
                onChange={handleChange}
                required={true}
              />
              <FormBox
                title='Head of Dept. Email Id'
                type='email'
                ph='Enter email'
                name='hod_email'
                value={data.hod_email}
                onChange={handleChange}
                required={true}
              />
            </>
          ) : (
            ''
          )}
          <FormBox
            title='Application Letter'
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
            required={true}
          />
          {
            isPhD ?
            <>
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
            </>:""
          }
          <FormBox
            title='Family Income Tax Return'
            name='itr_form'
            type='file'
            onChange={handleFileChange}
            helperElement={
              <Link
                href={applicationData?.itr_form}
                target='_blank'
                rel='noreferer'
              >
                View Current File
              </Link>
            }
            required={!isPhD}
          />
          <FormBox
            title="Guardian's Bank Statement"
            name='bank_statement'
            type='file'
            onChange={handleFileChange}
            helperElement={
              <Link
                href={applicationData?.bank_statement}
                target='_blank'
                rel='noreferer'
              >
                View Current File
              </Link>
            }
          />
          <MultipleFileUpload
            title='Other Relevent documents'
            name='miscellaneous_documents'
            type='file'
            onChange={handleMultipleFilesChange}
            helperElementData={applicationData?.miscellaneous_documents}
          />
        </div>
        <Stack direction={{ xs: 'column', sm: 'row-reverse' }}>
          {
            updateApplicationPending ?
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
            </div>:
            <FormBtn name='Update' variant='contained' func={sendUpdateRequest} />
          }
        </Stack>
      </form>
    </div>
  )
}

export default UpdateApplication

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SearchBar from '../components/view_application/searchBar'
import ViewForm from '../components/view_application/viewForms'
import { getApplications } from '../actions/applicationActions'
import {BackBtn} from '../components/forms/formBtn'
import { useNavigate } from 'react-router-dom'

const AdminView = () => {
  const dispatch = useDispatch()
  const navigate=useNavigate()
  const [data, setData] = useState([])
  const [filterDegree, setFilterDegree] = useState('All')
  const isLoggedIn = useSelector(state => state.user.isLoggedIn)
  const applicationData = useSelector(state => state.application.applications)
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getApplications())
      return
    }
  }, [isLoggedIn])

  useEffect(() => {
    setData(applicationData)
    return
  }, [applicationData])

  return (
    <div style={{ padding: '1rem' }}>
      <SearchBar setFilterDegree={setFilterDegree} filterDegree={filterDegree} applicationData={applicationData} setData={setData} />
      <BackBtn name='Go Back' variant='contained' func={() => navigate('/')} />
      <ViewForm filterDegree={filterDegree} data={data} />
    </div>
  )
}
export default AdminView

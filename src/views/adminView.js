import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SearchBar from '../components/view_application/searchBar'
import ViewForm from '../components/view_application/viewForms'
import { getApplications } from '../actions/applicationActions'

const AdminView = () => {
  const dispatch = useDispatch()
  const [data, setData] = useState([])
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
      <SearchBar applicationData={applicationData} setData={setData} />
      <ViewForm data={data} />
    </div>
  )
}
export default AdminView

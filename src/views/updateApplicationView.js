import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getApplicationDetail } from '../actions/applicationActions'
import Loader from '../components/common/loader'
import UpdateApplication from '../components/forms/updateApplication'

const UpdateApplicationView = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const getApplicationDetailPending = useSelector(
    state => state.application.getApplicationDetailPending
  )

  const failureCallback = () => {
    navigate('/')
  }

  useEffect(() => {
    dispatch(getApplicationDetail(id), () => {}, failureCallback)
    return
  }, [id])

  return getApplicationDetailPending ? <Loader /> : <UpdateApplication />
}

export default UpdateApplicationView

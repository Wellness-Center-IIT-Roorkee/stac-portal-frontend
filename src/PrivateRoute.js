import React, {
  Suspense,
  useRef,
  useLayoutEffect,
  useState,
  useEffect
} from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import Loader from './components/common/loader'
import { STUDENT, ADMIN, FACULTY } from './constants/roles'

const NewComponent = ({ component: Component, ...restProps }) => {
  return <Component {...restProps} />
}

const PrivateRoute = () => {
  const [authenticationPending, setAuthenticationPending] = useState(true)
  const firstUpdate = useRef(true)
  const isLoggedIn = useSelector(state => state.user.isLoggedIn)
  const getUserDataPending = useSelector(state => state.user.getUserDataPending)
  const role = useSelector(state => state.user.userData?.role)
  const allowedRoles = [STUDENT, ADMIN, FACULTY]

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false
      return
    }
    if (!getUserDataPending) {
      setAuthenticationPending(false)
    }
  }, [getUserDataPending])

  useEffect(() => {
    if (isLoggedIn) {
      setAuthenticationPending(false)
    }
  }, [isLoggedIn])

  return authenticationPending === true ? (
    <Loader />
  ) : isLoggedIn && allowedRoles.includes(role) ? (
    <Suspense fallback={<div className='text-primary' />}>
      <NewComponent component={Outlet} />
    </Suspense>
  ) : (
    <Navigate to='/login' />
  )
}

export default PrivateRoute

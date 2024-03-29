import React, { useEffect } from 'react'
import LandingLayout from '../components/landingLayout'
import RecentApplication from '../components/common/recentApplication'
import { useDispatch, useSelector } from 'react-redux'
import { getApplications } from '../actions/applicationActions'
import { getFormattedDateTime } from '../helpers/helperFunctions'
import Loader from '../components/common/loader'
import { STUDENT } from '../constants/roles'
import { STATUS_CHOICES } from '../constants/application'

const Home = () => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(state => state.user.isLoggedIn)
  const role = useSelector(state => state.user.userData?.role)
  const applicationData = useSelector(state => state.application.applications)
  const isRecentApplicationDataPending = useSelector(
    state => state.application.getApplicationsPending
  )
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getApplications())
      return
    }
  }, [isLoggedIn])

  return (
    <>
      <LandingLayout />
      {isLoggedIn && role === STUDENT && (
        <div>
          <RecentApplication
            isHeading={true}
            application={{
              name: 'Your Applications',
              date: 'Date applied',
              status: 'Current Status'
            }}
          />
          {!isRecentApplicationDataPending && applicationData.length ? (
            applicationData?.reverse().map((data, index) => {
              return (
                <RecentApplication
                  key={data.id}
                  application={{
                    id: data.id,
                    name: `Stac Application`,
                    date: `${getFormattedDateTime(data?.submission_time)}`,
                    status: `${STATUS_CHOICES.find((x)=>x.value===(data?.status))?.displayName}`
                  }}
                />
              )
            })
          ) : isRecentApplicationDataPending ? (
            <Loader />
          ) : (
            <h4 className='no_app_to_show'>No applications to show</h4>
          )}
        </div>
      )}
    </>
  )
}

export default Home

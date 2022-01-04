import React, { useEffect } from 'react'
import LandingLayout from '../components/landingLayout'
import RecentApplication from '../components/common/recentApplication'
import { useDispatch, useSelector } from 'react-redux'
import { getApplications } from '../actions/applicationActions'
import { getFormattedDateTime } from '../helpers/helperFunctions'
import Loader from '../components/common/loader'

const Home = () => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn)
  const applicationData = useSelector(
    state => state.application.applications
  )
  const isRecentApplicationDataPending = useSelector(
    state => state.application.getApplicationsPending
  )
  const dispatch = useDispatch()
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getApplications())
      return
    }
  }, [isLoggedIn])

  return (
    <>
      <LandingLayout />
      {isLoggedIn && (
        <div onClick={() => console.log(applicationData[0])}>
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
                  application={{
                    name: `Application ${index + 1}`,
                    date: `${getFormattedDateTime(data.submission_time)}`,
                    status: `${data.status === 'app' ? 'Approved' : 'Pending'}`
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

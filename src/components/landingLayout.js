import React from 'react'
import '../assets/css/common/layoutStyle.css'
import illustration from '../assets/home/illustration.svg'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { oauthUrl } from '../constants'

const LandingLayout = () => {
  const navigate = useNavigate()
  const isLoggedIn = useSelector(state => state.user.isLoggedIn)
  const userData = useSelector(state => state.user.userData)

  return (
    <div className='wl_sp_lp_main'>
      <div className='wl_sp_lp_lft'>
        <h1>Students’ Aid Committee (StAC)</h1>
        <p className='wl_sp_lp_lft_p'>
          Students’ Aid Committee (StAC) provides financial support to needy students.
          Such students should apply to StAC for financial support.
        </p>
        <h3>APPLICATION PROCEDURE</h3>
        <p>
          <div>
            StAC meets 4 times every year to consider the application received for
            financial support, as mentioned below.
          </div>
          <div>
            1. Last date to receive application- 15thJanuary
          </div>
          <div>
            Meeting date- Last week of January
          </div>
          <div>
            2. Last date to receive application- 15thApril
          </div>
          <div>
            Meeting date- Last week of April
          </div>
          <div>
            3. Last date to receive application- 15thJuly
          </div>
          <div>
            Meeting date- Last week of July
          </div>
          <div>
            4. Last date to receive application- 15thOctober
          </div>
          <div>
            Meeting date- Last week of October
          </div>
        </p>

        <button
          onClick={() =>
            isLoggedIn
              ? navigate(
                `/${userData.role === 'student' ? 'application' : 'fac'}`
              )
              : window.location.assign(oauthUrl)
          }
        >
          {isLoggedIn
            ? userData.role === 'student'
              ? 'Apply'
              : 'View Applications'
            : 'Login'}
        </button>
      </div>
      <div className='wl_sp_lp_rgt'>
        <img src={illustration} alt='' />
      </div>
    </div>
  )
}

export default LandingLayout

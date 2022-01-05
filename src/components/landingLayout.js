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
        <h1>Stac Portal</h1>
        <p>
          Lorem ipsum dolor sit amet. In minus internos quo voluptatem
          temporibus ex dolore dolore qui laborum doloremque. Qui voluptate
          quidem et dolorum voluptate cum obcaecati sapiente qui placeat fuga.
        </p>
        <p>
          Aut omnis excepturi eos laborum laudantium eos unde voluptas aut
          laudantium consequatur. Ut illum adipisci qui blanditiis voluptate sed
          consequatur inventoreet quia quia. In odio ducimus vel ullam quae
          cumque natus.
        </p>
        <p>
          Et vitae dolor et rerum blanditiis ut harum molestiae? Aut repellat
          voluptatem et architecto voluptatem est voluptas quae quo quis
          tenetur.
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

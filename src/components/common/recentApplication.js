import React from 'react'
import '../../assets/css/common/style.css'

const recentApplication = ({ application, isHeading }) => {
  return (
    <div
      style={{ marginTop: `${isHeading ? '4.5vmax' : '1.35vmax'}` }}
      className='wl_sp_hm_rcap'
    >
      <div
        className={`${isHeading ? 'wl_sp_hm_rcap_head' : 'wl_sp_hm_rcap_nrml'}`}
      >
        {application.name}
      </div>
      <div
        className={`${isHeading ? 'wl_sp_hm_rcap_head' : 'wl_sp_hm_rcap_nrml'}`}
      >
        {application.date}
      </div>
      <div
        className={`${
          isHeading
            ? 'wl_sp_hm_rcap_head'
            : 'wl_sp_hm_rcap_nrml wl_sp_hm_rcap_ital'
        }`}
      >
        {application.status}
      </div>
    </div>
  )
}

export default recentApplication

import { IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../../assets/css/common/style.css'

const RecentApplication = ({ application, isHeading }) => {
  const navigate = useNavigate()
  return (
    <div
      style={{ marginTop: `${isHeading ? '4.5vmax' : '1.35vmax'}` }}
      className='wl_sp_hm_rcap'
    >
      <div
        className={`${isHeading ? 'wl_sp_hm_rcap_head' : 'wl_sp_hm_rcap_nrml'}`}
      >
        {application.name}
        {!isHeading && (
          <IconButton
            onClick={() => navigate(`/application/${application.id}/update`)}
          >
            <EditIcon />
          </IconButton>
        )}
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

export default RecentApplication

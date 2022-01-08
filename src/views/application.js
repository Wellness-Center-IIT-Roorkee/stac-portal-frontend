import React, { useState } from 'react'
import '../assets/css/common/layoutStyle.css'
import illustration from '../assets/application/illustration.svg'
import next from '../assets/application/next.svg'
import ApplicationForm from '../components/forms/applicationForm'
import DocUpload from '../components/forms/documentUpload'
import FinalSubmit from '../components/forms/finalSubmit'
import { useSelector } from 'react-redux'

const Application = () => {
  const [tab, setTab] = useState(0)
  const userData = useSelector(state => state.user.userData)
  const initValues = {
    phone_number: userData?.phone_number,
    applied_semester: null,
    supervisor_email: '',
    hod_email: '',
    application_form: null,
    extension_letter: null,
    academic_summary: null,
    remarks:''
  }
  const [inputs, setInputs] = useState(initValues)
  const props = { setTab, inputs, setInputs }
  const handleClick=(x)=>{
    switch (x) {
      case 0:
        setTab(0)
        break;
      case 1:
        if(inputs?.phone_number?.length && inputs?.applied_semester?.length && inputs?.hod_email?.length && inputs?.supervisor_email?.length){
          setTab(1);
        }
        break;
      case 2:
        if(inputs?.application_form !== null && inputs?.extension_letter !== null && inputs?.academic_summary !== null){
          setTab(2);
        }
        break;
      default:
        break;
    }
  }
  return (
    <>
      <div className='wl_sp_lp_main2'>
        <div className='wl_sp_lp_lft wl_sp_lp_lft2'>
          <h4>Application Form</h4>
          <p>
            Lorem ipsum dolor sit amet. In minus internos quo voluptatem
            temporibus ex dolore dolore qui laborum doloremque. Qui voluptate
            quidem et dolorum voluptate cum obcaecati sapiente qui placeat fuga.
          </p>
          <p>
            Aut omnis excepturi eos laborum laudantium eos unde voluptas aut
            laudantium consequatur. Ut illum adipisci qui blanditiis voluptate
            sed consequatur inventoreet quia quia. In odio ducimus vel ullam
            quae cumque natus.
          </p>
        </div>
        <div className='wl_sp_lp_rgt2'>
          <img src={illustration} alt='' />
        </div>
      </div>
      <div className='wl_sp_lp_main_form_progress'>
        <button
          className={
            tab === 0
              ? 'wl_sp_lp_main_form_btn_filled'
              : 'wl_sp_lp_main_form_btn'
          }
          onClick={() => handleClick(0)}
        >
          Application Form
        </button>
        <div className='wl_sp_lp_main_form_line_svg'>
          <div className='wl_sp_lp_main_form_line'></div>
          <img src={next} alt='' />
        </div>
        <button
          className={
            tab === 1
              ? 'wl_sp_lp_main_form_btn_filled'
              : 'wl_sp_lp_main_form_btn'
          }
          onClick={() => handleClick(1)}
        >
          Upload Documents
        </button>
        <div className='wl_sp_lp_main_form_line_svg'>
          <div className='wl_sp_lp_main_form_line'></div>
          <img src={next} alt='' />
        </div>
        <button
          className={
            tab === 2
              ? 'wl_sp_lp_main_form_btn_filled'
              : 'wl_sp_lp_main_form_btn'
          }
          onClick={() => handleClick(2)}
        >
          Submit
        </button>
      </div>

      {tab === 0 ? <ApplicationForm {...props} /> : null}
      {tab === 1 ? <DocUpload {...props} /> : null}
      {tab === 2 ? <FinalSubmit {...props} /> : null}
    </>
  )
}

export default Application

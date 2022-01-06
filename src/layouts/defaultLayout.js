import React from 'react';
import NavBar from '../components/common/navBar';
import '../assets/css/common/layoutStyle.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const DefaultLayout = ({ children }) => {
  return (
    <div>
      <main
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {' '}
        <NavBar />
        <div className="wl_sp_af_nav">
          {children}
        </div>
        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          limit={3}
        />
      </main>
    </div>
  );
};

export default DefaultLayout;
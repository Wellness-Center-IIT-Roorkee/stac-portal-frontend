import React from 'react';
import NavBar from '../components/common/navBar';
import '../assets/css/common/layoutStyle.css'


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
      </main>
    </div>
  );
};

export default DefaultLayout;
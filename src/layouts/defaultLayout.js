import React from 'react';
import NavBar from '../components/common/navBar';
import './style.css'

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
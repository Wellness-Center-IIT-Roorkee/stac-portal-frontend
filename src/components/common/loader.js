import { CircularProgress } from '@mui/material';
import React from 'react';

const Loader = () => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div>
        <CircularProgress />
      </div>
    </div>
  );
};

export default Loader;

import { makeStyles } from '@mui/styles';
import React, { useState, useEffect } from 'react';
import DefaultLayout from '../layouts/defaultLayout';

const useStyles = makeStyles(theme => ({
    home: {
        display: 'flex',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
    }
}))

const Home = () => {
    const classes = useStyles()
    return (
        <DefaultLayout>
            <div className={classes.home}>
                Stac Portal
            </div>
        </DefaultLayout>
    )
}

export default Home;
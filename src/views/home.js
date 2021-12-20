import { makeStyles } from '@mui/styles';
import React, { useState, useEffect } from 'react';
import DefaultLayout from '../layouts/defaultLayout';
import LandingLayout from '../layouts/landingLayout'
import RecentApplication from '../components/common/recentApplication'

const Home = () => {
    return (
        <DefaultLayout>
            <LandingLayout/>
            <RecentApplication isHeading={true} application={{name:"Your Applications",date:"Date applied",status:"Current Status"}} />
            <RecentApplication application={{name:"Application 1",date:"20/12/2021",status:"Approved"}} />
            <RecentApplication application={{name:"Application 1",date:"20/12/2021",status:"Approved"}} />
            <RecentApplication application={{name:"Application 1",date:"20/12/2021",status:"Approved"}} />
        </DefaultLayout>
    )
}

export default Home;
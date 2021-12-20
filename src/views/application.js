import React from 'react'
import DefaultLayout from '../layouts/defaultLayout';
import ApplicationLayout from '../layouts/applicationLayout';

const application = () => {
    return (
        <DefaultLayout>
            <ApplicationLayout/>
        </DefaultLayout>
    )
}

export default application

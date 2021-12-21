import React from 'react'
import DefaultLayout from '../layouts/defaultLayout';
import ApplicationLayout from '../layouts/applicationLayout';
import DocUpload from './forms/documentUpload';
import ApplicationForm from './forms/applicationForm';
import FinalSubmit from './forms/finalSubmit';

const Application = () => {
    return (
        <DefaultLayout>
            <ApplicationLayout/>
            <ApplicationForm/>
        </DefaultLayout>
    )
}

export default Application

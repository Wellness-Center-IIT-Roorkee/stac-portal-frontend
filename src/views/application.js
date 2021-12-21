import React from 'react'
import DefaultLayout from '../layouts/defaultLayout';
import ApplicationLayout from '../layouts/applicationLayout';
import ApplicationForm from '../layouts/forms/applicationForm';
import DocUpload from '../layouts/forms/documentUpload';
import FinalSubmit from '../layouts/forms/finalSubmit';


const Application = () => {
    return (
        <DefaultLayout>
            <ApplicationLayout/>
            <ApplicationForm/>
            <DocUpload/>
            <FinalSubmit/>
        </DefaultLayout>
    )
}

export default Application

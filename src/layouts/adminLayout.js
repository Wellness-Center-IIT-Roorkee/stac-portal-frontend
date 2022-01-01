import React from "react";
import DefaultLayout from "./defaultLayout";
import SearchBar from "../components/view_application/searchBar";
import ViewForm from "../components/view_application/viewForms";

const AdminHodLayout = ()=>{
    
    return(
        <DefaultLayout>
            <SearchBar/>
            <ViewForm/>
        </DefaultLayout>
    )
}
export default AdminHodLayout

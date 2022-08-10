import React from "react";
import Sidebar from "./sidebar";
import HeaderAdmin from '../header-admin';

export default function Page({children}){
    return(
        <div className="admin-page">
            <Sidebar/>    
            <div className="left">
                <HeaderAdmin/>
                <div className='admin-body stack'>
                    {children}
                </div>
            </div>
        </div>
    )
}
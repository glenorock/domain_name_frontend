import React, { useState, useEffect } from "react";
import EditIcon from '@mui/icons-material/Edit';
import Page from '../../../components/admin/page';
import * as adminContacts from '../../../lib/adminContacts';
import Countries from '../../../data/CountryCodes.json';

export default function(){
    const [contacts,setContacts] = useState([])
    let refresh = 1
    useEffect(async () => {
        let tmp = await adminContacts.getAllContacts()
        setContacts(tmp)
    },[refresh])
    return(
        <Page>
            <div className="admin-table">
                <table className="table">
                    <thead>
                        <th>Name</th>
                        <th>Organisation</th>
                        <th>Addresse</th>
                        <th>City</th>
                        <th>Postal Code</th>
                        <th>County</th>
                        <th>Telephone</th>
                        <th>Fax</th>
                        <th>Email</th>
                        <th></th>
                    </thead>
                    <tbody>
                        {
                            contacts.map((ele) => (
                                <tr>
                                    <td>{ele.name}</td>
                                    <td>{ele.org}</td>
                                    <td>{ele.street}</td>
                                    <td>{ele.city}</td>
                                    <td>{ele.pc}</td>
                                    <td>{Countries.filter((c) => c.code === ele.cc)[0].name}</td>
                                    <td>{ele.voice}</td>
                                    <td>{ele.fax}</td>
                                    <td>{ele.email}</td>
                                    <td style={{display:'flex',justifyContent:'center'}}>
                                        <EditIcon/>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </Page>
    )
}
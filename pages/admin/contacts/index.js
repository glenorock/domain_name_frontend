import React, { useState, useEffect } from "react";
import EditIcon from '@mui/icons-material/Edit';
import Page from '../../../components/admin/page';
import ContactModal from '../../../components/modals/ContactModal';
import * as adminContacts from '../../../lib/adminContacts';
import Countries from '../../../data/CountryCodes.json';

export default function(){
    const [contacts,setContacts] = useState([])
    const [page,setPage] = useState(1)
    const [limit,setLimit] = useState(10)
    const [range,setRange] = useState([1,2,3,4,5])
    const [seletectContact,setSelectedContact] = useState({})
    const [showModal,setShowModal] = useState(false)
    
    const openModal = (contact)  => () => {
        setSelectedContact({...contact})
        setShowModal(true)
    }

    const closeModal = () => {
        setSelectedContact({})
        setShowModal(false)
    }

    let refresh = 1
    useEffect(async () => {
        let tmp = await adminContacts.getAllContacts(page,limit)
        setContacts(tmp)
    },[refresh,page,limit])
    const goToPage = (i) => () => {
        setPage(i)
    }
    const nextPage = () => {
        setPage(page+1)
    }

    const prevPage = () => {
        setPage(page-1)
    }
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
                                        <EditIcon onClick={openModal(ele)}/>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <div className="pagination">
                        <div 
                            onClick={prevPage}
                            style={{
                                display:(page<=1)?"none":"block"
                            }}
                        >
                            &laquo;
                        </div>
                        {range.map(i => (
                            <div onClick={goToPage(i)} className={(i===page)?"current":""}>
                                {i}
                            </div>
                        ))}
                        <div
                         onClick={nextPage}
                         style={{
                            display:(page>=range.length)?"none":"block"
                        }}
                        >
                            &raquo;
                        </div>
                </div>
                <ContactModal 
                    show={showModal}
                    onClose={closeModal}
                    state={seletectContact}
                    setState={adminContacts.updateContact}
                />
            </div>
        </Page>
    )
}
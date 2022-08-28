import React, { useState, useEffect } from "react";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { TextField, MenuItem } from "@mui/material";
import Page from '../../../components/admin/page';
// import * as useRequests from '../../../data/useRequests';
import DomainDetailsModal from '../../../components/modals/domainDetails';

export default function(){
    const [requests,setRequests] = useState([])
    const [page,setPage] = useState(1)
    const [limit,setLimit] = useState(10)
    const [range,setRange] = useState([1,2,3,4,5])
    const [status,setStatus] = useState('all')
    const [selectedRequest,setSelectedRequest] = useState({})
    const [showModal,setShowModal] = useState(false)

    const statuses = ['all','accepted','rejected','pending']

    const openModal = (req) => () => {
        setSelectedRequest(req)
        setShowModal(true)
    }
    const closeModal = () => {
        setSelectedRequest({})
        setShowModal(false)
    }
    let refresh = 1
    useEffect(async () => {
        // let tmp = await useRequests.getAllRequests(page,limit,status)
        // setRequests(tmp)
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
    const statusStyle = (stat) => {
        switch(stat){
            case 'accepted':
                return 'success'
            case 'rejected':
                return 'reject'
            case 'pending':
                return 'pending'
            default:
                return ''
        }
    }
    return(
        <Page>
            <div className="admin-table">
                <div style={{display:'flex', justifyContent:'flex-end', marginBottom:'5px'}}>
                    <TextField
                        value={status}
                        onChange={(e) => {
                            setStatus(e.target.value)
                        }}
                        select
                    >
                        {statuses.map((opt) => (
                            <MenuItem key={opt} value={opt}>
                                {opt}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
                <table className="table">
                    <thead>
                        <th>Domain name</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th></th>
                    </thead>
                    <tbody>
                        {
                            requests.map((ele) => (
                                <tr>
                                    <td>{ele.domain}</td>
                                    <td>{ele.date}</td>
                                    <td><span className={`status ${statusStyle(ele.status)}`}>{ele.status}</span></td>
                                    <td style={{display:'flex',justifyContent:'center', cursor:'pointer'}}>
                                        <MoreHorizIcon onClick={openModal(ele)}/>
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
                <DomainDetailsModal 
                    show={showModal}
                    onClose={closeModal}
                    request={selectedRequest}
                />
            </div>
        </Page>
    )
}
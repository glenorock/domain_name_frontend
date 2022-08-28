import React, { useState, useEffect } from "react";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { TextField, Menu, MenuItem } from "@mui/material";
import Page from '../../../components/admin/page';
import * as RequestLib from '../../../lib/requests';
import DomainDetailsModal from '../../../components/modals/domainDetails';


export default function(){
    const [requests,setRequests] = useState([])
    const [page,setPage] = useState(1)
    const [limit,setLimit] = useState(10)
    const [range,setRange] = useState([1,2,3,4,5])
    const [status,setStatus] = useState('all')
    const [selectedRequest,setSelectedRequest] = useState({})
    const [showModal,setShowModal] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null);
    const [showMenu,setShowMenu] = useState(false);
    const [refresh,setRefresh] = useState(1);
    
    const statuses = ['all','accepted','rejected','pending']

    const openModal = (req) => {
        setSelectedRequest(req)
        setShowModal(true)
    }
    const closeModal = () => {
        setSelectedRequest({})
        setShowModal(false)
    }
    useEffect(async () => {
        let tmp = await RequestLib.getRequests()
        console.log(tmp.data)
        setRequests(tmp.data)
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
    const closeMenu = () => {
        setShowMenu(false)
    }
    const openMenu = () => {
        setShowMenu(true)
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
                        <th>Status</th>
                        <th>Date</th>
                        <th></th>
                    </thead>
                    <tbody>
                        {
                            requests.map((ele) => (
                                <tr>
                                    <td>{ele.Domain?.name}</td>
                                    <td><span className={ele.status}>{ele.status}</span></td>
                                    <td>{ele.createdAt}</td>
                                    <td style={{display:'flex',justifyContent:'center', cursor:'pointer'}}>
                                        <MoreHorizIcon onClick={(e) => {
                                            openMenu(ele)
                                            setSelectedRequest(ele)
                                            setAnchorEl(e.currentTarget)
                                        }}/>
                                        <Menu
                                            anchorEl={anchorEl}
                                            open={showMenu && selectedRequest.id === ele.id}
                                            onClose={closeMenu}
                                            anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'left',
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'left',
                                            }}
                                        >
                                            <MenuItem
                                                onClick={() => {
                                                    openModal(ele)
                                                    closeMenu()
                                                }}
                                            >
                                                Details
                                            </MenuItem>
                                            {
                                                (ele.status === 'PENDING')?(<>
                                                    <MenuItem
                                                        onClick={async () => {
                                                            let tmp = await RequestLib.aceptRequest(ele.id)
                                                            setRefresh(tmp)
                                                        }}
                                                    >
                                                        Accept
                                                    </MenuItem>
                                                    <MenuItem
                                                        onClick={async () => {
                                                            let tmp = await RequestLib.rejectRequest(ele.id)
                                                            setRefresh(tmp)
                                                        }}
                                                    >
                                                        Reject
                                                    </MenuItem>
                                                </>):(<>
                                                </>)
                                            }
                                        </Menu>
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
import React, { useState, useEffect } from "react";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import Page from '../../../components/admin/page';
import * as UserLib from '../../../lib/users';

export default function(){
    const [users,setUsers] = useState([])
    const [page,setPage] = useState(1)
    const [showMenu,setShowMenu] = useState(false)
    const [limit,setLimit] = useState(10)
    const [range,setRange] = useState([1,2,3,4,5])
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedUser,setSelectedUser] = useState(null);
    const [refresh,setRefresh] = useState(null);

    useEffect(async () => {
        let tmp = await UserLib.getUsers()
        setUsers(tmp.data)
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
    return(
        <Page>
            <div className="admin-table">
                <table className="table">
                    <thead>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Domain name</th>
                        <th></th>
                    </thead>
                    <tbody>
                        {
                            users.map((ele) => (
                                <tr>
                                    <td>{ele.username}</td>
                                    <td>{ele.email}</td>
                                    <td><span className={ele.active?"accepted":"rejected"}>{ele.active?"Active":"Inactive"}</span></td>
                                    <td>{ele.Domain?.name}</td>
                                    <td style={{display:'flex',justifyContent:'center'}}>
                                        <MoreHorizIcon
                                            onClick={(event) => {
                                                setShowMenu(!showMenu)
                                                setAnchorEl(event.currentTarget);
                                                setSelectedUser(ele.id);
                                            }}
                                        />
                                        <Menu
                                            anchorEl={anchorEl}
                                            open={showMenu && selectedUser === ele.id}
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
                                            <MenuItem onClick={async () => {
                                                let tmp = await UserLib.activateUser(ele.id)
                                                setShowMenu(false)
                                                setRefresh(tmp)
                                            }}>Activate</MenuItem>
                                            <MenuItem onClick={async () => {
                                                let tmp = await UserLib.deactivateUser(ele.id)
                                                setShowMenu(false)
                                                setRefresh(tmp)
                                            }}>Deactivate</MenuItem>
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
            </div>
        </Page>
    )
}
import React, { useState, useEffect } from "react";
import EditIcon from '@mui/icons-material/Edit';
import Page from '../../../components/admin/page';
import * as useContacts from '../../../data/useContacts';

export default function(){
    const [contacts,setContacts] = useState([])
    const [page,setPage] = useState(1)
    const [limit,setLimit] = useState(10)
    const [range,setRange] = useState([1,2,3,4,5])
    let refresh = 1
    useEffect(async () => {
        let tmp = await useContacts.getAllContacts(page,limit)
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
                        <th>Creation Date</th>
                        <th>Status</th>
                        <th></th>
                    </thead>
                    <tbody>
                        {
                            contacts.map((ele) => (
                                <tr>
                                    <td>{ele.name}</td>
                                    <td>{ele.org}</td>
                                    <td>{ele.street}</td>
                                    <td style={{display:'flex',justifyContent:'center'}}>
                                        <EditIcon/>
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
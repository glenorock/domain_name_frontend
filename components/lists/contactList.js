import React from "react";
import Loader from "../Loader";
import { Table } from 'react-bootstrap';

export default function ContactList(){
    let conts = [
        {
            'id': Math.round(Math.random()*10),
            'name': Math.round(Math.random()*10),
            'org': Math.round(Math.random()*10),
            'street' : Math.round(Math.random()*10),
            'city': Math.round(Math.random()*10),
            'sp': Math.round(Math.random()*10),
            'pc': Math.round(Math.random()*10),
            'cc': Math.round(Math.random()*10),
            'voice': Math.round(Math.random()*10),
            'fax': Math.round(Math.random()*10),
            'email': Math.round(Math.random()*10),
            'crDate': Math.round(Math.random()*10),
            'upDate': Math.round(Math.random()*10),
        },
        {
            'id': Math.round(Math.random()*10),
            'name': Math.round(Math.random()*10),
            'org': Math.round(Math.random()*10),
            'street' : Math.round(Math.random()*10),
            'city': Math.round(Math.random()*10),
            'sp': Math.round(Math.random()*10),
            'pc': Math.round(Math.random()*10),
            'cc': Math.round(Math.random()*10),
            'voice': Math.round(Math.random()*10),
            'fax': Math.round(Math.random()*10),
            'email': Math.round(Math.random()*10),
            'crDate': Math.round(Math.random()*10),
            'upDate': Math.round(Math.random()*10),
        },
        {
            'id': Math.round(Math.random()*10),
            'name': Math.round(Math.random()*10),
            'org': Math.round(Math.random()*10),
            'street' : Math.round(Math.random()*10),
            'city': Math.round(Math.random()*10),
            'sp': Math.round(Math.random()*10),
            'pc': Math.round(Math.random()*10),
            'cc': Math.round(Math.random()*10),
            'voice': Math.round(Math.random()*10),
            'fax': Math.round(Math.random()*10),
            'email': Math.round(Math.random()*10),
            'crDate': Math.round(Math.random()*10),
            'upDate': Math.round(Math.random()*10),
        },
        {
            'id': Math.round(Math.random()*10),
            'name': Math.round(Math.random()*10),
            'org': Math.round(Math.random()*10),
            'street' : Math.round(Math.random()*10),
            'city': Math.round(Math.random()*10),
            'sp': Math.round(Math.random()*10),
            'pc': Math.round(Math.random()*10),
            'cc': Math.round(Math.random()*10),
            'voice': Math.round(Math.random()*10),
            'fax': Math.round(Math.random()*10),
            'email': Math.round(Math.random()*10),
            'crDate': Math.round(Math.random()*10),
            'upDate': Math.round(Math.random()*10),
        },
        
      ];
      
    const [tableData,setTableData] = React.useState(conts)
    const [loading, setLoading] = React.useState(false)
    return(
        <>
            {loading?(
                <Loader height={300}/>
            ):(
                <div className="data-table">
                    <Table>
                        <thead>
                            <tr >
                                <th scope="col">{'name'}</th>
                                <th scope="col">{'email'}</th>
                                <th scope="col">{'org'}</th>
                                <th scope="col">{'Country'}</th>
                                <th scope="col">{'City'}</th>
                                <th scope="col">{'Tel'}</th>
                                <th scope="col">{'Action'}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((ele) => (
                                <tr>
                                    <td scope="col">{ele.name}</td>
                                    <td scope="col">{ele.email}</td>
                                    <td scope="col">{ele.org}</td>
                                    <td scope="col">{ele.cc}</td>
                                    <td scope="col">{ele.city}</td>
                                    <td scope="col">{ele.voice}</td>
                                    <td scope="col">{
                                        <div>
                                            <button>Action</button>
                                        </div>
                                    }</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            )}
        </>
    )
}
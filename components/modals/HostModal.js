import React, { useState } from 'react';
import { Modal }  from 'react-bootstrap';
import { TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function newHostModal({show, onClose,addList}){
    const [host,setHost] = useState({
        name: "",
        addrs: []
    })
    const [ip,setIp] = useState({
        version:"v4",
        ip:""
    })
    const add = () => {
        addList(host)
        cancel()
    }
    const addAddr = () => {
        setHost({
            ...host,
            addrs:host.addrs.concat(ip)
        })
        setIp({
            ip:"",
            version:"v4"
        })
    }
    const cancel = () => {
        setHost({
            name:"",
            addrs: []
        })
        setIp({
            ip:"",
            version:"v4"
        })
        onClose()
    }
    return(
        <Modal
            show={show}
            onHide={onClose}
            className="modal box"
        >
            <Modal.Body>
                <div className='modal-form'>
                    <TextField
                        value={host.name}
                        fullWidth
                        required
                        placeholder='name'
                        onChange={(e) => {
                            setHost({
                                ...host,
                                name: e.target.value
                            })
                        }}
                    />
                    <div className='v-center'>
                        <TextField
                            value={ip.version}
                            fullWidth
                            required
                            placeholder='version'
                            onChange={(e) => {
                                setIp({
                                    ...ip,
                                    version:e.target.value
                                })
                            }}
                        />
                        <TextField
                            value={ip.ip}
                            fullWidth
                            required
                            placeholder='Ip address'
                            onChange={(e) => {
                                setIp({
                                    ...ip,
                                    ip:e.target.value
                                })
                            }}
                        />
                        <div
                            onClick={addAddr}
                        >
                            <AddIcon/>
                        </div>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">{('IP')}</th>
                                <th scope="col">{}</th>
                                <th scope="col">{('Version')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                host.addrs.map((ele) => {
                                    return(
                                        <tr>
                                            <td>{ele.ip}</td>
                                            <td>{" :- "}</td>
                                            <td>{ele.version}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <div className="action">
                    <div className="btn" onClick={add}>
                        Add
                    </div>
                    <div className="btn btn-danger" onClick={cancel}>
                        Cancel
                    </div>
                </div>
            </Modal.Footer>
        </Modal>
    )
}
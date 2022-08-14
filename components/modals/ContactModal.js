import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Countries from '../../data/CountryCodes.json';
import Box from '@mui/material/Box';


export default function newContactModal({show,onClose,state,setState}){
    const [contact,setContact] = useState({
        name: "",
        org: "",
        street: "",
        city: "",
        sp: "",
        pc: "",
        cc: "",
        voice: "",
        fax: "",
        email: ""
    })
    const [value,setValue] = useState({})
    const options = Countries.map((option,index) => {
        return {
            id:index,
            lable: `${option.name} (${option.code}) (${option.dial_code})`
        }
    })
    useEffect(() =>{
        setContact({...state})
        let index = Countries.findIndex((value) => value.code === state?.cc)
        if (index === -1) {
            setValue({})
        }else{
            let option = Countries[index]
            setValue({
                id:index,
                lable: `${option?.name} (${option?.code}) (${option?.dial_code})`
            })
        }
    },[state])
    const handlechange = (prop) => (e) => {
        setContact({
            ...contact,
            [prop]:e.target.value
        })
    }
    const save = () => {
        let tmp = contact
        setState({...tmp})
        setContact(
            {
                name: "",
                org: "",
                street: "",
                city: "",
                sp: "",
                pc: "",
                cc: "",
                voice: "",
                fax: "",
                email: ""
            }
        )
        onClose()
    }
    const close = () => {
        setContact(
            {
                name: "",
                org: "",
                street: "",
                city: "",
                sp: "",
                pc: "",
                cc: "",
                voice: "",
                fax: "",
                email: ""
            }
        )
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
                        value={contact.name}
                        fullWidth
                        required
                        placeholder='name'
                        onChange={handlechange('name')}
                    />
                    <TextField
                        value={contact.org}
                        fullWidth
                        required
                        placeholder='organisation'
                        onChange={handlechange('org')}
                    />
                    <TextField
                        value={contact.street}
                        fullWidth
                        required
                        placeholder='address'
                        onChange={handlechange('street')}
                    />
                    <TextField
                        value={contact.city}
                        fullWidth
                        required
                        placeholder='city'
                        onChange={handlechange('city')}
                    />
                    <TextField
                        value={contact.pc}
                        fullWidth
                        required
                        placeholder='postal card'
                        onChange={handlechange('pc')}
                    />
                    <Autocomplete
                        options={options}
                        autoHighlight
                        value={value}
                        onChange={(event,val,reason) =>{
                            let c = Countries[val.id]
                            setValue(val)
                            setContact({
                                ...contact,
                                cc:c?c.code:""
                            })
                        }}
                        inputValue={Countries.filter((value) => value.code === contact.cc)[0]}
                        getOptionLabel={(option) => option.lable}
                        renderOption={(props, option) => {
                            let c = Countries[option.id]
                            return(
                                (
                                    <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                    <img
                                        loading="lazy"
                                        width="20"
                                        src={`https://flagcdn.com/w20/${c.code.toLowerCase()}.png`}
                                        srcSet={`https://flagcdn.com/w40/${c.code.toLowerCase()}.png 2x`}
                                        alt=""
                                    />
                                    {option.lable}
                                    </Box>
                                )
                            )
                        }}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                fullWidth
                                required
                                placeholder='country'
                                inputProps={{
                                    ...params.inputProps,
                                    autoComplete: 'new-password', // disable autocomplete and autofill
                                }}
                            />
                        )}  
                    />
                    <TextField
                        value={contact.voice}
                        fullWidth
                        required
                        placeholder='telephone number'
                        onChange={handlechange('voice')}
                    />
                    <TextField
                        value={contact.fax}
                        fullWidth
                        placeholder='fax'
                        onChange={handlechange('fax')}
                    />
                    <TextField
                        value={contact.email}
                        fullWidth
                        required
                        placeholder='email'
                        onChange={handlechange('email')}
                    />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <div className="action">
                    <div className="btn" onClick={save}>
                        Save
                    </div>
                    <div className="btn btn-danger" onClick={close}>
                        Cancel
                    </div>
                </div>
            </Modal.Footer>
        </Modal>
    )
}
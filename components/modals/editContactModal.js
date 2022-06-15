import React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';

const countries = require('../../data/CountryCodes.json');


const ContactTypes = [
    {
        value:"Type one",
        label:"Owner"
    },
    {
        value:"Type two",
        label:"Administrator"
    },
    {
        value:"Type three",
        label:"Technician"
    },
    {
        value:"Type four",
        label:"Billing"
    },
]

export default function AddContactModal({data,onClose}) {
    const [contact, setContact] = React.useState(data)
    const handleChange = (key) => (event) => {
        event.preventDefault();
        setContact({
            ...contact,
            [key]: event.target.value,
        })
    }

    const addContact  = (event) => {
        event.preventDefault();
        alert(JSON.stringify(contact));
        onClose(event);
    }

    return(
        <div className='modal box'>
            <div className='modal-body'>
                <Stack
                    direction="column" 
                    spacing={3}
                >
                    <TextField
                        id="role"
                        value={contact.role}
                        onChange={handleChange('role')}
                        label="role"
                        required
                        select
                    >
                        {
                            ContactTypes.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))
                        }
                    </TextField>
                    <TextField
                        id="name"
                        value={contact.name}
                        onChange={handleChange('name')}
                        fullWidth
                        label="name"
                        required
                    />
                    <TextField
                        id="org"
                        value={contact.org}
                        onChange={handleChange('org')}
                        fullWidth
                        label="org"
                        required
                    />
                    <TextField
                        id="email"
                        value={contact.email}
                        onChange={handleChange('email')}
                        fullWidth
                        label="email"
                        type={'email'}
                        required
                    />
                    <TextField
                        id="phone"
                        value={contact.phone}
                        onChange={handleChange('phone')}
                        fullWidth
                        label="phone"
                        type={'tel'}
                        required
                    />
                    <Autocomplete
                        id="cc"
                        options={countries}
                        autoHighlight
                        onChange={(event,value,reason) =>{
                            setContact({
                                ...contact,
                                cc: value?.code || "",
                                cc_tmp: value?`${value.name} (${value.code})`:""
                            })
                        }}
                        inputValue={contact.cc_tmp}
                        getOptionLabel={(option) => `${option.name} (${option.code})`}
                        renderOption={(props, option) => (
                            <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                            <img
                                loading="lazy"
                                width="20"
                                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                                alt=""
                            />
                            {option.name} ({option.code}) ({option.dial_code})
                            </Box>
                        )}
                        renderInput={(params) => (
                            <TextField
                            {...params}
                            required
                            value={contact.cc_tmp}
                            onChange={handleChange('cc_tmp')}
                            label="Country"
                            inputProps={{
                                ...params.inputProps,
                                autoComplete: 'new-password', // disable autocomplete and autofill
                            }}
                            />
                        )}
                    />
                        
                    <TextField
                        id="city"
                        value={contact.city}
                        onChange={handleChange('city')}
                        fullWidth
                        label="city"
                        required
                    />
                    <TextField
                        id="addr"
                        value={contact.addr}
                        onChange={handleChange('addr')}
                        fullWidth
                        label="addr"
                        required
                    />
                    <TextField
                        id="pc"
                        value={contact.pc}
                        onChange={handleChange('pc')}
                        fullWidth
                        label="pc"
                        required
                    />
                    <TextField
                        id="fax"
                        value={contact.fax}
                        onChange={handleChange('fax')}
                        fullWidth
                        label="fax"
                        required
                    />
                </Stack>
            </div>
            <hr/>
            <div className='action'>
                <div className='btn' onClick={addContact}>
                    Update
                </div>
                <div className='btn btn-danger' onClick={onClose}>
                    Cancel
                </div>
            </div>
        </div>
    )

}
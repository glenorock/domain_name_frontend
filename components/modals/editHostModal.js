import React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

export default function EditHostModal({data, onSubmit, onClose}) {
    const [info,setInfo] = React.useState(data);
    
    const handleChange = (key) => (e) => {
        setInfo({...info, [key]: e.target.value});
    }
    return(
        <div className='modal box'>
            <div className='modal-body'>
                <Stack spacing={3} direction="column">
                    <TextField
                        id="name"
                        value={info.name}
                        onChange={handleChange('name')}
                        fullWidth
                        defaultValue={info.name}
                        required
                        disabled
                    />
                    <TextField
                        id="ver"
                        value={info.ver}
                        onChange={handleChange('ver')}
                        fullWidth
                        defaultValue={info.ver}
                        required
                        disabled
                    />
                    <TextField
                        id="name"
                        value={info.ip}
                        onChange={handleChange('ip')}
                        fullWidth
                        defaultValue={info.ip}
                        required
                    />
                </Stack>
            </div>
            <hr/>
            <div className='action'>
                <div className='btn' onClick={onSubmit}>
                    Save
                </div>
                <div className='btn btn-danger' onClick={onClose}>
                    Cancel
                </div>
            </div>
        </div>
    )
}
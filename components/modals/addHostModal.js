import React from 'react';
import TextField from '@mui/material/TextField';
import { DataGrid} from '@mui/x-data-grid';
import Stack from '@mui/material/Stack';
import { BiPlusCircle } from "react-icons/bi";
import MenuItem from '@mui/material/MenuItem';
import { 
    BiEditAlt,
    BiTrash
} from "react-icons/bi";
import { useTranslation } from 'react-i18next';

export default function AddHostModal({onClose}) {
    const [host, setHost] = React.useState({
        name: '',
        ip: [],
        tmp_ip: '',
        tmp_ver: 'v4',
    });
    const { t } = useTranslation();

    const handleChange = (key) => (event) => {
        event.preventDefault();
        setHost({
            ...host,
            [key]: event.target.value,
        })
    }
    
    const IPVersions = [
        {
            value:'v4',
            label:'IPV4'
        },
        {
            value:'v6',
            label:'IPV6'
        },
    ]

    const addAddr = (event) => {
        event.preventDefault();
        let addr = {
            id: Date.now(),
            addr: host.tmp_ip,
            ver: host.tmp_ver,
        }
        setTimeout(() => {
            setHost({
                ...host,
                ip: [addr, ...host.ip],
                tmp_ip: '',
                tmp_ver: 'v4',
            })
        })
    }

    const editAddr = (row) => (event) => {
        event.preventDefault();
        setTimeout(() => {
            setHost({
                ...host,
                tmp_ip: row.addr,
                tmp_ver: row.ver,
                ip: host.ip.filter(addr => addr.id !== row.id),
            })
        })
    }

    const removeAddr = (row) => (event) => {
        event.preventDefault();
        setTimeout(() => {
            setHost({
                ...host,
                ip: host.ip.filter(addr => addr.id !== row.id),
            })
        })
    }

    const addHost = (event) => {
        event.preventDefault();
        alert('add host');
        alert(JSON.stringify(host));
        onClose();
    }

    const AddrColumns = [
        { field: 'addr', headerName: 'IP Address' ,flex: 1},
        { field: 'ver', headerName: 'Version' ,flex: 0.3},
        {
            field: 'id',
            headerName: '',
            width:120, 
            sortable:false,
            renderCell: (params) => (
                <div className='action-cell'>
                    <div className='action-btn' onClick={editAddr(params.row)}>
                    <BiEditAlt/>
                    </div>
                    <div className='action-btn' onClick={removeAddr(params.row)}>
                    <BiTrash/>
                    </div>
                </div>
            ),   
        },
    ]
    return(
        <div className='modal box'>
            <div className='modal-body'>
                 <Stack
                    direction="column" 
                    spacing={3}
                >
                    <TextField
                        id="name"
                        value={host.name}
                        onChange={handleChange('name')}
                        fullWidth
                        label="name"
                        required
                    />  
                    <Stack
                        direction={(screen.width > 450 )?"row":"column"} 
                        spacing={2}
                    >
                        <TextField
                            id="ver"
                            value={host.tmp_ver}
                            onChange={handleChange('tmp_ver')}
                            label="Version"
                            select
                            sx={{width:((screen.width < 450 )?"100%":"30%")}}
                        >
                            {   
                                IPVersions.map((option) =>(
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))
                            }
                        </TextField>  
                        <TextField
                            id="ip"
                            value={host.tmp_ip}
                            onChange={handleChange('tmp_ip')}
                            sx={{width:((screen.width < 450 )?"100%":"50%")}}
                            label="IP Address"
                            fullWidth={(screen.width < 450 )}
                            required
                        />
                        <div className='icon' onClick={addAddr}>
                            <BiPlusCircle />
                        </div>
                    </Stack>
                    <div  style={{ height:300, width: '100%' }}>
                        <DataGrid
                            rowSpacingType="border"
                            rows={host.ip}
                            columns={AddrColumns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                        />
                    </div>
                </Stack>
            </div>
            <hr/>
            <div className='action'>
                <div className='btn' onClick={addHost}>
                    Save
                </div>
                <div className='btn btn-danger' onClick={onClose}>
                    Cancel
                </div>
            </div>
        </div>
    )
}
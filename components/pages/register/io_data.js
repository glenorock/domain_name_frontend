import * as React from 'react';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from '@mui/material/Tooltip';
import AddCircleIcon from '@mui/icons-material/AddCircle';


export const HostColumns = (editHost,removeHost,showHostModal) => {
    return [
        { field: 'name', headerName: 'Host name', flex: 1, },
        { field: 'version', headerName: 'Version' ,flex: 0.5},
        { field: 'addr', headerName: 'IP Address' ,flex: 1},
        {
            field: 'id',
            headerName: '',
            width:120, 
            sortable:false,
            renderCell: (params) => (
                <Stack
                    direction="row" 
                    spacing={2}
                >
                    <Tooltip title="edit">
                        <IconButton
                            onClick={editHost(params.row)}
                        >
                            <EditIcon color="primary"/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="delete">
                        <IconButton
                            onClick={removeHost(params.row)}
                        >
                            <DeleteIcon color="error"/>
                        </IconButton>
                    </Tooltip>
                </Stack>
            ),
            renderHeader: () => (
                <Tooltip title="Add Host">
                    <IconButton
                        onClick={showHostModal}
                    >
                        <AddCircleIcon color="primary"/>
                    </IconButton>
                </Tooltip>
                
              ) 
        },
    ]
}

export const AddrColumns = (editAddr,removeAddr) => {
    return [
        { field: 'addr', headerName: 'IP Address' ,flex: 1},
        { field: 'ver', headerName: 'Version' ,flex: 0.3},
        {
            field: 'id',
            headerName: '',
            width:120, 
            sortable:false,
            renderCell: (params) => (
                <Stack
                    direction="row" 
                    spacing={2}
                >
                    <Tooltip title="edit">
                        <IconButton
                            onClick={editAddr(params.row)}
                        >
                            <EditIcon color="primary"/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="delete">
                        <IconButton
                            onClick={removeAddr(params.row)}
                        >
                            <DeleteIcon color="error"/>
                        </IconButton>
                    </Tooltip>
                </Stack>
            ),   
        },
    ]
}

let tmp = require('../../../data/CountryCodes.json')
export const CountryCodes = tmp
 
export const IPVersions = [
    {
        value:'v4',
        label:'IPV4'
    },
    {
        value:'v6',
        label:'IPV6'
    },
]

export const ContactTypes = [
    {
        value:"Owner",
        label:"Owner"
    },
    {
        value:"Administrator",
        label:"Administrator"
    },
    {
        value:"Technician",
        label:"Technician"
    },
]

export const ContactColumns = (addContact,editContact,removeContact) =>{
    return [
        { field: 'type', headerName: 'Role', flex: 1, minWidth:150},
        { field: 'name', headerName: 'Full name', flex: 1, minWidth:150},
        { field: 'email', headerName: 'Email', flex: 1, minWidth:150},
        { field: 'cc', headerName: 'Country Code', flex: 1, minWidth:150},
        { field: 'city', headerName: 'City', flex: 1, minWidth:150},
        { field: 'tel', headerName: 'Telephone', flex: 1, minWidth:150},
        { field: 'org', headerName: 'Organisation', flex: 1, minWidth:150},
        { field: 'addr', headerName: 'Address', flex: 1, minWidth:150},
        { field: 'pc', headerName: 'Postal Code', flex: 1, minWidth:150},
        { field: 'fax', headerName: 'Fax', flex: 1, minWidth:150},
        { 
            field: 'id',
            headerName: '',
            width:120, 
            sortable:false,
            renderCell: (params) => (
                <Stack
                    direction="row" 
                    spacing={2}
                >
                    <Tooltip title="edit">
                        <IconButton
                            onClick={editContact(params.row)}
                        >
                            <EditIcon color="primary"/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="delete">
                        <IconButton
                            onClick={removeContact(params.row)}
                        >
                            <DeleteIcon color="error"/>
                        </IconButton>
                    </Tooltip>
                </Stack>
            ),
            renderHeader: () => (
                <Tooltip title="Add Host">
                    <IconButton
                        onClick={addContact}
                    >
                        <AddCircleIcon color="primary"/>
                    </IconButton>
                </Tooltip>
            )
        },
    ]
}
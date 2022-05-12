import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from '@mui/material/Tooltip';
import TextField from '@mui/material/TextField';
import { DataGrid} from '@mui/x-data-grid';
import Modal from '@mui/material/Modal';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Button from '@mui/material/Button';
const CountryCodes = require('../../../data/CountryCodes.json')

export default function DomainNameRegistrationForm(props){
    const [state,setState] = React.useState({
        activeStep:0,
        domain:props.domain,
        period:0,
        price:0,
        unitPrice:7000,
        contacts:[],
        hosts:[],
        goal:"",
    })
    const [hostModalState,setHostModalState] = React.useState({
        show:true,
        name:"",
        ip:[],
        tmpVersion:"v4",
        tmpIp:""
    })

    const ModalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

    const handleChange = (prop) => (event) => {
        setState({...state,[prop]:event.target.value})
    }

    const handleNext = () => {
        setState({
            ...state,
            activeStep: state.activeStep + 1
        })
    };

    const handleBack = () => {
        setState({
            ...state,
            activeStep: state.activeStep - 1
        })
    };

    // Page One Starts Here
    
    const pageOne = () =>{
        return(
            <Stack 
                direction="column" 
                spacing={2}
                sx={{ 
                    mb: 2 ,
                    display:'flex',
                    justifyContent:"center",
                    padding: "3%",
                    border:"solid 1px grey",
                    borderRadius:"10px",
                }}
            >   
                <TextField
                    id="domain"
                    value={state.domain}
                    onChange={handleChange('domain')}
                    fullWidth
                    defaultValue={state.domain}
                    InputProps={{
                        readOnly: true,
                    }}
                    disabled
                    label="Domain name"
                />
                <TextField
                    id="period"
                    value={state.period}
                    onChange={handleChange('period')}
                    fullWidth
                    type="number"
                    label="Number of years"
                />
                <TextField
                    id="price"
                    value={state.period * state.unitPrice}
                    onChange={handleChange('price')}
                    fullWidth
                    type="number"
                    disabled
                    label="Total Cost"
                />
                <TextField
                    id="goal"
                    value={state.goal}
                    onChange={handleChange('goal')}
                    fullWidth
                    multiline
                    label="Purpose/use of the domain name Cost"
                />
            </Stack>
        )
    }

    // Page two starts here

    const editHost = (host) => (event) => {
        setTimeout(() =>{
            let tmp = state.hosts.filter((row) => row.id !== host.id)
            tmp.push(host)
            setState({
                ...state,
                hosts: tmp
            })
        })
    }

    const removeHost = (host) => (event) => {
        setTimeout(() =>{
            setState({
                ...state,
                hosts: state.hosts.filter((row) => row.id !== host.id)
            })    
        })
    }

    const addAddr = (event) =>{
        let addr = {
            id: Date.now(),
            addr:hostModalState.tmpIp,
            ver:hostModalState.tmpVersion
        }
        
        setTimeout(() =>{
            setHostModalState({
                ...hostModalState,
                ip:[addr].concat(hostModalState.ip),
                tmpIp:"",
                tmpVersion:"v4"
            })
        })
    }

    const removeAddr = (row) => (event) =>{
        setTimeout(() =>{
            setHostModalState({
                ...hostModalState,
                ip: hostModalState.ip.filter((data) => data.id !== row.id)
            })  
        })
    }

    const editAddr = (row) => (event) =>{
        setTimeout(() =>{
            setHostModalState({
                ...hostModalState,
                tmpIp:row.addr,
                tmpVersion:row.ver,
                ip: hostModalState.ip.filter((data) => data.id !== row.id)
            })  
        })
    }

    const addHost = () =>{
        let hosts = []
        hostModalState.ip.forEach((addr) =>{
            let tmp = {
                id:addr.id,
                name:hostModalState.name,
                version:addr.ver,
                addr:addr.addr,
            }
            hosts.push(tmp)
        })
        hosts = hosts.concat(state.hosts)
        setState({
            ...state,
            hosts:hosts
        })
        cancelAddHostModal()
    }

    const cancelAddHostModal = () =>{
        setTimeout(() =>{
            setHostModalState({
                ...hostModalState,
                show:false,
                name:"",
                ip:[],
                tmpVersion:"v4",
                tmpIp:""
            })    
        })
    }

    const HostColumns = [
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
                        onClick={() =>{
                            setHostModalState({
                                ...hostModalState,
                                show:true
                            })
                        }}
                    >
                        <AddCircleIcon color="primary"/>
                    </IconButton>
                </Tooltip>
                
              ) 
        },
    ]

    const AddrColumns = [
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

    const pageTwo = () =>{
        return(
            <div style={{ height:400, width: '100%' }}>
                <DataGrid
                    rowSpacingType="border"
                    rows={state.hosts}
                    columns={HostColumns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                />
                 <Modal
                    open={hostModalState.show}
                    onClose={cancelAddHostModal}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={ModalStyle}>
                        <Stack
                            direction="column" 
                            spacing={2}
                            sx={{ 
                                mb: 2 ,
                                display:'flex',
                                justifyContent:"center",
                                padding: "3%",
                                borderRadius:"10px",
                            }}
                        >
                            <TextField
                                id="hostname"
                                value={hostModalState.name}
                                onChange={(event) =>{
                                    setHostModalState({
                                        ...hostModalState,
                                        name:event.target.value
                                    })
                                }}
                                fullWidth
                                label="name"
                            />  
                            <Stack
                                direction={(screen.width > 450 )?"row":"column"} 
                                spacing={2}
                            >
                                <TextField
                                    id="tmp-ver"
                                    value={hostModalState.tmpVersion}
                                    onChange={(event) =>{
                                        setHostModalState({
                                            ...hostModalState,
                                            tmpVersion:event.target.value
                                        })
                                    }}
                                    label="Version"
                                    fullWidth={(screen.width < 450 )}
                                />  
                                <TextField
                                    id="tmp-ip"
                                    value={hostModalState.tmpIp}
                                    onChange={(event) =>{
                                        setHostModalState({
                                            ...hostModalState,
                                            tmpIp:event.target.value
                                        })
                                    }}
                                    label="IP Address"
                                    fullWidth={(screen.width < 450 )}
                                />
                                <IconButton
                                    onClick={addAddr}
                                >
                                    <AddCircleIcon color="primary"/>
                                </IconButton>
                            </Stack>
                            <div  style={{ height:300, width: '100%' }}>
                                <DataGrid
                                    rowSpacingType="border"
                                    rows={hostModalState.ip}
                                    columns={AddrColumns}
                                    pageSize={5}
                                    rowsPerPageOptions={[5]}
                                />
                            </div>
                            <Box sx={{ 
                                mb: 2 ,
                                display:'flex',
                                justifyContent:"center",
                            }}>
                                <Button
                                    color="error"
                                    variant="contained"
                                    onClick={cancelAddHostModal}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    color="primary"
                                    variant="contained"
                                    onClick={addHost}
                                >
                                    Save
                                </Button>
                            </Box>
                        </Stack>
                    </Box>
                </Modal>
            </div>
        )
    }

    const pageThree = () =>{
        return(
            <div>
                Page 3        
            </div>
        )
    }

    const pageFour  = () =>{
        return(
            <div>
                Page 4        
            </div>
        )
    }

    const finishedPage = () =>{
        return(<div>
            finished
        </div>)
    }

    const displayContent = () =>{
        switch(state.activeStep){
            case 0:
                return pageOne()
            case 1: 
                return pageTwo()
            case 2:
                return pageThree()
            case 3:
                return pageFour()
            default:
                return finishedPage()
        }
    }

    const steps = [
        'Domain information',
        'Host information',
        'Contact information',
        'Payment'
    ];

    const displayStepNavigation = () =>{
        return(
            <Box sx={{ 
                mb: 2 ,
                display:'flex',
                justifyContent:"center",
            }}>
                <IconButton 
                    disabled={state.activeStep === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                    color="primary" 
                >
                    <NavigateBeforeIcon/>
                    Previous
                </IconButton>
                <IconButton 
                    color="primary"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                    disabled={state.activeStep >= steps.length}
                >
                    {state.activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    <NavigateNextIcon/>
                </IconButton>
            </Box>
        )
    }
    
    return (
        <Box sx={{ width: '100%' }}>
            <Stack direction="column" spacing={2}>
                <Stepper activeStep={state.activeStep} alternativeLabel>
                    {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                    ))}
                </Stepper>
                {displayContent()}
                {displayStepNavigation()}
            </Stack>
        </Box>
      );
}
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import TextField from '@mui/material/TextField';
import { DataGrid} from '@mui/x-data-grid';
import Modal from '@mui/material/Modal';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import * as IO_DATA from './io_data';
import * as Styles from '../styles'
import { Tooltip } from '@mui/material';

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
        show:false,
        name:"",
        ip:[],
        tmpVersion:"v4",
        tmpIp:""
    })

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
                    required
                    disabled
                    label="Domain name"
                />
                <TextField
                    id="period"
                    value={state.period}
                    onChange={handleChange('period')}
                    fullWidth
                    required
                    type="number"
                    label="Number of years"
                />
                <TextField
                    id="price"
                    value={state.period * state.unitPrice}
                    onChange={handleChange('price')}
                    fullWidth
                    required
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
                    required
                    label="Purpose/use of the domain name Cost"
                />
            </Stack>
        )
    }

    // Page two starts here
    
    const editHost = (host) => (event) => {
        setTimeout(() =>{
            let hosts = state.hosts.filter((row) => row.name === host.name)
            let addrs = []
            hosts.forEach((ele) =>{
                let tmp = {
                    id:ele.id,
                    addr:ele.addr,
                    ver:ele.version,
                }
                addrs.push(tmp)
            })
            console.log(addrs)
            setHostModalState({
                show:true,
                name:host.name,
                ip:addrs,
                tmpVersion:"v4",
                tmpIp:""
            })
            setState({
                ...state,
                hosts: state.hosts.filter((row) => row.name !== host.name)
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

    const showHostModal = () =>{
        setHostModalState({
            ...hostModalState,
            show:true
        })
    }
    
    const pageTwo = () =>{
        return(
            <div style={{ height:400, width: '100%' }}>
                <DataGrid
                    rowSpacingType="border"
                    rows={state.hosts}
                    columns={IO_DATA.HostColumns(editHost,removeHost,showHostModal)}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                />
                 <Modal
                    open={hostModalState.show}
                    onClose={cancelAddHostModal}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={Styles.ModalStyle}>
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
                                required
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
                                    select
                                    sx={{width:((screen.width < 450 )?"100%":"30%")}}
                                >
                                    {   
                                        IO_DATA.IPVersions.map((option) =>(
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))
                                    }
                                </TextField>  
                                <TextField
                                    id="tmp-ip"
                                    value={hostModalState.tmpIp}
                                    onChange={(event) =>{
                                        setHostModalState({
                                            ...hostModalState,
                                            tmpIp:event.target.value
                                        })
                                    }}
                                    sx={{width:((screen.width < 450 )?"100%":"50%")}}
                                    label="IP Address"
                                    fullWidth={(screen.width < 450 )}
                                    required
                                />
                                <IconButton
                                    sx={{width:((screen.width < 450 )?"100%":"10%")}}
                                    onClick={addAddr}
                                    color="primary"
                                    disabled={((hostModalState.name === "") || (hostModalState.tmpIp === "") || (hostModalState.tmpVersion === ""))?true:false}
                                >
                                    <AddCircleIcon />
                                </IconButton>
                            </Stack>
                            <div  style={{ height:300, width: '100%' }}>
                                <DataGrid
                                    rowSpacingType="border"
                                    rows={hostModalState.ip}
                                    columns={IO_DATA.AddrColumns(editAddr,removeAddr)}
                                    pageSize={5}
                                    rowsPerPageOptions={[5]}
                                />
                            </div>
                            <Box sx={{ 
                                mb: 2 ,
                                display:'flex',
                                justifyContent:"flex-end",
                            }}>
                                <Box>
                                    <Button
                                        color="error"
                                        variant="contained"
                                        onClick={cancelAddHostModal}
                                        width={100}
                                        sx={{margin:"0px 5px"}}
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        color="primary"
                                        variant="contained"
                                        onClick={addHost}
                                        sx={{margin:"0px 5px"}}
                                        disabled={(hostModalState.ip.length === 0)?true:false}
                                    >
                                        Save
                                    </Button>
                                </Box>
                            </Box>
                        </Stack>
                    </Box>
                </Modal>
            </div>
        )
    }

    // Page 3 Starts here 

    const [contactModalState,setContactModalSate] = React.useState({
        //name:"",
        //org:"",
        addr:[],
        city:"",
        pc:"",
        cc:"",
        //tel:"",
        fax:"",
        //email:"",
        //type:"",
        show:true
    })

    const handleChangeContactModal = (props) => (event) =>{
        setContactModalSate({
            ...contactModalState,
            [props]:event.target.value
        })
    }
    
    const closeContactModal = () =>{
        setContactModalSate({
            ...contactModalState,
            show:false
        })
    }

    const openContactModal = () =>{
        setContactModalSate({
            ...contactModalState,
            show:true
        })
    }

    const contactModal = () =>{
        return(
            <Modal
                open={contactModalState.show}
                onClose={closeContactModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={Styles.ModalStyle}>
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
                            id="contact_type"
                            onChange={handleChangeContactModal("type")}
                            fullWidth
                            label="Role"
                            required
                            select
                        >
                            {
                                IO_DATA.ContactTypes.map((option) =>(
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))
                            }
                        </TextField>
                        <TextField
                            id="contact_name"
                            value={contactModalState.name}
                            onChange={handleChangeContactModal("name")}
                            fullWidth
                            label="Full name"
                            required
                        />
                        <TextField
                            id="contact_org"
                            value={contactModalState.org}
                            onChange={handleChangeContactModal("org")}
                            fullWidth
                            label="Organisation"
                            required
                        />
                        <TextField
                            id="contact_email"
                            value={contactModalState.email}
                            onChange={handleChangeContactModal("email")}
                            fullWidth
                            type="email"
                            label="Email"
                            required
                        />
                        <TextField
                            id="contact_tel"
                            value={contactModalState.tel}
                            onChange={handleChangeContactModal("tel")}
                            fullWidth
                            type="number"
                            label="Telephone number"
                            required
                        />
                        <TextField
                            id="contact_cc"
                            value={contactModalState.name}
                            onChange={handleChangeContactModal("cc")}
                            fullWidth
                            label="full name"
                            required
                            select
                        >
                            {
                                IO_DATA.CountryCodes.map(
                                    (option) =>(
                                        <MenuItem key={option.code} value={option.code}>
                                            {option.name}
                                        </MenuItem>
                                    )
                                )
                            }
                        </TextField>
                            
                    </Stack>
                </Box>
                        
            </Modal>
        )
    }
    


    const pageThree = () =>{
        return(
            <div style={{ height:400, width: '100%' }}>
                {contactModal()}       
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
                    onClick={handleBack}
                    sx={{ 
                        mt: 1,
                        mr: 1,
                        visibility: (state.activeStep === 0)?"hidden":"visible", 
                    }}
                    color="primary" 
                >
                    <NavigateBeforeIcon/>
                    Previous
                </IconButton>
                <IconButton 
                    color="primary"
                    onClick={handleNext}
                    sx={{ 
                        mt: 1, 
                        mr: 1,
                        visibility: (state.activeStep >= steps.length)?"hidden":"visible", 
                    }}
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
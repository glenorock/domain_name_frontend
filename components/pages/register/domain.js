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
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Autocomplete from '@mui/material/Autocomplete';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Loader from '../../Loader';
import Router from 'next/router';

import PaymentModal from '../../modals/paymentModal';
import * as IO_DATA from './io_data';
import * as Styles from '../styles';
import * as URLS from '../urls';
import * as EPPController from '../../../lib/EppController';

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
        password:"",
        showPassword:false,
    })
    const [hostModalState,setHostModalState] = React.useState({
        show:true,
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

    const togglePasswordVisibility = () =>{
        setState({
            ...state,
            showPassword:!state.showPassword
        })
    }

    // Page One Starts Here
    
    const pageOne = () =>{
        return(
            <div style={{ height:400, width: '100%' }}>
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
                        placeholder='Domain name'
                    />
                    <OutlinedInput
                        id="password"
                        type={state.showPassword?"text":"password"}
                        value={state.password}
                        onChange={handleChange('password')}
                        fullWidth
                        label="password"
                        placeholder='password'
                        notched
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="search button"
                                    onClick={togglePasswordVisibility}
                                    edge="end"
                                >
                                    {
                                        state.showPassword?(<VisibilityOffIcon/>):(<VisibilityIcon/>)
                                    }
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                    <TextField
                        id="goal"
                        value={state.goal}
                        onChange={handleChange('goal')}
                        fullWidth
                        multiline
                        required
                        minRows={4}
                        label="Purpose/use of the domain name Cost"
                    />
                </Stack>
            </div>
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
        setTimeout(() =>{
            setHostModalState({
                ...hostModalState,
                show:true
            })
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
        name:"",
        org:"",
        addr:"",
        city:"",
        pc:"",
        cc:"",
        tel:"",
        fax:"",
        email:"",
        type:"",
        show:false
    })
    const [registrant, setRegistrant] = React.useState({
        id: "",
        postalInfo: {
            int: {
                name: "",
                org: "",
                addr: {
                    street: [
                    ],
                    city: "",
                    sp: "",
                    pc: "",
                    cc: ""
                }
            }
        },
        voice: "",
        fax: "",
        email: ""
    })
    const [adminContact, setAdminContact] = React.useState({
        id: "",
        postalInfo: {
            int: {
                name: "",
                org: "",
                addr: {
                    street: [
                    ],
                    city: "",
                    sp: "",
                    pc: "",
                    cc: ""
                }
            }
        },
        voice: "",
        fax: "",
        email: ""
    })
    const [techContact, setTechContact] = React.useState({
        id: "",
        postalInfo: {
            int: {
                name: "",
                org: "",
                addr: {
                    street: [
                    ],
                    city: "",
                    sp: "",
                    pc: "",
                    cc: ""
                }
            }
        },
        voice: "",
        fax: "",
        email: ""
    })
    const [billContact, setBillContact] = React.useState({
        id: "",
        postalInfo: {
            int: {
                name: "",
                org: "",
                addr: {
                    street: [
                    ],
                    city: "",
                    sp: "",
                    pc: "",
                    cc: ""
                }
            }
        },
        voice: "",
        fax: "",
        email: ""
    })
    

    const handleChangeContactModal = (props) => (event) =>{
        setContactModalSate({
            ...contactModalState,
            [props]:event.target.value
        })
    }
    
    const closeContactModal = () =>{
        setTimeout(() =>{
            setContactModalSate({
                ...contactModalState,
                name:"",
                org:"",
                addr:"",
                city:"",
                pc:"",
                cc:"",
                tel:"",
                fax:"",
                email:"",
                type:"",
                show:false
            })
        })
    }

    const openContactModal = (type) => () =>{
        
        setContactModalSate({
            ...contactModalState,
            show:true,
            type:type
        })
    }

    const addContact = () =>{
        let contact = {
            id: contactModalState.email.replaceAll(".","").replaceAll("@",""),
            postalInfo: {
                int: {
                    name: contactModalState.name,
                    org: contactModalState.org,
                    addr: {
                        street: [
                            contactModalState.addr
                        ],
                        city: contactModalState.city,
                        sp: "",
                        pc: contactModalState.pc,
                        cc: contactModalState.cc
                    }
                }
            },
            voice: contactModalState.tel,
            fax: contactModalState.fax,
            email: contactModalState.email
        }
        if (contactModalState.type === 'Admin'){
            setAdminContact(contact)
        }else if (contactModalState.type === 'Tech') {
            setTechContact(contact)
        }else if (contactModalState.type === 'Bill') {
            setBillContact(contact)
        }else if (contactModalState.type === 'Registrant') {
            setRegistrant(contact)
        }else {
            let tmp= [contact].concat(state.contacts)
            setTimeout(() =>{
                setState({
                    ...state,
                    contacts:tmp
                })
            })
        }
        closeContactModal()
    }

    const contactModal = () =>{
        return(
            <Modal
                open={contactModalState.show}
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
                            value={contactModalState.type}
                            onChange={handleChangeContactModal("type")}
                            fullWidth
                            label="Role"
                            required
                            disabled
                        />
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
                            // type="number"
                            label="Telephone number"
                            required
                        />
                        <Autocomplete
                            id="contact_cc"
                            options={IO_DATA.CountryCodes}
                            autoHighlight
                            onChange={(event,value,reason) =>{
                                setContactModalSate({
                                    ...contactModalState,
                                    cc:value?value.code:""
                                })
                            }}
                            inputValue={contactModalState.cc}
                            getOptionLabel={(option) => option.code}
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
                                label="Country"
                                inputProps={{
                                    ...params.inputProps,
                                    autoComplete: 'new-password', // disable autocomplete and autofill
                                }}
                                />
                            )}
                        />
                        <TextField
                            id="contact_city"
                            value={contactModalState.city}
                            onChange={handleChangeContactModal("city")}
                            fullWidth
                            label="City"
                        />
                        <TextField
                            id="contact_addr"
                            value={contactModalState.addr}
                            onChange={handleChangeContactModal("addr")}
                            fullWidth
                            label="Street address"
                        />
                        <TextField
                            id="contact_pc"
                            value={contactModalState.pc}
                            onChange={handleChangeContactModal("pc")}
                            fullWidth
                            label="Postal Code"
                        />
                        <TextField
                            id="contact_fax"
                            value={contactModalState.fax}
                            onChange={handleChangeContactModal("fax")}
                            fullWidth
                            label="Fax"
                        />
                        <Box sx={{ 
                            mb: 2 ,
                            display:'flex',
                            justifyContent:"flex-end",
                        }}>
                            <Box>
                                <Button
                                    color="error"
                                    variant="contained"
                                    onClick={closeContactModal}
                                    width={100}
                                    sx={{margin:"0px 5px"}}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    color="primary"
                                    variant="contained"
                                    onClick={addContact}
                                    sx={{margin:"0px 5px"}}
                                >
                                    Save
                                </Button>
                            </Box>
                        </Box>
                    </Stack>
                        
                </Box>
                        
            </Modal>
        )
    }

    
    const clearContact = (seter) => (event) => {
        seter(
            {
                id: "",
                postalInfo: {
                    int: {
                        name: "",
                        org: "",
                        addr: {
                            street: [
                            ],
                            city: "",
                            sp: "",
                            pc: "",
                            cc: ""
                        }
                    }
                },
                voice: "",
                fax: "",
                email: ""
            }
        )
    }

    const useReg = (seter) => (event) => {
        seter({
            ...registrant
        })
    }
    const useAdmin = (seter) => (event) => {
        seter({
            ...adminContact
        })
    }
    const useTech = (seter) => (event) => {
        seter({
            ...techContact
        })
    }
    
    const pageThree = () =>{
        return(
            <div style={{ height:400, width: '100%', /*padding:" 0px 30% 0px 0px "*/}}>
                {/* <DataGrid
                    rowSpacingType="border"
                    rows={state.contacts}
                    columns={IO_DATA.ContactColumns(openContactModal,editContact,removeContact)}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                /> */}
                {contactModal()}
                <List>
                <ListItem
                    secondaryAction={
                        <>
                            <IconButton edge="end" aria-label="delete" onClick={openContactModal('Registrant')}>
                                <EditIcon />
                            </IconButton>
                            <IconButton edge="end" aria-label="delete" onClick={clearContact(setRegistrant)}>
                                <DeleteIcon />
                            </IconButton>
                            
                        </>
                    }
                >
                  <ListItemText
                    primary="Registrant Contact*"
                    secondary={registrant.email?`${registrant.postalInfo.int.name}(${registrant.email})`:""}
                  />
                </ListItem>
                <ListItem
                    secondaryAction={
                        <>
                            <a href='#' className='form-link' onClick={useReg(setAdminContact)}>
                                Registrant
                            </a>
                            <IconButton edge="end" aria-label="delete" onClick={openContactModal('Admin')}>
                                <EditIcon />
                            </IconButton>
                            <IconButton edge="end" aria-label="delete" onClick={clearContact(setAdminContact)}>
                                <DeleteIcon />
                            </IconButton>
                            
                        </>
                    }
                >
                  <ListItemText
                    primary="Administratif Contact*"
                    secondary={adminContact.postalInfo.int.name?`${adminContact.postalInfo.int.name}(${adminContact.email})`:""}
                  />
                </ListItem>
                <ListItem
                    secondaryAction={
                        <>
                            <a href='#' className='form-link' onClick={useReg(setTechContact)}>
                                Registrant
                            </a>
                            <span> </span>
                            <a href='#' className='form-link' onClick={useAdmin(setTechContact)}>
                                Admin
                            </a>
                            <IconButton edge="end" aria-label="delete" onClick={openContactModal('Tech')}>
                                <EditIcon />
                            </IconButton>
                            <IconButton edge="end" aria-label="delete" onClick={clearContact(setTechContact)}>
                                <DeleteIcon />
                            </IconButton>
                            
                        </>
                    }
                >
                  <ListItemText
                    primary="Technical Contact*"
                    secondary={techContact.email?`${techContact.postalInfo.int.name}(${techContact.email})`:""}
                  />
                </ListItem>
                <ListItem
                    secondaryAction={
                        <>
                            <a href='#' className='form-link' onClick={useReg(setBillContact)}>
                                Registrant
                            </a>
                            <span> </span>
                            <a href='#' className='form-link' onClick={useAdmin(setBillContact)}>
                                Admin
                            </a>
                            <span> </span>
                            <a href='#' className='form-link' onClick={useTech(setBillContact)}>
                                Tech
                            </a>
                            <IconButton edge="end" aria-label="delete" onClick={openContactModal('Bill')}>
                                <EditIcon />
                            </IconButton>
                            <IconButton edge="end" aria-label="delete" onClick={clearContact(setBillContact)}>
                                <DeleteIcon />
                            </IconButton>
                            
                        </>
                    }
                >
                  <ListItemText
                    primary="Billing Contact*"
                    secondary={billContact.email?`${billContact.postalInfo.int.name}(${billContact.email})`:""}
                  />
                </ListItem>
            </List>
            </div>
        )
    }

    // This page is provided once the form is completely filled.
    const [paymentInfo,setPaymentInfo] = React.useState({
        motif:"Registration of a domain name",
        showModal: true,
        paid: false,
        completed: false
    })

    const [regState,setRegState] = React.useState({
        loading:false,
        registered:false
    })
    
    const register = async () => {
        let data = {
            domain:{
                name : state.domain + ".cm",
                period : 1,
                registrant : registrant.id,
                contacts : {
                  tech : techContact.id,
                  admin : adminContact.id,
                  billing : billContact.id
                },
                ns : Array.from(state.hosts,x => x.name)
              },
            contacts: [adminContact,techContact,billContact,registrant],
            ns: state.hosts,
            name:state.domain
        }
        console.log(data)
        setRegState({loading:true})
        let response = await EPPController.register(data)
        console.log(response)
        setRegState({loading:false,registered:true})
    }
    const setPaid = (val) => {
        setPaymentInfo({
            ...paymentInfo,
            paid:val,
            completed: true,
            showModal: false
        })
    }

    const closePaymentModal = () => {
        setPaymentInfo({
            ...paymentInfo,
            showModal: false
        })
    }

    const openPaymentModal = () => {
        setPaymentInfo({
            ...paymentInfo,
            showModal: true
        })
    }
    const goToHomePage = () => {
        alert("Domain name registered")
        Router.replace('/')
    }
    const finishedPage = () =>{
        return(
            <div style={{ height:400, width: '100%' }}>
                <PaymentModal 
                    show={paymentInfo.showModal} 
                    motif={paymentInfo.motif} 
                    onClose={closePaymentModal}
                    setPaid={setPaid}
                />
                {
                    paymentInfo.completed?(
                        <>
                            {
                                paymentInfo.paid?(
                                    <>
                                        {regState.loading?(
                                            <>
                                                <Loader height={300}/>
                                            </>
                                        ):(
                                            <>
                                            {regState.registered?(
                                                <>
                                                    {goToHomePage()}
                                                </>
                                            ):(
                                                <div className='center underline-link'>
                                                    <a href='#' onClick={register}>Procceed to Registration</a>
                                                </div>
                                            )}
                                        </>
                                        )}
                                    </>
                                ):(
                                    <>
                                        <div className='center underline-link red'>
                                            <a href='#' onClick={register}>Payment Rejected</a>
                                        </div>
                                    </>
                                )
                            }
                        </>
                    ) : (
                        <>
                            <div className='center'>
                                <span onClick={openPaymentModal}>Procceed to payment</span>
                            </div> 
                        </>
                    )
                }
            </div>
        )
    }

    const displayContent = () =>{
        switch(state.activeStep){
            case 0:
                return pageOne()
            case 1: 
                return pageTwo()
            case 2:
                return pageThree()
            default:
                return finishedPage()
        }
    }

    const steps = [
        'Domain information',
        'Name servers',
        'Contacts',
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
                    {state.activeStep === steps.length - 1 ? 'Submit' : 'Next'}
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
import React, {
    useState
} from "react";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
export default function RegistrationForm({name}) {
    const [domain, setDomain] = useState({
        name: name + ".cm",
        period: "",
        ns: [
            {
                name : "ns1.example.cm",
                addrs : [
                    { ip :"123.45.67.89", version : "v4" },
                    { ip : "98.76.54.32", version : "v4" }
                ]
            },
            {
                name : "ns1.example.cm",
                addrs : [
                    { ip :"123.45.67.89", version : "v4" },
                    { ip : "98.76.54.32", version : "v4" }
                ]
            },
        ],
        password:"",
        showPassword:false,
        goal:""
    })
    const [registrant, setRegistrant] = useState({
        id: "",
        postalInfo: {
            int: {
                name: "",
                org: "",
                addr: {
                    street: [],
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
    const [adminContact, setAdminContact] = useState({
        id: "",
        postalInfo: {
            int: {
                name: "",
                org: "",
                addr: {
                    street: [],
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

    const [techContact, setTechContact] = useState({
        id: "",
        postalInfo: {
            int: {
                name: "",
                org: "",
                addr: {
                    street: [],
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

    const [billingContact, setBillingContact] = useState({
        id: "",
        postalInfo: {
            int: {
                name: "",
                org: "",
                addr: {
                    street: [],
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

    const [ns, setNs] = useState({
        name: "",
        addrs: {
            ip: "",
            version: ""
        }
    })


    const [showHostModal,setShowHostModal] = useState(false)
    const [showContactModal,setShowContactModal] = useState({
        show:false,
        type:''
    })
    
    const openContactModal = (type) => () => {
        setShowContactModal({
            show:true,
            type:type
        })
    }

    const closeContactModal = () => {
        setShowContactModal({
            show:false,
            type:''
        })
    }

    const openHostModal = () => {
        setShowHostModal(true)
    }

    const closeHostModal = () => {
        setShowHostModal(false)
    }

    const hostModalComponent = (ns) => {
        return(
            <div>
                Host Modal
            </div>
        )
    }
    const contactModalComponent = (setter) => {
        return(
            <div>
                Contact Modal
            </div>
        )
    }
    const submit = () => {
        alert("submit")
    }
    const cancel = () => {
        alert("cancel")
    }
    const togglePasswordVisibility = () => {
        setDomain({
            ...domain,
            showPassword: !domain.showPassword
        })
    }
    return ( 
        <div className="reg">
            <div className="box form">
                <TextField
                    value={domain.name}
                    fullWidth
                    disabled
                />
                <TextField
                    value={domain.period}
                    placeholder="Number of years*"
                    fullWidth
                    type='number'
                    onChange={(e) => {
                        setDomain({
                            ...domain,
                            period: e.target.value
                        })
                    }}
                />
                <OutlinedInput
                    id="password"
                    type={domain.showPassword?"text":"password"}
                    value={domain.password}
                    onChange={(e) => {
                        setDomain({
                            ...domain,
                            password: e.target.value
                        })
                    }}
                    fullWidth
                    placeholder="password*"
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="search button"
                                onClick={togglePasswordVisibility}
                                edge="end"
                            >
                                {
                                    domain.showPassword?(<VisibilityOffIcon/>):(<VisibilityIcon/>)
                                }
                            </IconButton>
                        </InputAdornment>
                    }
                />
                <Accordion className="accordion">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="alternative-panel-header"
                    >
                        <div className="div">
                            Registrant's Contact*
                            <div className="action">
                                <div>
                                    <EditIcon />
                                </div>
                                <div>
                                    <CheckCircleIcon 
                                        sx={{color: '#198754'}}
                                    />
                                </div>

                            </div>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails className="details">
                        <table>
                            <tr>
                                <td>
                                    Name
                                </td>
                                <td>
                                    {registrant.postalInfo.int.name}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                Organisation
                                </td>
                                <td>
                                {registrant.postalInfo.int.name}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                Adresse
                                </td>
                                <td>
                                {registrant.postalInfo.int.addr.street.join(", ")}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                City
                                </td>
                                <td>
                                {registrant.postalInfo.int.addr.city}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                Postal Code
                                </td>
                                <td>
                                {registrant.postalInfo.int.addr.pc}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                Country
                                </td>
                                <td>
                                {registrant.postalInfo.int.addr.cc}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                Telephone
                                </td>
                                <td>
                                {registrant.voice}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                Fax
                                </td>
                                <td>
                                {registrant.fax}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                Email
                                </td>
                                <td>
                                {registrant.email}
                                </td>
                            </tr>
                            
                        </table>
                    </AccordionDetails>
                </Accordion>
                <Accordion className="accordion">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="alternative-panel-header"
                    >
                        <div className="div">
                        Administrator's contact*
                            <div className="action">
                                <div>
                                    Registrant
                                </div>
                                <div>
                                    <EditIcon />
                                </div>
                                
                                <div>
                                    <CheckCircleIcon 
                                        sx={{color: '#198754'}}
                                    />
                                </div>

                            </div>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails className="details">
                        <table>
                            <tr>
                                <td>
                                    Name
                                </td>
                                <td>
                                    {adminContact.postalInfo.int.name}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                Organisation
                                </td>
                                <td>
                                {adminContact.postalInfo.int.org}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                Adresse
                                </td>
                                <td>
                                {adminContact.postalInfo.int.addr.street.join(", ")}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                City
                                </td>
                                <td>
                                {adminContact.postalInfo.int.addr.city}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                Postal Code
                                </td>
                                <td>
                                {adminContact.postalInfo.int.addr.pc}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                Country
                                </td>
                                <td>
                                {adminContact.postalInfo.int.addr.cc}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                Telephone
                                </td>
                                <td>
                                {adminContact.voice}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                Fax
                                </td>
                                <td>
                                {adminContact.fax}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                Email
                                </td>
                                <td>
                                {adminContact.email}
                                </td>
                            </tr>
                            
                        </table>
                    </AccordionDetails>
                </Accordion>
                <Accordion className="accordion">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="alternative-panel-header"
                    >
                        <div className="div">
                        Technician's contact*
                            <div className="action">
                                <div>
                                    Registrant
                                </div>
                                <div>
                                    Admin
                                </div>
                                
                                <div>
                                    <EditIcon />
                                </div>
                                <div>
                                    <CheckCircleIcon 
                                        sx={{color: '#198754'}}
                                    />
                                </div>

                            </div>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails className="details">
                        <table>
                            <tr>
                                <td>
                                    Name
                                </td>
                                <td>
                                    {techContact.postalInfo.int.name}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                Organisation
                                </td>
                                <td>
                                {techContact.postalInfo.int.org}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                Adresse
                                </td>
                                <td>
                                {techContact.postalInfo.int.addr.street.join(", ")}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                City
                                </td>
                                <td>
                                {techContact.postalInfo.int.addr.city}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                Postal Code
                                </td>
                                <td>
                                {techContact.postalInfo.int.addr.pc}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                Country
                                </td>
                                <td>
                                {techContact.postalInfo.int.addr.cc}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                Telephone
                                </td>
                                <td>
                                {techContact.voice}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                Fax
                                </td>
                                <td>
                                {techContact.fax}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                Email
                                </td>
                                <td>
                                {techContact.email}
                                </td>
                            </tr>
                            
                        </table>
                    </AccordionDetails>
                </Accordion>
                <Accordion className="accordion">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="alternative-panel-header"
                        className="accordion-summary"
                    >
                        <div className="div">
                        Billing contact*
                            <div className="action">
                                <div>
                                    Registrant
                                </div>
                                <div>
                                    Admin
                                </div>
                                <div>
                                    Tech
                                </div>
                                <div>
                                    <EditIcon />
                                </div>
                                <div>
                                    <CheckCircleIcon 
                                        sx={{color: '#198754'}}
                                    />
                                </div>

                            </div>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails className="details">
                        <table>
                            <tr>
                                <td>
                                    Name
                                </td>
                                <td>
                                    {billingContact.postalInfo.int.name}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                Organisation
                                </td>
                                <td>
                                {billingContact.postalInfo.int.org}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                Adresse
                                </td>
                                <td>
                                {billingContact.postalInfo.int.addr.street.join(", ")}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                City
                                </td>
                                <td>
                                {billingContact.postalInfo.int.addr.city}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                Postal Code
                                </td>
                                <td>
                                {billingContact.postalInfo.int.addr.pc}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                Country
                                </td>
                                <td>
                                {billingContact.postalInfo.int.addr.cc}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                Telephone
                                </td>
                                <td>
                                {billingContact.voice}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                Fax
                                </td>
                                <td>
                                {billingContact.fax}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                Email
                                </td>
                                <td>
                                {billingContact.email}
                                </td>
                            </tr>
                            
                        </table>
                    </AccordionDetails>
                </Accordion>
                <Accordion className="accordion">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="alternative-panel-header"
                    >
                        <div className="div">
                        DNS servers*
                            <div className="action">
                                <div>
                                    <EditIcon />
                                </div>
                                <div>
                                    <CheckCircleIcon 
                                        sx={{color: '#198754'}}
                                    />
                                </div>

                            </div>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails className="details">
                        <table>
                            {
                                domain.ns.map((ele) => {
                                    return(
                                        <>
                                        <tr>
                                            <td rowSpan={ele.addrs.length}> {ele.name}</td>      
                                        </tr>
                                        <tr>
                                            {
                                                ele.addrs.map((a) => {
                                                    return(
                                                        <tr>
                                                            <td>
                                                                {a.ip}
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tr>
                                        <tr className="sep">
                                        </tr>
                                        </>
                                    )

                                })
                            }
                        </table>
                    </AccordionDetails>
                </Accordion>
                
                <TextField
                    value={domain.goal}
                    placeholder="Purpose/Use"
                    fullWidth
                    multiline
                    minRows={4}
                    maxRows={8}
                    onChange={(e) => {
                        setDomain({
                            ...domain,
                            goal: e.target.value
                        })
                    }}
                />
            </div>
            <div className="box action">
                <div className="btn" onClick={submit}>
                    Submit
                </div>
                <div className="btn btn-danger" onClick={cancel}>
                    Cancel
                </div>
            </div>
            <div>
                {/* Modals */}
                {hostModalComponent()}
                {contactModalComponent()}
            </div>
        </div>
    )
}
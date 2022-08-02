import React, {
    useState
} from "react";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function RegistrationForm({name}) {
    const [domain, setDomain] = useState({
        name: name + ".cm",
        period: "",
        ns: [],
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
                    placeholder="Number of years"
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
                    placeholder="password"
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
                <div className="div">
                    Registrant's contact
                    <div className="action">
                        Test
                    </div>
                </div>
                <div className="div">
                    Administrator's contact
                </div>
                <div className="div">
                    Technician's contact
                </div>
                <div className="div">
                    Billing contact
                </div>
                <div className="div">
                    DNS servers
                </div>
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
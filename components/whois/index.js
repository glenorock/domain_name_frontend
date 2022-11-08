import React, { useState } from "react";
import { 
        InputAdornment,
        IconButton,
        OutlinedInput,
        FormControl,
        Backdrop,
        CircularProgress,
        Stack,
        Alert,
        AlertTitle,
        Collapse,
        Button
    } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RegistrationModal from '../modals/RegistrationModal';
import * as EppController from '../../lib/EppController';
export default function Whois(){

    const [values, setValues] = React.useState({
        search_data: "",
        isavailable: false,
        alternatives: [] ,
        loading:false,
        loaded:false,
        response:{},
        domain:"",
        showAlert:false
    });
    const [domData,setData] = React.useState({

    })
    const setState = (state,value) =>{
        setValues({ ...values, [state]: value });
    }

    const handleChange = (prop) => (event) => {
        setState(prop,event.target.value)
    };
    
    const search = async () => {
        setValues({ 
            ...values,
            loading: true,
            loaded:false,
            isavailable: false,
            alternatives:"",
            response:{},
            showAlert:true
        });
        let prom = new Promise((resolve,reject) => {
            setTimeout(() => {
              resolve("done");
            }, 1000);
        });

        prom.then(async (res) =>{
            const check = await EppController.checkDomain(values.search_data)
            if(parseInt(check.avail) === 1){
                setValues({ 
                    ...values, 
                    domain: values.search_data,
                    loading: false,
                    loaded:true,
                    isavailable: true,
                    alternatives:[],
                    showAlert:true
                });
            }else{
                let data = await EppController.info(values.search_data)
                console.log(data)
                setData(data)
                setValues({ 
                    ...values, 
                    domain: values.search_data,
                    loading: false,
                    loaded:true,
                    isavailable: false,
                    alternatives:[],
                    response:data.info,
                    showAlert:true
                });
            }
        })
    }
    
    const [showModal,setShowModal] = useState(false)

    const closeModal = () => {setShowModal(false)}
    const openModal = () => {setShowModal(true)}
    const showPurchaseProposal = () =>{
        return(
            <div>
                <Button
                    onClick={openModal}
                >
                    Register domain
                </Button>
            </div>

        )
    }

    const showAvailabilityMessage = () =>{
        let title
        let message
        let severity
        if (values.isavailable){
            title="Domain name is available"
            message="The domain name you requested is available, you can proceed to the registration of the latter"
            severity="success"
        }else{
            title="Domain name is already allocated"
            message="The domain name you requested is already in use. Check out the alternative names to this domain name."
            severity="error"
        }
        return(
            <Collapse in={values.showAlert}>
                <Alert 
                    severity={severity} 
                    onClose={() => {
                        setValues({ 
                            ...values, 
                            showAlert:false
                        });                
                    }}
                >
                <AlertTitle>{title}</AlertTitle>
                    {message}
                </Alert>
            </Collapse>    
        )
    }

    const showDomainDetails = () =>{
        return(
            <Stack direction="column" spacing={2}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="alternative-panel-header"
                    >
                        <Typography>Domain Information</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Stack direction="column" spacing={1} className="info-box">
                            <div>
                                <span>Query: </span> {domData?.name}
                            </div>
                            <div>
                                <span>Status: </span> Delegated
                            </div>
                            <div>
                                <span>Created: </span> {domData?.crDate}
                            </div>
                            <div>
                                <span>Expires: </span> {domData?.exDate}
                            </div>
                            <div>
                                <span>Name servers: </span>
                                {
                                    [...domData?.ns].map((ns) => {
                                        return <p>{ns.name}</p>
                                    })
                                }
                            </div>
                            <div></div>
                            <div>
                                <span>Registrar: </span> {domData?.clID}
                            </div>
                                
                            <div>
                                <span>Registrant:</span>
                                <p>Email: {domData?.registrant?.email}</p>
                                <p>Telephone number: {domData?.registrant?.voice}</p>
                                <p>
                                    International Name: {domData?.registrant?.postalInfo?.int?.name}
                                </p>
                                <p>
                                    International Organisation: {domData?.registrant?.postalInfo?.int?.org}
                                </p>
                                <p>
                                    International Address:
                                </p>
                                <p>
                                    {[domData?.registrant?.postalInfo?.int?.addr.street]}
                                </p>
                                <p>
                                    {domData?.registrant?.postalInfo?.int?.city} {domData?.registrant?.postalInfo?.int?.addr.pc}
                                </p>
                                <p>
                                    {domData?.registrant?.postalInfo?.int?.addr.cc}
                                </p>
                            </div>
                            <div>
                                <span>Admin Contact:</span>
                                <p>Email: {domData?.contacts?.admin?.email}</p>
                                <p>Telephone number: {domData?.contacts?.admin?.voice}</p>
                                <p>
                                    International Name: {domData?.contacts?.admin?.postalInfo?.int?.name}
                                </p>
                                <p>
                                    International Organisation: {domData?.contacts?.admin?.postalInfo?.int?.org}
                                </p>
                                <p>
                                    International Address:
                                </p>
                                <p>
                                    {[domData?.contacts?.admin?.postalInfo?.int?.addr.street]}
                                </p>
                                <p>
                                    {domData?.contacts?.admin?.postalInfo?.int?.city} {domData?.contacts?.admin?.postalInfo?.int?.addr.pc}
                                </p>
                                <p>
                                    {domData?.contacts?.admin?.postalInfo?.int?.addr.cc}
                                </p>
                            </div>
                            <div>
                                <span>Technical Contact:</span>
                                <p>Email: {domData?.contacts?.tech?.email}</p>
                                <p>Telephone number: {domData?.contacts?.tech?.voice}</p>
                                <p>
                                    International Name: {domData?.contacts?.tech?.postalInfo?.int?.name}
                                </p>
                                <p>
                                    International Organisation: {domData?.contacts?.tech?.postalInfo?.int?.org}
                                </p>
                                <p>
                                    International Address:
                                </p>
                                <p>
                                    {[domData?.contacts?.tech?.postalInfo?.int?.addr.street]}
                                </p>
                                <p>
                                    {domData?.contacts?.tech?.postalInfo?.int?.city} {domData?.contacts?.tech?.postalInfo?.int?.addr.pc}
                                </p>
                                <p>
                                    {domData?.contacts?.tech?.postalInfo?.int?.addr.cc}
                                </p>
                            </div>
                            <div>
                                <span>Billing Contact:</span>
                                <p>Email: {domData?.contacts?.billing?.email}</p>
                                <p>Telephone number: {domData?.contacts?.billing?.voice}</p>
                                <p>
                                    International Name: {domData?.contacts?.billing?.postalInfo?.int?.name}
                                </p>
                                <p>
                                    International Organisation: {domData?.contacts?.billing?.postalInfo?.int?.org}
                                </p>
                                <p>
                                    International Address:
                                </p>
                                <p>
                                    {[domData?.contacts?.billing?.postalInfo?.int?.addr.street]}
                                </p>
                                <p>
                                    {domData?.contacts?.billing?.postalInfo?.int?.city} {domData?.contacts?.billing?.postalInfo?.int?.addr.pc}
                                </p>
                                <p>
                                    {domData?.contacts?.billing?.postalInfo?.int?.addr.cc}
                                </p>
                            </div>
                        </Stack>
                    </AccordionDetails>
                </Accordion>
            </Stack>
        )
    }

    return(
        <Stack direction="column" spacing={2}  className='box'>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={values.loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
            <div className="search-title">
                    Seach for domain name
                </div>
                <div className="search-note">
                    <div className="nb">
                        NB:
                    </div>
                    <div className="text">
                        The search is done only for domain names having the <span>&laquo; cm &raquo;</span> TLD. To search for the domain name <span>&laquo; example.cm &raquo;</span>, simply input <span>&laquo; example &raquo;</span> in the search bar
                    </div>
                </div>
                <OutlinedInput
                    id="search_bar"
                    type="search"
                    value={values.search_data}
                    onChange={handleChange('search_data')}
                    fullWidth
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="search button"
                                onClick={search}
                                edge="end"
                            >
                                <SearchIcon/>
                            </IconButton>
                        </InputAdornment>
                    }
                    onKeyPress={(ev) =>{
                        if (ev.key === "Enter") {
                            ev.preventDefault();
                            search();
                          }
                    }}
                    aria-describedby="search-bar-helper-text"
                />
            </FormControl>
            {
                values.loaded && <div>
                    {showAvailabilityMessage()}
                    {values.isavailable? (
                        showPurchaseProposal()
                    ):(
                        showDomainDetails()
                    )}
                </div>
            }
            <RegistrationModal
                show={showModal}
                onClose={closeModal}
                name={values.search_data}
            />           
        </Stack>
    )
    
}

import React from "react";
import { 
        InputAdornment,
        IconButton,
        OutlinedInput,
        FormControl,
        FormHelperText,
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
import DomainDetailsInfoDisplay from './domain_details_info_display';
import Link from 'next/link'
import * as EppController from '../../../lib/EppController';
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
        // simulating waiting time, shall be replaces with the request to the back end command
        let prom = new Promise((resolve,reject) => {
            setTimeout(() => {
              resolve("done");
            }, 1000);
        });

        prom.then(async (res) =>{
            const check = await EppController.checkDomain(values.search_data)
            console.log(check)
            if (check.status !== 200) return
            if(parseInt(check.avail) === 1){
                setValues({ 
                    ...values, 
                    domain: values.search_data,
                    loading: false,
                    loaded:true,
                    isavailable: true,
                    alternatives:[],
                    response:require('./test.json'),
                    showAlert:true
                });
            }else{
                let data = await EppController.getDomain(values.search_data)
                console.log(data)
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
    
    const showPurchaseProposal = () =>{
        return(
            <div>
                <Link href={"/register/" +  values.domain}>
                    <Button>
                        Register domain
                    </Button>
                </Link>
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
        let details = []
        if (!values.response) return
        Object.entries(values.response).forEach(([key,value]) =>{
            details.push(
                <DomainDetailsInfoDisplay
                    subject={key}
                    body={value}
                />
            )
        })
        let alts = []
        values.alternatives.forEach((alt) =>{
            alts.push(
                <div>{alt}</div>
            )
        })
        return(
            <Stack direction="column" spacing={2}>
                {/* <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="alternative-panel-header"
                >
                    <Typography>Alternative names</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Stack direction="row" spacing={2}>
                        {alts}
                    </Stack>
                </AccordionDetails>
                </Accordion> */}
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="alternative-panel-header"
                    >
                        <Typography>Domain Information</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Stack direction="column" spacing={2}>
                            {details}
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
                {/* <FormHelperText id="search-bar-helper-text">Domain name</FormHelperText> */}
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
        </Stack>
    )
    
}

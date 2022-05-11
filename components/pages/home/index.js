import React from "react";
import { 
        InputAdornment,
        IconButton,
        OutlinedInput,
        FormControl,
        FormHelperText,
        Backdrop,
        CircularProgress
    } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import AlternativeNames from './alternative';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DomainDetailsInfoDisplay from './domain_details_info_display';

export default function Whois(){

    const [values, setValues] = React.useState({
        search_data: "",
        isavailable: false,
        alternatives: "" ,
        loading:false,
        loaded:false,
        response:{}
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
            response:{}
        });
        // simulating waiting time, shall be replaces with the request to the back end command
        let prom = new Promise((resolve,reject) => {
            setTimeout(() => {
              resolve("done");
            }, 1000);
        });
        prom.then((res) =>{
            
            setValues({ 
                ...values, 
                loading: false,
                loaded:true,
                isavailable: true,
                alternatives:"one,two,three",
                response:{"keyone":["valueone","dcsdc","dcvds"],"key2":["value2"]}
            });
            
        })
    }
    const getAlternatives = () =>{
        return(
            <AlternativeNames 
                names={values.alternatives}
            />
        )
    }

    const getDetails = () =>{
        let details = []
        Object.entries(values.response).forEach(([key,value]) =>{
            details.push(
                <DomainDetailsInfoDisplay
                    subject={key}
                    body={value}
                />
            )
        })
        return(
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="alternative-panel-header"
                >
                    <Typography>Domain Information</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {details}
                </AccordionDetails>
            </Accordion>
        )
    }

    return(
        <div>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={values.loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                <FormHelperText id="search-bar-helper-text">Domain name</FormHelperText>
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
                    {values.isavailable? getDetails():getAlternatives()}
                </div>
            }            
        </div>
    )
    
}

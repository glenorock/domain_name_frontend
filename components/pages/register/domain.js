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
import { DataGrid } from '@mui/x-data-grid';
const CountryCodes = require('../../../data/CountryCodes.json')

export default function DomainNameRegistrationForm(props){
    const [state,setState] = React.useState({
        activeStep:0,
        domain:props.domain,
        period:0,
        price:0,
        unitPrice:7000,
        contacts:{
            owner:{
                name:"",
                org:"",
                addr1:"",
                addr2:"",
                city:"",
                pc:"",
                cc:"",
                tel:"",
                fax:"",
                email:""
            },
            admin:{
                name:"",
                org:"",
                addr1:"",
                addr2:"",
                city:"",
                pc:"",
                cc:"",
                tel:"",
                fax:"",
                email:""
            },
            tech:{
                name:"",
                org:"",
                addr1:"",
                addr2:"",
                city:"",
                pc:"",
                cc:"",
                tel:"",
                fax:"",
                email:""
            },
            billing:{
                name:"",
                org:"",
                addr1:"",
                addr2:"",
                city:"",
                pc:"",
                cc:"",
                tel:"",
                fax:"",
                email:""
            },
        },
        hosts:[
            {id:1,name:"host1",version:"IPV4",addr:"192.16.16.15"},
            {id:2,name:"host2",version:"IPV4",addr:"192.16.16.20"},
            {id:3,name:"host3",version:"IPV4",addr:"192.16.16.12"},
            {id:4,name:"host4",version:"IPV4",addr:"192.16.16.18"}
        ],
        goal:""
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

    const HostColumns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Host name'},
        { field: 'version', headerName: 'Version'},
        { field: 'addr', headerName: 'IP Address'},
    ]
    console.log(state)
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
                <div>
                <DataGrid
                    rows={state.hosts}
                    columns={HostColumns}
                />
                </div>
            </Stack>
        )
    }

    const pageTwo = () =>{
        return(
            <div>
                Page 2       
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
            default:
                return finishedPage()
        }
    }

    const steps = [
        'Domain information',
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
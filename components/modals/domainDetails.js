import React , {useEffect}  from 'react'
import { Modal, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function PayUnitModal({show, onClose, request}){
    const { t } = useTranslation();
    useEffect(() => {
        console.log(request)
    },[request])
    const ContactDetails = (lable,contact) => {
        if (contact === null){
            return (<></>)
        }
        return(
            <Accordion
                className='accordion'
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    {lable}
                </AccordionSummary>
                <AccordionDetails>
                    <table>
                        <tr>
                            <td>
                                Name
                            </td>
                            <td>
                                {contact?.name}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Email
                            </td>
                            <td>
                                {contact?.email}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Tel
                            </td>
                            <td>
                                {contact?.tel}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Organisation
                            </td>
                            <td>
                                {contact?.org}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Country
                            </td>
                            <td>
                                {contact?.cc}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                City
                            </td>
                            <td>
                                {contact?.city}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Street
                            </td>
                            <td>
                                {contact?.addr}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Postal Code
                            </td>
                            <td>
                                {contact?.pc}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Fax
                            </td>
                            <td>
                                {contact?.fax}
                            </td>
                        </tr>   
                    </table>
                </AccordionDetails>
            </Accordion>
        )
    }
    const NameServersDetails = (ns) => {
        
        return(
            <Accordion
                className='accordion'
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    Name Servers
                </AccordionSummary>
                <AccordionDetails>
                    
                </AccordionDetails>
            </Accordion>
        )
    }
    return(
        <Modal
            show={show}
            onHide={onClose}
            size="sm"
            centered
            animation={true}
            className="modal box"
        >
            <Modal.Header>
                <Modal.Title className="title">
                    {request?.Domain?.name}
                </Modal.Title>
                <hr/>
            </Modal.Header>
            <Modal.Body>
                <div className='sep-v-5'>
                    
                <table>
                    <tr>
                        <td>
                            Creation Date:
                        </td>
                        <td>
                            {request.createdAt}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Last Update:
                        </td>
                        <td>
                            {request.updatedAt}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Status:
                        </td>
                        <td>
                            {request.status}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Domain name:
                        </td>
                        <td>
                            {request.Domain?.name}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Motif:
                        </td>
                        <td>
                            {request.Domain?.goal}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Domain name:
                        </td>
                        <td>
                            {request.Domain?.name}
                        </td>
                    </tr>
                </table> 
                {ContactDetails("Registrant",request.Domain?.registrant)}
                {ContactDetails("Administratif Contact",request.Domain?.admin)}
                {ContactDetails("Technical Contact",request.Domain?.tech)}
                {ContactDetails("Billing Contact",request.Domain?.bill)} 
                {NameServersDetails(request.Domain?.Hosts)}
                </div>      
            </Modal.Body>
            <Modal.Footer>
                <hr/>
                <div className='action'>
                    <button className='btn' onClick={onClose}>
                        {("Close")}
                    </button>
                </div>
            </Modal.Footer>
        </Modal>
    )
}
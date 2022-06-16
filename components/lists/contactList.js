import React from "react";
import Loader from "../Loader";
import { Table } from 'react-bootstrap';
import { useEffect } from "react";
import Modal from '@mui/material/Modal';
import { useTranslation } from 'react-i18next';
import { 
    BiEditAlt,
    BiTrash
} from "react-icons/bi";
import EditContactModal from '../modals/editContactModal';
import DeleteContactModal from '../modals/deleteContactModal';
import * as countryUtils from '../../util/country';
export default function ContactList(){
    const { t } = useTranslation();

    let conts = [
        {
            role:"Type one",
            name:"name One",
            org:"org One",
            email:"email One",
            phone:"phone One",
            cc:"CM",
            city:"city One",
            addr:"addr One",
            pc:"pc One",
            fax:"fax One",
        },
        {
            role:"Type one",
            name:"name two",
            org:"org two",
            email:"email two",
            phone:"phone two",
            cc:"CM",
            city:"city two",
            addr:"addr two",
            pc:"pc two",
            fax:"fax two",
        },
        {
            role:"Type one",
            name:"name three",
            org:"org three",
            email:"email three",
            phone:"phone three",
            cc:"CM",
            city:"city three",
            addr:"addr three",
            pc:"pc three",
            fax:"fax three",
        },
        {
            role:"Type one",
            name:"name four",
            org:"org four",
            email:"email four",
            phone:"phone four",
            cc:"CM",
            city:"city four",
            addr:"addr four",
            pc:"pc four",
            fax:"fax four",
        },
      ];
      
    const [tableData,setTableData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [showEditModal, setShowEditModal] = React.useState(false);
    const [showDeleteModal, setShowDeleteModal] = React.useState(false);
    const [selectedContact,setSelectedContact] = React.useState(null);

    const LoadData = () => {
        setTimeout(() => {
            setTableData(conts);
            setLoading(false);
        }, 2000);
    }

    useEffect(() => {
        LoadData();
    }, [tableData]);

    const handleDelete = (event) => {
        event.preventDefault();
        alert("Delete Contact");
    }
    
    const handleEdit = (event) => {
        event.preventDefault();
        alert("edit")
    }

    const openDeleteModal = (contact) => (event) => {
        event.preventDefault();
        setShowDeleteModal(true)
        setSelectedContact(contact)
    }
    
      const closeDeleteModal = (event) => {
        event.preventDefault();
        setShowDeleteModal(false);
        setSelectedContact(null);
    }

    const openEditModal = (contact) => (event) => {
        event.preventDefault();
        setShowEditModal(true);
        setSelectedContact({
            ...contact,
            cc_tmp: countryUtils.getCountryByCode(contact.cc)
        })
    }
    
    const closeEditModal = (event) => {
        event.preventDefault();
        setShowEditModal(false);
        setSelectedContact(null)
    }

    return(
        <>
            {loading?(
                <Loader height={300}/>
            ):(
                <div className="data-table">
                    <Table>
                        <thead>
                            <tr >
                                <th scope="col">{'name'}</th>
                                <th scope="col">{'email'}</th>
                                <th scope="col">{'org'}</th>
                                <th scope="col">{'Country'}</th>
                                <th scope="col">{'City'}</th>
                                <th scope="col">{'Tel'}</th>
                                <th scope="col">{'Action'}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((ele) => (
                                <tr>
                                    <td scope="col">{ele.name}</td>
                                    <td scope="col">{ele.email}</td>
                                    <td scope="col">{ele.org}</td>
                                    <td scope="col">{ countryUtils.getCountryByCode(ele.cc) }</td>
                                    <td scope="col">{ele.city}</td>
                                    <td scope="col">{ele.phone}</td>
                                    <td scope="col">{
                                        <div className='action-cell'>
                                            <div className='action-btn' onClick={openEditModal(ele)}>
                                                <BiEditAlt/>
                                            </div>
                                            <div className='action-btn' onClick={openDeleteModal(ele)}>
                                                <BiTrash/>
                                            </div>
                                        </div>
                                    }</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    {/* Modal */}
                    <div>
                    <Modal
                        open={showEditModal}
                        onClose={() => setShowEditModal(false)}
                    >
                        <EditContactModal data={selectedContact} onClose={closeEditModal} onSubmit={handleEdit}/>
                    </Modal>
                    <Modal
                        open={showDeleteModal}
                        onClose={() => setShowDeleteModal(false)}
                    >
                        <DeleteContactModal onClose={closeDeleteModal} onSubmit={handleDelete}/>
                    </Modal>
                    </div>
                </div>
            )}
        </>
    )
}
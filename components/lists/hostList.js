import React, {useEffect} from 'react';
import Loader from '../Loader';
import { Table } from 'react-bootstrap';
import { 
  BiEditAlt,
  BiTrash
} from "react-icons/bi";
import Modal from '@mui/material/Modal';
import DeleteHostModal from '../modals/deleteHostModal';
import EditHostModal from '../modals/editHostModal';

export default function HostList() {
  const data = [{
    name: "test",
    ip: [
      {
        ver:4,
        value: "ip1"
      },
      {
        ver:4,
        value: "ip2"
      },
      {
        ver:4,
        value: "ip3"
      },
    ]
  },
  {
    name: "test",
    ip: [
      {
        ver:4,
        value: "ip1"
      },
      {
        ver:4,
        value: "ip2"
      },
      {
        ver:4,
        value: "ip3"
      },
    ]
  },
  {
    name: "test",
    ip: [
      {
        ver:4,
        value: "ip1"
      },
      {
        ver:4,
        value: "ip2"
      },
      {
        ver:4,
        value: "ip3"
      },
    ]
  },
  ];
  const [tableData, setTableData] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const [showEditModal, setShowEditModal] = React.useState(false);
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);
  const [selectedHost, setSelectedHost] = React.useState(null);

  const LoadData = () => {
    setTimeout(() => {
      setTableData(data || []);
      setLoading(false);
    },2000);
  }

  useEffect(() => {
    LoadData();
  }, [tableData]);

  const handleDelete = (event) => {
    event.preventDefault();
    alert("Delete host");
  }

  const handleEdit = (event) => {
    event.preventDefault();
    alert("edit")
  }

  const openDeleteModal = (name,ip) => (event) => {
    event.preventDefault();
    setShowDeleteModal(true)
    setSelectedHost({
      name: name,
      ver:ip.ver,
      ip: ip.value
    })
  }

  const closeDeleteModal = (event) => {
    event.preventDefault();
    setShowDeleteModal(false);
    setSelectedHost(null);
  }

  const openEditModal = (name,ip) => (event) => {
    event.preventDefault();
    setShowEditModal(true);
    setSelectedHost({
      name: name,
      ver:ip.ver,
      ip: ip.value
    })
  }

  const closeEditModal = (event) => {
    event.preventDefault();
    setShowEditModal(false);
    setSelectedHost(null);
  }

  
  return (
      <>
        {
          loading?(
            <Loader height={300}/>
          ):(
            <div className="data-table">
              <Table>
                <thead>
                  <tr>
                    <th scope="col">{'name'}</th>
                    <th scope="col">{'version'}</th>
                    <th scope="col">{'IP'}</th>
                    <th className='fixed-col' scope="col">{'action'}</th>
                          
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((ele) => (
                    <>
                      <tr>
                        <td rowspan={ele.ip.length + 1} scope="col">{ele.name}</td>
                      </tr>
                      {
                        ele.ip.map((ip) => {
                          return(
                            <tr>
                                <td scope="col">{ip.ver}</td>
                                <td scope="col">{ip.value}</td>
                                <td scope="col" >
                                  <div className='action-cell'>
                                    <div className='action-btn' onClick={openEditModal(ele.name,ip)}>
                                      <BiEditAlt/>
                                    </div>
                                    <div className='action-btn' onClick={openDeleteModal(ele.name,ip)}>
                                      <BiTrash/>
                                    </div>
                                  </div>
                                </td>
                            </tr>
                          )
                        })
                      }
                    </>
                  ))}
                </tbody>
              </Table>
              {/* Modal */}
              <div>
                <Modal
                  open={showEditModal}
                  onClose={() => setShowEditModal(false)}
                >
                  <EditHostModal data={selectedHost} onClose={closeEditModal} onSubmit={handleEdit}/>
                </Modal>
                <Modal
                  open={showDeleteModal}
                  onClose={() => setShowDeleteModal(false)}
                >
                  <DeleteHostModal onClose={closeDeleteModal} onSubmit={handleDelete}/>
                </Modal>
              </div>
            </div>
          )
        }
      </>
    )
  }
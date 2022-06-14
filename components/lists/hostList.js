import * as React from 'react';
import Loader from '../Loader';
import { Table } from 'react-bootstrap';
import { 
  BiEditAlt,
  BiTrash
} from "react-icons/bi";

export default function HostList() {
  const initialRows = [{
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
  const [tableData, setTableData] = React.useState(initialRows)
  const [loading, setLoading] = React.useState(false)
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
                    <th scope="col">{'org'}</th>
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
                                    <div className='action-btn'>
                                      <BiEditAlt/>
                                    </div>
                                    <div className='action-btn'>
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
            </div>
          )
        }
      </>
    )
  }
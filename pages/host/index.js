import React from 'react';
import Page from '../../components/pageAdmin';
import HostList from '../../components/lists/hostList';
import HostActions from '../../components/action/host';
const Host = () => {
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

  const [rows, setRows] = React.useState(initialRows);

  const reload = () => {

  }
  return (
      <Page>
        <div className='box'>
          <HostActions next={reload}/>
        </div>
        <div className='box'>
            <HostList data={rows}/>
        </div>
      </Page>
  )
}

export default Host;
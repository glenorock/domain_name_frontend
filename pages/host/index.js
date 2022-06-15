import React from 'react';
import Page from '../../components/pageAdmin';
import HostList from '../../components/lists/hostList';
import HostActions from '../../components/action/host';
const Host = () => {
  return (
      <Page>
        <div className='box'>
          <HostActions/>
        </div>
        <div className='box'>
            <HostList />
        </div>
      </Page>
  )
}

export default Host;
import React from 'react';
import Page from '../../components/pageAdmin';
import HostList from '../../components/lists/hostList';
const Host = () => {
  return (
      <Page>
        <div className='left-align box'>
          <div className='btn '>
            Action Panes
          </div>
        </div>
        <div className='box'>
            <HostList/>
        </div>
      </Page>
      
  )
}

export default Host;
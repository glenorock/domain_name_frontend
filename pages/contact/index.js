import React from 'react';
import Page from '../../components/pageAdmin';
import ContactList from '../../components/lists/contactList';
export default function Contact() {
  return (
      <Page>
      <div className='left-align box'>
        <div className='btn '>
          Action Panes
        </div>
      </div>
      <div className='box'>
          <ContactList/>
      </div>
    </Page>
    
  )
}
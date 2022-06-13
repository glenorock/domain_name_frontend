import React from "react";
import { useRouter } from 'next/router'
import ContactInfo from "../../components/info/contact";
import Page from "../../components/pageAdmin";

export default function ContactInfoPage(){
    const router = useRouter()
    const { slug } = router.query
    const data = {"namenam enamenamename":slug,"namenam enasmenamename":slug}
    return(
        <Page>
        <div className='left-align box'>
          <div className='btn '>
            Action Panes
          </div>
        </div>
        <div className='box'>
            <ContactInfo data={data}/>
        </div>
      </Page>
    )
}
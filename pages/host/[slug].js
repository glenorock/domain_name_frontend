import React from "react";
import { useRouter } from 'next/router'
import HostInfo from "../../components/info/host";
import Page from "../../components/pageAdmin";

export default function HostInfoPage(){
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
            <HostInfo data={data}/>
        </div>
      </Page>
    )
}
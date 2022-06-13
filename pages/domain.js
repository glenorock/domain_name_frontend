import Page from '../components/pageAdmin';
import DomainInfo from '../components/info/domain';
export default function Domain() {
  
  return (
      <Page>
          <div className='left-align box'>
            <div className='btn '>
              renew pane
            </div>
          </div>
          <div className='box'>
            <DomainInfo/>
          </div>
      </Page>
  )
}

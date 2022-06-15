import Page from '../components/pageAdmin';
import DomainInfo from '../components/info/domain';
import DomainActions from '../components/action/domain';
export default function Domain() {
  
  return (
      <Page>
          <div className='left-align box'>
            <DomainActions/>
          </div>
          <div className='box'>
            <DomainInfo/>
          </div>
      </Page>
  )
}

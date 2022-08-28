import Page from '../../components/pageAdmin';
import DomainInfo from '../../components/info/domain';
// import DomainActions from '../../components/action/domain';
export default function Domain() {
  let data = {
    'contacts': {
        'admin': 'contact-id',
        'tech': 'contact-id',
        'billing': 'contact-id',
    },
    'registrant': 'contact-id',
    'clID': 'registrar-id',
    'roid': 'tld-12345',
    'status': [
        'ok'
    ],
    'authInfo': 'abc-12345',
    'name': 'example.tld',
    'trDate': '2011-01-18T11:08:03.0Z',
    'ns': [
        'ns0.example.com',
        'ns1.example.com',
    ],
    'crDate': '2011-02-16T12:06:31.0Z',
    'exDate': '2011-02-16T12:06:31.0Z',
    'crID': 'registrar-id',
    'upDate': '2011-08-29T04:02:12.0Z',
    hosts: [
        'ns0.example.tld',
        'ns1.example.tld',
    ],
}

  return (
      <Page>
          <div className='left-align box'>
            {/* <DomainActions domain={data}/> */}
          </div>
          <div className='box'>
            <DomainInfo domain={data}/>
          </div>
      </Page>
  )
}

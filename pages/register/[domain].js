import { useRouter } from 'next/router'
import RegistrationForm from '../../components/registration_form'
import DomainNameRegistrationForm from '../../components/pages/register/domain'
import Page from '../../components/page'


export default function(){
    const router = useRouter()
    const { domain } = router.query
    return(
        <Page>
            <RegistrationForm name={domain}/>
        </Page>
    )
}
import DomainNameRegistrationForm from '../../components/pages/register/domain'
import Page from '../../components/page'
import { useRouter } from 'next/router'

export default function(){
    const router = useRouter()
    const { domain } = router.query
    return(
        <Page>
            <DomainNameRegistrationForm domain={domain} />
        </Page>
    )
}
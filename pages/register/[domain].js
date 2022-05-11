import Layout from '../../components/layout/layout'
import DomainNameRegistrationForm from '../../components/pages/register/domain'
import { useRouter } from 'next/router'

export default function(){
    const router = useRouter()
    const { domain } = router.query
    return(
        <Layout>
            <DomainNameRegistrationForm domain={domain} />
        </Layout>
    )
}
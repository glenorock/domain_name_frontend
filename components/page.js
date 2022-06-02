import Header from './header';
import Footer from './footer';

const Page = ({children}) =>{
    return(
        <>
            <head>
                <title></title>
            </head>
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </>
    )
}

export default Page;
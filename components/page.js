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
                <div className='site-body'>
                    {children}
                </div>
                {/* <Footer /> */}
            </body>
        </>
    )
}

export default Page;
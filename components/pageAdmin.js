import Sidebar from "./sideBar";
import HeaderAdmin from './header-admin';

const Page = ({children}) => {
    return(
        <>
            <head>
                <title></title>
            </head>
            <body>
                <div className="admin-page">
                    <Sidebar/>    
                    <div className="left">
                        <HeaderAdmin/>
                        <div className='admin-body'>
                            {children}
                        </div>
                    </div>
                </div>
            </body>
        </>
    )
}

export default Page;
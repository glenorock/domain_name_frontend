import LanguageSwitch from "./LanguageSwitch";
import Image from 'next/image'

const Header = (props) => {
    return(
        <div className="site-header">
            <div className="brand-logo">
                <Image
                    src="/images/logo.jpg"
                    alt="logo"
                    width={50}
                    height={50}
                />
            </div>
            <div className="title-header">
                <h1>Domain name management platform</h1>
            </div>
            <div className="lng-switch-cont">
                <LanguageSwitch/>
            </div>
            {/* {
                props?.connected?(
                    <>
                        Disconnect
                    </>
                ):(
                    <>
                        Connect
                    </>
                )
            } */}
        </div>
    )
};

export default Header;

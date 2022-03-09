import Image from 'next/image'

export default function Header(){
    return(
        <div>
            <span>Agence Nationale des Technologies de L'information et de la Communication</span>
            <Image
                src="/images/logo.jpg"
                height={144}
                width={144}
                alt="logo"
            />
            <span>National Agency for Information and Communication Technologies</span>
        </div>
    )
}
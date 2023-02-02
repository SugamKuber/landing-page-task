import Image from 'next/image'
import Logo from '../assets/logo.png'
import Contact from './Contact'
import Button from './ui/button'

export default function Navbar() {
    return (
        <>
            <div className='flex justify-between px-10'>
                <Image src={Logo} alt="logo" width={100} height={50} />
                <div className='flex '>
                    <Contact />
                    <div>
                        <Button>  Download the app</Button >
                    </div>
                </div>
            </div>
        </>
    )
}
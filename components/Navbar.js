import Image from 'next/image'
import Logo from '../assets/logo.png'
import Contact from './Contact'
import Button from './ui/button'

export default function Navbar() {
    return (
        <>
            <div className='flex justify-between px-6 mb-10'>
                <Image src={Logo} alt="logo" width={200} height={100} className="mt-5" />
                <div className='hidden md:flex md:items-center md:mt-5'>
                    <Contact />
                    <div className='md:ml-5'>
                        <Button>Download the app</Button >
                    </div>
                </div>
            </div>
        </>
    )
}
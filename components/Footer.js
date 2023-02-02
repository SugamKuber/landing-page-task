import Image from 'next/image'
import Logo from '../assets/logo.png'
import Contact from './Contact'
import Icons from './Icons'

export default function Footer() {
    return (
        <>
            <div className='flex flex-col items-center mt-5 gap-y-5'>
                <div className='md:flex md:items-center gap-x-96'>
                    <div className='flex flex-col items-center my-5 md:justify-start'>
                        <Image src={Logo} alt="logo" width={200} height={100} />
                    </div>
                    <div className='flex'>
                        <Contact />
                    </div>
                </div>
                <div className='flex flex-col items-center md:flex md:flex-row md:gap-x-[460px]'>
                    <div>
                        Open auto @ all rights reserved
                    </div>
                    <div className='flex justify-center my-5'>
                        <Icons />
                    </div>

                </div>
            </div>
        </>
    )
}
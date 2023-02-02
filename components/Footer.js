import Image from 'next/image'
import Logo from '../assets/logo.png'
import Contact from './Contact'
import Button from './ui/button'
import Icons from './icons'

export default function Navbar() {
    return (
        <>

            <div>
                <div>
                    <div>
                        <Image src={Logo} alt="logo" width={100} height={50} />
                    </div>
                    <div>
                        <Contact />
                    </div>
                </div>
                <div>
                    <div>
                        Open auto @ all rights reserved
                    </div>
                    <div>
                        <Icons />
                    </div>

                </div>
            </div>
        </>
    )
}
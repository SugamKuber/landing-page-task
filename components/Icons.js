import Image from 'next/image'
import Twitter from '../assets/twitter.svg'
import Facebook from '../assets/facebook.svg'
import Linkedin from '../assets/linkedin.svg'


export default function Icons() {
    return (
        <>
            <div className='flex gap-x-4'>
                <div>
                    <Image src={Twitter} width={30} height={30} alt="icons" />
                </div>
                <div>
                    <Image src={Facebook} width={30} height={30} alt="icons" />
                </div>
                <div>
                    <Image src={Linkedin} width={30} height={30} alt="icons" />
                </div>
                <div>
                    <Image src={Twitter} width={30} height={30} alt="icons" />
                </div>
                <div>
                    <Image src={Facebook} width={30} height={30} alt="icons" />
                </div>
            </div>

        </>
    )
}
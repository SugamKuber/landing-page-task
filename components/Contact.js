import Image from 'next/image'
import PhoneIcon from '../assets/PhoneIcon.svg'
import MailIcon from '../assets/MailIcon.svg'

export default function Contact() {
    return (
        <>
            <div className='flex mx-5'>
                <Image src={PhoneIcon} alt="phone" width={20} height={20} />
                +912 345 679
            </div>
            <div className='flex  mx-5 md:mx-0'>
                <Image src={MailIcon} alt="phone" width={20} height={20} />
                service@email.com
            </div>

        </>
    )
}
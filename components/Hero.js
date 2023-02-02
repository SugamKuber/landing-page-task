import Image from 'next/image'
import Logo from '../assets/logo.png'
import Contact from './Contact'
import bg from '../assets/bg.png'
import Button from './ui/button'
import Icons from './icons'
import Form from './Form'

export default function Hero() {
    return (
        <>
            <div>
                <div>
                    <div>
                        Vechnical maintaince from the comfort of your home
                    </div>
                    <div>
                        open auto soothes the hassie of manifacutring your vechical and helps you deal with unexpected repairs worry-free
                    </div>
                    <div>
                        <Form />
                    </div>
                </div>
                <div>
                    <Image src={bg} width={500} height={500} alt="bg" />
                </div>
            </div>
            <div>
                <Icons />
            </div>
        </>
    )
}
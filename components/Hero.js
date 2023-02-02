import Image from 'next/image'
import Logo from '../assets/logo.png'
import Contact from './Contact'
import bg from '../assets/bg.png'
import Button from './ui/button'
import Icons from './Icons'
import Form from './Form'

export default function Hero() {
    return (
        <>
            <div className='md:flex  md:gap-x-48 md:justify-center md:mt-24' >
                <div className='text-center flex flex-col gap-y-10 md:w-1/3 md:text-left'>
                    <div className='font-bold text-4xl text-slate-300'>
                        Vechnical maintaince from the comfort of your home
                    </div>
                    <div className='text-slate-400'>
                        open auto soothes the hassie of manifacutring your vechical and helps you deal with unexpected repairs worry-free
                    </div>
                    <div>
                        <Form />
                    </div>
                </div>
                <div className='my-6'>
                    <Image src={bg} width={500} height={500} alt="bg" />
                </div>
            </div>
            <div className='flex justify-center my-5 md:ml-[940px]'>
                <Icons />
            </div>
        </>
    )
}
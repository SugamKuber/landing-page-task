import Image from 'next/image'
import Logo from '../assets/logo.png'
import Contact from './Contact'
import bg2 from '../assets/bg2.png'
import Button from './ui/button'
import Icons from './icons'

export default function About() {
    return (
        <>
            <div className='md:flex  md:gap-x-48 md:justify-center md:mt-24' >
                <div>
                    <Image src={bg2} width={500} height={500} alt="bg" />
                </div>
                <div className='text-center flex flex-col gap-y-10 mx-10 md:w-1/3 md:mt-24 md:text-left'>
                    <div className='font-bold text-4xl text-slate-300 md:w-3/5'>
                        Focus on time saving
                    </div>
                    <div className='text-slate-400'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.                    </div>
                    <div>
                        <Button>
                            Download the app
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}
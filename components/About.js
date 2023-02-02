import Image from 'next/image'
import Logo from '../assets/logo.png'
import Contact from './Contact'
import bg2 from '../assets/bg2.png'
import Button from './ui/button'
import Icons from './icons'

export default function About() {
    return (
        <>
            <div>
                <div>
                    <Image src={bg2} width={500} height={500} alt="bg" />
                </div>
                <div>
                    <div>
                        Focus on time saving
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.                    </div>
                    <div>
                        <Button>
                            Dowonload the app
                        </Button>
                    </div>
                </div>

            </div>
            <div>
                <Icons />
            </div>
        </>
    )
}
import Image from 'next/Image'
import Link from 'next/Link'
import logo from '../public/logo.avif';
const NavBar = () => {
    return (
        <nav className = "nav-container">
            <div className = "nav-item-container">
                <Link href = "/">
                    <Image
                        src = {logo}
                        alt = "TravelIt Site Logo"
                        width = {140}
                        height = {140}
                    />
                </Link>
            </div>

            <div className = "nav-item-container">
                    <p>TravelIt Blogs</p>
                    <hr/>
                    <p>Vaibhav Fulara</p>
                    <p>+91-8287633775</p>
                    <hr/>
                    <p>vaibhav.fulara</p>
                    <p>123@gmail.com</p>
            </div>
        </nav>
    )
}

export default NavBar
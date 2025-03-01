import { Link } from "react-router-dom"
import logo from './images/logo.png'
import './Nabar.css'
const Navbar = () => {
    return (
        <div>
            <div id="nav" className="d-flex ">
                <div >
                    <img  className="ms-lg-5 m-4" src={logo} alt="logo" width={120} />
                </div>
                <div className="me-5">
                    <Link className=" nav-links h4 p-4" to='/'>Home</Link>
                    <Link className=" nav-links h4 p-4" to='/Menu'>Menu</Link>
                    <Link className=" nav-links h4 p-4" to='/About'>About</Link>
                    <Link className=" nav-links h4 p-4" to='/Contact'>Contact</Link>
                </div>
            </div>
        </div>

    )
}

export default Navbar;
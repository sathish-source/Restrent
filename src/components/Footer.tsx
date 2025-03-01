import logo from './images/logo.png'
import './Footer.css'

const Footer =() => {
    return(
        <div>
            <div className=''>
            <div className='footer-section-1 d-flex justify-content-center text-center align-items-center text-white'>
                <div>
                <img className='my-3' src={logo} width={100} height={100} alt="logo" />
                <p>Axel-Springer-Platz 3, 20355 Hamburg, Germany</p>
                <p>Info@yourdomain.com</p>
                <p>+(200) 0760 0760</p>
                <hr className='m-5' />
                <a className=' p-5 h5' >Terms of use</a>
                <a className=' p-5 h5' >Privacy Policy</a>
                <a className=' p-5 h5' >Contact</a>
                <a className='d-flex justify-content-center text-secondary fw-lighter h4 mt-5'>Copyright 2020 Artbees Ltd. All rights reserved.</a>
                </div>
           

            </div>
            </div>
        </div>
 
    )
}

export default Footer
import React, { useContext } from 'react'
import './footer.css'
import { AiFillInstagram , AiFillFacebook , AiFillTwitterCircle , AiOutlineWhatsApp, AiOutlineMail , AiFillPhone} from 'react-icons/ai'
import {Link , useLocation} from 'react-router-dom'
import { NewsContext } from '../../context/NewsContext';

function Footer() {
  
  const location = useLocation();

  const {handleFooterAlert} = useContext(NewsContext)
  return (
    <div className='footerMain'>
      <div className="footerContainer">
        <div className="links">
            <ul>
              <Link className='link' to={location.pathname}><li className='footerLink'>About Us</li></Link>
              <Link className='link' to='/contact'><li className='footerLink'>Contact Us</li></Link>
            </ul>
        </div>
        <div className="links">
            <ul>
                <Link className='link' to={location.pathname}><li className='socialList footerLink' onClick={()=>handleFooterAlert("Twitter")}> <AiFillTwitterCircle className='socialIcon'/>Twitter</li></Link>
                <Link className='link' to={location.pathname}><li className='socialList footerLink' onClick={()=>handleFooterAlert("Whatsapp")}><AiOutlineWhatsApp className='socialIcon'/>Whatsapp</li></Link>
                <Link className='link' to={location.pathname}><li className='socialList footerLink' onClick={()=>handleFooterAlert("Intagram")}><AiFillInstagram className='socialIcon'/>Instagram</li></Link>
                <Link className='link' to={location.pathname}><li className='socialList footerLink' onClick={()=>handleFooterAlert("Facebook")}><AiFillFacebook className='socialIcon'/>facebook</li></Link>
            </ul>
        </div>
        <div className="contactDetails">
        <Link className='link' to={location.pathname}><h2 className='contactNumber footerLink' onClick={()=>handleFooterAlert("Contact")}><AiFillPhone className='socialIcon'/> +91 9876543210</h2></Link>
        <Link className='link' to={location.pathname}><p className='emailId footerLink' onClick={()=>handleFooterAlert("Email")}><AiOutlineMail className='socialIcon'/>thedailybuzz@gmail.com</p></Link>
        </div>
      </div>
      <p style={{textAlign:"center"}}>© 2023 The Daily Buzz. All rights reserved</p>
    </div>
  )
}

export default Footer

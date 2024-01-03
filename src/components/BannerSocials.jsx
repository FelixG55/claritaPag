import React from 'react'
import '../assets/css/BannerSocials.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

const BannerSocials = () => {
  return (
    <div className='social-icons'>
        <a href="https://www.instagram.com/clarita_educacion/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="><FontAwesomeIcon icon={faInstagram} className='icon' id='icon4' beat size='xl'/></a><br/>
        <a href="https://www.facebook.com/profile.php?id=61550918715018"><FontAwesomeIcon icon={faFacebook} className='icon' id='icon3' beat size='xl'/></a><br/>
        <a href="https://wa.link/ffgqgb"><FontAwesomeIcon icon={faWhatsapp} className='icon'id='icon2' beat size='xl'/></a><br/>
        <a href="https://www.linkedin.com/in/clara-anaya-0502a8290/"><FontAwesomeIcon icon={faLinkedin} className='icon' id='icon1' beat size='xl'/></a>
    </div>
  )
}

export default BannerSocials
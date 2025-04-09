import React from 'react';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <XIcon /> <InstagramIcon/> <LinkedInIcon/> <FacebookIcon/>
      </div>
      <p> &copy; 2025 Adebola 🚀👩‍🚀IndianFooood.com🍔🍝</p>
    </div>
  );
}

export default Footer;
import './CSS/Footer.css'
import Logo from "./Images/logo.png";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
function Footer(){
    return (
        <div className="Footer">
            <div className="foterinfo">
            <img src={Logo} alt="logo" className="foterlogo" />
            <h1 className="foterheading">
            Elevate Your  <span>Business</span>,<br/> 
            Take It Online
            </h1>
            <div className="footer_socialmedia">
                <InstagramIcon  id="social"/>
                <FacebookIcon   id="social"/>
                <TwitterIcon    id="social"/>
                <YouTubeIcon    id="social"/>
            </div>
            
            </div>
            <div className="contacts">
               
                <div><LocationOnIcon id='contact_icons'/><p className="location">Bengaluru, Karnataka.</p></div>
                <div><CallIcon id='contact_icons'/><p className="contact">+91 7794080543</p></div>
                <div><MailOutlineIcon id='contact_icons'/><p className="mail">boometicofficial@gmail.com</p></div>
            </div>
            <div className="copyrights">
                <p className="copy">© 2021 DeMO Insurance Inc. Patent Pending. All Rights Reserved.
                </p>
            </div>
            <p className="tersms"><span className="privacy">Privacy</span> | Terms and condations </p>


        </div>
    );
}
export default Footer;
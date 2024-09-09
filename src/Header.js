import './CSS/Header.css'
import Logo from "./Images/logo.png";
import HeaderImg from "./Images/header-img.png";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useState,useEffect } from 'react';
import Hamburger from 'hamburger-react';
function Header(){
    const [is_clicked,setburger_clicked]=useState(false)
    const [mainlinks,setmainlinks]=useState("mainlinks_large");
    const [isSticky, setIsSticky] = useState(false);
    const [burgers,setburger]=useState("burgers")
    const burger=()=>{
        
        if(is_clicked){
            
            setmainlinks("close")    
        }
        else{
            setmainlinks("mainlinks")
        }
        setburger_clicked(!is_clicked)
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
      const handleScroll = () => {
        if (window.scrollY > 15) {
            setburger("burgers_sticky")
          setIsSticky(true);
        } else {
          setIsSticky(false);
          setburger("burgers")

        }
      };
    
    return (
        
        <div className="Header" >
            <div className={`nav${isSticky ? '_sticky' : ''}`} id="nav">
                <img src={Logo} id="logo" alt="logo"/>
                <div className="nav_links mob_nav">
                    <div className={mainlinks}>
                    <a href="#" className="navelements">Home</a>
                    <a href="#" className="navelements">Sevices</a>
                    <a href="#" className="navelements">Package</a>
                    <a href="#" className="navelements">About Us</a>
                    <a href="#" className="contact_us_btn">Contact</a>
                    </div>
                    <div className={burgers} onClick={burger}>
                    
                    <Hamburger size={28}/>

                    </div>
                </div>
            </div>
            <div className="header-content" >
                <div className="header-txt">
                    <h1 className="title">
                    Elevate Your <br/><span style={{"color":"#F48434"}}>Business</span>,<br/> Take It Online
                    </h1>
                    <p className="title-des">
                    Passionate youngsters breathe life into your business,<br/>
                    infusing it with vitality and creativity.
                    </p>
                    
                    <div  className='get_btn'>
                    <a href="#" id="get_started_btn" >Get started</a>
                    </div>
                    
                </div>
                <img src={HeaderImg} id="header-img"/>
                <div className="socialmedia">
                    <InstagramIcon id="socialmedia-icons"/>
                    <FacebookIcon id="socialmedia-icons"/>
                    <TwitterIcon id="socialmedia-icons"/>
                    
                </div>
            </div>
        </div>
    );
}
export default Header;
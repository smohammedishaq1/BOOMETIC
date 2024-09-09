import React from 'react'
import '../CSS/Services.css'
import pic from '../Images/uiux.png'
import pic1 from '../Images/smm.png'
import pic2 from '../Images/video-editor.png'
import pic3 from '../Images/webdev.png'
import pic4 from '../Images/ads.png'
import pic5 from '../Images/gd.png'
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import BatchPredictionIcon from '@mui/icons-material/BatchPrediction';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";





function Services() {
  const [popup,setPop]=useState(false);
  const handleClickOpen=()=>{
    setPop(!popup);
    }

    const [popup1,setPop1]=useState(false);
    const handleClickOpen1=()=>{
      setPop1(!popup1);
      }
      const [popup2,setPop2]=useState(false);
      const handleClickOpen2=()=>{
        setPop2(!popup2);
        }
        const [popup3,setPop3]=useState(false);
      const handleClickOpen3=()=>{
        setPop3(!popup3);
        }
        const [popup4,setPop4]=useState(false);
      const handleClickOpen4=()=>{
        setPop4(!popup4);
        }
        const [popup5,setPop5]=useState(false);
      const handleClickOpen5=()=>{
        setPop5(!popup5);
        }
    return (
    
    <div className='Service-section'>
      <br></br>
      <br></br>
      <h1 className='heading'>Our Service Gallery</h1>
      <br></br>
      <br></br>
    <div id="service"className='Services'>
      <div className='card'>
        <div className='subdiv'>
          <img src={pic}></img>
          </div>
          <div className='cont'>
          <h3> UI/UX Design</h3>
          <br></br>
          <p>Lorem ipsum lala lalala lalala Lorem ipsum lala lalala lalala Lorem ipsum lala lalala lalala</p>
          <br></br>
          <a onClick={handleClickOpen} href="#service"> View More</a>
          </div>
      </div>
     
     
      <div className='card1'>
          <div className='subdiv1'>
          <img src={pic1}></img>
          </div>
          <div className='cont'>
          <h3> Social Media Management</h3>
          <br></br>
          <p>Lorem ipsum lala lalala lalala Lorem ipsum lala lalala lalala Lorem ipsum lala lalala lalala</p>
          <br></br>
          <a href="#service" onClick={handleClickOpen1}> View More</a>
          
          </div>
         
      </div>
      <div className='card'>
      <div className='subdiv'>
      <img src={pic2}></img>
       </div>
          <div className='cont'>
          <h3>Video Editing</h3>
          <br></br>
          <p>Lorem ipsum lala lalala lalala Lorem ipsum lala lalala lalala Lorem ipsum lala lalala lalala</p>
          <br></br>
          <a href="#service" onClick={handleClickOpen2}> View More</a>
          
          </div>
         
      </div>
      <div className='card1'>
      <div className='subdiv1'>
      <img src={pic3}></img>
      </div>
          <div className='cont'>
          <h3> Web Development</h3>
          <br></br>
          <p>Lorem ipsum lala lalala lalala Lorem ipsum lala lalala lalala Lorem ipsum lala lalala lalala</p>
          <br></br>
          <a href="#service"onClick={handleClickOpen3}> View More</a>
          
          </div>
         
      </div>
      <div className='card'>
      <div className='subdiv'>
      <img src={pic4}></img>
      </div>
          <div className='cont'>
          <h3>Graphic Designing</h3>
          <br></br>
          <p>Lorem ipsum lala lalala lalala Lorem ipsum lala lalala lalala Lorem ipsum lala lalala lalala</p>
          <br></br>
          <a href="#service" onClick={handleClickOpen4}> View More</a>
          
          </div>
         
      </div>
      <div className='card1'>
      <div className='subdiv1'>
      <img src={pic5}></img>
      </div>

          <div className='cont'>
          <h3>Paid Ads</h3>
          <br></br>
          <p>Lorem ipsum lala lalala lalala Lorem ipsum lala lalala lalala Lorem ipsum lala lalala lalala</p>
          <br></br>
          <a href="#service"onClick={handleClickOpen5}> View More</a>
          
          </div>
         
      </div>
    </div>
        

      <div className='Step-cont'>
      <div className='step'>
      <WorkHistoryIcon className='icon'/>
      <h5>Market Research and Customer Understanding</h5>
      <p>We implement your strategy with precision, using data-driven insights.
        Our team continuously optimizes campaigns to maximize ROI and drive traffic, 
        leads, and conversions.</p>
      </div>
      <div className='step'>
      <BatchPredictionIcon className='icon' />
    <h5>Strategic Planning</h5>
    <p>We implement your strategy with precision, using data-driven insights.
        Our team continuously optimizes campaigns to maximize ROI and drive traffic, 
        leads, and conversions.</p>
      </div>
      <div className='step'>
      <SupportAgentIcon className='icon'/>
    <h5> Effective Marketing and Customer Engagement</h5>
    <p>We implement your strategy with precision, using data-driven insights.
        Our team continuously optimizes campaigns to maximize ROI and drive traffic, 
        leads, and conversions.</p>
      </div>
    </div>
    {popup?
    <div className='Popup'>
       <div className="top-left-div">
       <img src={pic}></img>
       </div>
      <div className='heady'>
      <h3 >UI/UX Design</h3>

      </div>
        <div class="top-right-div">
    <div className='cross' onClick={handleClickOpen}><CloseIcon className='ic'/></div>
        </div>
        <div class="main-content-div">
        <p className='para-1'>Lorem ipsum lala lalala lalala Lorem ipsum lala lalala lalala Lorem ipsum lala
  Lorem ipsum lala lalala lalala Lorem ipsum lala lalala lalala Lorem ipsum lala
  Lorem ipsum lala lalala lalala Lorem ipsum lala lalala lalala Lorem ipsum lala  </p>
        </div>
        <div>
        <button className='btn' > Get in Touch </button>
</div>
      </div>:""}

      {popup1?
    <div className='Popup'>
       <div className="top-left-div">
       <img src={pic1}></img>
       </div>
      <div className='heady'>
      <h3 >Social Media Management</h3>

      </div>
        <div class="top-right-div">
    <div className='cross' onClick={handleClickOpen1}><CloseIcon className='ic'/></div>
        </div>
        <div class="main-content-div">
        <p className='para-1'>Lorem ipsum lala lalala lalala Lorem ipsum lala lalala lalala Lorem ipsum lala
  Lorem ipsum lala lalala lalala Lorem ipsum lala lalala lalala Lorem ipsum lala
  Lorem ipsum lala lalala lalala Lorem ipsum lala lalala lalala Lorem ipsum lala 
  Lorem ipsum lala lalala lalala Lorem ipsum lala lalala lalala Lorem ipsum lala </p>
        </div>
        <div>
        <button className='btn' > Get in Touch </button>
</div>
      </div>:""}

      {popup2?
    <div id="unblurred" className='Popup'>
       <div className="top-left-div">
       <img src={pic2}></img>
       </div>
      <div className='heady'>
      <h3 >Video Editing</h3>

      </div>
        <div class="top-right-div">
    <div className='cross' onClick={handleClickOpen2}><CloseIcon className='ic'/></div>
        </div>
        <div class="main-content-div">
        <p className='para-1'>Lorem ipsum lala lalala lalala Lorem ipsum lala lalala lalala Lorem ipsum lala
  Lorem ipsum lala lalala lalala Lorem ipsum lala lalala lalala Lorem ipsum lala
  Lorem ipsum lala lalala lalala Lorem ipsum lala lalala lalala Lorem ipsum lala 
  Lorem ipsum lala lalala lalala Lorem ipsum lala lalala lalala Lorem ipsum lala </p>
        </div>
        <div>
        <button className='btn' > Get in Touch </button>
</div>
      </div>:""}

      {popup3?
    <div className='Popup'>
       <div className="top-left-div">
       <img src={pic3}></img>
       </div>
      <div className='heady'>
      <h3 >Video Editing</h3>

      </div>
        <div class="top-right-div">
    <div className='cross' onClick={handleClickOpen3}><CloseIcon className='ic'/></div>
        </div>
        <div class="main-content-div">
        <p className='para-1'>Lorem ipsum lala lalala lalala Lorem ipsum lala lalala lalala Lorem ipsum lala
  Lorem ipsum lala lalala lalala Lorem ipsum lala lalala lalala Lorem ipsum lala
  Lorem ipsum lala lalala lalala Lorem ipsum lala lalala lalala Lorem ipsum lala 
  Lorem ipsum lala lalala lalala Lorem ipsum lala lalala lalala Lorem ipsum lala </p>
        </div>
        <div>
        <button className='btn' > Get in Touch </button>
</div>
      </div>:""}
      {popup4?
    <div className='Popup'>
       <div className="top-left-div">
       <img src={pic4}></img>
       </div>
      <div className='heady'>
      <h3 >Graphic Designing</h3>

      </div>
        <div class="top-right-div">
    <div className='cross' onClick={handleClickOpen4}><CloseIcon className='ic'/></div>
        </div>
        <div class="main-content-div">
        <p className='para-1'>Lorem ipsum lala lalala lalala Lorem ipsum lala lalala lalala Lorem ipsum lala
  Lorem ipsum lala lalala lalala Lorem ipsum lala lalala lalala Lorem ipsum lala
  Lorem ipsum lala lalala lalala Lorem ipsum lala lalala lalala Lorem ipsum lala 
  Lorem ipsum lala lalala lalala Lorem ipsum lala lalala lalala Lorem ipsum lala </p>
        </div>
        <div>
        <button className='btn' > Get in Touch </button>
</div>
      </div>:""}
      {popup5?
    <div className='Popup'>
       <div className="top-left-div">
       <img src={pic5}></img>
       </div>
      <div className='heady'>
      <h3 >Paid Ads</h3>

      </div>
        <div class="top-right-div">
    <div className='cross' onClick={handleClickOpen5}><CloseIcon className='ic'/></div>
        </div>
        <div class="main-content-div">
        <p className='para-1'>Lorem ipsum lala lalala lalala Lorem ipsum lala lalala lalala Lorem ipsum lala
  Lorem ipsum lala lalala lalala Lorem ipsum lala lalala lalala Lorem ipsum lala </p>
        </div>
        <div>
        <button className='btn' > Get in Touch </button>
</div>
      </div>:""}
     
         </div>
  )
}
export default Services;
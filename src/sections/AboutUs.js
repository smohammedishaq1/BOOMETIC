import React from 'react'
import '../CSS/AboutUs.css'
import img from '../Images/abts.png'


function AboutUs() {
  return (
    <div className='aboutus'>
      <div className='left-part'>
      <p className='pa'>~     WHO WE ARE</p>
      <h1 className='headi'>We Help To Get You Well.</h1>
      <div className='para'>
       <p> 
        Lorem Ipsum is simply dummy text of the printing and
        
typesetting industry. Lorem Ipsum has been the
industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and
        
        typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ver since the 1500s,Lorem Ipsum is simply dummy text of the printing and
        
      
                
s</p>
        
      </div>
      </div>

      <div className='side-img'>
        <img src={img}></img>
      </div>
      
    </div>
  )
}

export default AboutUs;

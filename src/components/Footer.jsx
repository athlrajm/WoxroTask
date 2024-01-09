import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='Footer'>

        <h3 className='Desc'>Interested in delving deeper into the project?</h3>
        <span className='Desc1'>If you'd like to explore further details about our initiatives or any of our affiliated brands, don't hesitate to connect. You can reach out to us via email at hello@abc.com or give us a call at +91 480 20802730.</span>
        <div className='row'>
        <button className='bt1'>Ring Us On Skype</button> <button className='bt2'>Contact Us</button>
        </div>

        <div className='Desc'>
            <span className='Desc1'>© 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved</span>
        </div>

    </div>
  )
}

export default Footer
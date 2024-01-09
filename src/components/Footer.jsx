import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='Footer'>

        <h3 className='Desc'>Interested in delving deeper into the project?</h3>
        <span className='Desc1'>If you'd like to explore further details about our initiatives or any of our </span><span className='Desc1'>affiliated brands, don't hesitate to connect. You can reach out to us via</span><span className='Desc1'> email at <b> hello@abc.com </b> or give us a call at <b>+91 480 20802730.</b></span>
        <div className='row'>
        <a href='https://www.skype.com/en/' className='social-link'> <button className='bt1'>Ring Us On Skype</button></a>&nbsp;&nbsp;&nbsp;&nbsp; <a href='https://support.google.com/mail/answer/56256?hl=en' className='social-link'><button className='bt2'>Contact Us</button></a>
        </div>

        <div className='Desc'>
            <span className='cr'>© 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved</span>
        </div>

    </div>
  )
}

export default Footer
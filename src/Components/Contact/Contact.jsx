import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3a6c55bc-d3d0-4494-a49f-c6e2d85e93d3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      alert(data.message);
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get In Touch</h1>
            <img src={theme_pattern} alt=""></img>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p>I am currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt=""></img><p>pratik.thengane@gmail.com</p>

                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt=""></img><p>+91 9022808933</p>
                        
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt=""></img><p>Pune, MH, India</p>
                        
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder="Enter Your Name" name='name'></input>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder="Enter Your Email" name='email'></input>
                <label htmlFor=''>Write Your Message Here</label>
                <textarea name="message" rows="8" placeholder='Enter Your Message'></textarea>
                <button type='submit' className="contact-submit">Submit Now</button>
            </form>
        </div>
      
    </div>
  )
}

export default Contact

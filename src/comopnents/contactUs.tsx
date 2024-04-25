import React from "react";
import emailjs from 'emailjs-com';

const ContactMe = () => {
  const sendEmail = (e:any) => {
    e.preventDefault();
console.log(e.target);
    emailjs.sendForm('service_epx0sdk', 'template_kxj608a', e.target, 'XaRgyGasRnvmdJ7Ae')
      .then((result:any) => {
        console.log('Email sent:', result.text);
      })
      .catch((error) => {
        console.error('Error sending email:', error.text);
      });

    e.target.reset(); // Optional: reset form fields after sending
  };


  return (

  <section className="section" id="contact">
        <div className="container text-center">
            <p className="section-subtitle">How can you communicate?</p>
            <h6 className="section-title mb-5">Contact Me</h6>
            <form onSubmit={sendEmail} className="contact-form col-md-10 col-lg-8 m-auto">
                <div className="form-row">
                    <div className="form-group col-sm-6">
                        <input type="text" size="50" name="from_name" className="form-control" placeholder="Your Name" required={true}/>                 
                    </div>
                    <div className="form-group col-sm-6">
                        <input type="email" className="form-control" name="from_email" placeholder="Enter Email"requried={true}/>                 
                    </div>
                    <div className="form-group col-sm-12">
                        <textarea name="comment" id="comment" rows="6" name="message" className="form-control" placeholder="Write Something" required={true}></textarea>
                    </div>
                    <div className="form-group col-sm-12 mt-3">
                        <input type="submit" value="Send Message" className="btn btn-outline-primary rounded"/>                  
                    </div>
                </div>  
            </form>
        </div>
    </section>

  	)
}
export default ContactMe;
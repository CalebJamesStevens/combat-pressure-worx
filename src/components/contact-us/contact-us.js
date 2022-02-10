//import emailjs from "emailjs-com";

const ContactUs = () => {
    // const sendEmail = (e) => {
    //     e.preventDefault();
    
    //     emailjs.sendForm('service_vvh897p', 'template_sbzz0hi', e.target, 'user_Lhl3BMh3mj6j9YOmpYStX')
    //       .then((result) => {
    //           console.log(result.text);
    //       }, (error) => {
    //           console.log(error.text);
    //     });
    // };  

    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <div className='form-container'>
                <div className="contact-form-container">
                    <form onSubmit={() => {console.log('email sent')}} className="contact-form">

                        <div className="form-control">
                            <label>Name</label><br/>
                            <input className="form-input" type="text" name="name" className="form-input"/>
                        </div>

                        <div className="form-control">
                            <label>Email</label><br/>
                            <input className="form-input" type="email" name="user_email" className="form-input"/>
                        </div>

                        <div className="form-control">
                            <label>Message</label><br/>
                            <textarea className="form-input" id="form-message" type="text" name="message" className="form-input"/>
                        </div>

                        <div className="form-control">
                            <input className='form-submit-button' type="submit" value="Contact Me!"/>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
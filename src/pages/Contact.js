import React from 'react';
import {Form, Message} from 'semantic-ui-react'
import emailjs from 'emailjs-com'

function Contact() {
    const showMsg = () => {
        const message = document.getElementById('msg');
        message.classList.remove('hidden');
    }
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_n701k0d', 'contact_form', e.target, 'user_3MXdnMy9yH1m9lvTPLDmy')
        .then((result)=> {
            console.log(result.text)
            showMsg();
        }, (error) =>{
            console.log(error.text)
            console.log(process.env.REACT_APP_EMAIL_ID)
        })
    }
    return(
        <main>
        <div className='form-container'>
            <h2 style={{textAlign : 'center'}}>drop me a line</h2>
            <Form success onSubmit={sendEmail}>
                <Form.Input type="hidden" name="contact_number" />
                <Form.Input type="text" name="from_name" placeholder="your name" />
                <Form.Input type="email" name="from_email" placeholder="you@email.com" />
                <Form.TextArea name="message" placeholder="your message" />
                <Message id='msg' hidden success header='message sent' content='thanks for reaching out.' />
                <Form.Input type="submit" value="Send" />
                {/* <p>*contact form temporarily disabled*</p><p>please use email address below</p> */}
            </Form>
            <br/><br />
            <p>or you can email me directly at <a href="mailto:codebybk@gmail.com">codebybk@gmail.com</a></p>
        </div>
        </main>
    )
}

export default Contact;
import React from 'react';
import {Button, Form, Message} from 'semantic-ui-react'

function Contact() {
    const showMsg = () => {
        const message = document.getElementById('msg');
        message.classList.remove('hidden');
    }
    return(
        <main>
        <div className='form-container'>
            <h2 style={{textAlign : 'center'}}>drop me a line</h2>
            <Form success>
                <Form.Input type="text" placeholder="your name" />
                <Form.Input type="email" placeholder="you@email.com" />
                <Form.Input type="text" placeholder="subject" />
                <Form.TextArea placeholder="your message" />
                <Message id='msg' hidden success header='message sent' content='thanks for reaching out.' />
                <Button disabled onClick={showMsg}>Submit</Button>
                <p>*contact form temporarily disabled*</p><p>please use email address below</p>
            </Form>
            <br/><br />
            <p>or you can email me directly at <a href="mailto:codebybk@gmail.com">codebybk@gmail.com</a></p>
        </div>
        </main>
    )
}

export default Contact;
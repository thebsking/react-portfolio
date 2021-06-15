import React from 'react';
import {Button, Form} from 'semantic-ui-react'

function Contact() {

    return(
        <div>
            <Form>
                <Form.Input type="text" placeholder="name" />
                <Form.Input type="text" placeholder="email" />
                <Form.Input type="text" placeholder="subject" />
                <Form.TextArea placeholder="your message" />
                <Form.Button>Submit</Form.Button>
            </Form>
        </div>
    )
}

export default Contact;
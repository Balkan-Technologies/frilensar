import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';

const ContactForm = (props) => {
  return (
    <Container>
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email*</Label>
          <Input type="email" name="email" id="exampleEmail" required placeholder="example@example.com" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Name</Label>
          <Input type="text" name="name" id="examplePassword" placeholder="Johnule" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </Container>
  );
}

export default ContactForm;
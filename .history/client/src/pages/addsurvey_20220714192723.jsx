import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function AddSurvey() {
    const [smShow, setSmShow] = useState(false);
  c\onst [lgShow, setLgShow] = useState(false);

  return (
    <Form>
        <Form.Group className="mb-3" >
        <Form.Label>Survey Name</Form.Label>
        <Form.Control type="text"  />
        <Form.Text className="text-muted">
          create a name for your survey!
        </Form.Text>
        </Form.Group>
      

      
        
        
        <br/><Button variant="primary" type="submit">Submit</Button> 

          



    </Form>
  );
}

export default AddSurvey;
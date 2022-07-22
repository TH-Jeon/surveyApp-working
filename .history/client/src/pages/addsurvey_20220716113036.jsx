import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import {addSurvey} from '../service/api'; 


import './addsurvey.css';





function AddSurvey() {
    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);
    const handleClose = () => setSmShow(false);
    const handleClose2 = () => setLgShow(false);
    const [tfQuestion, setTfQuestion]
  return (
    <div>
    <Form  className="center">
        <Form.Group className="mb-3" >
        <Form.Label>Survey Name</Form.Label>
        <Form.Control type="text"  />
        <Form.Text className="text-muted">
          create a name for your survey!
        </Form.Text>
        </Form.Group>

        <Button variant="warning" onClick={() => setSmShow(true)} className="me-2">
        Create a T/F question
      </Button>

      <Button variant= "success" onClick={() => setLgShow(true)}>Create a multiple choice question</Button>
      <Modal
        size="lg"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Add a T/F question
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>please input your question</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add Question
          </Button>
          </Modal.Footer>
      </Modal>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
         <Modal.Title id="example-modal-sizes-title-lg">
             Add a multiple choice question
         </Modal.Title>
     </Modal.Header><Modal.Body>
             <Form.Group
                 className="mb-3"
                 controlId="exampleForm.ControlTextarea1"
             >
                 <Form.Label>please input your question</Form.Label>
                 <Form.Control as="textarea" rows={3} />
             </Form.Group>
              
              <Button variant="outline-danger"  >add Option</Button>
             <InputGroup className="mb-3">
                 <InputGroup.Text id="basic-addon1">option</InputGroup.Text>
                 <Form.Control
                     placeholder="please input the option"
                     aria-describedby="basic-addon1" />
             </InputGroup>

            
         </Modal.Body><Modal.Footer>
             <Button variant="secondary" onClick={handleClose2}>
                 Close
             </Button>
             <Button variant="primary" onClick={handleClose2}>
                 Add Question
             </Button>
         </Modal.Footer>
       
      </Modal>

      
        
        
        <br/><Button variant="primary" type="submit">Submit</Button> 

          



    </Form>
    </div>
  );
}

export default AddSurvey;
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';



 <Modal.Header closeButton>
 <Modal.Title id="example-modal-sizes-title-lg">
   Add a multiple choice question
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
  
   <InputGroup className="mb-3">
   <InputGroup.Text id="basic-addon1">A</InputGroup.Text>
    <Form.Control
       placeholder="please input the option" 
       aria-describedby="basic-addon1"
     />
    </InputGroup>

    <InputGroup className="mb-3">
   <InputGroup.Text id="basic-addon1">B</InputGroup.Text>
    <Form.Control
       placeholder="please input the option" 
       aria-describedby="basic-addon1"
     />
    </InputGroup>

    <InputGroup className="mb-3">
   <InputGroup.Text id="basic-addon1">C</InputGroup.Text>
    <Form.Control
       placeholder="please input the option" 
       aria-describedby="basic-addon1"
     />
    </InputGroup>

    <InputGroup className="mb-3">
   <InputGroup.Text id="basic-addon1">D</InputGroup.Text>
    <Form.Control
       placeholder="please input the option" 
       aria-describedby="basic-addon1"
     />
    </InputGroup>
</Modal.Body>
<Modal.Footer>
 <Button variant="secondary" onClick={handleClose2}>
   Close
 </Button>
 <Button variant="primary" onClick={handleClose2}>
   Add Question
 </Button>
 </Modal.Footer>